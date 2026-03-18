import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { ShieldCheck, ArrowLeft, Send, CheckCircle2, Clock, XCircle, FileText } from 'lucide-react';
import clsx from 'clsx';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';

const StatCard = ({ title, value, icon, colorClass }) => (
    <div className="bg-slate-50 p-4 lg:p-6 rounded-2xl border border-secondary-200 flex items-center gap-4">
        <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center shrink-0", colorClass)}>
            {icon}
        </div>
        <div>
            <h4 className="text-2xl font-bold text-secondary-900 leading-tight">{value}</h4>
            <p className="text-sm font-medium text-secondary-500">{title}</p>
        </div>
    </div>
);

const InsurancePrecheck = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        patientName: '',
        provider: '',
        memberId: '',
        dob: '',
        treatment: 'Routine Exam & Cleaning'
    });

    // Mock Dashboard Stats
    const pendingCount = 6 + (isSuccess ? 1 : 0);
    const approvedCount = 14;
    const rejectedCount = 2;

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API Processing Delay (1.5s)
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
        }, 1500);
    };

    const resetForm = () => {
        setIsSuccess(false);
        setFormData({
            patientName: '',
            provider: '',
            memberId: '',
            dob: '',
            treatment: 'Routine Exam & Cleaning'
        });
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8 font-sans">
            <Helmet>
                <title>Insurance Pre-Verification | Demo Hub</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="max-w-5xl mx-auto">
                <FadeIn>
                    <Link to="/demo-suite" className="inline-flex items-center text-secondary-500 hover:text-primary-600 font-medium mb-8 premium-transition hover:-translate-x-1">
                        <ArrowLeft size={18} className="mr-2" /> Back to Demo Hub
                    </Link>

                    <div className="bg-white rounded-3xl shadow-soft border border-secondary-200 overflow-hidden mb-8">
                        {/* Header Section */}
                        <div className="p-6 md:p-8 border-b border-secondary-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm">
                                    <ShieldCheck size={28} />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-secondary-900">Insurance Pre-Verification</h1>
                                    <p className="text-secondary-500 mt-1 text-sm">Automated eligibility & benefits breakdown</p>
                                </div>
                            </div>

                            {/* Summary Metrics */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <StatCard
                                    icon={<Clock size={20} />}
                                    title="Pending Verifications"
                                    value={pendingCount}
                                    colorClass="bg-orange-50 text-orange-500"
                                />
                                <StatCard
                                    icon={<CheckCircle2 size={20} />}
                                    title="Approved"
                                    value={approvedCount}
                                    colorClass="bg-green-50 text-green-500"
                                />
                                <StatCard
                                    icon={<XCircle size={20} />}
                                    title="Rejected (Out of Network)"
                                    value={rejectedCount}
                                    colorClass="bg-red-50 text-red-500"
                                />
                            </div>
                        </div>

                        {/* Interactive Form Section */}
                        <div className="p-6 md:p-10 bg-slate-50">
                            <AnimatePresence mode="wait">
                                {isSuccess ? (
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-secondary-200 max-w-2xl mx-auto text-center"
                                    >
                                        <div className="w-20 h-20 bg-green-50 border-2 border-green-200 rounded-full flex items-center justify-center mx-auto mb-6">
                                            <CheckCircle2 size={40} className="text-green-500" />
                                        </div>
                                        <h2 className="text-2xl font-bold text-secondary-900 mb-2">Insurance Details Submitted for Verification</h2>
                                        <p className="text-secondary-600 mb-8 max-w-sm mx-auto">
                                            Evaluating {formData.provider} plan benefits for <strong>{formData.treatment}</strong>.
                                        </p>

                                        <div className="bg-slate-50 border border-secondary-200 rounded-2xl p-6 mb-8 text-left">
                                            <p className="text-xs font-bold text-secondary-400 uppercase tracking-wider mb-4 text-center">A.I. Predictive Estimate</p>
                                            <div className="flex items-center justify-between border-b border-secondary-200 pb-3 mb-3">
                                                <span className="text-sm font-medium text-secondary-600">Patient</span>
                                                <span className="text-sm font-bold text-secondary-900">{formData.patientName}</span>
                                            </div>
                                            <div className="flex items-center justify-between border-b border-secondary-200 pb-3 mb-4">
                                                <span className="text-sm font-medium text-secondary-600">Estimated Coverage Range</span>
                                                <span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">60% – 80%</span>
                                            </div>
                                            <p className="text-xs text-secondary-500 leading-relaxed text-center">
                                                Final verification details will be compiled and sent to the front desk within 2-4 hours.
                                            </p>
                                        </div>

                                        <button
                                            onClick={resetForm}
                                            className="text-sm font-medium text-primary-600 hover:text-primary-700 underline decoration-primary-200 underline-offset-4"
                                        >
                                            Submit Another Patient
                                        </button>
                                    </motion.div>
                                ) : (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        onSubmit={handleSubmit}
                                        className="bg-white rounded-3xl p-8 shadow-sm border border-secondary-200 max-w-3xl mx-auto"
                                    >
                                        <div className="mb-8 border-b border-secondary-100 pb-6 flex items-center gap-3">
                                            <div className="w-10 h-10 bg-secondary-50 rounded-xl flex items-center justify-center text-secondary-500">
                                                <FileText size={20} />
                                            </div>
                                            <div>
                                                <h2 className="text-xl font-bold text-secondary-900">Patient Intake Request</h2>
                                                <p className="text-secondary-500 text-sm">Mock verification entry system.</p>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                            {/* Name */}
                                            <div>
                                                <label className="block text-sm font-bold text-secondary-900 mb-1.5">Patient Name</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.patientName}
                                                    onChange={(e) => setFormData({ ...formData, patientName: e.target.value })}
                                                    placeholder="Jane Doe"
                                                    className="w-full bg-slate-50 border border-secondary-200 rounded-xl px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent premium-transition"
                                                />
                                            </div>

                                            {/* Date of Birth */}
                                            <div>
                                                <label className="block text-sm font-bold text-secondary-900 mb-1.5">Date of Birth</label>
                                                <input
                                                    type="date"
                                                    required
                                                    value={formData.dob}
                                                    onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                                                    className="w-full bg-slate-50 border border-secondary-200 rounded-xl px-4 py-3 text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent premium-transition"
                                                />
                                            </div>

                                            {/* Provider */}
                                            <div className="md:col-span-2">
                                                <label className="block text-sm font-bold text-secondary-900 mb-1.5">Insurance Provider</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.provider}
                                                    onChange={(e) => setFormData({ ...formData, provider: e.target.value })}
                                                    placeholder="Delta Dental, Cigna, MetLife..."
                                                    className="w-full bg-slate-50 border border-secondary-200 rounded-xl px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent premium-transition"
                                                />
                                            </div>

                                            {/* Member ID */}
                                            <div>
                                                <label className="block text-sm font-bold text-secondary-900 mb-1.5">Member ID / Policy #</label>
                                                <input
                                                    type="text"
                                                    required
                                                    value={formData.memberId}
                                                    onChange={(e) => setFormData({ ...formData, memberId: e.target.value })}
                                                    placeholder="XXX-XXXXX-XX"
                                                    className="w-full bg-slate-50 border border-secondary-200 rounded-xl px-4 py-3 text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent premium-transition font-mono text-sm"
                                                />
                                            </div>

                                            {/* Planned Treatment */}
                                            <div>
                                                <label className="block text-sm font-bold text-secondary-900 mb-1.5">Planned Treatment</label>
                                                <select
                                                    value={formData.treatment}
                                                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                                                    className="w-full bg-slate-50 border border-secondary-200 rounded-xl px-4 py-3 text-secondary-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent premium-transition"
                                                >
                                                    <option>Routine Exam & Cleaning</option>
                                                    <option>Dental Implants Eval</option>
                                                    <option>Invisalign Consult</option>
                                                    <option>Root Canal Therapy</option>
                                                    <option>Emergency Extraction</option>
                                                </select>
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center py-4 rounded-xl font-bold text-white bg-indigo-600 hover:bg-indigo-700 premium-transition active:scale-95 disabled:opacity-70 disabled:pointer-events-none"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                            ) : (
                                                <>
                                                    <Send size={18} className="mr-2" /> Verify Benefits Availability
                                                </>
                                            )}
                                        </button>
                                    </motion.form>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                </FadeIn>
            </div>
        </div>
    );
};

export default InsurancePrecheck;
