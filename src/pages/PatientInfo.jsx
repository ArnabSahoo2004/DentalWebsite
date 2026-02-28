import { Helmet } from 'react-helmet-async';
import { CreditCard, CheckCircle2, ShieldAlert } from 'lucide-react';
import Button from '../components/Button';

const PatientInfo = () => {
    return (
        <>
            <Helmet>
                <title>Pricing & Insurance Info | SmileCare</title>
                <meta name="description" content="View our accepted insurances and flexible payment options like CareCredit. Affordable dental care for everyone." />
            </Helmet>

            <section className="bg-primary-50 py-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center border-b border-primary-100 pb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-6">Patient <span className="text-primary-600">Information</span></h1>
                    <p className="text-xl text-secondary-600">
                        We believe that high-quality dental care should be accessible. Discover our accepted insurances and transparent payment plans.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row gap-12">

                    <div className="flex-1">
                        <h2 className="text-3xl font-bold text-secondary-900 mb-6 flex items-center gap-3">
                            <ShieldAlert className="text-primary-600" /> Accepted Insurances
                        </h2>
                        <p className="text-secondary-600 mb-8 max-w-lg leading-relaxed">
                            We are in-network with most major PPO insurance plans. Our team will happily file your claims and help you maximize your annual benefits.
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {['Delta Dental', 'Aetna', 'Cigna', 'MetLife', 'Blue Cross Blue Shield', 'UnitedHealthcare', 'Guardian', 'Humana'].map((insurance, idx) => (
                                <div key={idx} className="flex items-center gap-2 p-3 bg-secondary-50 rounded-lg border border-secondary-100 font-medium text-secondary-800">
                                    <CheckCircle2 size={18} className="text-green-500" /> {insurance}
                                </div>
                            ))}
                        </div>
                        <p className="text-sm text-secondary-500 mt-6 italic">* Don't see your provider? Give us a call, we accept many smaller plans as well.</p>
                    </div>

                    <div className="flex-1">
                        <div className="bg-primary-700 text-white rounded-3xl p-8 shadow-xl">
                            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 border-b border-primary-500 pb-4">
                                <CreditCard /> Flexible Payment Options
                            </h2>
                            <p className="mb-6 text-primary-50 leading-relaxed text-lg">
                                No insurance? No problem. We offer several payment options to fit your budget.
                            </p>
                            <ul className="space-y-4 mb-8">
                                <li className="flex gap-3 text-primary-50">
                                    <span className="font-bold text-accent-400 mt-1">•</span>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">CareCredit®</h3>
                                        <p className="text-sm border-t border-primary-600 mt-2 pt-2">0% interest financing for 6-24 months for qualifying patients.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 text-primary-50">
                                    <span className="font-bold text-accent-400 mt-1">•</span>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">In-House Membership Plan</h3>
                                        <p className="text-sm border-t border-primary-600 mt-2 pt-2">An affordable alternative to insurance covering exams, X-rays, and cleanings.</p>
                                    </div>
                                </li>
                                <li className="flex gap-3 text-primary-50">
                                    <span className="font-bold text-accent-400 mt-1">•</span>
                                    <div>
                                        <h3 className="font-bold text-white text-lg">All Major Credit Cards</h3>
                                        <p className="text-sm border-t border-primary-600 mt-2 pt-2">We accept Visa, MasterCard, Discover, and American Express.</p>
                                    </div>
                                </li>
                            </ul>
                            <Button asLink to="/contact" variant="accent" className="w-full">
                                Learn More About Memberships
                            </Button>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
};

export default PatientInfo;
