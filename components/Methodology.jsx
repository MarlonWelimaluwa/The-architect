'use client';

import { Search, Pencil, Cog, Rocket } from 'lucide-react';

export default function Methodology() {
    const steps = [
        {
            icon: Search,
            title: 'Audit',
            description: 'Deep dive into your current systems, identifying bottlenecks and inefficiencies.',
            color: 'from-cyan-500 to-blue-500',
        },
        {
            icon: Pencil,
            title: 'Architect',
            description: 'Design scalable infrastructure tailored to your business objectives and growth targets.',
            color: 'from-blue-500 to-purple-500',
        },
        {
            icon: Cog,
            title: 'Automate',
            description: 'Implement cutting-edge automation to eliminate manual processes and reduce costs.',
            color: 'from-purple-500 to-pink-500',
        },
        {
            icon: Rocket,
            title: 'Scale',
            description: 'Deploy robust systems that grow with you, maintaining performance at every level.',
            color: 'from-pink-500 to-red-500',
        },
    ];

    return (
        <section id="methodology-section" className="relative py-32 px-6 overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-20 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-white">
                        The <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Methodology</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Our battle-tested framework for transforming consultancy businesses into scalable powerhouses.
                    </p>
                </div>

                {/* Process cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {steps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div
                                key={index}
                                className="group relative p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary/20"
                            >
                                {/* Glow effect on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-linear-to-br ${step.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`} />

                                {/* Number indicator */}
                                <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-black border-2 border-primary flex items-center justify-center">
                                    <span className="text-primary font-bold text-lg">{index + 1}</span>
                                </div>

                                <div className="relative space-y-4">
                                    {/* Icon */}
                                    <div className={`w-16 h-16 rounded-2xl bg-linear-to-br ${step.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    {/* Content */}
                                    <div className="space-y-2">
                                        <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                            {step.title}
                                        </h3>
                                        <p className="text-zinc-400 leading-relaxed">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Connecting line (except for last card) */}
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-linear-to-r from-primary to-transparent" />
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}