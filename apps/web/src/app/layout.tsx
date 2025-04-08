import '@/styles/globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from '@/components/app/providers';
import { appDescription, appName } from '@/configs/app';
import { fontsClassName } from '@/lib/utils/fonts';

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={fontsClassName}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
