import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ShieldCheck, ArrowLeft, Check, UserPlus, CheckCircle2, DollarSign, Users } from 'lucide-react';
import clsx from 'clsx';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const plans = [
    {
        id: 'basic',
        name: "Basic Care",
        price: "$299",
        period: "/year",
        color: "blue",
        savings: "Save $120/yr",
        benefits: [
            "2 Routine Cleanings",
            "2 Professional Exams",
            "Annual X-Rays included",
            "10% off other treatments"
        ]
    },
    {
        id: 'family',
        name: "Family Plan",
        price: "$499",
        period: "/year",
        color: "primary",
        savings: "Save $350/yr",
        popular: true,
        benefits: [
            "Covers 2 Adults + 2 Kids",
            "2 Routine Cleanings per person",
            "2 Professional Exams per person",
            "Annual X-Rays included",
            "15% off other treatments"
        ]
    },
    {
        id: 'premium',
        name: "Premium Care",
        price: "$799",
        period: "/year",
        color: "indigo",
        savings: "Save $500/yr",
        benefits: [
            "4 Perio Maintenance Cleanings",
            "2 Comprehensive Exams",
            "All necessary X-Rays",
            "1 Free Teeth Whitening session",
            "20% off all other treatments"
        ]
    }
];

const StatCard = ({ title, value, subtext, icon }) => (
    <div className="bg-slate-50 p-4 lg:p-6 rounded-2xl border border-secondary-200">
        <div className="flex items-center gap-2 mb-2">
            {icon}
            <p className="text-sm font-medium text-secondary-500">{title}</p>
        </div>
        <h4 className="text-3xl font-bold text-secondary-900">{value}</h4>
        {subtext && <p className="text-xs text-secondary-400 mt-2">{subtext}</p>}
    </div>
);

