import type { Metadata } from 'next';
import '../globals.css';

export const metadata: Metadata = {
  title: 'Medica HMS',
  description: 'Official website for hms',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
