import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { Activity, LayoutDashboard, Users, Settings, LogOut, Search, MoreVertical, Phone, Mail, UserPlus, Filter } from 'lucide-react';
import clsx from 'clsx';

const mockPatients = [
    { id: 'P-1042', name: 'Sarah Jenkins', age: 34, lastVisit: 'Oct 12, 2023', nextAppointment: 'Apr 14, 2024', status: 'Active', balance: '$0.00' },
    { id: 'P-1043', name: 'Michael Chen', age: 45, lastVisit: 'Nov 05, 2023', nextAppointment: 'Pending', status: 'Inactive', balance: '$120.50' },
    { id: 'P-1044', name: 'Emily Rodriguez', age: 28, lastVisit: 'Jan 15, 2024', nextAppointment: 'Jul 20, 2024', status: 'Active', balance: '$0.00' },
    { id: 'P-1045', name: 'James Wilson', age: 52, lastVisit: 'Feb 02, 2024', nextAppointment: 'Mar 10, 2024', status: 'Treatment Plan', balance: '$850.00' },
    { id: 'P-1046', name: 'Olivia Taylor', age: 31, lastVisit: 'Dec 18, 2023', nextAppointment: 'Jun 22, 2024', status: 'Active', balance: '$45.00' },
    { id: 'P-1047', name: 'David Martinez', age: 60, lastVisit: 'Sep 30, 2023', nextAppointment: 'Pending', status: 'Inactive', balance: '$0.00' },
    { id: 'P-1048', name: 'Sophia Anderson', age: 25, lastVisit: 'Feb 20, 2024', nextAppointment: 'Aug 25, 2024', status: 'Active', balance: '$0.00' },
];

