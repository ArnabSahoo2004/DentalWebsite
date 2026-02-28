import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({
    author,
    text,
    rating = 5,
    source = "Google Review"
}) => {
    return (
        <div
            className="bg-white rounded-3xl p-8 shadow-soft border border-secondary-100 relative h-full flex flex-col premium-transition hover:shadow-elevated hover:-translate-y-2 block"
        >
            <Quote className="absolute top-6 right-6 text-primary-100 w-12 h-12 opacity-50" />

            <div className="flex gap-1 mb-4 text-accent-500">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill={i < rating ? "currentColor" : "none"} className={i >= rating ? "text-secondary-300" : ""} />
                ))}
            </div>

            <p className="text-secondary-700 italic mb-8 relative z-10 flex-grow text-lg leading-relaxed">
                "{text}"
            </p>

            <div className="mt-auto border-t border-secondary-100 pt-6 flex justify-between items-center">
                <div>
                    <h4 className="font-bold text-secondary-900">{author}</h4>
                    <span className="text-sm text-secondary-500 font-medium">{source}</span>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-primary-50 flex items-center justify-center text-primary-600 font-bold border border-primary-100 text-lg shadow-sm">
                    {author.charAt(0)}
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
