'use client';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { FC, ReactNode } from 'react';

export const Providers: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </NextThemesProvider>
  );
};
