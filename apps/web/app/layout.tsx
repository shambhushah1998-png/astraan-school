/// <reference types="next" />
/// <reference types="next/image-types/global" />

// NOTE: This file should not be edited.
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Astraan School Management',
  description: 'Modern school ERP platform for schools and academies.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
