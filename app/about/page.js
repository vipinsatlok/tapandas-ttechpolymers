import Layout from "@/components/layout/Layout"
import Hero from "@/components/sections/home1/Hero"
import Section1 from "@/components/sections/home1/Section1"
import Section2 from "@/components/sections/home1/Section2"
import Section3 from "@/components/sections/home1/Section3"
import Section4 from "@/components/sections/home1/Section4"
export default async function Home() {
    return (
        <>
            <Layout footerStyle={1} noHeaderBg>

                <>
                    <section className="relative py-10 lg:py-12">



                        <div className="container px-4 flex flex-col gap-10">

                            <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-8xl">About Us Page
                            </h1>




                            <div>

                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Welcome to Ttechpolymers,
                                    <br></br>
                                    your trusted partner in the world of polymers. We are a dynamic company with a commitment to supplying top-quality polymer products across India. Specializing in a wide range of polymers, including LDPE, LLDPE, HDPE, HD, PP, PPCP, GPPS, PVC Regrind, and HDPE Regrind, we are here to meet the diverse needs of industries that depend on these vital materials.


                                </p>
                            </div>

                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Our Mission



                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">At Ttechpolymers, our mission is to provide reliable and consistent polymer solutions that empower businesses to innovate and grow. We understand the critical role that polymers play in a variety of applications, from packaging to manufacturing, and we are dedicated to ensuring our customers have access to the highest quality materials available.

                                </p>
                            </div>

                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Our Vision
                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">We envision becoming the leading distributor of polymer products in India, recognized for our integrity, innovation, and commitment to customer satisfaction. We aim to build long-lasting relationships with our clients by delivering exceptional service and unmatched product quality.

                                </p>
                            </div>


                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Why Choose Us?


                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Extensive Product Range: We offer a comprehensive selection of polymers, including LDPE, LLDPE, HDPE, HD, PP, PPCP, GPPS, PVC Regrind, and HDPE Regrind, to cater to the varied needs of our clients.
                                    Nationwide Distribution: Our robust logistics network ensures that we can deliver our products to any corner of India, on time and in perfect condition.
                                    Quality Assurance: We are committed to maintaining the highest standards of quality, ensuring that every product we supply meets stringent industry requirements.
                                    Customer-Centric Approach: We believe in putting our customers first. Our team is always ready to provide personalized support and guidance to help you find the right polymer solutions for your business.

                                </p>
                            </div>

                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Our Commitment

                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">At Ttechpolymers, we are more than just a supplier – we are a partner in your success. Our commitment to excellence drives us to continually improve our products and services, ensuring that we not only meet but exceed your expectations.
                                    Join us on our journey as we strive to make a positive impact on the polymer industry in India. Whether you are a manufacturer, a distributor, or a business looking for high-quality polymer products, we are here to support you every step of the way.


                                </p>
                            </div>

                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Contact Us


                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Ready to partner with us? Get in touch today to learn more about our products and how we can help your business thrive.


                                </p>
                            </div>




                        </div>
                    </section>
                </>

            </Layout>
        </>
    )
}
