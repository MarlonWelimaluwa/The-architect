'use client';

import Link from 'next/link';
import { Twitter, Linkedin, Github, Mail } from 'lucide-react';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const links = {
        company: [
            { name: 'About', href: '/about' },
            { name: 'Methodology', href: '/methodology' },
            { name: 'Case Studies', href: '/case-studies' },
            { name: 'Blog', href: '/blog' },
        ],
        services: [
            { name: 'Strategy Consulting', href: '/#contact-section' },
            { name: 'System Architecture', href: '/#methodology-section' },
            { name: 'Automation', href: '/#methodology-section' },
            { name: 'Scaling Solutions', href: '/#methodology-section' },
        ],
        legal: [
            { name: 'Privacy Policy', href: '/privacy' },
            { name: 'Terms of Service', href: '/terms' },
            { name: 'Cookie Policy', href: '/privacy' },
        ],
    };

    const socials = [
        { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
        { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
        { icon: Github, href: 'https://github.com', label: 'GitHub' },
        { icon: Mail, href: 'mailto:hello@thearchitect.com', label: 'Email' },
    ];

    return (
        <footer className="relative border-t border-zinc-800/50 bg-black">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
                {/* Top section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
                    {/* Brand column */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/">
                            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary cursor-pointer hover:opacity-80 transition-opacity">
                                THE ARCHITECT
                            </h3>
                        </Link>
                        <p className="text-zinc-400 leading-relaxed max-w-sm">
                            Building scalable systems for elite consultants. High-performance infrastructure driven by data and excellence.
                        </p>
                        <div className="flex gap-4">
                            {socials.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={index}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.label}
                                        className="w-10 h-10 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary/50 transition-all duration-300"
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Company links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            {links.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.href}
                                        className="text-zinc-400 hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Services</h4>
                        <ul className="space-y-3">
                            {links.services.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-zinc-400 hover:text-primary transition-colors duration-300 cursor-pointer"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal links */}
                    <div className="space-y-4">
                        <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3">
                            {links.legal.map((link, index) => (
                                <li key={index}>
                                    <a
                                        href={link.href}
                                        className="text-zinc-400 hover:text-primary transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom section */}
                <div className="pt-8 border-t border-zinc-800/50 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-zinc-500 text-sm">
                        © {currentYear} The Architect. All rights reserved.
                    </p>
                    <p className="text-zinc-500 text-sm">
                        Built with <span className="text-primary">Next.js</span> by <span className="text-primary">Marlon.</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}