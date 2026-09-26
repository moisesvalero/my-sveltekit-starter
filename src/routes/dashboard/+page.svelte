<script lang="ts">
  import { ArrowLeft, Building2, Coins, CreditCard, ShieldCheck, User, Zap } from '@lucide/svelte';
  import { CREDIT_PACKS } from '$lib/payments/config';

  let currentBalance = $state(500);
</script>

<svelte:head>
  <title>SaaS Dashboard | My SvelteKit Starter</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
  <header
    class="border-b border-slate-200 bg-white px-6 py-4 dark:border-slate-800 dark:bg-slate-900"
  >
    <div class="mx-auto flex max-w-6xl items-center justify-between">
      <div class="flex items-center gap-3">
        <a
          href="/"
          class="inline-flex items-center gap-2 text-sm text-slate-500 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-100"
        >
          <ArrowLeft class="size-4" aria-hidden="true" />
          <span>Volver al Inicio</span>
        </a>
        <span class="text-slate-300 dark:text-slate-700">/</span>
        <span class="font-semibold">Dashboard SaaS</span>
      </div>

      <div class="flex items-center gap-3">
        <span
          class="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400"
        >
          <Zap class="size-3.5" aria-hidden="true" />
          Svelte 5 Runes & Better Auth
        </span>
      </div>
    </div>
  </header>

  <main class="mx-auto max-w-6xl space-y-8 px-6 py-10">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Panel de Control & Organizaciones</h1>
      <p class="mt-1 text-sm text-slate-600 dark:text-slate-400">
        Gestión de sesión privada, multitenencia B2B y balance contable de créditos atómico.
      </p>
    </div>

    <div class="grid gap-6 md:grid-cols-3">
      <!-- Sesion de Usuario -->
      <div
        class="rounded-xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="flex items-center gap-3">
          <div class="rounded-lg bg-orange-500/10 p-2.5 text-orange-600 dark:text-orange-400">
            <User class="size-5" aria-hidden="true" />
          </div>
          <div>
            <h2 class="text-base font-semibold">Sesión de Usuario</h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">Better Auth con Prisma</p>
          </div>
        </div>

        <div class="mt-5 space-y-3 text-sm">
          <div class="rounded-lg bg-slate-100 p-3 dark:bg-slate-800/50">
            <div class="text-xs text-slate-500 dark:text-slate-400">Rol del Sistema</div>
            <div class="font-medium">Administrator</div>
          </div>
          <div class="rounded-lg bg-slate-100 p-3 dark:bg-slate-800/50">
            <div class="text-xs text-slate-500 dark:text-slate-400">Estado de Cuenta</div>
            <div class="font-medium text-emerald-600 dark:text-emerald-400">
              Activo (Verificado)
            </div>
          </div>
        </div>
      </div>

      <!-- Organizaciones B2B -->
      <div
        class="rounded-xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="flex items-center gap-3">
          <div class="rounded-lg bg-blue-500/10 p-2.5 text-blue-600 dark:text-blue-400">
            <Building2 class="size-5" aria-hidden="true" />
          </div>
          <div>
            <h2 class="text-base font-semibold">Organización Activa</h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">Multitenancy B2B</p>
          </div>
        </div>

        <div class="mt-5 space-y-3 text-sm">
          <div class="rounded-lg bg-slate-100 p-3 dark:bg-slate-800/50">
            <div class="text-xs text-slate-500 dark:text-slate-400">Equipo Activo</div>
            <div class="font-medium">Nova Labs Corp (Owner)</div>
          </div>
          <div class="rounded-lg bg-slate-100 p-3 dark:bg-slate-800/50">
            <div class="text-xs text-slate-500 dark:text-slate-400">Miembros</div>
            <div class="font-medium">4 miembros activos</div>
          </div>
        </div>
      </div>

      <!-- Seguridad 2FA -->
      <div
        class="rounded-xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900"
      >
        <div class="flex items-center gap-3">
          <div class="rounded-lg bg-emerald-500/10 p-2.5 text-emerald-600 dark:text-emerald-400">
            <ShieldCheck class="size-5" aria-hidden="true" />
          </div>
          <div>
            <h2 class="text-base font-semibold">Seguridad 2FA</h2>
            <p class="text-xs text-slate-500 dark:text-slate-400">TOTP con QR</p>
          </div>
        </div>

        <div class="mt-5 space-y-3 text-sm">
          <div class="rounded-lg bg-slate-100 p-3 dark:bg-slate-800/50">
            <div class="text-xs text-slate-500 dark:text-slate-400">Doble Factor</div>
            <div class="font-medium text-emerald-600 dark:text-emerald-400">Configurado</div>
          </div>
          <div class="rounded-lg bg-slate-100 p-3 dark:bg-slate-800/50">
            <div class="text-xs text-slate-500 dark:text-slate-400">Códigos de Rescate</div>
            <div class="font-medium">8 códigos disponibles</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Ledger de Creditos y Facturacion -->
    <div
      class="rounded-xl border border-slate-200 bg-white p-6 shadow-xs dark:border-slate-800 dark:bg-slate-900"
    >
      <div class="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div class="flex items-center gap-3">
          <div class="rounded-lg bg-amber-500/10 p-2.5 text-amber-600 dark:text-amber-400">
            <Coins class="size-5" aria-hidden="true" />
          </div>
          <div>
            <h2 class="text-lg font-semibold">Balance de Créditos & Facturación</h2>
            <p class="text-sm text-slate-600 dark:text-slate-400">
              Ledger contable inmutable con transacciones atómicas Prisma y Polar (Merchant of
              Record).
            </p>
          </div>
        </div>

        <div class="text-right">
          <div class="text-xs text-slate-500 dark:text-slate-400">Saldo Disponible</div>
          <div class="text-2xl font-bold">{currentBalance} Créditos</div>
        </div>
      </div>

      <div class="mt-8">
        <h3
          class="text-sm font-semibold tracking-wide uppercase text-slate-700 dark:text-slate-300"
        >
          Paquetes de Créditos Disponibles
        </h3>
        <div class="mt-4 grid gap-4 sm:grid-cols-3">
          {#each CREDIT_PACKS as pack}
            <div
              class="flex flex-col justify-between rounded-lg border border-slate-200 bg-slate-50/50 p-4 dark:border-slate-800 dark:bg-slate-800/30"
            >
              <div>
                <div class="font-medium">{pack.name}</div>
                <div class="mt-1 text-2xl font-bold text-orange-600 dark:text-orange-400">
                  {pack.credits} <span class="text-xs font-normal text-slate-500">créditos</span>
                </div>
                <p class="mt-1 text-xs text-slate-500">
                  ${(pack.priceInCents / 100).toFixed(2)} USD pago único
                </p>
              </div>

              <div class="mt-5">
                <button
                  type="button"
                  class="inline-flex w-full items-center justify-center rounded-md border border-slate-300 bg-white px-3 py-2 text-xs font-medium text-slate-800 shadow-xs transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  <CreditCard class="mr-1.5 size-3.5" aria-hidden="true" />
                  Comprar con Polar
                </button>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
  </main>
</div>
