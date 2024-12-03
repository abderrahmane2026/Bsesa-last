export default function ReviewSection() {

    const testimonials = [
        {
            
            name: "Martin Escobar",
            title: "Founder of BSESA Academy",
            quote: "BSESA Academy helped me reach my full potential as an athlete. The coaches are knowledgeable, and the environment is motivating!"
        },
        {
           
            name: "Angela Stian",
            title: "Fitness Coach at BSESA",
            quote: "Thanks to BSESA, I was able to develop the perfect training regimen. It’s not just about physical strength, but mental resilience too!"
        },
        {
           
            name: "Karim Ahmed",
            title: "Professional Athlete",
            quote: "BSESA Academy transformed my career. The personalized training and the expert guidance took me to the next level!"
        },
    ]

    return (
        <section className="py-14">
            <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                <div className="max-w-xl sm:text-center md:mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Here's What Our Athletes Are Saying About BSESA Academy
                    </h3>
                    <p className="mt-3 text-gray-600">
                        At BSESA Academy, we believe in nurturing athletes and empowering them to excel. See how our programs are helping individuals reach their peak performance.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx} className="bg-gray-100 p-4 rounded-xl">
                                    <figure>
                                        <div className="flex items-center gap-x-4">
                                            <img src={item.avatar} className="w-16 h-16 rounded-full" />
                                            <div>
                                                <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                            </div>
                                        </div>
                                        <blockquote>
                                            <p className="mt-6 text-gray-700">
                                                {item.quote}
                                            </p>
                                        </blockquote>
                                    </figure>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}
