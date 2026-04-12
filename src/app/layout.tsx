import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "../sass/main.scss";
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import NavPulse from '@/components/elements/NavPulse';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
});

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'MattsDevLab',
  description: 'Senior Frontend Engineer & Accessibility Specialist',
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spaceGrotesk.variable} ${manrope.variable}`}>
      <body>
        <a href="#main-content" className="skip-content">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
      <NavPulse />
    </html>
  );
}