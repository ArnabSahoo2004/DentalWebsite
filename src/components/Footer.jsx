import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
    // LocalBusiness Schema.org JSON-LD
    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "Dentist",
        "name": "SmileCare Austin Dental",
        "image": "https://smilecare-austin.demo.com/logo.png",
        "@id": "https://smilecare-austin.demo.com",
        "url": "https://smilecare-austin.demo.com",
        "telephone": "+15551234567",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "123 Austin Ave",
            "addressLocality": "Austin",
            "addressRegion": "TX",
            "postalCode": "78701",
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 30.2672,
            "longitude": -97.7431
        },
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
            },
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Saturday"],
                "opens": "09:00",
                "closes": "14:00"
            }
        ],
        "sameAs": [
            "https://facebook.com",
            "https://instagram.com",
            "https://twitter.com"
        ]
    };

    return (
        <footer className="bg-secondary-900 text-white pt-16 pb-8 border-t-4 border-accent-500">
            {/* Inject JSON-LD Schema for Local SEO */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
                    {/* Maps & Contact */}
                    <div className="lg:col-span-2 flex flex-col h-full">
                        <h3 className="text-xl font-semibold mb-6 text-white border-b border-secondary-700 pb-2 inline-block">Visit Our Austin Clinic</h3>
                        <div className="flex-grow bg-secondary-800 rounded-xl overflow-hidden mb-6 flex items-center justify-center border border-secondary-700 min-h-[200px]">
                            {/* Placeholder for iframe map */}
                            <p className="text-secondary-400 font-medium">Map Embed Placeholder</p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-6 text-secondary-300 bg-secondary-800/50 p-4 rounded-xl">
                            <div className="flex items-start gap-3">
                                <MapPin className="text-accent-500 mt-1 flex-shrink-0" size={20} />
                                <span>123 Austin Ave,<br />Austin, TX 78701</span>
                            </div>
                            <div className="flex items-start gap-3">
                                <Phone className="text-accent-500 mt-1 flex-shrink-0" size={20} />
                                <div>
                                    <a href="tel:5551234567" className="hover:text-accent-400 transition-colors block text-lg font-medium text-white">(555) 123-4567</a>
                                    <span className="text-sm">24/7 Available</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 text-white border-b border-secondary-700 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><Link to="/services" className="text-secondary-300 hover:text-accent-400 transition-colors flex items-center gap-2"><span className="text-accent-500 text-xs">▶</span> Our Services</Link></li>
                            <li><Link to="/patient-info" className="text-secondary-300 hover:text-accent-400 transition-colors flex items-center gap-2"><span className="text-accent-500 text-xs">▶</span> Patient Info & Pricing</Link></li>
                            <li><Link to="/reviews" className="text-secondary-300 hover:text-accent-400 transition-colors flex items-center gap-2"><span className="text-accent-500 text-xs">▶</span> Patient Reviews</Link></li>
                            <li><Link to="/blog" className="text-secondary-300 hover:text-accent-400 transition-colors flex items-center gap-2"><span className="text-accent-500 text-xs">▶</span> Dental Blog</Link></li>
                            <li><Link to="/book" className="text-secondary-300 hover:text-accent-400 transition-colors flex items-center gap-2"><span className="text-accent-500 text-xs">▶</span> Book Appointment</Link></li>
                            <li><Link to="/dashboard" className="text-secondary-300 hover:text-accent-400 transition-colors flex items-center gap-2"><span className="text-accent-500 text-xs">▶</span> Analytics Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* About & Social */}
                    <div>
                        <Link to="/" className="inline-block mb-6">
                            <span className="text-3xl font-bold text-white tracking-tight">Smile<span className="text-accent-500">Care</span></span>
                        </Link>
                        <p className="text-secondary-300 mb-6 leading-relaxed">
                            SmileCare provides pain-free, modern dentistry in Austin, Texas. We specialize in cosmetic dentistry, dental implants, Invisalign, and 24/7 emergency dental care. Experience top-rated local dental services today.
                        </p>
                        <div className="flex gap-4 mb-6">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="bg-secondary-800 p-2 rounded-full hover:bg-accent-500 transition-colors text-white">
                                <Facebook size={20} />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-secondary-800 p-2 rounded-full hover:bg-accent-500 transition-colors text-white">
                                <Instagram size={20} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-secondary-800 p-2 rounded-full hover:bg-accent-500 transition-colors text-white">
                                <Twitter size={20} />
                            </a>
                        </div>
                        <div className="flex items-center gap-2 text-secondary-400">
                            <Clock className="text-secondary-500" size={16} />
                            <span className="text-sm">Mon - Fri: 8AM - 6PM</span>
                        </div>
                        <div className="flex items-center gap-2 text-secondary-400 mt-1">
                            <Clock className="opacity-0" size={16} />
                            <span className="text-sm">Sat: 9AM - 2PM</span>
                        </div>
                    </div>
                </div>

                {/* SEO Text & Legal */}
                <div className="border-t border-secondary-800 pt-8 mt-4">
                    <p className="text-secondary-500 text-xs mb-4 text-center max-w-4xl mx-auto leading-relaxed">
                        SmileCare is a premier Austin dental clinic offering comprehensive family, cosmetic, and emergency dentistry. Whether you need a routine teeth cleaning, porcelain veneers, teeth whitening, or immediate care for an infected tooth, our team is equipped with modern technology. Same-day appointments available for residents of Austin, Round Rock, Cedar Park, and surrounding areas.
                    </p>
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-secondary-400 text-sm">
                        <p>&copy; {new Date().getFullYear()} SmileCare Austin Dental. All rights reserved.</p>
                        <div className="flex gap-6">
                            <Link to="/privacy" className="hover:text-accent-400 transition-colors">Privacy Policy</Link>
                            <Link to="/terms" className="hover:text-accent-400 transition-colors">Terms of Service</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
