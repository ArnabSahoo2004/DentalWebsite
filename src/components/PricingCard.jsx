import Button from './Button';

const PricingCard = ({
    title,
    price,
    period,
    description,
    isPopular = false
}) => {
    return (
        <div className={`p-8 rounded-3xl text-center premium-transition hover:-translate-y-2 flex flex-col h-full ${isPopular ? 'bg-primary-600 shadow-elevated text-white transform md:-translate-y-4 hover:md:-translate-y-6' : 'bg-white shadow-soft hover:shadow-elevated border border-secondary-100'}`}>
            {isPopular && (
                <div className="bg-accent-500 text-white text-sm font-bold uppercase tracking-wider py-1 px-4 rounded-full inline-block mb-4 self-center shadow-sm">
                    Most Popular
                </div>
            )}

            <h4 className={`text-xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-secondary-900'}`}>{title}</h4>

            <p className={`text-4xl font-extrabold mb-4 ${isPopular ? 'text-white' : 'text-primary-600'}`}>
                {price}
                {period && <span className={`text-lg font-normal ${isPopular ? 'text-primary-200' : 'text-secondary-500'}`}>{period}</span>}
            </p>

            <p className={`mb-6 flex-grow ${isPopular ? 'text-primary-100' : 'text-secondary-600'}`}>
                {description}
            </p>
        </div>
    );
};

export default PricingCard;
