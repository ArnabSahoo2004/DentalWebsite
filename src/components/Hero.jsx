import Button from './Button';

const Hero = ({
    title,
    highlight,
    description,
    primaryCtaText = "Book Appointment",
    primaryCtaLink = "/book",
    secondaryCtaText,
    secondaryCtaLink,
    imageUrl,
    imageAlt = "Dental Clinic",
    badges = []
}) => {
    return (
        <section className="relative bg-primary-50 py-16 md:py-24 overflow-hidden">
            {/* Decorative Blob */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-accent-100/50 blur-3xl opacity-60"></div>
                <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary-200/40 blur-3xl opacity-60"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

                    {/* Text Content */}
                    <div
                        className="lg:w-1/2"
                    >
                        {badges.length > 0 && (
                            <div className="flex flex-wrap gap-3 mb-6">
                                {badges.map((badge, idx) => (
                                    <span key={idx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-white text-primary-700 shadow-sm border border-primary-100">
                                        {badge.icon && <span className="mr-1.5">{badge.icon}</span>}
                                        {badge.text}
                                    </span>
                                ))}
                            </div>
                        )}

                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-secondary-900 leading-tight mb-6">
                            {title} <span className="text-primary-600 block mt-2">{highlight}</span>
                        </h1>

                        <p className="text-lg md:text-xl text-secondary-600 mb-8 max-w-2xl leading-relaxed">
                            {description}
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asLink to={primaryCtaLink} variant="accent" size="lg">
                                {primaryCtaText}
                            </Button>
                            {secondaryCtaText && secondaryCtaLink && (
                                <Button asLink to={secondaryCtaLink} variant="outline" size="lg">
                                    {secondaryCtaText}
                                </Button>
                            )}
                        </div>
                    </div>

                    {/* Image Content */}
                    <div
                        className="lg:w-1/2 w-full"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            {imageUrl ? (
                                <img src={imageUrl} alt={imageAlt} className="w-full h-auto object-cover aspect-[4/3] lg:aspect-square" />
                            ) : (
                                <div className="w-full aspect-[4/3] lg:aspect-square bg-gradient-to-br from-primary-200 to-accent-200 flex items-center justify-center">
                                    <span className="text-secondary-500 font-medium">Image Placeholder</span>
                                </div>
                            )}
                            {/* Overlay elements like "Top Rated" could go here */}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;
