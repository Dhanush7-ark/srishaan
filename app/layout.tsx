import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import ScrollProgress from '@/components/ui/ScrollProgress';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter-var', display: 'swap' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair-var', display: 'swap', weight: ['400','600','700'], style: ['normal','italic'] });

export const metadata: Metadata = {
  title: 'Srishaan Finance | Expert-Led Investment Strategies',
  description: 'Expert-led investment strategies tailored to your life goals. SEBI registered wealth management firm.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
