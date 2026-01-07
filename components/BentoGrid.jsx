'use client';

import { Star, Circle } from 'lucide-react';

export default function BentoGrid() {
    const techStack = [
        'Next.js',
        'Supabase',
        'Stripe',
        'Vercel',
        'Tailwind',
        'TypeScript',
    ];

    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'CEO, TechVentures',
            text: 'Transformed our operations completely. Revenue increased 340% in 6 months.',
            rating: 5,
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Founder, ScaleUp Labs',
            text: 'The methodology is unlike anything else. Pure execution excellence.',
            rating: 5,
        },
        {
            name: 'Emily Watson',
            role: 'Director, Innovation Corp',
            text: 'Best investment we made. The ROI was immediate and substantial.',
            rating: 5,
        },
    ];

    return (
        <section className="relative py-32 px-6 overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-white">
                        Proven <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">Results</span>
                    </h2>
                    <p className="text-xl text-zinc-400">
                        Trusted by elite consultants worldwide
                    </p>
                </div>

                {/* Bento grid layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Testimonial 1 - Large (spans 2 columns) */}
                    <div className="md:col-span-2 p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group">
                        <div className="h-full flex flex-col justify-between space-y-6">
                            <div className="space-y-4">
                                <div className="flex gap-1">
                                    {[...Array(testimonials[0].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-2xl text-white leading-relaxed">
                                    &#34;{testimonials[0].text}&#34;
                                </p>
                            </div>
                            <div className="space-y-1">
                                <p className="text-lg font-semibold text-white">{testimonials[0].name}</p>
                                <p className="text-sm text-zinc-400">{testimonials[0].role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Status badge */}
                    <div className="p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group flex flex-col justify-center items-center text-center space-y-4">
                        <div className="relative">
                            <Circle className="w-16 h-16 text-primary animate-glow" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="w-8 h-8 bg-primary rounded-full animate-pulse" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <p className="text-2xl font-bold text-white">Currently</p>
                            <p className="text-primary text-lg">Accepting 2 Clients</p>
                        </div>
                    </div>

                    {/* Tech stack */}
                    <div className="p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group overflow-hidden">
                        <div className="space-y-4">
                            <p className="text-lg font-semibold text-white">Tech Stack</p>
                            <div className="flex flex-col gap-3">
                                {techStack.map((tech, i) => (
                                    <div
                                        key={i}
                                        className="px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50 text-zinc-300 text-sm font-medium hover:border-primary/50 hover:text-primary transition-all duration-300"
                                    >
                                        {tech}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 2 */}
                    <div className="md:col-span-2 p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group">
                        <div className="space-y-4">
                            <div className="flex gap-1">
                                {[...Array(testimonials[1].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-xl text-white">
                                &#34;{testimonials[1].text}&#34;
                            </p>
                            <div className="space-y-1">
                                <p className="text-base font-semibold text-white">{testimonials[1].name}</p>
                                <p className="text-sm text-zinc-400">{testimonials[1].role}</p>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial 3 */}
                    <div className="p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group">
                        <div className="space-y-4">
                            <div className="flex gap-1">
                                {[...Array(testimonials[2].rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                ))}
                            </div>
                            <p className="text-base text-white">
                                &#34;{testimonials[2].text}&#34;
                            </p>
                            <div className="space-y-1">
                                <p className="text-sm font-semibold text-white">{testimonials[2].name}</p>
                                <p className="text-xs text-zinc-400">{testimonials[2].role}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}