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

                            <h1 class="mb-4 text-5xl font-extrabold text-gray-900 dark:text-white md:text-6xl lg:text-8xl">Product Page
                            </h1>




                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Our Products
                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">1. Low-Density Polyethylene (LDPE)
                                    LDPE is a versatile polymer known for its flexibility, toughness, and resistance to chemicals. Ideal for applications such as packaging films, bags, and liners, LDPE is a staple material in numerous industries.       <br></br>       <br></br>
                                    2. Linear Low-Density Polyethylene (LLDPE)
                                    LLDPE offers excellent tensile strength and impact resistance, making it perfect for stretch films, bags, and geomembranes. Its adaptability makes it a popular choice for a wide range of applications.       <br></br>       <br></br>
                                    3. High-Density Polyethylene (HDPE)
                                    HDPE is known for its high strength-to-density ratio, making it suitable for products requiring durability and resistance to impact, such as containers, pipes, and plastic lumber.       <br></br>       <br></br>
                                    4. High-Density (HD)
                                    Our High-Density polymers offer superior rigidity and strength, making them ideal for heavy-duty applications. HD polymers are commonly used in the production of industrial containers, automotive parts, and construction materials.       <br></br>       <br></br>
                                    5. Polypropylene (PP)
                                    PP is a lightweight polymer with excellent chemical resistance and weldability. It is widely used in automotive parts, packaging, textiles, and consumer goods due to its durability and versatility.       <br></br>       <br></br>
                                    6. Polypropylene Copolymer (PPCP)
                                    PPCP provides enhanced toughness and flexibility compared to standard PP. This makes it suitable for applications requiring impact resistance, such as automotive parts, household goods, and packaging.       <br></br>       <br></br>
                                    7. General Purpose Polystyrene (GPPS)
                                    GPPS is a transparent polymer known for its clarity, ease of processing, and rigidity. It is commonly used in the manufacturing of disposable cutlery, food packaging, and laboratory ware.       <br></br>       <br></br>
                                    8. Polyvinyl Chloride Regrind (PVC Regrind)
                                    Our PVC Regrind is an eco-friendly option made from recycled PVC, offering cost-effective solutions for applications such as pipes, fittings, and construction materials without compromising on quality.       <br></br>       <br></br>
                                    9. High-Density Polyethylene Regrind (HDPE Regrind)
                                    HDPE Regrind is made from recycled HDPE, providing an environmentally conscious alternative for a variety of applications. It retains much of the original polymer’s strength and durability, making it suitable for non-critical applications.       <br></br>       <br></br>

                                </p>
                            </div>

                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Why Choose Our Products?


                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Quality Assurance:      We adhere to the highest standards in the industry, ensuring that every product you receive meets stringent quality benchmarks.       <br></br> <br></br>
                                    Sustainable Solutions: Our range includes regrind materials, helping you make eco-friendly choices without sacrificing performance. <br></br> <br></br>
                                    Customization: We understand that every business has unique needs. That’s why we offer tailored solutions to meet your specific requirements. <br></br> <br></br>
                                    Nationwide Availability: With our extensive distribution network, you can rely on timely delivery of our products anywhere in India.

                                </p>
                            </div>

                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Why Choose Us?
                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Extensive Product Range: We offer a wide selection of polymers to meet the diverse needs of various industries. <br></br><br></br>
                                    Nationwide Distribution: With our robust logistics network, we ensure timely delivery of our products anywhere in India. <br></br> <br></br>
                                    Quality Focused: Every product we supply is rigorously tested to ensure it meets industry standards. <br></br> <br></br>
                                    Customer-Centric Approach: Our team is dedicated to providing personalized service and support to help you find the perfect polymer solutions.
                                </p>
                            </div>


                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Applications

                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Our polymers serve a wide array of industries, including but not limited to:
                                    Packaging: Flexible and rigid packaging solutions for food, beverages, and consumer goods. <br></br><br></br>
                                    Automotive: Durable and lightweight components for vehicles. <br></br><br></br>
                                    Construction: High-performance materials for pipes, fittings, and insulation. <br></br><br></br>
                                    Textiles: Synthetic fibers and fabrics for various applications.<br></br><br></br>
                                    Consumer Goods: High-quality plastics for household items and appliances.

                                </p>
                            </div>

                            <div>
                                <h1 class="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Get in Touch
                                </h1>
                                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Ready to explore our product offerings? Contact us today to learn more about how our polymers can support your business. Our team is here to help you select the right materials for your needs and provide expert guidance every step of the way.

                                </p>
                            </div>





                        </div>
                    </section>
                </>

            </Layout>
        </>
    )
}
