import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-black text-white">
            <div className="max-w-4xl mx-auto px-6 py-20">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>

                <h1 className="text-5xl md:text-6xl font-bold mb-8">
                    About <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">The Architect</span>
                </h1>

                <div className="space-y-6 text-lg text-zinc-300 leading-relaxed">
                    <p>
                        The Architect was founded on a simple belief: elite consultants deserve elite infrastructure.
                        In a world where technology moves faster than strategy, we bridge the gap.
                    </p>

                    <p>
                        Our team consists of former CTOs, technical architects, and business strategists who have
                        built and scaled systems for Fortune 500 companies. We've seen what works at scale, and more
                        importantly, what doesn't.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-4">Our Mission</h2>
                    <p>
                        To empower the world's top consultants with infrastructure that matches their ambition.
                        We don't just build systems—we architect futures.
                    </p>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-4">Our Values</h2>
                    <ul className="space-y-4 list-none">
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-2xl">•</span>
                            <div>
                                <strong className="text-white">Excellence:</strong> We accept nothing less than the best,
                                for ourselves and our clients.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-2xl">•</span>
                            <div>
                                <strong className="text-white">Innovation:</strong> We stay ahead of the curve, always
                                exploring the cutting edge of technology.
                            </div>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-primary text-2xl">•</span>
                            <div>
                                <strong className="text-white">Partnership:</strong> Your success is our success. We're
                                in this together.
                            </div>
                        </li>
                    </ul>

                    <h2 className="text-3xl font-bold text-white mt-12 mb-4">Why Choose Us?</h2>
                    <p>
                        Because you deserve a partner who understands the stakes. When you're managing millions in
                        consulting revenue, downtime isn't an option. Inefficiency isn't acceptable. Mediocrity is
                        a death sentence.
                    </p>

                    <p>
                        We bring military-grade reliability, enterprise-level security, and startup-level agility
                        to everything we build. That's the Architect difference.
                    </p>
                </div>
            </div>
            <Footer />
        </main>
    );
}