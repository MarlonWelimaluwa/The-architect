'use client';

import { Star, Circle, Zap, TrendingUp, Award } from 'lucide-react';

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
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
            color: 'from-cyan-500 to-blue-500'
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Founder, ScaleUp Labs',
            text: 'The methodology is unlike anything else. Pure execution excellence.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop',
            color: 'from-purple-500 to-pink-500'
        },
        {
            name: 'Emily Watson',
            role: 'Director, Innovation Corp',
            text: 'Best investment we made. The ROI was immediate and substantial.',
            rating: 5,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop',
            color: 'from-pink-500 to-orange-500'
        },
    ];

    const stats = [
        { icon: TrendingUp, label: 'Average Revenue Growth', value: '340%', delay: '0' },
        { icon: Zap, label: 'Faster Deployment', value: '10x', delay: '100' },
        { icon: Award, label: 'Client Satisfaction', value: '98%', delay: '200' },
    ];

    return (
        <section className="relative py-32 px-6 overflow-hidden bg-black">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none"
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #27272a 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight">
                        Proven <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Results</span>
                    </h2>
                    <p className="text-xl text-zinc-400">Trusted by elite consultants worldwide</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Main Testimonial */}
                    <div className="md:col-span-2 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                            <Star className="w-32 h-32 text-primary" />
                        </div>
                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div className="space-y-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-3xl text-white font-medium leading-tight max-w-2xl">
                                    "{testimonials[0].text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-4 mt-8">
                                <img src={testimonials[0].image} alt={testimonials[0].name} className="w-16 h-16 rounded-full border-2 border-zinc-700 grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div>
                                    <p className="text-lg font-bold text-white">{testimonials[0].name}</p>
                                    <p className="text-sm text-primary font-medium tracking-wide uppercase">{testimonials[0].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Status Badge */}
                    <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl flex flex-col justify-center items-center text-center space-y-6 hover:border-primary/50 transition-all duration-500 group">
                        <div className="relative w-20 h-20">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-colors" />
                            <Circle className="w-20 h-20 text-primary relative z-10" />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-8 h-8 bg-primary rounded-full animate-pulse shadow-[0_0_20px_rgba(6,182,212,0.8)]" />
                            </div>
                        </div>
                        <div className="space-y-1">
                            <p className="text-2xl font-bold text-white">Currently</p>
                            <p className="text-primary text-xl font-bold uppercase tracking-tighter">Accepting 2 Clients</p>
                        </div>
                    </div>

                    {/* Tech Stack List */}
                    <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500">
                        <p className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-primary" /> Tech Stack
                        </p>
                        <div className="grid grid-cols-1 gap-3">
                            {techStack.map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                    <span className="text-zinc-300 font-medium">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Stats Grid */}
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="relative p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group overflow-hidden">
                                {/* The Grid Background from your screenshot */}
                                <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
                                     style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                                <div className="relative z-10 space-y-4">
                                    <Icon className="w-12 h-12 text-primary group-hover:scale-110 transition-transform duration-500" />
                                    <div>
                                        <p className="text-5xl font-black text-white mb-1 tracking-tighter">{stat.value}</p>
                                        <p className="text-sm font-bold text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}

                    {/* Additional Testimonials */}
                    {testimonials.slice(1).map((t, i) => (
                        <div key={i} className={`${i === 0 ? 'md:col-span-2' : ''} p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group relative`}>
                            <div className="space-y-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                    ))}
                                </div>
                                <p className="text-xl text-zinc-200 leading-relaxed font-medium">"{t.text}"</p>
                                <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                    <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                                    <div>
                                        <p className="text-base font-bold text-white">{t.name}</p>
                                        <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}