import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/website/header/Header';

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
      <body className={`antialiased`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
