import Link from 'next/link';
import { ArrowLeft, TrendingUp, Users, Zap } from 'lucide-react';
import Footer from '@/components/Footer';

export default function CaseStudiesPage() {
    const caseStudies = [
        {
            client: 'TechVentures Inc.',
            industry: 'B2B SaaS Consulting',
            challenge: 'Manual processes limiting growth to $2M ARR',
            solution: 'Complete automation overhaul with custom CRM integration',
            results: [
                '340% revenue increase in 6 months',
                '80% reduction in manual data entry',
                'Scaled from 5 to 25 clients without hiring',
                'Client onboarding time reduced from 2 weeks to 2 days'
            ],
            icon: TrendingUp,
            color: 'from-cyan-500 to-blue-500'
        },
        {
            client: 'ScaleUp Labs',
            industry: 'Growth Strategy Consulting',
            challenge: 'Infrastructure couldn\'t handle rapid client growth',
            solution: 'Cloud-native architecture with auto-scaling capabilities',
            results: [
                'Zero downtime during 10x traffic spike',
                '99.99% uptime achieved',
                'Response time improved by 75%',
                'Infrastructure costs reduced by 40%'
            ],
            icon: Zap,
            color: 'from-purple-500 to-pink-500'
        },
        {
            client: 'Innovation Corp',
            industry: 'Digital Transformation',
            challenge: 'Siloed systems creating data inconsistencies',
            solution: 'Unified data platform with real-time synchronization',
            results: [
                'Single source of truth for all client data',
                '95% reduction in data errors',
                'Real-time reporting and analytics',
                'ROI achieved in 3 months'
            ],
            icon: Users,
            color: 'from-blue-500 to-purple-500'
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
                    Case <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Studies</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-16 max-w-3xl">
                    Real results from real clients. See how we've helped elite consultants transform their businesses
                    and achieve unprecedented growth.
                </p>

                <div className="space-y-12">
                    {caseStudies.map((study, index) => {
                        const Icon = study.icon;
                        return (
                            <div
                                key={index}
                                className="relative p-8 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 group"
                            >
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${study.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                                <div className="relative space-y-6">
                                    {/* Header */}
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h2 className="text-3xl font-bold text-white mb-2">{study.client}</h2>
                                            <p className="text-primary font-medium">{study.industry}</p>
                                        </div>
                                        <div className={`flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br ${study.color} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                            <Icon className="w-7 h-7 text-white" />
                                        </div>
                                    </div>

                                    {/* Challenge */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                                            The Challenge
                                        </h3>
                                        <p className="text-lg text-zinc-300">{study.challenge}</p>
                                    </div>

                                    {/* Solution */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-2">
                                            Our Solution
                                        </h3>
                                        <p className="text-lg text-zinc-300">{study.solution}</p>
                                    </div>

                                    {/* Results */}
                                    <div>
                                        <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">
                                            The Results
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-3">
                                            {study.results.map((result, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-start gap-3 p-3 rounded-lg bg-zinc-800/30 border border-zinc-700/50"
                                                >
                                                    <span className="text-primary text-xl flex-shrink-0">✓</span>
                                                    <span className="text-zinc-300">{result}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 p-8 rounded-2xl border border-primary/30 bg-primary/10 backdrop-blur-md text-center">
                    <h2 className="text-2xl font-bold text-white mb-4">Want Results Like These?</h2>
                    <p className="text-zinc-300 mb-6 max-w-2xl mx-auto">
                        These are just a few examples of what's possible when you partner with The Architect.
                        Let's write your success story next.
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