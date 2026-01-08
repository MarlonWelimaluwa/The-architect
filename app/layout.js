import { Inter } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'The Architect | High-Performance Systems for Elite Consultants',
    description: 'Architecting custom digital infrastructure and automation for 7-figure consulting businesses. Built on code, driven by data.',
    icons: {
        icon: '/favicon.ico', // Make sure to drop your new favicon in the public folder
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
        <body className={inter.className}>
        {children}
        <SpeedInsights />
        </body>
        </html>
    );
}