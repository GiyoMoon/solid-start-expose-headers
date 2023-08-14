import { createSignal } from 'solid-js';
import { createServerData$ } from 'solid-start/server';

export default function Home() {
  let [count, setCount] = createSignal(0)

  const getCount = createServerData$(
    async (
      key,
      { responseHeaders },
    ): Promise<number> => {
      console.log(responseHeaders)
      return key[1] as number
    },
    { key: () => ['count', count()] },
  )

  return (
    <main>
      <button onClick={() => setCount(prev => prev + 1)}>Call createServerAction$</button>
      <p>Count from server: {getCount()}</p>
    </main>
  );
}
