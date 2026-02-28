import { PhoneCall } from 'lucide-react';

const EmergencyCTA = () => {
    return (
        <section className="bg-accent-600 py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-red-900 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.4) 100%)' }}></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">In Dental Pain Right Now?</h2>
                <p className="text-xl md:text-2xl text-accent-100 mb-10 max-w-3xl mx-auto">
                    Don't stress. We reserve specific slots every day strictly for emergency patients. Call us immediately and we will fit you in today.
                </p>
                <a href="tel:5551234567" className="inline-flex items-center justify-center gap-3 bg-white text-accent-600 px-10 py-5 rounded-full text-2xl font-extrabold hover:bg-gray-100 transition-colors shadow-2xl animate-pulse">
                    <PhoneCall size={32} /> (555) 123-4567
                </a>
            </div>
        </section>
    );
};

export default EmergencyCTA;
