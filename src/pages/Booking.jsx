import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Calendar, User, Phone, Mail, FileText, AlertCircle, CheckCircle2 } from 'lucide-react';
import Button from '../components/Button';

const Booking = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        service: '',
        date: '',
        notes: ''
    });

    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const validateForm = () => {
        if (!formData.firstName.trim() || !formData.lastName.trim()) return "Name fields are required.";
        if (!formData.phone.trim()) return "Phone number is required.";
        if (!formData.service) return "Please select a reason for visit.";
        if (!formData.date) return "Please select a preferred date.";
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const error = validateForm();
        if (error) {
            setErrorMessage(error);
            setStatus('error');
            return;
        }

        setStatus('submitting');
        setErrorMessage('');

        // Mock API Call Delay
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            // Simulate a random failure for demonstration (rare)
            // if (Math.random() > 0.9) throw new Error("Network timeout");

            setStatus('success');
            setFormData({
                firstName: '', lastName: '', phone: '', email: '', service: '', date: '', notes: ''
            });
        } catch {
            setErrorMessage("Failed to submit request. Please try again or call our office.");
            setStatus('error');
        }
    };

    return (
        <main className="bg-secondary-50 py-16 min-h-[80vh]">
            <Helmet>
                <title>Book an Appointment | SmileCare</title>
                <meta name="description" content="Request a dental appointment online. Quick, easy, and secure booking for new and returning patients." />
            </Helmet>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

                <header className="text-center mb-12">
                    <h1 className="text-3xl md:text-5xl font-extrabold text-secondary-900 mb-4">Book Your <span className="text-primary-600">Appointment</span></h1>
                    <p className="text-lg text-secondary-600">Fill out the form below to request a time. Our team will contact you shortly to confirm your slot.</p>
                </header>

                <section aria-labelledby="booking-form-heading" className="bg-white rounded-3xl shadow-xl overflow-hidden border border-secondary-100 transition-all duration-300">
                    <h2 id="booking-form-heading" className="sr-only">Appointment Booking Form</h2>
                    {status === 'success' ? (
                        <div className="p-12 text-center animate-in fade-in duration-500">
                            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <CheckCircle2 aria-hidden="true" size={40} />
                            </div>
                            <h3 className="text-3xl font-bold text-secondary-900 mb-4">Request Sent Successfully!</h3>
                            <p className="text-secondary-600 mb-8 text-lg max-w-2xl mx-auto">
                                Thank you for requesting an appointment. Our team will review your request and call you shortly to confirm the exact time.
                            </p>
                            <Button onClick={() => setStatus('idle')} variant="outline">Book Another Appointment</Button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="p-8 md:p-10 text-left">

                            {status === 'error' && (
                                <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-xl flex items-start gap-3 text-red-700 animate-in slide-in-from-top-2">
                                    <AlertCircle aria-hidden="true" className="shrink-0 mt-0.5" size={20} />
                                    <div>
                                        <h4 className="font-semibold">Submission Error</h4>
                                        <p className="text-sm">{errorMessage}</p>
                                    </div>
                                </div>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                                {/* Patient Details Section */}
                                <fieldset className="space-y-6">
                                    <legend className="text-xl font-bold text-secondary-900 border-b pb-4 mb-4 w-full">Patient Details</legend>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="firstName" className="block text-sm font-semibold text-secondary-700 mb-2">First Name *</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <User aria-hidden="true" size={18} className="text-secondary-400" />
                                                </div>
                                                <input id="firstName" required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="pl-10 w-full rounded-xl border border-secondary-300 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="John" disabled={status === 'submitting'} />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="lastName" className="block text-sm font-semibold text-secondary-700 mb-2">Last Name *</label>
                                            <div className="relative">
                                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                    <User aria-hidden="true" size={18} className="text-secondary-400" />
                                                </div>
                                                <input id="lastName" required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="pl-10 w-full rounded-xl border border-secondary-300 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="Doe" disabled={status === 'submitting'} />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-semibold text-secondary-700 mb-2">Phone Number *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Phone aria-hidden="true" size={18} className="text-secondary-400" />
                                            </div>
                                            <input id="phone" required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="pl-10 w-full rounded-xl border border-secondary-300 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="(555) 000-0000" disabled={status === 'submitting'} />
                                        </div>
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-secondary-700 mb-2">Email Address</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Mail aria-hidden="true" size={18} className="text-secondary-400" />
                                            </div>
                                            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} className="pl-10 w-full rounded-xl border border-secondary-300 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" placeholder="john@example.com" disabled={status === 'submitting'} />
                                        </div>
                                    </div>
                                </fieldset>

                                {/* Appointment Details Section */}
                                <fieldset className="space-y-6">
                                    <legend className="text-xl font-bold text-secondary-900 border-b pb-4 mb-4 w-full">Appointment Details</legend>

                                    <div>
                                        <label htmlFor="service" className="block text-sm font-semibold text-secondary-700 mb-2">Reason for Visit *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <FileText aria-hidden="true" size={18} className="text-secondary-400" />
                                            </div>
                                            <select id="service" required name="service" value={formData.service} onChange={handleChange} className="pl-10 w-full rounded-xl border border-secondary-300 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all appearance-none bg-white" disabled={status === 'submitting'}>
                                                <option value="" disabled>Select a reason...</option>
                                                <option value="checkup">Routine Checkup & Cleaning</option>
                                                <option value="pain">Tooth Pain / Emergency</option>
                                                <option value="consult">Free Consultation</option>
                                                <option value="whitening">Teeth Whitening</option>
                                                <option value="implants">Dental Implants</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="date" className="block text-sm font-semibold text-secondary-700 mb-2">Preferred Date *</label>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <Calendar aria-hidden="true" size={18} className="text-secondary-400" />
                                            </div>
                                            <input id="date" required type="date" name="date" value={formData.date} onChange={handleChange} className="pl-10 w-full rounded-xl border border-secondary-300 py-3 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all" min={new Date().toISOString().split('T')[0]} disabled={status === 'submitting'} />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="notes" className="block text-sm font-semibold text-secondary-700 mb-2">Additional Notes (Optional)</label>
                                        <textarea
                                            id="notes"
                                            name="notes"
                                            value={formData.notes}
                                            onChange={handleChange}
                                            rows="3"
                                            className="w-full rounded-xl border border-secondary-300 p-4 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                                            placeholder="Any specific concerns or questions..."
                                            disabled={status === 'submitting'}
                                        ></textarea>
                                    </div>
                                </fieldset>
                            </div>

                            <div className="text-center pt-8 border-t border-secondary-100">
                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="lg"
                                    className={`w-full md:w-auto min-w-[240px] ${status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''}`}
                                    disabled={status === 'submitting'}
                                >
                                    {status === 'submitting' ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                                            Processing Request...
                                        </span>
                                    ) : 'Request Appointment'}
                                </Button>
                                <p className="text-sm text-secondary-500 mt-4 max-w-xl mx-auto">
                                    By submitting this form, you agree to our privacy policy regarding the handling of your health information.
                                </p>
                            </div>
                        </form>
                    )}
                </section>
            </div>
        </main>
    );
};

export default Booking;
