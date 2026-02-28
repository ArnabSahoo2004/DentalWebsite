import { Helmet } from 'react-helmet-async';
import TestimonialCard from '../components/TestimonialCard';
import Button from '../components/Button';

const Reviews = () => {
    const reviews = [
        { author: "John Smith", text: "Dr. Evans and the staff are incredibly professional and kind. Best cleaning I've ever had.", source: "Google", rating: 5 },
        { author: "Maria Garcia", text: "They made my implant surgery completely painless. Highly recommend their services to everyone.", source: "Yelp", rating: 5 },
        { author: "David Wilson", text: "I have high anxiety at the dentist, but they were so patient with me. 10/10 experience.", source: "Google", rating: 5 },
        { author: "Amanda Lee", text: "Got my Invisalign here. The process was smooth and the pricing was very transparent with no hidden fees.", source: "Facebook", rating: 4 },
        { author: "Samuel T.", text: "Woke up with an infection, they saw me the exact same day and took care of it. Lifesavers!", source: "Google", rating: 5 },
        { author: "Jessica Brown", text: "Such a beautiful and modern office. The front desk staff are absolute sweethearts.", source: "Google", rating: 5 },
    ];

    return (
        <>
            <Helmet>
                <title>Patient Reviews | SmileCare</title>
                <meta name="description" content="Read what our satisfied patients have to say about their dental experience at SmileCare." />
            </Helmet>

            <section className="bg-secondary-50 py-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-6">Patient <span className="text-primary-600">Reviews</span></h1>
                    <p className="text-xl text-secondary-600 mb-8">
                        Don't just take our word for it. See why thousands of patients trust us with their smiles.
                    </p>
                    <div className="flex items-center justify-center gap-4 text-2xl font-bold bg-white inline-flex px-6 py-3 border border-secondary-200 rounded-full shadow-sm">
                        <span className="text-yellow-400">★★★★★</span> <span className="text-secondary-800">4.9 / 5.0 Average</span>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {reviews.map((r, idx) => (
                            <TestimonialCard
                                key={idx}
                                author={r.author}
                                text={r.text}
                                rating={r.rating}
                                source={r.source}
                                delay={idx * 0.1}
                            />
                        ))}
                    </div>

                    <div className="mt-16 text-center bg-primary-50 p-12 rounded-3xl border border-primary-100">
                        <h2 className="text-2xl font-bold text-secondary-900 mb-4">Ready to experience the difference?</h2>
                        <Button asLink to="/book" variant="primary" size="lg">
                            Book Your Visit Today
                        </Button>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;
