import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Emergency Care', path: '/emergency' },
        { name: 'Patient Info', path: '/patient-info' },
        { name: 'Reviews', path: '/reviews' },
        { name: 'Blog', path: '/blog' },
    ];

    return (
        <header className={`sticky top-0 z-50 w-full premium-transition ${scrolled ? 'bg-white/85 backdrop-blur-md shadow-soft' : 'bg-white shadow-sm'}`}>
            {/* Top Bar - Emergency & Contact Info */}
            <div className={`bg-primary-700 text-white text-xs sm:text-sm px-4 premium-transition overflow-hidden origin-top ${scrolled ? 'h-0 py-0 opacity-0' : 'py-2 opacity-100'}`}>
                <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 w-full sm:w-auto">
                        <span className="flex items-center gap-1.5 justify-center sm:justify-start">
                            <Clock size={14} className="flex-shrink-0" />
                            <span>Mon-Fri: 8am - 6pm</span>
                        </span>
                        <span className="flex items-center gap-1.5 justify-center sm:justify-start hidden sm:flex">
                            <MapPin size={14} className="flex-shrink-0" />
                            <span>123 Austin Ave, TX 78701</span>
                        </span>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end gap-2 sm:gap-4 font-medium w-full sm:w-auto">
                        <span className="text-primary-100 hidden md:inline">Dental Emergency?</span>
                        <a href="tel:5551234567" className="flex items-center gap-1.5 hover:text-accent-300 transition-colors bg-white/10 sm:bg-transparent px-3 py-1 sm:p-0 rounded-full sm:rounded-none">
                            <Phone size={14} className="flex-shrink-0" />
                            <span>(555) 123-4567</span>
                        </a>
                    </div>
                </div>
            </div>

            {/* Main Navigation */}
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 relative">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 z-10">
                        <span className="text-2xl font-bold text-primary-600 tracking-tight">
                            Smile<span className="text-accent-500">Care</span>
                        </span>
                    </Link>

                    {/* Desktop menu */}
                    <div className="hidden lg:flex flex-1 items-center justify-end gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="text-secondary-600 hover:text-primary-600 font-medium transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Button asLink to="/book" variant="accent" size="md" className="shadow-md">
                            Book Online
                        </Button>
                    </div>

                    {/* Mobile menu toggle */}
                    <button
                        className="lg:hidden text-secondary-600 hover:text-primary-600 p-2 -mr-2 z-10 transition-colors"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile menu dropdown */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-white border-b shadow-xl lg:hidden">
                        <div className="px-4 py-6 flex flex-col gap-2 max-w-7xl mx-auto">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="block text-secondary-900 font-medium hover:text-primary-600 hover:bg-primary-50 px-4 py-3 rounded-xl transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="mt-4 px-2">
                                <Button
                                    asLink
                                    to="/book"
                                    variant="accent"
                                    className="w-full justify-center shadow-lg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Book Appointment Now
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
};

export default Navbar;
