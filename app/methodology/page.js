import Link from 'next/link';
import { ArrowLeft, Search, Pencil, Cog, Rocket } from 'lucide-react';
import Footer from '@/components/Footer';

export default function MethodologyPage() {
    const phases = [
        {
            icon: Search,
            title: 'Phase 1: Audit',
            duration: '2-3 weeks',
            description: 'We start with a comprehensive deep-dive into your current infrastructure, operations, and workflows.',
            deliverables: [
                'Complete system architecture review',
                'Bottleneck identification report',
                'Security and compliance audit',
                'Performance metrics baseline',
                'Technology stack assessment'
            ]
        },
        {
            icon: Pencil,
            title: 'Phase 2: Architect',
            duration: '3-4 weeks',
            description: 'Armed with insights, we design a scalable architecture tailored to your specific business objectives.',
            deliverables: [
                'Custom system architecture blueprints',
                'Database schema design',
                'API architecture documentation',
                'Scalability roadmap',
                'Technology recommendations'
            ]
        },
        {
            icon: Cog,
            title: 'Phase 3: Automate',
            duration: '4-6 weeks',
            description: 'We implement cutting-edge automation to eliminate manual processes and dramatically reduce operational costs.',
            deliverables: [
                'Automated deployment pipelines',
                'Custom workflow automation',
                'Integration with existing tools',
                'Monitoring and alerting systems',
                'Documentation and training materials'
            ]
        },
        {
            icon: Rocket,
            title: 'Phase 4: Scale',
            duration: 'Ongoing',
            description: 'Your systems are now built to grow with you, maintaining peak performance at every level of scale.',
            deliverables: [
                'Load testing and optimization',
                'Performance tuning',
                'Continuous monitoring',
                'Quarterly strategy reviews',
                '24/7 support and maintenance'
            ]
        }
    ];

    return (
        <main className="min-h-screen bg-black text-white">
            <div className="max-w-6xl mx-auto px-6 py-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <h1 className="text-5xl md:text-6xl font-bold mb-8">
                    Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Methodology</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-16 max-w-3xl">
                    A battle-tested framework refined through hundreds of successful implementations.
                    This is how we transform consultancy businesses into scalable powerhouses.
                </p>

                <div className="space-y-16">
                    {phases.map((phase, index) => {
                        const Icon = phase.icon;
                        return (
                            <div
                                key={index}
                                className="relative p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md"
                            >
                                <div className="flex items-start gap-6">
                                    <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                        <Icon className="w-8 h-8 text-white" />
                                    </div>

                                    <div className="flex-1 space-y-4">
                                        <div>
                                            <h2 className="text-3xl font-bold text-white mb-2">{phase.title}</h2>
                                            <p className="text-primary font-medium">{phase.duration}</p>
                                        </div>

                                        <p className="text-lg text-zinc-300">{phase.description}</p>

                                        <div className="pt-4">
                                            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                                                Key Deliverables
                                            </h3>
                                            <ul className="space-y-2">
                                                {phase.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-3 text-zinc-400">
                                                        <span className="text-primary mt-1">✓</span>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 p-8 rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-md">
                    <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
                    <p className="text-zinc-300 mb-6">
                        Our methodology has helped dozens of elite consultants scale from 6 to 8 figures.
                        Let's discuss how we can do the same for you.
                    </p>
                    <Link
                        href="/#contact-section"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-black font-semibold hover:bg-primary/90 transition-colors"
                    >
                        Apply for Strategy
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}