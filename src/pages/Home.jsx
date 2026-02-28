import { Shield, Sparkles, Clock, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import PricingCard from '../components/PricingCard';
import EmergencyCTA from '../components/EmergencyCTA';
import Button from '../components/Button';
import FadeIn from '../components/FadeIn';

const Home = () => {
    const heroBadges = [
        { text: "Rated 4.9/5 on Google", icon: <Shield size={16} /> },
        { text: "Accepting Major Insurances", icon: <CheckCircle2 size={16} className="text-green-500" /> }
    ];

    return (
        <main>
            <Helmet>
                <title>SmileCare | Pain-Free Modern Dentistry in Austin</title>
                <meta name="description" content="Pain-Free Modern Dentistry in Austin – Same Day Appointments. Book your appointment in 30 seconds!" />
            </Helmet>

            {/* 1. Hero Section */}
            <FadeIn>
                <Hero
                    title="Pain-Free Modern Dentistry in"
                    highlight="Austin"
                    description="Experience a new standard of dental care. Relaxing environment, compassionate team, and same-day appointments available."
                    primaryCtaText="Book in 30 Seconds"
                    primaryCtaLink="/book"
                    secondaryCtaText="Emergency? Call Now"
                    secondaryCtaLink="tel:5551234567"
                    badges={heroBadges}
                    imageUrl="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
                    imageAlt="Smiling Patient in Austin"
                />
            </FadeIn>

            {/* 2. Social Proof Section */}
            <FadeIn delay={0.1}>
                <section aria-labelledby="social-proof-heading" className="py-20 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        {/* Trust Statistics */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16 border-b border-secondary-100 pb-16">
                            <div>
                                <p className="text-4xl font-extrabold text-primary-600 mb-2">15+</p>
                                <p className="text-secondary-600 font-medium">Years in Austin</p>
                            </div>
                            <div>
                                <p className="text-4xl font-extrabold text-primary-600 mb-2">10k+</p>
                                <p className="text-secondary-600 font-medium">Happy Smiles</p>
                            </div>
                            <div>
                                <p className="text-4xl font-extrabold text-primary-600 mb-2">4.9</p>
                                <p className="text-secondary-600 font-medium">Google Rating</p>
                            </div>
                            <div>
                                <p className="text-4xl font-extrabold text-primary-600 mb-2">0</p>
                                <p className="text-secondary-600 font-medium">Hidden Fees</p>
                            </div>
                        </div>

                        <header className="text-center max-w-3xl mx-auto mb-16">
                            <span className="block text-accent-500 font-semibold tracking-wide uppercase mb-3">Real Results</span>
                            <h2 id="social-proof-heading" className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Don't Just Take <span className="text-primary-600">Our Word For It</span></h2>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <TestimonialCard author="Sarah Jenkins" text="Painless and fast! Best dentist I've ever visited in Austin." />
                            <TestimonialCard author="Michael Rodriguez" text="They got me in on the same day for an emergency. Truly a lifesaver." />
                            <TestimonialCard author="Emily Chen" text="The whole team makes you feel like family. Highly recommend the whitening." />
                        </div>

                        <div className="text-center">
                            <Button asLink to="/reviews" variant="outline" size="md">
                                View Before & After Gallery <ArrowRight size={18} className="ml-2 inline" />
                            </Button>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* 3. Services Grid */}
            <FadeIn delay={0.1}>
                <section aria-labelledby="services-heading" className="py-24 bg-secondary-50 border-t border-secondary-200">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <header className="text-center max-w-3xl mx-auto mb-16">
                            <span className="block text-accent-500 font-semibold tracking-wide uppercase mb-3">Comprehensive Dental Care</span>
                            <h2 id="services-heading" className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">Everything You Need Under <span className="text-primary-600">One Roof</span></h2>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            <ServiceCard title="General Dentistry" description="Exams, cleanings, and X-rays to maintain your optimal oral health." icon={Shield} link="/services" />
                            <ServiceCard title="Cosmetics & Whitening" description="Veneers and professional whitening for a radiant, confident smile." icon={Sparkles} link="/services/whitening" />
                            <ServiceCard title="Dental Implants" description="Permanent, natural-looking replacement teeth that restore full function." icon={Heart} link="/services/implants" />
                            <ServiceCard title="Invisalign Aligners" description="Clear, comfortable aligners to straighten your teeth discreetly." icon={CheckCircle2} link="/services/invisalign" />
                            <ServiceCard title="Emergency Care" description="Immediate attention for severe pain, trauma, or broken teeth." icon={Clock} link="/emergency" />
                            <ServiceCard title="Pediatric Dentistry" description="Gentle, fun, and educational dental visits for children of all ages." icon={Shield} link="/services" />
                        </div>

                        <div className="text-center mt-12 flex flex-col sm:flex-row justify-center gap-4">
                            <Button asLink to="/book" variant="primary" size="lg">Book Appointment Now</Button>
                            <Button asLink to="/services" variant="outline" size="lg">Explore All Services</Button>
                        </div>
                    </div>
                </section>
            </FadeIn>

            {/* 4. Pricing Transparency Section */}
            <FadeIn delay={0.1}>
                <section aria-labelledby="pricing-heading" className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <header className="text-center max-w-3xl mx-auto mb-16">
                            <span className="block text-accent-500 font-semibold tracking-wide uppercase mb-3">Transparent Pricing</span>
                            <h2 id="pricing-heading" className="text-3xl md:text-4xl font-bold text-secondary-900 mb-6">No Hidden Fees. <span className="text-primary-600">Just Honest Care.</span></h2>
                            <p className="text-secondary-600 text-lg">We believe you should know exactly what to expect before you sit in the chair.</p>
                        </header>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                            <PricingCard
                                title="New Patient Special"
                                price="$99"
                                period="/intro"
                                description="Includes comprehensive exam, standard X-rays, and basic cleaning."
                            />
                            <PricingCard
                                title="In-House Membership"
                                price="$29"
                                period="/mo"
                                description="2 cleanings per year, unlimited exams/X-rays, and 15% off all other treatments."
                                isPopular={true}
                            />
                            <PricingCard
                                title="Teeth Whitening"
                                price="$199"
                                period="/start"
                                description="Take-home custom trays or professional in-office laser whitening."
                            />
                        </div>

                        <article className="bg-primary-50 p-8 rounded-3xl border border-primary-100 shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 premium-transition hover:shadow-elevated">
                            <div>
                                <h3 className="text-2xl font-bold text-secondary-900 mb-2">Need Financing?</h3>
                                <p className="text-secondary-700">We accept CareCredit® offering 0% interest for up to 24 months for qualifying patients.</p>
                            </div>
                            <Button asLink to="/patient-info" variant="outline" className="whitespace-nowrap bg-white">
                                View All Insurance & Plans
                            </Button>
                        </article>
                    </div>
                </section>
            </FadeIn>

            {/* 5. Emergency Highlight Section */}
            <FadeIn delay={0.1}>
                <EmergencyCTA />
            </FadeIn>
        </main>
    );
};

export default Home;
