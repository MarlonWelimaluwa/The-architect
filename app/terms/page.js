import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import Footer from '@/components/Footer';

export default function TermsPage() {
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
                    Terms of <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Service</span>
                </h1>

                <p className="text-zinc-400 mb-8">Last updated: January 7, 2026</p>

                <div className="space-y-8 text-zinc-300 leading-relaxed">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
                        <p>
                            By accessing and using The Architect's services, you accept and agree to be bound by
                            the terms and provision of this agreement. If you do not agree to these terms, please
                            do not use our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">2. Use of Services</h2>
                        <p>
                            Our services are provided for legitimate business purposes only. You agree to use
                            our services in compliance with all applicable laws and regulations.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">3. Intellectual Property</h2>
                        <p>
                            All content, features, and functionality of our services are owned by The Architect
                            and are protected by international copyright, trademark, and other intellectual property laws.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">4. Service Level Agreement</h2>
                        <p>We commit to:</p>
                        <ul className="list-disc list-inside space-y-2 mt-4 ml-4">
                            <li>99.9% uptime for all production systems</li>
                            <li>24/7 monitoring and support</li>
                            <li>Regular security updates and patches</li>
                            <li>Quarterly performance reviews</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                        <p>
                            Payment terms are agreed upon in individual service contracts. All fees are due
                            as specified in your agreement. Late payments may result in service suspension.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">6. Confidentiality</h2>
                        <p>
                            We treat all client information as confidential and will not disclose it to third
                            parties except as required by law or with your explicit consent.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h2>
                        <p>
                            To the maximum extent permitted by law, The Architect shall not be liable for any
                            indirect, incidental, special, consequential, or punitive damages resulting from
                            your use of our services.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">8. Termination</h2>
                        <p>
                            Either party may terminate services with 30 days written notice. Upon termination,
                            you will receive all data and documentation related to your systems.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">9. Changes to Terms</h2>
                        <p>
                            We reserve the right to modify these terms at any time. We will notify you of
                            any material changes via email or through our service.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-4">10. Contact</h2>
                        <p>
                            For questions about these Terms of Service, please contact us at{' '}
                            <a href="mailto:legal@thearchitect.com" className="text-primary hover:text-primary/80">
                                legal@thearchitect.com
                            </a>
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </main>
    );
}