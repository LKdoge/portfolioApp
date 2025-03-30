"use client";
import { HeroUIProvider } from '@heroui/react';
import { ToastProvider } from "@heroui/react";
import {useRouter} from "next/navigation";
import { useRef } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/lib/store/store';
import { initializeCount } from '@/lib/store/counterSlice';
import ReduxProvider from "@/lib/store/redux-provider";

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<Parameters<ReturnType<typeof useRouter>["push"]>[1]>;
  }
}

export function Providers({ count, children }: { count: number; children: React.ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  const router = useRouter();

  if (!storeRef.current) {
    storeRef.current = makeStore();
    if (storeRef.current) {
      storeRef.current.dispatch(initializeCount(count));
    }
  }

  return (
    <Provider store={storeRef.current}>
      <ReduxProvider>
        <HeroUIProvider navigate={router.push}>
          <ToastProvider />
            {children}
        </HeroUIProvider>
      </ReduxProvider>
    </Provider>
  );
}
