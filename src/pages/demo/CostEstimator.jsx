import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { DollarSign, ArrowLeft, Mail, CheckCircle2, Info, ChevronDown, Check } from 'lucide-react';
import clsx from 'clsx';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const treatments = {
    "Dental Implants": { min: 3000, max: 4500 },
    "Invisalign": { min: 4000, max: 5500 },
    "Teeth Whitening": { min: 300, max: 500 },
    "Root Canal": { min: 800, max: 1500 },
};

const addonPrices = {
    "Sedation": 500,
    "X-rays": 150,
    "Consultation": 100,
};

const CostEstimator = () => {
    const [treatment, setTreatment] = useState("Dental Implants");
    const [hasInsurance, setInsurance] = useState(false);
    const [addons, setAddons] = useState({
        "Sedation": false,
        "X-rays": false,
        "Consultation": true,
    });

    const [isEmailing, setIsEmailing] = useState(false);
    const [emailSuccess, setEmailSuccess] = useState(false);

    // Calculations
    const baseMin = treatments[treatment].min;
    const baseMax = treatments[treatment].max;

    const addonTotal = Object.entries(addons).reduce((total, [key, isSelected]) => {
        return isSelected ? total + addonPrices[key] : total;
    }, 0);

    const insuranceMultiplier = hasInsurance ? 0.6 : 1; // 40% coverage mock extrapolation

    const finalMin = (baseMin + addonTotal) * insuranceMultiplier;
    const finalMax = (baseMax + addonTotal) * insuranceMultiplier;
    const monthlyEstimate = Math.round(finalMin / 24); // mock 24 month financing

    const handleToggleAddon = (key) => {
        setAddons(prev => ({ ...prev, [key]: !prev[key] }));
    };

    const handleEmailEstimate = () => {
        if (isEmailing || emailSuccess) return;
        setIsEmailing(true);
        setTimeout(() => {
            setIsEmailing(false);
            setEmailSuccess(true);
            setTimeout(() => setEmailSuccess(false), 3000);
        }, 1200);
    };

    // Currency Formatting Util
    const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8 font-sans">
            <Helmet>
                <title>Smart Cost Estimator | Demo Hub</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Action Toast Notification */}
            <div className={clsx(
                "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-secondary-900 text-white px-6 py-3 rounded-full shadow-elevated premium-transition",
                emailSuccess ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
            )}>
                <CheckCircle2 size={20} className="text-green-400" />
                <span className="font-medium text-sm">Detailed estimate sent to your email!</span>
            </div>

            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <Link to="/demo-suite" className="inline-flex items-center text-secondary-500 hover:text-primary-600 font-medium mb-8 premium-transition hover:-translate-x-1">
                        <ArrowLeft size={18} className="mr-2" /> Back to Demo Hub
                    </Link>

                    <div className="bg-white rounded-3xl shadow-soft border border-secondary-200 overflow-hidden">
                        {/* Header Section */}
                        <div className="p-6 md:p-8 border-b border-secondary-100 flex items-center gap-4 bg-white">
                            <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shadow-sm">
                                <DollarSign size={28} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-secondary-900">Smart Cost Estimator</h1>
                                <p className="text-secondary-500 mt-1 text-sm">Real-time out-of-pocket estimations</p>
                            </div>
                        </div>

                        {/* Interactive Calculator Body */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 max-w-full">

                            {/* Inputs Configuration Column */}
                            <div className="lg:col-span-7 p-6 md:p-10 bg-white border-b lg:border-b-0 lg:border-r border-secondary-100">
                                <div className="space-y-8">

                                    {/* Treatment Dropdown Selection */}
                                    <div>
                                        <label className="block text-sm font-bold text-secondary-900 mb-2">Select Treatment</label>
                                        <div className="relative">
                                            <select
                                                value={treatment}
                                                onChange={(e) => setTreatment(e.target.value)}
                                                className="w-full appearance-none bg-secondary-50 border border-secondary-200 text-secondary-900 font-medium rounded-xl px-4 py-3.5 outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent premium-transition cursor-pointer"
                                            >
                                                {Object.keys(treatments).map(t => (
                                                    <option key={t} value={t}>{t}</option>
                                                ))}
                                            </select>
                                            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-secondary-400 pointer-events-none">
                                                <ChevronDown size={20} />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Insurance Logical Toggle */}
                                    <div>
                                        <label className="block text-sm font-bold text-secondary-900 mb-3">Do you have dental insurance?</label>
                                        <div className="flex bg-secondary-50 p-1 rounded-xl border border-secondary-200 w-full sm:w-80">
                                            <button
                                                onClick={() => setInsurance(true)}
                                                className={clsx(
                                                    "flex-1 py-2 text-sm font-medium rounded-lg premium-transition",
                                                    hasInsurance ? "bg-white text-primary-600 shadow-sm" : "text-secondary-500 hover:text-secondary-700"
                                                )}
                                            >
                                                Yes, I have insurance
                                            </button>
                                            <button
                                                onClick={() => setInsurance(false)}
                                                className={clsx(
                                                    "flex-1 py-2 text-sm font-medium rounded-lg premium-transition",
                                                    !hasInsurance ? "bg-white text-secondary-900 shadow-sm" : "text-secondary-500 hover:text-secondary-700"
                                                )}
                                            >
                                                No / Not sure
                                            </button>
                                        </div>
                                        {hasInsurance && (
                                            <FadeIn>
                                                <p className="text-xs text-primary-600 mt-3 flex items-center gap-1.5 font-medium bg-primary-50 inline-flex px-3 py-1.5 rounded-lg">
                                                    <Info size={14} /> Algorithm assuming an average ~40% network coverage bracket.
                                                </p>
                                            </FadeIn>
                                        )}
                                    </div>

                                    {/* Optional Add-ons Checkboxes */}
                                    <div>
                                        <label className="block text-sm font-bold text-secondary-900 mb-3">Optional Add-ons</label>
                                        <div className="space-y-3">
                                            {Object.entries(addons).map(([key, isSelected]) => (
                                                <label key={key} className="flex items-center gap-3 cursor-pointer group">
                                                    <div className={clsx(
                                                        "w-5 h-5 rounded border flex items-center justify-center premium-transition",
                                                        isSelected ? "bg-primary-600 border-primary-600 text-white" : "bg-white border-secondary-300 group-hover:border-primary-400"
                                                    )}>
                                                        {isSelected && <Check size={14} strokeWidth={3} />}
                                                    </div>
                                                    <input
                                                        type="checkbox"
                                                        className="hidden"
                                                        checked={isSelected}
                                                        onChange={() => handleToggleAddon(key)}
                                                    />
                                                    <span className="text-secondary-700 font-medium select-none">{key}</span>
                                                    <span className="ml-auto text-secondary-400 text-sm font-medium">+{formatCurrency(addonPrices[key])}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                </div>
                            </div>

                            {/* Live Output/Summary Column */}
                            <div className="lg:col-span-5 bg-slate-50 p-6 md:p-10 flex flex-col justify-center border-l lg:border-t-0 border-t border-secondary-100">
                                <div className="bg-white rounded-2xl shadow-sm border border-secondary-200 p-6 md:p-8">
                                    <h3 className="text-xs font-bold uppercase tracking-widest text-secondary-400 mb-6 text-center">Estimated Investment</h3>

                                    <div className="text-center mb-8 relative">
                                        <AnimatePresence mode="popLayout">
                                            <motion.div
                                                key={`${finalMin}-${finalMax}`}
                                                initial={{ opacity: 0, scale: 0.95, y: -5 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                className="text-4xl md:text-5xl font-bold text-secondary-900 tracking-tight"
                                            >
                                                {formatCurrency(finalMin)} <span className="text-2xl text-secondary-400 font-medium tracking-normal align-middle mx-1">to</span> {formatCurrency(finalMax)}
                                            </motion.div>
                                        </AnimatePresence>
                                        <p className="text-xs font-medium text-secondary-400 mt-3">— Includes all selected add-ons —</p>
                                    </div>

                                    <div className="space-y-4 mb-8 border-t border-b border-secondary-100 py-6">
                                        <div className="flex justify-between items-center text-sm">
                                            <span className="text-secondary-500">Base {treatment}</span>
                                            <span className="font-medium text-secondary-900">{formatCurrency(baseMin)} - {formatCurrency(baseMax)}</span>
                                        </div>
                                        {addonTotal > 0 && (
                                            <div className="flex justify-between items-center text-sm">
                                                <span className="text-secondary-500">Selected Add-ons</span>
                                                <span className="font-medium text-secondary-900">+{formatCurrency(addonTotal)}</span>
                                            </div>
                                        )}
                                        {hasInsurance && (
                                            <div className="flex justify-between items-center text-sm text-green-600 font-medium">
                                                <span>Estimated Insurance Savings</span>
                                                <span>- 40%</span>
                                            </div>
                                        )}
                                    </div>

                                    <div className="bg-primary-50 rounded-xl p-5 mb-8 border border-primary-100">
                                        <p className="text-xs font-bold uppercase tracking-wider text-primary-800/70 mb-1">Flexible Financing</p>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-sm font-semibold text-primary-700">From</span>
                                            <AnimatePresence mode="popLayout">
                                                <motion.span
                                                    key={monthlyEstimate}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    className="text-3xl font-bold text-primary-900"
                                                >
                                                    {formatCurrency(monthlyEstimate)}
                                                </motion.span>
                                            </AnimatePresence>
                                            <span className="text-sm font-semibold text-primary-700">/mo for 24 mos</span>
                                        </div>
                                    </div>

                                    <button
                                        onClick={handleEmailEstimate}
                                        disabled={isEmailing || emailSuccess}
                                        className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white font-semibold py-4 px-6 rounded-xl hover:bg-primary-700 active:scale-95 premium-transition disabled:opacity-70 disabled:pointer-events-none group"
                                    >
                                        {isEmailing ? (
                                            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                        ) : emailSuccess ? (
                                            <>
                                                <CheckCircle2 size={18} /> Sent Successfully
                                            </>
                                        ) : (
                                            <>
                                                <Mail size={18} className="group-hover:-translate-y-0.5 premium-transition" />
                                                Email Me This Estimate
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default CostEstimator;
