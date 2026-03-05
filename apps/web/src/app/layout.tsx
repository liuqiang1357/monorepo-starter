import '@/shared/styles/globals.css';
import { Metadata } from 'next';
import { ReactNode } from 'react';
import { Providers } from '@/features/app-shell/components/providers';
import { appDescription, appName } from '@/shared/configs/app';

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