const MembershipSystem = () => {
    const [activeMember, setActiveMember] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Form State
    const [formData, setFormData] = useState({ name: '', email: '' });

    // Mock Dashboard Stats
    const activeMembersCount = 126 + (activeMember ? 1 : 0);
    const recurringRevenue = 37674 + (activeMember && selectedPlan ? parseInt(selectedPlan.price.replace('$', '')) : 0);
    const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    const handleJoinClick = (plan) => {
        setSelectedPlan(plan);
        setActiveMember(false); // Reset if re-selecting
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API Processing Delay (1.5s)
        setTimeout(() => {
            setIsSubmitting(false);
            setActiveMember(true);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8 font-sans">
            <Helmet>
                <title>Membership Management | Demo Hub</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <Link to="/demo-suite" className="inline-flex items-center text-secondary-500 hover:text-primary-600 font-medium mb-8 premium-transition hover:-translate-x-1">
                        <ArrowLeft size={18} className="mr-2" /> Back to Demo Hub
                    </Link>

                    <div className="bg-white rounded-3xl shadow-soft border border-secondary-200 overflow-hidden mb-8">
                        {/* Header & Dashboard Stats */}
                        <div className="p-6 md:p-8 border-b border-secondary-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shadow-sm">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-secondary-900">Membership Management</h1>
                                    <p className="text-secondary-500 mt-1 text-sm">Recurring revenue & patient retention system</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <StatCard
                                    icon={<Users size={16} className="text-blue-500" />}
                                    title="Active Members"
                                    value={activeMembersCount}
                                    subtext="+12% this month"
                                />
                                <StatCard
                                    icon={<DollarSign size={16} className="text-green-500" />}
                                    title="Recurring Revenue"
                                    value={formatCurrency(recurringRevenue)}
                                    subtext="Annualized projections"
                                />
                            </div>
                        </div>

                        {/* Interactive Plan Tiers */}
                        <div className="p-6 md:p-10 bg-slate-50">
                            <div className="text-center mb-10">
                                <h2 className="text-3xl font-bold text-secondary-900 mb-3">Subscription Plans</h2>
                                <p className="text-secondary-500">Provide uninsured patients with predictable, affordable care.</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                                {plans.map((plan) => (
                                    <div
                                        key={plan.id}
                                        className={clsx(
                                            "relative bg-white rounded-3xl p-8 border-2 premium-transition flex flex-col h-full",
                                            plan.popular ? "border-primary-500 shadow-elevated md:-translate-y-4" : "border-secondary-200 shadow-sm",
                                            selectedPlan?.id === plan.id && !activeMember && "ring-4 ring-primary-100"
                                        )}
                                    >
                                        {plan.popular && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                                                MOST POPULAR
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <h3 className="text-xl font-bold text-secondary-900 mb-2">{plan.name}</h3>
                                            <div className="flex items-baseline gap-1">
                                                <span className="text-4xl font-bold text-secondary-900">{plan.price}</span>
                                                <span className="text-secondary-500 font-medium">{plan.period}</span>
                                            </div>
                                            <div className="mt-3 inline-block bg-green-50 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold border border-green-200">
                                                {plan.savings}
                                            </div>
                                        </div>

                                        <ul className="space-y-4 mb-8 flex-1">
                                            {plan.benefits.map((benefit, i) => (
                                                <li key={i} className="flex items-start gap-3">
                                                    <Check size={18} className={clsx(
                                                        "mt-0.5 shrink-0",
                                                        plan.popular ? "text-primary-500" : "text-green-500"
                                                    )} />
                                                    <span className="text-secondary-600 text-sm leading-tight">{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        <button
                                            onClick={() => handleJoinClick(plan)}
                                            className={clsx(
                                                "w-full py-4 rounded-xl font-bold text-sm premium-transition active:scale-95",
                                                plan.popular ? "bg-primary-600 text-white hover:bg-primary-700 shadow-md" : "bg-slate-100 text-secondary-700 hover:bg-slate-200"
                                            )}
                                        >
                                            Select Plan
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* Member Registration Wizard */}
                    <AnimatePresence mode="wait">
                        {selectedPlan && (
                            <motion.div
                                key="signup-form"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="bg-white rounded-3xl shadow-soft border border-secondary-200 p-8 md:p-12 max-w-2xl mx-auto text-center relative overflow-hidden"
                            >
                                {activeMember ? (
                                    <motion.div
                                        initial={{ scale: 0.9, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 1 }}
                                        className="flex flex-col items-center"
                                    >
                                        <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mb-6 shadow-sm">
                                            <CheckCircle2 size={40} className="text-green-500" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-secondary-900 mb-2">Welcome to BrightSmile!</h2>
                                        <p className="text-secondary-600 mb-8 max-w-sm">
                                            {formData.name || 'Your'} membership for the <strong>{selectedPlan.name}</strong> is now officially active.
                                        </p>

                                        <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-6 py-3 rounded-full font-bold border border-indigo-200">
                                            <ShieldCheck size={20} /> Active Member Status
                                        </div>
                                    </motion.div>
                                ) : (
                                    <form onSubmit={handleFormSubmit} className="text-left flex flex-col">
                                        <div className="mb-8 text-center">
                                            <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-50 text-primary-600 rounded-xl mb-4">
                                                <UserPlus size={24} />
                                            </div>
                                            <h2 className="text-2xl font-bold text-secondary-900">Complete Registration</h2>
                                            <p className="text-secondary-500 text-sm mt-1">Enroll in the {selectedPlan.name} ({selectedPlan.price}/yr)</p>
                                        </div>

                                        <div className="space-y-5 mb-8">
                                            <div>
                                                <label className="block text-sm font-bold text-secondary-900 mb-1.5">Full Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.name}
                                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    placeholder="John Doe"
                                                    className="w-full bg-slate-50 border border-secondary-200 rounded-xl px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent premium-transition"
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-bold text-secondary-900 mb-1.5">Email Address</label>
                                                <input
                                                    type="email"
                                                    required
                                                    value={formData.email}
                                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    placeholder="john@example.com"
                                                    className="w-full bg-slate-50 border border-secondary-200 rounded-xl px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent premium-transition"
                                                />
                                            </div>

                                            {/* Mock Credit Card Field */}
                                            <div>
                                                <label className="block text-sm font-bold text-secondary-900 mb-1.5">Payment Method</label>
                                                <div className="w-full bg-slate-50 border border-secondary-200 rounded-xl px-4 py-3 text-secondary-400 font-mono text-sm flex items-center justify-between cursor-not-allowed">
                                                    <span>•••• •••• •••• 4242</span>
                                                    <span>12/26</span>
                                                </div>
                                                <p className="text-xs text-secondary-400 mt-2 text-center">Payment secured by Stripe. (This is a mock form)</p>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center py-4 rounded-xl font-bold text-white bg-primary-600 hover:bg-primary-700 premium-transition active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            ) : (
                                                `Pay ${selectedPlan.price} & Subscribe`
                                            )}
                                        </button>
                                    </form>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>

                </FadeIn>
            </div>
        </div>
    );
};

export default MembershipSystem;
