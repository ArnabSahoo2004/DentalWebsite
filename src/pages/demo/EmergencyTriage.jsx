import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { HeartPulse, ArrowLeft, AlertCircle, Phone, CalendarPlus, Clock, Stethoscope, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const EmergencyTriage = () => {
    const [step, setStep] = useState(1);

    // Triage Answers State
    const [answers, setAnswers] = useState({
        pain: null,
        swelling: null,
        bleeding: null
    });

    const handleAnswer = (field, value) => {
        setAnswers(prev => ({ ...prev, [field]: value }));

        // Progress to next step or result
        setTimeout(() => {
            setStep(prev => prev + 1);
        }, 400); // slight delay for animation
    };

    const resetTriage = () => {
        setStep(1);
        setAnswers({ pain: null, swelling: null, bleeding: null });
    };

    // Derived Logic for Results View
    const getResult = () => {
        const { pain, swelling, bleeding } = answers;

        // Urgent Logic
        if (bleeding === 'Yes' || (pain === 'Yes' && swelling === 'Yes')) {
            return {
                type: 'urgent',
                color: 'red',
                title: 'Immediate Attention Required',
                subtitle: 'Same-Day Visit Recommended',
                desc: 'Based on your symptoms, we strongly recommend having a dentist evaluate your condition immediately to prevent further complications.',
                icon: <AlertCircle size={40} className="text-red-500" />
            };
        }

        // Moderate Logic
        if (pain === 'Yes' || swelling === 'Yes') {
            return {
                type: 'moderate',
                color: 'orange',
                title: 'Schedule Within 24 Hours',
                subtitle: 'Priority Evaluation Needed',
                desc: 'Your symptoms indicate a possible emerging issue. Please contact us to schedule a priority evaluation within the next 24 hours.',
                icon: <Clock size={40} className="text-orange-500" />
            };
        }

        // Mild Logic
        return {
            type: 'mild',
            color: 'blue',
            title: 'Book a Routine Evaluation',
            subtitle: 'Non-Emergency Symptom Profile',
            desc: 'Your symptoms do not appear to require emergency intervention, but we recommend scheduling a standard evaluation to ensure your oral health.',
            icon: <Stethoscope size={40} className="text-blue-500" />
        };
    };

    const currentResult = step > 3 ? getResult() : null;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8 font-sans">
            <Helmet>
                <title>Emergency Triage Wizard | Demo Hub</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="max-w-3xl mx-auto">
                <FadeIn>
                    <Link to="/demo-suite" className="inline-flex items-center text-secondary-500 hover:text-primary-600 font-medium mb-8 premium-transition hover:-translate-x-1">
                        <ArrowLeft size={18} className="mr-2" /> Back to Demo Hub
                    </Link>

                    <div className="bg-white rounded-3xl shadow-soft border border-secondary-200 overflow-hidden">
                        {/* Header Section */}
                        <div className="p-6 md:p-8 border-b border-secondary-100 flex items-center gap-4 bg-white relative">
                            <div className="w-14 h-14 rounded-2xl bg-red-50 text-red-500 flex items-center justify-center shadow-sm">
                                <HeartPulse size={28} />
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-secondary-900">Virtual Triage Wizard</h1>
                                <p className="text-secondary-500 mt-1 text-sm">A.I. preliminary symptom assessment</p>
                            </div>

                            {/* Progress Bar Header */}
                            {step <= 3 && (
                                <div className="absolute bottom-0 left-0 h-1 bg-red-500 transition-all duration-500 ease-out"
                                    style={{ width: `${(step / 3) * 100}%` }}>
                                </div>
                            )}
                        </div>

                        {/* Wizard Content Body */}
                        <div className="p-6 md:p-10 bg-slate-50 min-h-[400px] flex flex-col justify-center relative overflow-hidden">
                            <AnimatePresence mode="wait">

                                {/* Step 1: Pain */}
                                {step === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-xl mx-auto w-full text-center"
                                    >
                                        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">Question 1 of 3</h2>
                                        <h3 className="text-3xl font-bold text-secondary-900 mb-10">Are you experiencing severe, unmanageable pain?</h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <button
                                                onClick={() => handleAnswer('pain', 'Yes')}
                                                className={clsx(
                                                    "py-5 px-6 rounded-2xl border-2 text-lg font-bold premium-transition",
                                                    answers.pain === 'Yes' ? "border-red-500 bg-red-50 text-red-600" : "border-slate-200 bg-white text-secondary-700 hover:border-red-300 hover:bg-slate-50"
                                                )}
                                            >
                                                Yes, severe pain
                                            </button>
                                            <button
                                                onClick={() => handleAnswer('pain', 'No')}
                                                className={clsx(
                                                    "py-5 px-6 rounded-2xl border-2 text-lg font-bold premium-transition",
                                                    answers.pain === 'No' ? "border-primary-500 bg-primary-50 text-primary-600" : "border-slate-200 bg-white text-secondary-700 hover:border-primary-300 hover:bg-slate-50"
                                                )}
                                            >
                                                No, mild/none
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 2: Swelling */}
                                {step === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-xl mx-auto w-full text-center"
                                    >
                                        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">Question 2 of 3</h2>
                                        <h3 className="text-3xl font-bold text-secondary-900 mb-10">Is there any visible swelling in your face, gums, or jaw?</h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <button
                                                onClick={() => handleAnswer('swelling', 'Yes')}
                                                className={clsx(
                                                    "py-5 px-6 rounded-2xl border-2 text-lg font-bold premium-transition",
                                                    answers.swelling === 'Yes' ? "border-red-500 bg-red-50 text-red-600" : "border-slate-200 bg-white text-secondary-700 hover:border-red-300 hover:bg-slate-50"
                                                )}
                                            >
                                                Yes, visible swelling
                                            </button>
                                            <button
                                                onClick={() => handleAnswer('swelling', 'No')}
                                                className={clsx(
                                                    "py-5 px-6 rounded-2xl border-2 text-lg font-bold premium-transition",
                                                    answers.swelling === 'No' ? "border-primary-500 bg-primary-50 text-primary-600" : "border-slate-200 bg-white text-secondary-700 hover:border-primary-300 hover:bg-slate-50"
                                                )}
                                            >
                                                No swelling
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Step 3: Bleeding */}
                                {step === 3 && (
                                    <motion.div
                                        key="step3"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-xl mx-auto w-full text-center"
                                    >
                                        <h2 className="text-sm font-bold tracking-widest text-slate-400 uppercase mb-4">Question 3 of 3</h2>
                                        <h3 className="text-3xl font-bold text-secondary-900 mb-10">Are you experiencing continuous or severe bleeding?</h3>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <button
                                                onClick={() => handleAnswer('bleeding', 'Yes')}
                                                className={clsx(
                                                    "py-5 px-6 rounded-2xl border-2 text-lg font-bold premium-transition",
                                                    answers.bleeding === 'Yes' ? "border-red-500 bg-red-50 text-red-600" : "border-slate-200 bg-white text-secondary-700 hover:border-red-300 hover:bg-slate-50"
                                                )}
                                            >
                                                Yes, continuous bleeding
                                            </button>
                                            <button
                                                onClick={() => handleAnswer('bleeding', 'No')}
                                                className={clsx(
                                                    "py-5 px-6 rounded-2xl border-2 text-lg font-bold premium-transition",
                                                    answers.bleeding === 'No' ? "border-primary-500 bg-primary-50 text-primary-600" : "border-slate-200 bg-white text-secondary-700 hover:border-primary-300 hover:bg-slate-50"
                                                )}
                                            >
                                                No bleeding
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                                {/* Results View */}
                                {step > 3 && currentResult && (
                                    <motion.div
                                        key="results"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-full max-w-2xl mx-auto"
                                    >
                                        <div className={clsx(
                                            "bg-white rounded-3xl p-8 md:p-10 shadow-elevated border-2 text-center relative overflow-hidden",
                                            currentResult.color === 'red' && "border-red-200",
                                            currentResult.color === 'orange' && "border-orange-200",
                                            currentResult.color === 'blue' && "border-blue-200"
                                        )}>
                                            {/* Decorative Background Blob */}
                                            <div className={clsx(
                                                "absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-20 pointer-events-none",
                                                currentResult.color === 'red' && "bg-red-500",
                                                currentResult.color === 'orange' && "bg-orange-500",
                                                currentResult.color === 'blue' && "bg-blue-500"
                                            )} />

                                            <div className={clsx(
                                                "w-20 h-20 rounded-2xl mx-auto flex items-center justify-center mb-6 shadow-sm",
                                                currentResult.color === 'red' && "bg-red-50",
                                                currentResult.color === 'orange' && "bg-orange-50",
                                                currentResult.color === 'blue' && "bg-blue-50"
                                            )}>
                                                {currentResult.icon}
                                            </div>

                                            <h2 className={clsx(
                                                "text-3xl md:text-4xl font-bold tracking-tight mb-3",
                                                currentResult.color === 'red' && "text-red-600",
                                                currentResult.color === 'orange' && "text-orange-600",
                                                currentResult.color === 'blue' && "text-blue-600"
                                            )}>
                                                {currentResult.title}
                                            </h2>

                                            <div className="inline-block bg-slate-100 px-4 py-1.5 rounded-full text-secondary-700 font-bold text-sm mb-6">
                                                {currentResult.subtitle}
                                            </div>

                                            <p className="text-secondary-600 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                                                {currentResult.desc}
                                            </p>

                                            <div className="flex flex-col sm:flex-row justify-center gap-4">
                                                <button className={clsx(
                                                    "flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-white premium-transition hover:shadow-lg active:scale-95",
                                                    currentResult.color === 'red' && "bg-red-600 hover:bg-red-700 shadow-red-200",
                                                    currentResult.color === 'orange' && "bg-orange-500 hover:bg-orange-600 shadow-orange-200",
                                                    currentResult.color === 'blue' && "bg-blue-600 hover:bg-blue-700 shadow-blue-200"
                                                )}>
                                                    <Phone size={20} /> Call Now
                                                </button>
                                                <button className="flex items-center justify-center gap-2 py-4 px-8 rounded-xl font-bold text-secondary-700 bg-white border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 premium-transition active:scale-95">
                                                    <CalendarPlus size={20} /> Request Appointment
                                                </button>
                                            </div>

                                            <button
                                                onClick={resetTriage}
                                                className="mt-8 text-sm font-medium text-slate-400 hover:text-slate-600 premium-transition underline decoration-slate-300 underline-offset-4"
                                            >
                                                Start Over
                                            </button>
                                        </div>
                                    </motion.div>
                                )}

                            </AnimatePresence>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default EmergencyTriage;
