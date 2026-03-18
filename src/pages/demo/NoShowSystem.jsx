import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { CalendarX, ArrowLeft, Send, CheckCircle2, Clock, Check, Smartphone, Mail } from 'lucide-react';
import clsx from 'clsx';

const mockAppointments = [
    { id: 1, name: "Sarah Jenkins", date: "Today, 2:30 PM", treatment: "Invisalign Consult", status: "Pending" },
    { id: 2, name: "Michael Chang", date: "Today, 3:15 PM", treatment: "Routine Cleaning", status: "Pending" },
    { id: 3, name: "Emily Thorne", date: "Today, 4:00 PM", treatment: "Root Canal", status: "Confirmed" },
    { id: 4, name: "David Miller", date: "Tomorrow, 9:00 AM", treatment: "Emergency Setup", status: "Pending" },
    { id: 5, name: "Jessica Alba", date: "Tomorrow, 10:30 AM", treatment: "Whitening", status: "Pending" },
];

const StatCard = ({ title, value, subtext }) => (
    <div className="bg-slate-50 p-4 rounded-2xl border border-secondary-200">
        <p className="text-sm font-medium text-secondary-500 mb-1">{title}</p>
        <h4 className="text-2xl font-bold text-secondary-900">{value}</h4>
        {subtext && <p className="text-xs text-secondary-400 mt-1">{subtext}</p>}
    </div>
);

