import { Inter } from 'next/font/google';
import './globals.css';
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
    title: 'The Architect - Scalable Systems for the 1%',
    description: 'High-performance infrastructure and strategy for elite consultants. Built on code, driven by data.',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
        <body className={inter.className}>{children}</body>
        </html>
    );
}