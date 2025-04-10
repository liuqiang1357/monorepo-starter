import '@/styles/globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from '@/components/app/providers';
import { appDescription, appName } from '@/configs/app';

export const metadata: Metadata = {
  title: appName,
  description: appDescription,
};

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
