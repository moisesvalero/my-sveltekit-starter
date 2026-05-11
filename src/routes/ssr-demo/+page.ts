export async function load() {
  const now = new Date();

  const serverData = await new Promise<{ fact: string; number: number }>((resolve) =>
    setTimeout(() => resolve({ fact: 'SvelteKit compila tu codigo en el servidor', number: 42 }), 200)
  );

  return {
    serverTime: now.toISOString(),
    serverFact: serverData.fact,
    magicNumber: serverData.number
  };
}
