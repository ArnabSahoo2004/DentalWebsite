import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { Activity, ArrowLeft, TrendingUp, AlertCircle, Clock, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

const mockLeads = [
    { id: 1, name: "Robert Fox", inquiry: "Emergency Pain", value: 1500, priority: "High", status: "Contacted" },
    { id: 2, name: "Eleanor Pena", inquiry: "Dental Implants", value: 4500, priority: "High", status: "New" },
    { id: 3, name: "Jacob Jones", inquiry: "Invisalign", value: 5000, priority: "Medium", status: "In Progress" },
    { id: 4, name: "Cody Fisher", inquiry: "Routine Cleaning", value: 300, priority: "Low", status: "New" },
    { id: 5, name: "Esther Howard", inquiry: "Dental Implants", value: 4500, priority: "High", status: "Appointment Set" },
    { id: 6, name: "Ralph Edwards", inquiry: "Teeth Whitening", value: 800, priority: "Medium", status: "Contacted" },
];

const StatCard = ({ title, value, subtext }) => (
    <div className="bg-slate-50 p-4 lg:p-6 rounded-2xl border border-secondary-200">
        <p className="text-sm font-medium text-secondary-500 mb-1">{title}</p>
        <h4 className="text-3xl font-bold text-secondary-900">{value}</h4>
        {subtext && <p className="text-xs text-secondary-400 mt-2">{subtext}</p>}
    </div>
);

const LeadScoring = () => {
    // Derived Mock Data
    const totalLeads = 32;
    const highPriority = 9;
    const pipelineValue = 112000;

    const formatCurrency = (val) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(val);

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 md:px-8 font-sans">
            <Helmet>
                <title>Lead Prioritization Intelligence | Demo Hub</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            <div className="max-w-6xl mx-auto">
                <FadeIn>
                    <Link to="/demo-suite" className="inline-flex items-center text-secondary-500 hover:text-primary-600 font-medium mb-8 premium-transition hover:-translate-x-1">
                        <ArrowLeft size={18} className="mr-2" /> Back to Demo Hub
                    </Link>

                    <div className="bg-white rounded-3xl shadow-soft border border-secondary-200 overflow-hidden">
                        {/* Header Section */}
                        <div className="p-6 md:p-8 border-b border-secondary-100 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center shadow-sm">
                                    <Activity size={28} />
                                </div>
                                <div>
                                    <h1 className="text-2xl font-bold text-secondary-900">Lead Prioritization</h1>
                                    <p className="text-secondary-500 mt-1 text-sm">A.I. value calculation & intent scoring</p>
                                </div>
                            </div>

                            {/* Summary Metrics */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <StatCard title="Total Leads" value={totalLeads} subtext="Last 30 Days" />
                                <StatCard title="High Priority" value={highPriority} subtext="Immediate action needed" />
                                <StatCard title="Pipeline Value" value={formatCurrency(pipelineValue)} subtext="Estimated revenue" />
                            </div>
                        </div>

                        {/* Interactive Table Section */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-secondary-50 text-secondary-500 text-sm border-b border-secondary-200">
                                        <th className="py-4 px-6 md:px-8 font-semibold">Lead Name</th>
                                        <th className="py-4 px-6 md:px-8 font-semibold">Inquiry Type</th>
                                        <th className="py-4 px-6 md:px-8 font-semibold hidden sm:table-cell">Estimated Value</th>
                                        <th className="py-4 px-6 md:px-8 font-semibold">Priority Level</th>
                                        <th className="py-4 px-6 md:px-8 font-semibold text-right">Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {mockLeads.map((lead) => {
                                        const isHigh = lead.priority === 'High';
                                        const isMedium = lead.priority === 'Medium';
                                        const isLow = lead.priority === 'Low';

                                        return (
                                            <tr key={lead.id} className="border-b border-secondary-100 hover:bg-slate-50 transition-colors group">
                                                <td className="py-4 px-6 md:px-8 font-medium text-secondary-900">{lead.name}</td>
                                                <td className="py-4 px-6 md:px-8 text-secondary-600 text-sm">{lead.inquiry}</td>
                                                <td className="py-4 px-6 md:px-8 font-semibold text-secondary-800 hidden sm:table-cell">
                                                    {formatCurrency(lead.value)}
                                                </td>
                                                <td className="py-4 px-6 md:px-8">
                                                    <span className={clsx(
                                                        "inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm",
                                                        isHigh && "bg-red-50 text-red-700 border border-red-200",
                                                        isMedium && "bg-orange-50 text-orange-700 border border-orange-200",
                                                        isLow && "bg-blue-50 text-blue-700 border border-blue-200",
                                                    )}>
                                                        {isHigh && <AlertCircle size={12} strokeWidth={3} />}
                                                        {isMedium && <TrendingUp size={12} strokeWidth={3} />}
                                                        {isLow && <Clock size={12} strokeWidth={3} />}
                                                        {lead.priority}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 md:px-8 text-right">
                                                    <span className={clsx(
                                                        "inline-flex items-center gap-1.5 text-xs font-medium",
                                                        lead.status === 'New' && "text-blue-600",
                                                        lead.status === 'Contacted' && "text-orange-500",
                                                        lead.status === 'In Progress' && "text-indigo-500",
                                                        lead.status === 'Appointment Set' && "text-green-600"
                                                    )}>
                                                        {lead.status === 'Appointment Set' && <CheckCircle2 size={14} />}
                                                        {lead.status}
                                                    </span>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default LeadScoring;