const DemoPatients = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = mockPatients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()) || p.id.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
            <Helmet>
                <title>Patients Directory | Demo Hub</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>

            {/* Sidebar Navigation */}
            <aside className="w-full md:w-64 bg-white border-r border-secondary-200 flex-shrink-0 flex flex-col">
                <div className="h-16 flex items-center px-6 border-b border-secondary-100">
                    <Link to="/" className="text-xl font-bold text-secondary-900 tracking-tight flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center">
                            <Activity size={18} />
                        </div>
                        Bright<span className="text-primary-600">Smile</span>
                    </Link>
                </div>

                <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
                    <div className="text-xs font-semibold text-secondary-400 uppercase tracking-wider mb-2 px-2 mt-4">Main Menu</div>
                    <Link to="/demo-suite" className="flex items-center gap-3 px-3 py-2.5 text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 rounded-xl font-medium transition-colors">
                        <LayoutDashboard size={18} />
                        Dashboard
                    </Link>
                    <Link to="/demo-patients" className="flex items-center gap-3 px-3 py-2.5 bg-primary-50 text-primary-700 rounded-xl font-medium">
                        <Users size={18} />
                        Patients
                    </Link>
                    <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 rounded-xl font-medium transition-colors">
                        <Activity size={18} />
                        Analytics
                    </Link>

                    <div className="text-xs font-semibold text-secondary-400 uppercase tracking-wider mb-2 px-2 mt-8">System Configuration</div>
                    <Link to="#" className="flex items-center gap-3 px-3 py-2.5 text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 rounded-xl font-medium transition-colors cursor-not-allowed opacity-50">
                        <Settings size={18} />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-secondary-100">
                    <div className="flex items-center gap-3 px-3 py-2.5 text-secondary-500 hover:bg-red-50 hover:text-red-600 rounded-xl font-medium transition-colors cursor-not-allowed opacity-50">
                        <LogOut size={18} />
                        Exit Demo
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto w-full">
                <div className="p-6 md:p-8 lg:p-10 max-w-7xl mx-auto">
                    <FadeIn>
                        <header className="mb-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-bold text-secondary-900 tracking-tight mb-2">Patient Directory</h1>
                                <p className="text-secondary-500">Manage patient records, appointments, and billing.</p>
                            </div>
                            <button className="flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-5 py-2.5 rounded-xl font-semibold premium-transition shadow-sm active:scale-95">
                                <UserPlus size={18} /> New Patient
                            </button>
                        </header>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="bg-white rounded-3xl shadow-soft border border-secondary-200 overflow-hidden">

                            {/* Toolbar */}
                            <div className="p-4 md:p-6 border-b border-secondary-100 flex flex-col sm:flex-row gap-4 justify-between items-center bg-white">
                                <div className="relative w-full sm:w-96">
                                    <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary-400" />
                                    <input
                                        type="text"
                                        placeholder="Search by name or ID..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-slate-50 border border-secondary-200 rounded-xl pl-11 pr-4 py-2.5 text-sm font-medium text-secondary-900 placeholder-secondary-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent premium-transition"
                                    />
                                </div>
                                <div className="flex items-center gap-3 w-full sm:w-auto">
                                    <button className="flex items-center gap-2 bg-white border border-secondary-200 text-secondary-700 px-4 py-2.5 rounded-xl font-medium text-sm hover:bg-slate-50 premium-transition w-full sm:w-auto justify-center">
                                        <Filter size={16} /> Filter
                                    </button>
                                </div>
                            </div>

                            {/* Table */}
                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="bg-slate-50 text-secondary-500 text-xs uppercase tracking-wider border-b border-secondary-200">
                                            <th className="py-4 px-6 font-semibold">Patient</th>
                                            <th className="py-4 px-6 font-semibold hidden md:table-cell">Contact</th>
                                            <th className="py-4 px-6 font-semibold hidden lg:table-cell">Last Visit</th>
                                            <th className="py-4 px-6 font-semibold">Next Appt</th>
                                            <th className="py-4 px-6 font-semibold">Status</th>
                                            <th className="py-4 px-6 font-semibold text-right">Balance</th>
                                            <th className="py-4 px-4 font-semibold text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {filteredPatients.map((patient) => (
                                            <tr key={patient.id} className="border-b border-secondary-100 hover:bg-slate-50 premium-transition group">
                                                <td className="py-4 px-6">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-700 flex items-center justify-center font-bold text-sm">
                                                            {patient.name.split(' ').map(n => n[0]).join('')}
                                                        </div>
                                                        <div>
                                                            <div className="font-bold text-secondary-900">{patient.name}</div>
                                                            <div className="text-xs text-secondary-500">{patient.id} • {patient.age} yrs</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 hidden md:table-cell">
                                                    <div className="flex gap-2 text-secondary-400">
                                                        <button className="hover:text-primary-600 bg-white p-1.5 rounded-md border border-slate-200 shadow-sm"><Phone size={14} /></button>
                                                        <button className="hover:text-primary-600 bg-white p-1.5 rounded-md border border-slate-200 shadow-sm"><Mail size={14} /></button>
                                                    </div>
                                                </td>
                                                <td className="py-4 px-6 text-sm text-secondary-600 hidden lg:table-cell">
                                                    {patient.lastVisit}
                                                </td>
                                                <td className="py-4 px-6 text-sm font-medium text-secondary-900">
                                                    {patient.nextAppointment}
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className={clsx(
                                                        "inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold border",
                                                        patient.status === 'Active' && "bg-green-50 text-green-700 border-green-200",
                                                        patient.status === 'Inactive' && "bg-slate-100 text-slate-600 border-slate-200",
                                                        patient.status === 'Treatment Plan' && "bg-orange-50 text-orange-700 border-orange-200",
                                                    )}>
                                                        {patient.status}
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-right font-medium text-secondary-900">
                                                    {patient.balance}
                                                </td>
                                                <td className="py-4 px-4 text-center">
                                                    <button className="text-secondary-400 hover:text-primary-600 premium-transition p-2">
                                                        <MoreVertical size={18} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                {filteredPatients.length === 0 && (
                                    <div className="p-8 text-center text-secondary-500">
                                        No patients found matching "{searchTerm}"
                                    </div>
                                )}
                            </div>

                            {/* Pagination Mock */}
                            <div className="p-4 border-t border-secondary-100 bg-slate-50 flex items-center justify-between text-sm text-secondary-500">
                                <span>Showing 1 to {filteredPatients.length} of 1,245 entries</span>
                                <div className="flex gap-1">
                                    <button className="px-3 py-1 border border-secondary-200 rounded-md bg-white hover:bg-slate-50 disabled:opacity-50" disabled>Prev</button>
                                    <button className="px-3 py-1 border border-primary-500 bg-primary-50 text-primary-700 rounded-md font-bold">1</button>
                                    <button className="px-3 py-1 border border-secondary-200 rounded-md bg-white hover:bg-slate-50">2</button>
                                    <button className="px-3 py-1 border border-secondary-200 rounded-md bg-white hover:bg-slate-50">3</button>
                                    <button className="px-3 py-1 border border-secondary-200 rounded-md bg-white hover:bg-slate-50">Next</button>
                                </div>
                            </div>

                        </div>
                    </FadeIn>
                </div>
            </main>
        </div>
    );
};

export default DemoPatients;
