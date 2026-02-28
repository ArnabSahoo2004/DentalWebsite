import { Helmet } from 'react-helmet-async';
import { PhoneCall } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import Chatbot from './Chatbot';

const Layout = ({ children, title = "SmileCare | Premium Dental Clinic", description = "Providing exceptional, compassionate dental care for the whole family. Book your appointment today." }) => {
    return (
        <div className="flex flex-col min-h-screen font-sans bg-secondary-50">
            <Helmet>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Helmet>

            <Navbar />

            <main className="flex-grow">
                {children}
            </main>

            {/* Mobile Sticky Emergency Button */}
            <a
                href="tel:5551234567"
                className="md:hidden fixed bottom-6 left-6 z-50 bg-accent-600 hover:bg-accent-700 text-white p-4 rounded-full shadow-lg hover:shadow-elevated premium-transition transform hover:scale-105 flex items-center justify-center animate-pulse"
                aria-label="Call Emergency Dentist"
            >
                <PhoneCall size={24} />
            </a>

            <Chatbot />
            <Footer />
        </div>
    );
};

export default Layout;
