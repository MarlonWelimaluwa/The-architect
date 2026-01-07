'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { supabase } from '@/lib/supabase';
import { Lock, CheckCircle2, Loader2 } from 'lucide-react';

export default function ConsultantPortal() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        setError('');
    };

    const validateForm = () => {
        if (!formData.name.trim()) return 'Name is required';
        if (!formData.email.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) return 'Invalid email format';
        if (!formData.message.trim()) return 'Message is required';
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const validationError = validateForm();
        if (validationError) {
            setError(validationError);
            return;
        }

        setLoading(true);
        setError('');

        try {
            const { data, error: supabaseError } = await supabase
                .from('contact_submissions')
                .insert([
                    {
                        name: formData.name,
                        email: formData.email,
                        company: formData.company,
                        message: formData.message,
                    },
                ]);

            if (supabaseError) throw supabaseError;

            setSuccess(true);
            setFormData({ name: '', email: '', company: '', message: '' });

            // Reset success message after 5 seconds
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError(err.message || 'Something went wrong. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact-section" className="relative py-32 px-6 overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

            <div className="relative z-10 max-w-5xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16 space-y-4">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm mb-4">
                        <Lock className="w-4 h-4 text-primary" />
                        <span className="text-sm text-primary font-medium">Secure & Private</span>
                    </div>

                    <h2 className="text-5xl md:text-6xl font-bold text-white">
                        The <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Private Vault</span>
                    </h2>
                    <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
                        Elite clients receive exclusive access to a private dashboard for real-time project tracking, analytics, and direct communication.
                    </p>
                </div>

                {/* Form card */}
                <Card className="border-zinc-800/50 bg-zinc-900/50 backdrop-blur-xl shadow-2xl">
                    <CardHeader className="space-y-2">
                        <CardTitle className="text-3xl">Request Access</CardTitle>
                        <CardDescription className="text-zinc-400">
                            Submit your information and we'll get back to you within 24 hours.
                        </CardDescription>
                    </CardHeader>

                    <CardContent>
                        {success ? (
                            <div className="py-12 text-center space-y-4 animate-fade-in">
                                <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                                    <CheckCircle2 className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-2xl font-bold text-white">Submission Received!</h3>
                                <p className="text-zinc-400 max-w-md mx-auto">
                                    We've received your request and will review it shortly. Check your email for next steps.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-300">
                                            Full Name <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            disabled={loading}
                                        />
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-zinc-300">
                                            Email Address <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            name="email"
                                            type="email"
                                            placeholder="john@company.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            disabled={loading}
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">
                                        Company Name
                                    </label>
                                    <Input
                                        name="company"
                                        placeholder="Acme Inc."
                                        value={formData.company}
                                        onChange={handleChange}
                                        disabled={loading}
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-zinc-300">
                                        Project Details <span className="text-red-500">*</span>
                                    </label>
                                    <Textarea
                                        name="message"
                                        placeholder="Tell us about your project, goals, and how we can help..."
                                        value={formData.message}
                                        onChange={handleChange}
                                        disabled={loading}
                                        className="min-h-[150px]"
                                    />
                                </div>

                                {error && (
                                    <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/50 text-red-400 text-sm">
                                        {error}
                                    </div>
                                )}

                                <Button
                                    type="submit"
                                    size="lg"
                                    className="w-full"
                                    disabled={loading}
                                >
                                    {loading ? (
                                        <>
                                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                                            Submitting...
                                        </>
                                    ) : (
                                        'Submit Application'
                                    )}
                                </Button>

                                <p className="text-xs text-zinc-500 text-center">
                                    By submitting, you agree to our terms and privacy policy.
                                </p>
                            </form>
                        )}
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}