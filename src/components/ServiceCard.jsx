import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceCard = ({
    title,
    description,
    icon: Icon,
    link
}) => {
    return (
        <div
            className="bg-white rounded-3xl p-8 shadow-soft border border-secondary-100 hover:-translate-y-2 hover:shadow-elevated hover:border-primary-200 premium-transition group flex flex-col h-full relative overflow-hidden"
        >
            <div className="absolute -right-8 -bottom-8 opacity-5 transform group-hover:scale-110 group-hover:opacity-10 premium-transition pointer-events-none">
                {Icon && <Icon size={180} />}
            </div>

            <div className="w-16 h-16 rounded-2xl bg-primary-50 text-primary-600 flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:bg-primary-600 group-hover:text-white premium-transition">
                {Icon && <Icon size={32} />}
            </div>

            <h3 className="text-2xl font-bold text-secondary-900 mb-3 relative z-10">{title}</h3>

            <p className="text-secondary-600 mb-6 flex-grow leading-relaxed relative z-10">
                {description}
            </p>

            <Link
                to={link}
                className="inline-flex items-center font-bold text-primary-600 hover:text-primary-800 premium-transition mt-auto group-hover:translate-x-1 relative z-10"
            >
                Learn more <ChevronRight size={18} className="ml-2 transform group-hover:translate-x-1 premium-transition" />
            </Link>
        </div>
    );
};

export default ServiceCard;