const NoShowSystem = () => {
    const [appointments, setAppointments] = useState(mockAppointments);
    const [loadingId, setLoadingId] = useState(null);
    const [toast, setToast] = useState(null);
    const [activePreview, setActivePreview] = useState(null);

    // Derived Stats
    const totalCount = 18; // Mock broader system total
    const confirmedCount = 14 + appointments.filter(a => a.status === 'Confirmed').length - 1; // Adjust base 14 based on our local array interactions
    const pendingCount = 4 - (appointments.filter(a => a.status === 'Confirmed').length - 1); // Adjust base 4

    const handleSendReminder = (id) => {
        setLoadingId(id);

        // Simulate 1.2s API Delay for sending SMS/Email
        setTimeout(() => {
            const currentApt = appointments.find(a => a.id === id);
            setAppointments(prev => prev.map(apt =>
                apt.id === id ? { ...apt, status: 'Confirmed' } : apt
            ));
            setActivePreview(currentApt);
            setLoadingId(null);
            showToast("Reminder Successfully Sent");
        }, 1200);
    };

    const showToast = (message) => {
        setToast(message);
        setTimeout(() => setToast(null), 3000);
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8 font-sans">
            <Helmet>
                <title>No-Show Prevention | Demo Hub</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="max-w-6xl mx-auto">
                {/* Toast Notification */}
                <div className={clsx(
                    "fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 bg-secondary-900 text-white px-6 py-3 rounded-full shadow-elevated premium-transition",
                    toast ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10 pointer-events-none"
                )}>
                    <CheckCircle2 size={20} className="text-green-400" />
                    <span className="font-medium text-sm">{toast}</span>
                </div>

                <FadeIn>
                    <Link to="/demo-suite" className="inline-flex items-center text-secondary-500 hover:text-primary-600 font-medium mb-8 premium-transition hover:-translate-x-1">
                        <ArrowLeft size={18} className="mr-2" /> Back to Demo Hub
                    </Link>

                    <div className="bg-white rounded-3xl shadow-soft border border-secondary-200 overflow-hidden">
                        {/* Header Section */}
                        <div className="p-6 md:p-8 border-b border-secondary-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center shadow-sm">
                                    <CalendarX size={28} />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-secondary-900">No-Show Prevention System</h1>
                                    <p className="text-secondary-500 mt-1 text-sm">Automated SMS/Email reminders & patient confirmations</p>
                                </div>
                            </div>

                            {/* Summary Cards */}
                            <div className="flex gap-4">
                                <StatCard title="Total Appointments" value={totalCount} subtext="Next 48 Hours" />
                                <StatCard title="Confirmed" value={confirmedCount} subtext="Via SMS link" />
                                <StatCard title="Pending" value={pendingCount} subtext="Requires action" />
                            </div>
                        </div>

                        {/* Interactive Table Section */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-secondary-50 text-secondary-500 text-sm border-b border-secondary-200">
                                        <th className="py-4 px-6 font-semibold">Patient Name</th>
                                        <th className="py-4 px-6 font-semibold">Appointment Date</th>
                                        <th className="py-4 px-6 font-semibold">Treatment</th>
                                        <th className="py-4 px-6 font-semibold">Status</th>
                                        <th className="py-4 px-6 font-semibold text-right">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {appointments.map((apt) => {
                                        const isConfirmed = apt.status === 'Confirmed';
                                        const isPending = apt.status === 'Pending';
                                        const isLoading = loadingId === apt.id;

                                        return (
                                            <tr key={apt.id} className="border-b border-secondary-100 hover:bg-slate-50 transition-colors group">
                                                <td className="py-4 px-6 font-medium text-secondary-900">{apt.name}</td>
                                                <td className="py-4 px-6 text-secondary-600 text-sm">{apt.date}</td>
                                                <td className="py-4 px-6 text-secondary-600 text-sm">{apt.treatment}</td>
                                                <td className="py-4 px-6">
                                                    <span className={clsx(
                                                        "inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium",
                                                        isConfirmed && "bg-green-50 text-green-700 border border-green-200",
                                                        isPending && "bg-orange-50 text-orange-700 border border-orange-200",
                                                    )}>
                                                        {isConfirmed ? <Check size={12} /> : <Clock size={12} />}
                                                        {apt.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-right">
                                                    {isConfirmed ? (
                                                        <span className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-sm font-medium text-secondary-400 bg-secondary-50 cursor-not-allowed">
                                                            Reminded
                                                        </span>
                                                    ) : (
                                                        <button
                                                            onClick={() => handleSendReminder(apt.id)}
                                                            disabled={isLoading}
                                                            className="inline-flex items-center justify-center h-9 px-4 rounded-xl text-sm font-medium text-white bg-primary-600 hover:bg-primary-700 active:scale-95 premium-transition disabled:opacity-70 disabled:pointer-events-none"
                                                        >
                                                            {isLoading ? (
                                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                                                            ) : (
                                                                <>
                                                                    <Send size={14} className="mr-2" />
                                                                    Send Reminder
                                                                </>
                                                            )}
                                                        </button>
                                                    )}
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Visual Communication Mockups */}
                    {activePreview && (
                        <FadeIn key={activePreview.id} delay={0.1}>
                            <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
                                {/* SMS Preview */}
                                <div className="bg-white rounded-3xl p-8 shadow-soft border border-secondary-200">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <Smartphone size={20} />
                                        </div>
                                        <h2 className="text-xl font-bold text-secondary-900">SMS Reminder Preview</h2>
                                    </div>
                                    <div className="bg-slate-100 rounded-[2.5rem] p-4 max-w-[320px] mx-auto border-[8px] border-slate-800 shadow-xl relative h-[500px] flex flex-col">
                                        <div className="absolute top-0 inset-x-0 h-6 bg-slate-800 rounded-b-3xl w-32 mx-auto"></div>
                                        <div className="mt-8 flex-1 overflow-y-auto flex flex-col gap-4">
                                            <div className="text-center text-xs text-slate-400 font-medium my-2">Today 10:30 AM</div>
                                            <div className="bg-blue-500 text-white p-4 rounded-2xl rounded-tl-sm shadow-sm text-sm">
                                                Hi {activePreview.name.split(' ')[0]} 👋 This is BrightSmile Dental.<br /><br />
                                                Reminder: Your {activePreview.treatment} is scheduled for {activePreview.date}.<br /><br />
                                                Reply <strong>YES</strong> to confirm or <strong>RESCHEDULE</strong> to change.<br /><br />
                                                Call (512) 555-0198 if urgent.
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Email Preview */}
                                <div className="bg-white rounded-3xl p-8 shadow-soft border border-secondary-200 flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
                                            <Mail size={20} />
                                        </div>
                                        <h2 className="text-xl font-bold text-secondary-900">Email Reminder Preview</h2>
                                    </div>
                                    <div className="border border-secondary-200 rounded-2xl overflow-hidden shadow-sm h-full max-h-[500px] flex flex-col flex-1">
                                        <div className="bg-secondary-50 px-6 py-4 border-b border-secondary-200">
                                            <p className="text-sm text-secondary-500 mb-1">From: <span className="font-medium text-secondary-900">appointments@brightsmile.demo</span></p>
                                            <p className="text-sm text-secondary-500">Subject: <span className="font-bold text-secondary-900">Appointment Reminder – BrightSmile Dental</span></p>
                                        </div>
                                        <div className="p-8 flex-1 bg-white">
                                            <h3 className="text-lg font-bold text-secondary-900 mb-4">Hello {activePreview.name.split(' ')[0]},</h3>
                                            <p className="text-secondary-600 mb-6 leading-relaxed">
                                                This is a friendly reminder that you have an upcoming appointment with BrightSmile Dental. We are looking forward to seeing you!
                                            </p>
                                            <div className="bg-primary-50 border border-primary-100 rounded-xl p-5 mb-8">
                                                <p className="text-sm font-medium text-primary-800 mb-1">Treatment: {activePreview.treatment}</p>
                                                <p className="text-lg font-bold text-primary-900">{activePreview.date}</p>
                                            </div>
                                            <div className="flex gap-4">
                                                <div className="bg-primary-600 text-white px-6 py-2.5 rounded-xl font-medium text-sm text-center flex-1 py-3 cursor-default shadow-sm">
                                                    Confirm
                                                </div>
                                                <div className="bg-white border border-secondary-200 text-secondary-600 px-6 py-2.5 rounded-xl font-medium text-sm text-center flex-1 py-3 cursor-default">
                                                    Reschedule
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-slate-50 p-6 border-t border-secondary-100 text-center text-xs text-secondary-500">
                                            <p className="font-medium text-secondary-900 mb-1">BrightSmile Dental Clinic</p>
                                            <p>123 Austin Ave, Austin, TX 78701 • (512) 555-0198</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    )}
                </FadeIn>
            </div>
        </div>
    );
};

export default NoShowSystem;
