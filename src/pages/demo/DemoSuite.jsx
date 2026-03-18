/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import FadeIn from '../../components/FadeIn';
import { Activity, ShieldCheck, DollarSign, CalendarX, HeartPulse, CreditCard, LayoutDashboard, Users, Settings, LogOut, ChevronRight, TrendingUp } from 'lucide-react';

const demoModules = [
    { title: "No-Show Automation", path: "/demo-no-show-system", icon: CalendarX, description: "Automated SMS/Email reminders and smart predictive scheduling." },
    { title: "Cost Estimator Tool", path: "/demo-cost-estimator", icon: DollarSign, description: "Real-time out-of-pocket estimations for patients." },
    { title: "Insurance Pre-Verification", path: "/demo-insurance-precheck", icon: ShieldCheck, description: "Instant coverage verification against provider databases." },
    { title: "Membership System", path: "/demo-membership-system", icon: CreditCard, description: "In-house dental plan subscriptions and recurring billing." },
    { title: "Emergency Triage", path: "/demo-emergency-triage", icon: HeartPulse, description: "AI-assisted severity sorting for incoming emergency requests." },
    { title: "Lead Scoring Intelligence", path: "/demo-lead-scoring", icon: Activity, description: "Identify high-value patients (Implants/Invisalign) autonomously." },
];

const StatCard = ({ title, value, icon: Icon, trend }) => (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-secondary-100 flex items-start justify-between premium-transition hover:shadow-md">
        <div>
            <p className="text-sm font-medium text-secondary-500 mb-1">{title}</p>
            <h4 className="text-2xl font-bold text-secondary-900">{value}</h4>
            {trend && (
                <p className="text-xs font-medium text-green-600 mt-2 flex items-center gap-1">
                    <TrendingUp size={12} /> {trend}
                </p>
            )}
        </div>
        <div className="w-10 h-10 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center">
            <Icon size={20} />
        </div>
    </div>
);

const DemoSuite = () => {
    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans">
            <Helmet>
                <title>BrightSmile Growth System | Demo</title>
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
                    <Link to="/demo-suite" className="flex items-center gap-3 px-3 py-2.5 bg-primary-50 text-primary-700 rounded-xl font-medium">
                        <LayoutDashboard size={18} />
                        Dashboard
                    </Link>
                    <Link to="/demo-patients" className="flex items-center gap-3 px-3 py-2.5 text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 rounded-xl font-medium transition-colors">
                        <Users size={18} />
                        Patients
                    </Link>
                    <Link to="/dashboard" className="flex items-center gap-3 px-3 py-2.5 text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 rounded-xl font-medium transition-colors">
                        <Activity size={18} />
                        Analytics
                    </Link>

                    <div className="text-xs font-semibold text-secondary-400 uppercase tracking-wider mb-2 px-2 mt-8">System Configuration</div>
                    <Link to="#" className="flex items-center gap-3 px-3 py-2.5 text-secondary-600 hover:bg-secondary-50 hover:text-secondary-900 rounded-xl font-medium transition-colors">
                        <Settings size={18} />
                        Settings
                    </Link>
                </nav>

                <div className="p-4 border-t border-secondary-100">
                    <div className="flex items-center gap-3 px-3 py-2.5 text-secondary-500 hover:bg-red-50 hover:text-red-600 rounded-xl font-medium transition-colors cursor-pointer">
                        <LogOut size={18} />
                        Exit Demo
                    </div>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 overflow-y-auto">
                <div className="p-6 md:p-8 lg:p-10 max-w-7xl mx-auto">
                    <FadeIn>
                        <header className="mb-10">
                            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                                <div>
                                    <h1 className="text-3xl font-bold text-secondary-900 tracking-tight mb-2">BrightSmile Growth System – Internal Demo</h1>
                                    <p className="text-secondary-500">AI-powered automation & revenue optimization suite</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm font-medium bg-white border border-secondary-200 px-4 py-2 rounded-lg shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                                    System Online
                                </div>
                            </div>
                        </header>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        {/* Overview Metrics */}
                        <section className="mb-12">
                            <h2 className="text-lg font-bold text-secondary-900 mb-4 px-1">Performance Overview</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                                <StatCard title="This Month's Leads" value="47" icon={Users} trend="+12%" />
                                <StatCard title="Emergency Calls" value="12" icon={HeartPulse} trend="+3%" />
                                <StatCard title="No-Show Rate" value="4%" icon={CalendarX} trend="-2%" />
                                <StatCard title="Estimated Revenue Generated" value="$38,400" icon={DollarSign} trend="+18%" />
                            </div>
                        </section>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        {/* Feature Modules Grid */}
                        <section>
                            <h2 className="text-lg font-bold text-secondary-900 mb-4 px-1">Active Modules</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                                {demoModules.map((mod, idx) => {
                                    const Icon = mod.icon;
                                    return (
                                        <div key={idx} className="bg-white rounded-2xl shadow-sm border border-secondary-100 hover:shadow-md hover:border-primary-200 premium-transition flex flex-col h-full overflow-hidden group">
                                            <div className="p-6 flex-grow">
                                                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white premium-transition">
                                                    <Icon size={24} />
                                                </div>
                                                <h3 className="text-lg font-bold text-secondary-900 mb-2">{mod.title}</h3>
                                                <p className="text-sm text-secondary-500 leading-relaxed mb-6">{mod.description}</p>
                                            </div>
                                            <div className="px-6 py-4 bg-secondary-50 border-t border-secondary-100 mt-auto">
                                                <Link
                                                    to={mod.path}
                                                    className="flex items-center justify-between text-sm font-semibold text-primary-600 hover:text-primary-700 group-hover:translate-x-1 premium-transition"
                                                >
                                                    Open Module
                                                    <ChevronRight size={16} />
                                                </Link>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        </section>
                    </FadeIn>
                </div>
            </main>
        </div>
    );
};

export default DemoSuite;
