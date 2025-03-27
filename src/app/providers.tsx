'use client';

import { HeroUIProvider } from '@heroui/react';
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store/store'; // Ensure correct path
import { initializeCount } from '@/lib/store/counterSlice'; // Fix import path if needed

export function Providers({ count, children }: { count: number; children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);

  if (!storeRef.current) {
    storeRef.current = makeStore();
    if (storeRef.current) {
      storeRef.current.dispatch(initializeCount(count));
    }
  }

  return (
    <Provider store={storeRef.current}>
      <HeroUIProvider>{children}</HeroUIProvider>
    </Provider>
  );
}
