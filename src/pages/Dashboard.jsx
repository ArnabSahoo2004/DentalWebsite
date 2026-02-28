import { Helmet } from 'react-helmet-async';
import { Users, PhoneCall, TrendingUp, CalendarCheck } from 'lucide-react';
import FadeIn from '../components/FadeIn';

const StatCard = ({ title, value, icon: Icon, trend }) => (
    <div className="bg-white p-6 rounded-3xl shadow-soft border border-secondary-100 flex flex-col items-center justify-center text-center premium-transition hover:-translate-y-1 hover:shadow-elevated relative overflow-hidden group">
        <div className="absolute -right-4 -bottom-4 opacity-5 transform group-hover:scale-110 group-hover:opacity-10 premium-transition pointer-events-none">
            {Icon && <Icon size={120} />}
        </div>
        <div className="w-14 h-14 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white premium-transition relative z-10">
            {Icon && <Icon size={28} />}
        </div>
        <h3 className="text-secondary-600 font-medium text-sm lg:text-base mb-1 relative z-10">{title}</h3>
        <p className="text-3xl lg:text-4xl font-extrabold text-secondary-900 relative z-10 mb-2">{value}</p>
        {trend && (
            <p className="text-xs font-semibold text-green-500 bg-green-50 px-2 py-1 rounded-full relative z-10">
                {trend}
            </p>
        )}
    </div>
);

const Dashboard = () => {
    return (
        <div className="min-h-screen bg-secondary-50 py-12 px-4 sm:px-6 lg:px-8">
            <Helmet>
                <title>Analytics Dashboard | SmileCare</title>
                <meta name="description" content="Simple analytics dashboard for demo purposes." />
            </Helmet>

            <div className="max-w-7xl mx-auto">
                <FadeIn>
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                        <div>
                            <h1 className="text-3xl md:text-4xl font-bold text-secondary-900 tracking-tight">Analytics Overview</h1>
                            <p className="text-secondary-600 mt-2">Performance metrics for the current month.</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="flex items-center gap-2 text-sm font-medium text-primary-700 bg-primary-100 px-4 py-2 rounded-full shadow-sm border border-primary-200">
                                <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse"></span>
                                Live Demo Data
                            </span>
                        </div>
                    </div>
                </FadeIn>

                <FadeIn delay={0.1}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatCard
                            title="Leads This Month"
                            value="47"
                            icon={Users}
                            trend="+12% vs last month"
                        />
                        <StatCard
                            title="Emergency Calls"
                            value="12"
                            icon={PhoneCall}
                            trend="+3% vs last month"
                        />
                        <StatCard
                            title="Conversion Rate"
                            value="18%"
                            icon={TrendingUp}
                            trend="+2.5% vs last month"
                        />
                        <StatCard
                            title="Appointments Booked"
                            value="32"
                            icon={CalendarCheck}
                            trend="+8% vs last month"
                        />
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="mt-8 bg-white p-8 rounded-3xl shadow-soft border border-secondary-100 premium-transition hover:shadow-elevated relative overflow-hidden">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-accent-500"></div>
                        <h2 className="text-xl font-bold text-secondary-900 mb-6">Recent Activity Highlights</h2>

                        <div className="space-y-6">
                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center flex-shrink-0 mt-1">
                                    <PhoneCall size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-secondary-900">New emergency call received</p>
                                    <p className="text-sm text-secondary-500">Patient reported severe tooth pain, scheduled for 2:00 PM today.</p>
                                    <p className="text-xs text-secondary-400 mt-1">10 mins ago</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center flex-shrink-0 mt-1">
                                    <CalendarCheck size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-secondary-900">Online booking confirmed</p>
                                    <p className="text-sm text-secondary-500">Sarah J. booked an Invisalign consultation for next Wednesday.</p>
                                    <p className="text-xs text-secondary-400 mt-1">45 mins ago</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <div className="w-10 h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center flex-shrink-0 mt-1">
                                    <Users size={18} />
                                </div>
                                <div>
                                    <p className="font-semibold text-secondary-900">New organic lead</p>
                                    <p className="text-sm text-secondary-500">User completed the "Pricing Membership" contact form.</p>
                                    <p className="text-xs text-secondary-400 mt-1">2 hours ago</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </div>
    );
};

export default Dashboard;
