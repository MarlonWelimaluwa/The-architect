import { Inter } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from 'next/script'; // Import Script for the scroll fix

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'The Architect | High-Performance Systems',
    description: 'Architecting custom digital infrastructure for elite consultants.',
    icons: {
        icon: '/favicon.ico?v=2', // Incremented version to v=2 to force cache clear
        apple: '/apple-touch-icon.png',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
        <body className={inter.className}>
        {/* This script runs immediately on refresh to force the scroll to top */}
        <Script id="restore-scroll-position" strategy="beforeInteractive">
            {`
                        if (history.scrollRestoration) {
                            history.scrollRestoration = 'manual';
                        }
                        window.scrollTo(0, 0);
                    `}
        </Script>

        {children}
        <SpeedInsights />
        </body>
        </html>
    );
}