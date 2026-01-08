'use client';

import { Button } from './ui/button';
import { ArrowRight, TrendingUp, Users, Zap, Target } from 'lucide-react';

export default function Hero() {
    const stats = [
        { icon: TrendingUp, label: '$10M+ Managed', value: '10M+' },
        { icon: Users, label: '50+ Systems Built', value: '50+' },
        { icon: Zap, label: '99.9% Uptime', value: '99.9%' },
        { icon: Target, label: '2 Slots Available', value: '2' },
    ];

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">
            <div className="absolute inset-0 bg-mesh-gradient opacity-30 animate-pulse" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

            <div className="relative z-10 max-w-7xl mx-auto w-full">
                <div className="text-center space-y-8 mb-16 animate-fade-in">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">
                        <span className="w-2 h-2 bg-primary rounded-full animate-glow" />
                        <span className="text-sm text-primary font-medium uppercase tracking-wider">Limited Availability</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold text-white tracking-tight">
                        Architecting Systems
                        <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                          for Elite Consultants
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-zinc-400 max-w-3xl mx-auto leading-relaxed">
                        High-performance infrastructure and strategy for the 1%.
                        <br />
                        <span className="text-zinc-500">Engineered for scale. Driven by execution excellence.</span>
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button
                            size="lg"
                            className="group px-8"
                            onClick={() => scrollToSection('contact-section')}
                        >
                            Apply for Strategy Audit
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="lg"
                            className="text-zinc-400 hover:text-white"
                            onClick={() => scrollToSection('methodology-section')}
                        >
                            Explore Methodology
                        </Button>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 hover:scale-105"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                <div className="relative space-y-2 text-center">
                                    <Icon className="w-6 h-6 text-primary mx-auto" />
                                    <p className="text-3xl font-bold text-white">{stat.value}</p>
                                    <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}