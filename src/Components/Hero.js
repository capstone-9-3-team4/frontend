
export default function Hero() {
    return (
        <section className="relative bg-[url(https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1738&q=80)] bg-cover bg-center bg-no-repeat">
            <div className="text-white py-20">
                <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
                    
                    <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
                        <h1 className="text-3xl md:text-5xl p-2 text-dark-blue tracking-loose">TherapistConnect</h1>
                        {/* <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">Space : The Timeless Infinity
                        </h2> */}
                        <p className="text-sm md:text-base text-gray-50 mb-4">Therapist Connect utilizes the integration of journaling and AI-driven analysis that can empower patients to express themselves more comprehensively and provide therapists with valuable insights to guide their interventions.</p>
                        <a href="#"
                            className="px-4 py-1 text-dark-blue font-light tracking-wider bg-white hover:bg-dark-purple rounded">
                            Learn More</a>
                    </div>
                </div>
            </div>
        </section>
    )
}