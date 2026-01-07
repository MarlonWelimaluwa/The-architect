import Link from 'next/link';
import { ArrowLeft, Clock, ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';

export default function BlogPage() {
    const posts = [
        {
            title: 'The Hidden Cost of Manual Processes in Consulting',
            excerpt: 'How automation can save elite consultants 20+ hours per week and unlock 7-figure growth.',
            date: 'January 5, 2026',
            readTime: '8 min read',
            category: 'Automation'
        },
        {
            title: 'Scaling to $10M: Infrastructure Requirements',
            excerpt: 'What you need to know about system architecture before you hit the revenue ceiling.',
            date: 'December 28, 2025',
            readTime: '12 min read',
            category: 'Growth'
        },
        {
            title: 'Why Most Consulting Firms Fail to Scale',
            excerpt: 'The three infrastructure mistakes that keep 90% of consultants stuck at $1-2M ARR.',
            date: 'December 15, 2025',
            readTime: '10 min read',
            category: 'Strategy'
        },
        {
            title: 'Next.js 15 for Enterprise: A Technical Review',
            excerpt: 'Deep dive into the latest features and how they impact high-performance consulting platforms.',
            date: 'December 10, 2025',
            readTime: '15 min read',
            category: 'Technology'
        },
        {
            title: 'Security Best Practices for Client Data',
            excerpt: 'How to protect sensitive information and maintain compliance in a consulting business.',
            date: 'November 30, 2025',
            readTime: '9 min read',
            category: 'Security'
        },
        {
            title: 'The ROI of Infrastructure Investment',
            excerpt: 'Real numbers from consulting firms that invested in scalable systems early.',
            date: 'November 22, 2025',
            readTime: '7 min read',
            category: 'Business'
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
                    The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Blog</span>
                </h1>

                <p className="text-xl text-zinc-400 mb-16 max-w-3xl">
                    Insights on scaling consulting businesses, infrastructure architecture, and the technology
                    powering the world's top consultants.
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                    {posts.map((post, index) => (
                        <article
                            key={index}
                            className="group relative p-6 rounded-2xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-md hover:border-primary/50 transition-all duration-500 cursor-pointer"
                        >
                            <div className="space-y-4">
                                {/* Category badge */}
                                <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary border border-primary/30">
                  {post.category}
                </span>

                                {/* Title */}
                                <h2 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="text-zinc-400 leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Meta info */}
                                <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
                                    <div className="flex items-center gap-4 text-sm text-zinc-500">
                                        <span>{post.date}</span>
                                        <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                                            {post.readTime}
                    </span>
                                    </div>
                                    <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 text-center">
                    <p className="text-zinc-400 mb-4">More articles coming soon...</p>
                    <Link
                        href="/#contact-section"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
                    >
                        Subscribe to our newsletter
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>
            </div>
            <Footer />
        </main>
    );
}