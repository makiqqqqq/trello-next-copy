import './globals.css';
import Navbar from '@/components/Navbar';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import ThemeProvider from '@/providers/ThemeProvider/ThemeProvider';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='h-full'>
      <body className='dark h-full bg-gray-900'>
        <ReactQueryProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
