'use client';

import { Star, Circle, Zap, TrendingUp, Award, Globe } from 'lucide-react';

export default function BentoGrid() {
    const techStack = [
        'Next.js', 'Supabase', 'Stripe', 'Vercel', 'Tailwind', 'TypeScript',
    ];

    const testimonials = [
        {
            name: 'Sarah Chen',
            role: 'CEO, TechVentures',
            text: 'Transformed our operations completely. Revenue increased 340% in 6 months.',
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&h=150&auto=format&fit=crop',
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Founder, ScaleUp Labs',
            text: 'The methodology is unlike anything else. Pure execution excellence.',
            image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=150&h=150&auto=format&fit=crop',
        },
        {
            name: 'Emily Watson',
            role: 'Director, Innovation Corp',
            text: 'Best investment we made. The ROI was immediate and substantial.',
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=150&h=150&auto=format&fit=crop',
        },
    ];

    const stats = [
        { icon: TrendingUp, label: 'Average Revenue Growth', value: '340%' },
        { icon: Zap, label: 'Faster Deployment', value: '10x' },
        { icon: Award, label: 'Client Satisfaction', value: '98%' },
    ];

    return (
        <section className="relative py-32 px-6 bg-black">
            <div className="absolute inset-0 opacity-10 pointer-events-none"
                 style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #27272a 1px, transparent 0)', backgroundSize: '40px 40px' }} />

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-5xl md:text-6xl font-bold text-white tracking-tight overflow-visible pr-2">Proven Results</h2>
                    <p className="text-xl text-zinc-400 font-light italic">Infrastructure that drives 7-figure growth.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* TOP ROW: Featured Testimonial + Status */}
                    <div className="md:col-span-2 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group overflow-visible">
                        <div className="h-full flex flex-col justify-between relative z-10">
                            <div className="space-y-6">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-primary text-primary" />)}
                                </div>
                                <p className="text-3xl text-white font-medium italic">"{testimonials[0].text}"</p>
                            </div>
                            <div className="flex items-center gap-4 mt-12">
                                <img src={testimonials[0].image} alt="" className="w-16 h-16 rounded-full grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-in-out" />
                                <div>
                                    <p className="text-lg font-bold text-white">{testimonials[0].name}</p>
                                    <p className="text-sm text-primary font-bold uppercase tracking-widest">{testimonials[0].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl flex flex-col justify-center items-center text-center space-y-6 group hover:border-primary/50 transition-all duration-500 overflow-visible">
                        <div className="relative w-20 h-20">
                            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse" />
                            <Circle className="w-20 h-20 text-primary relative z-10" />
                            <div className="absolute inset-0 flex items-center justify-center z-20">
                                <div className="w-8 h-8 bg-primary rounded-full shadow-[0_0_20px_rgba(6,182,212,1)]" />
                            </div>
                        </div>
                        <div>
                            <p className="text-xl font-bold text-white mb-1">Current Status</p>
                            <p className="text-primary font-black uppercase tracking-widest">2 Slots Available</p>
                        </div>
                    </div>

                    {/* MIDDLE ROW: Tech Stack + Stats 1 & 2 */}
                    <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500">
                        <p className="text-xl font-bold text-white mb-6 uppercase tracking-wider">The Engine</p>
                        <div className="grid grid-cols-1 gap-3">
                            {techStack.map((tech, i) => (
                                <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-primary/10 transition-colors cursor-default">
                                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                                    <span className="text-zinc-300 text-sm font-bold">{tech}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {stats.slice(0, 2).map((stat, index) => (
                        <div key={index} className="relative p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group overflow-visible">
                            <div className="absolute inset-0 opacity-5 group-hover:opacity-20 transition-opacity"
                                 style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                            <div className="relative z-10">
                                <stat.icon className="w-10 h-10 text-primary mb-6 group-hover:rotate-12 transition-transform" />
                                <p className="text-5xl font-black text-white mb-2 tracking-tighter">{stat.value}</p>
                                <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        </div>
                    ))}

                    {/* BOTTOM ROW: Stat 3 + Marcus + Globe */}
                    <div className="relative p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group overflow-visible">
                        <div className="absolute inset-0 opacity-5 group-hover:opacity-20 transition-opacity"
                             style={{ backgroundImage: 'linear-gradient(#06b6d4 1px, transparent 1px), linear-gradient(90deg, #06b6d4 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                        <div className="relative z-10">
                            <Award className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                            <p className="text-5xl font-black text-white mb-2 tracking-tighter">{stats[2].value}</p>
                            <p className="text-xs font-black text-zinc-500 uppercase tracking-widest">{stats[2].label}</p>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group relative overflow-visible">
                        <div className="space-y-6">
                            <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                            </div>
                            <p className="text-xl text-zinc-200 leading-relaxed font-medium italic">"{testimonials[1].text}"</p>
                            <div className="flex items-center gap-4 pt-4 border-t border-white/5">
                                <img src={testimonials[1].image} alt="" className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div>
                                    <p className="text-base font-bold text-white">{testimonials[1].name}</p>
                                    <p className="text-xs text-zinc-500 font-bold uppercase tracking-wider">{testimonials[1].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group flex flex-col justify-between overflow-visible">
                        <Globe className="w-10 h-10 text-primary group-hover:rotate-12 transition-all" />
                        <div>
                            <p className="text-2xl font-bold text-white">Global Reach</p>
                            <p className="text-sm text-zinc-400">Serving elite clients across 4 continents from our architectural hub.</p>
                        </div>
                    </div>

                    {/* EMILY (Wide Anchor) */}
                    <div className="md:col-span-3 p-8 rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-xl hover:border-primary/50 transition-all duration-500 group relative overflow-visible">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                            <div className="space-y-4 max-w-2xl">
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                                </div>
                                <p className="text-2xl text-zinc-200 leading-relaxed font-medium italic">"{testimonials[2].text}"</p>
                            </div>
                            <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-8 md:border-l border-white/10">
                                <img src={testimonials[2].image} alt="" className="w-14 h-14 rounded-full grayscale group-hover:grayscale-0 transition-all duration-500" />
                                <div>
                                    <p className="text-lg font-bold text-white">{testimonials[2].name}</p>
                                    <p className="text-sm text-zinc-500 font-bold uppercase tracking-wider">{testimonials[2].role}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}