import { Helmet } from 'react-helmet-async';
import { Shield, Sparkles, Heart, Activity, CheckCircle2 } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';

const Services = () => {
    return (
        <>
            <Helmet>
                <title>Our Dental Services | SmileCare</title>
                <meta name="description" content="Comprehensive dental services including general dentistry, cosmetic treatments, implants, and emergency care." />
            </Helmet>

            {/* Header */}
            <section className="bg-primary-50 py-16 md:py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-6">Our Dental <span className="text-primary-600">Services</span></h1>
                    <p className="text-lg md:text-xl text-secondary-600 max-w-3xl mx-auto">
                        We provide a comprehensive range of dental treatments using state-of-the-art technology to ensure your smile is beautiful and healthy.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <ServiceCard
                            title="Preventative Care"
                            description="Keep your smile healthy with routine exams, professional cleanings, oral cancer screenings, and digital X-rays."
                            icon={Shield}
                            link="/services/preventative"
                        />
                        <ServiceCard
                            title="Cosmetic Dentistry"
                            description="Transform your smile with professional teeth whitening, porcelain veneers, and complete smile makeovers."
                            icon={Sparkles}
                            link="/services/whitening"
                        />
                        <ServiceCard
                            title="Dental Implants"
                            description="Permanent, secure, and natural-looking tooth replacement options that restore full function and aesthetics."
                            icon={Heart}
                            link="/services/implants"
                        />
                        <ServiceCard
                            title="Invisalign"
                            description="Straighten your teeth discreetly with clear, removable aligners instead of traditional metal braces."
                            icon={CheckCircle2}
                            link="/services/invisalign"
                        />
                        <ServiceCard
                            title="Emergency Dentistry"
                            description="Immediate care for toothaches, chipped or broken teeth, knocked-out teeth, and other dental emergencies."
                            icon={Activity}
                            link="/emergency"
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-600 text-white text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h2 className="text-3xl font-bold mb-6">Not sure what treatment you need?</h2>
                    <p className="text-primary-100 text-lg mb-8">Book a free consultation with our experts to discuss your symptoms and goals.</p>
                    <Button asLink to="/book" variant="white" size="lg">
                        Schedule Consultation
                    </Button>
                </div>
            </section>
        </>
    );
};

export default Services;
