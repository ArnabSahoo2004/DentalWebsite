import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Blog = () => {
    const posts = [
        {
            title: "5 Signs You Might Need a Root Canal",
            summary: "Don't ignore tooth pain. Discover the common symptoms that indicate you might need endodontic treatment.",
            date: "Oct 12, 2023",
            category: "Dental Health",
            image: "https://images.unsplash.com/photo-1598256989800-fea5a18a8b13?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "How to Choose the Right Toothbrush",
            summary: "Soft, medium, or hard? Electric or manual? A complete guide to picking the right tool for your smile.",
            date: "Sep 28, 2023",
            category: "Oral Hygiene",
            image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600"
        },
        {
            title: "Invisalign vs. Traditional Braces: What's Best for You?",
            summary: "Weighing the pros and cons of modern clear aligners versus traditional wire braces for adult orthodontics.",
            date: "Sep 15, 2023",
            category: "Orthodontics",
            image: "https://images.unsplash.com/photo-1593060132328-98eabc6ea98f?auto=format&fit=crop&q=80&w=600"
        }
    ];

    return (
        <>
            <Helmet>
                <title>Dental Blog & Articles | SmileCare</title>
                <meta name="description" content="Stay informed on the latest oral health news, tips, and dental care guides from our expert team." />
            </Helmet>

            <section className="bg-primary-50 py-16 text-center">
                <div className="max-w-4xl mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-secondary-900 mb-6">SmileCare <span className="text-primary-600">Blog</span></h1>
                    <p className="text-xl text-secondary-600">
                        Insights, tips, and the latest news in oral health from our dental experts.
                    </p>
                </div>
            </section>

            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {posts.map((post, idx) => (
                            <article key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-secondary-100 hover:shadow-xl hover:border-primary-200 transition-all group flex flex-col">
                                <div className="h-56 overflow-hidden">
                                    <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center text-sm font-medium text-secondary-500 mb-3">
                                        <span className="text-accent-600">{post.category}</span>
                                        <span>{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl font-bold text-secondary-900 mb-3 group-hover:text-primary-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-secondary-600 mb-6 leading-relaxed flex-grow">
                                        {post.summary}
                                    </p>
                                    <Link to="#" className="text-primary-600 font-bold hover:text-primary-800 transition-colors mt-auto inline-flex items-center">
                                        Read Article <span className="ml-1 tracking-tighter">--&gt;</span>
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blog;
