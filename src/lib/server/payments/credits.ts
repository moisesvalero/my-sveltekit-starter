import { db } from '$lib/server/db/client';

export interface ConsumeCreditsParams {
  userId: string;
  amount: number;
  description?: string;
  metadata?: Record<string, unknown>;
}

export interface AddCreditsParams {
  userId: string;
  amount: number;
  description?: string;
  type?: 'PURCHASE' | 'ADJUSTMENT' | 'REFUND';
  metadata?: Record<string, unknown>;
}

export async function getCreditBalance(userId: string): Promise<number> {
  const record = await db.creditBalance.findUnique({
    where: { userId }
  });

  return record ? record.balance : 0;
}

export async function addCredits({
  userId,
  amount,
  description = 'Credits purchase',
  type = 'PURCHASE',
  metadata
}: AddCreditsParams) {
  if (amount <= 0) {
    throw new Error('Credit amount must be greater than zero');
  }

  return db.$transaction(async (tx) => {
    const creditBalance = await tx.creditBalance.upsert({
      where: { userId },
      create: {
        userId,
        balance: amount,
        totalPurchased: amount,
        totalConsumed: 0
      },
      update: {
        balance: { increment: amount },
        totalPurchased: { increment: amount }
      }
    });

    const balanceAfter = creditBalance.balance;
    const balanceBefore = balanceAfter - amount;

    await tx.creditTransaction.create({
      data: {
        balanceId: creditBalance.id,
        type,
        amount,
        balanceBefore,
        balanceAfter,
        description,
        metadata: metadata ? JSON.parse(JSON.stringify(metadata)) : undefined
      }
    });

    return creditBalance;
  });
}

export async function consumeCredits({
  userId,
  amount,
  description = 'Service consumption',
  metadata
}: ConsumeCreditsParams): Promise<{
  success: boolean;
  balance: number;
  error?: string;
}> {
  if (amount <= 0) {
    throw new Error('Credit amount must be greater than zero');
  }

  return db.$transaction(async (tx) => {
    const debit = await tx.creditBalance.updateMany({
      where: {
        userId,
        balance: { gte: amount }
      },
      data: {
        balance: { decrement: amount },
        totalConsumed: { increment: amount }
      }
    });

    const updated = await tx.creditBalance.findUnique({
      where: { userId }
    });

    if (debit.count === 0 || !updated) {
      return {
        success: false,
        balance: updated ? updated.balance : 0,
        error: 'Insufficient credits'
      };
    }

    const balanceAfter = updated.balance;
    const balanceBefore = balanceAfter + amount;

    await tx.creditTransaction.create({
      data: {
        balanceId: updated.id,
        type: 'CONSUMPTION',
        amount,
        balanceBefore,
        balanceAfter,
        description,
        metadata: metadata ? JSON.parse(JSON.stringify(metadata)) : undefined
      }
    });

    return {
      success: true,
      balance: balanceAfter
    };
  });
}
