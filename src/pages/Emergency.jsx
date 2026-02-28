import { Helmet } from 'react-helmet-async';
import { PhoneCall, AlertTriangle, Clock, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';

const Emergency = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', situation: '' });
    const [status, setStatus] = useState('idle'); // idle, submitting, success

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        // Mock fast processing
        await new Promise(resolve => setTimeout(resolve, 800));
        setStatus('success');
    };

    return (
        <main>
            <Helmet>
                <title>Emergency Dental Care Austin | Same-Day Appointments</title>
                <meta name="description" content="Immediate 24/7 dental emergency care in Austin. Call us now if you have severe tooth pain, a broken tooth, or swelling. Same-day appointments available." />
            </Helmet>

            {/* Mobile Sticky Call Button */}
            <div className="md:hidden fixed bottom-0 left-0 w-full bg-accent-600 p-4 z-50 shadow-[0_-4px_10px_rgba(0,0,0,0.2)]">
                <a href="tel:5551234567" className="flex items-center justify-center gap-2 bg-white text-accent-600 text-xl font-extrabold py-3 rounded-full w-full animate-pulse shadow-lg">
                    <PhoneCall size={24} /> Call (555) 123-4567 Now
                </a>
            </div>

            {/* Hero Section */}
            <header className="bg-secondary-900 border-t-4 border-accent-500 relative overflow-hidden">
                <div className="absolute inset-0 bg-red-900/20" style={{ backgroundImage: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.6) 100%)' }}></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 flex flex-col lg:flex-row items-center gap-12">

                    {/* Left: Urgency Copy */}
                    <div className="flex-1 text-center lg:text-left text-white">
                        <div className="inline-flex items-center justify-center p-3 bg-accent-500/20 rounded-full mb-6 border border-accent-500/30">
                            <AlertTriangle aria-hidden="true" size={32} className="text-accent-400" />
                            <span className="ml-3 font-bold text-accent-100 tracking-wide uppercase">Emergency Care</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight leading-tight">
                            In Severe <span className="text-accent-500">Dental Pain?</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-medium mb-8 text-secondary-200">
                            Don't wait. We reserve specific slots every day strictly for emergency patients in Austin. We will get you out of pain today.
                        </p>

                        <div className="hidden md:flex flex-col sm:flex-row items-center lg:items-start gap-4">
                            <a
                                href="tel:5551234567"
                                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-accent-500 text-white px-8 py-4 rounded-full text-2xl font-extrabold hover:bg-accent-400 transition-colors shadow-[0_0_20px_rgba(239,68,68,0.4)] animate-pulse"
                            >
                                <PhoneCall aria-hidden="true" size={28} /> (555) 123-4567
                            </a>
                            <div className="flex flex-col justify-center text-left">
                                <span className="flex items-center gap-2 text-green-400 font-bold"><CheckCircle2 size={16} /> Open Right Now</span>
                                <span className="text-secondary-300 text-sm">Target response: &lt; 2 minutes</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Fast Form */}
                    <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-2xl relative">
                        <div className="absolute -top-4 -right-4 bg-primary-500 text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg transform rotate-3">
                            Fast Track Processing
                        </div>
                        <h2 className="text-2xl font-bold text-secondary-900 mb-2">Request Immediate Callback</h2>
                        <p className="text-secondary-600 mb-6 text-sm">Fill this out and we will call you back immediately to secure your spot.</p>

                        {status === 'success' ? (
                            <div className="text-center py-8 animate-in fade-in">
                                <CheckCircle2 size={48} className="text-green-500 mx-auto mb-4" />
                                <h3 className="text-xl font-bold text-secondary-900 mb-2">Request Received!</h3>
                                <p className="text-secondary-600">Keep your phone nearby. We are calling you right now.</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="emergency-name" className="sr-only">Your Name</label>
                                    <input id="emergency-name" required type="text" placeholder="Your Name" className="w-full rounded-xl border border-secondary-200 py-3 px-4 focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-secondary-50" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} disabled={status === 'submitting'} />
                                </div>
                                <div>
                                    <label htmlFor="emergency-phone" className="sr-only">Phone Number</label>
                                    <input id="emergency-phone" required type="tel" placeholder="Phone Number" className="w-full rounded-xl border border-secondary-200 py-3 px-4 focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-secondary-50" value={formData.phone} onChange={e => setFormData({ ...formData, phone: e.target.value })} disabled={status === 'submitting'} />
                                </div>
                                <div>
                                    <label htmlFor="emergency-situation" className="sr-only">What is the emergency?</label>
                                    <select id="emergency-situation" required className="w-full rounded-xl border border-secondary-200 py-3 px-4 focus:ring-2 focus:ring-accent-500 focus:border-transparent bg-secondary-50" value={formData.situation} onChange={e => setFormData({ ...formData, situation: e.target.value })} disabled={status === 'submitting'}>
                                        <option value="" disabled>What is the emergency?</option>
                                        <option value="pain">Severe Toothache</option>
                                        <option value="broken">Broken/Chipped Tooth</option>
                                        <option value="swelling">Facial Swelling</option>
                                        <option value="knocked-out">Knocked Out Tooth</option>
                                        <option value="crown">Lost Crown/Filling</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <Button type="submit" className="w-full bg-secondary-900 hover:bg-secondary-800 text-white py-4 rounded-xl font-bold text-lg mt-2" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Get A Callback Now'}
                                </Button>
                            </form>
                        )}
                        <p className="text-center text-xs text-secondary-400 mt-4 flex items-center justify-center gap-1">
                            <Clock size={12} /> Same-day slots fill up fast.
                        </p>
                    </div>
                </div>
            </header>

            {/* Reassurance & Info */}
            <section aria-labelledby="emergency-info-heading" className="py-16 md:py-24 bg-white pb-32 md:pb-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 id="emergency-info-heading" className="sr-only">Emergency Information and Guarantees</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                        <article className="bg-primary-50 p-8 rounded-2xl">
                            <Clock aria-hidden="true" size={32} className="text-primary-600 mb-4" />
                            <h3 className="text-xl font-bold text-secondary-900 mb-3">Same-Day Guarantee</h3>
                            <p className="text-secondary-700">If you are in pain, you shouldn't have to wait. Call us early in the day and we guarantee we'll see you today.</p>
                        </article>
                        <article className="bg-secondary-50 p-8 rounded-2xl">
                            <AlertTriangle aria-hidden="true" size={32} className="text-secondary-600 mb-4" />
                            <h3 className="text-xl font-bold text-secondary-900 mb-3">No Judgments</h3>
                            <p className="text-secondary-700">We don't care how long it's been since your last dentist visit. Our only goal is to get you out of pain safely and comfortably.</p>
                        </article>
                        <article className="bg-primary-50 p-8 rounded-2xl border border-primary-100">
                            <MapPin aria-hidden="true" size={32} className="text-primary-600 mb-4" />
                            <h3 className="text-xl font-bold text-secondary-900 mb-3">Find Us Fast</h3>
                            <p className="text-secondary-700 mb-4">123 Austin Ave, TX 78701<br />(Only 5 mins from Downtown)</p>
                            <a href="#" className="font-semibold text-primary-600 flex items-center gap-1 hover:text-primary-700">Get Directions <ArrowRight size={16} /></a>
                        </article>
                    </div>

                    {/* Common Dental Emergencies */}
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl font-bold text-secondary-900 mb-8 border-b pb-4 text-center">Common Emergencies We Treat</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4">
                                <span className="bg-accent-100 text-accent-600 p-2 rounded-full mt-1">
                                    <AlertTriangle aria-hidden="true" size={20} />
                                </span>
                                <div>
                                    <h4 className="text-xl font-bold text-secondary-900">Severe Toothache</h4>
                                    <p className="text-secondary-600">Unbearable pain often indicates infection. Rinse with warm water and use a cold compress on your cheek to reduce swelling.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="bg-accent-100 text-accent-600 p-2 rounded-full mt-1">
                                    <AlertTriangle aria-hidden="true" size={20} />
                                </span>
                                <div>
                                    <h4 className="text-xl font-bold text-secondary-900">Knocked-Out Tooth</h4>
                                    <p className="text-secondary-600">Keep it moist (in milk or saliva). Time is critical—we have the highest chance of saving it if you see us within 1 hour.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span className="bg-accent-100 text-accent-600 p-2 rounded-full mt-1">
                                    <AlertTriangle aria-hidden="true" size={20} />
                                </span>
                                <div>
                                    <h4 className="text-xl font-bold text-secondary-900">Broken or Chipped Tooth</h4>
                                    <p className="text-secondary-600">Save any pieces if possible. Rinse mouth with warm water and apply a cold compress to your face to prevent swelling.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Emergency;
