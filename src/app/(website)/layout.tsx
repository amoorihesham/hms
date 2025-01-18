import type { Metadata } from 'next';
import '../globals.css';
import Header from '@/components/website/header/Header';

export const metadata: Metadata = {
  title: 'HMS-Medica Plus',
  description: 'Hospital Management System | HMS',
  keywords: 'Hospital Management System',
  authors: {
    name: 'HMS-Medica Plus',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`antialiased font-sans`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
