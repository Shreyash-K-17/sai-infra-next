import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { company } from "@/lib/data";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-white to-blue-50 border-gray-200">

        <main className="section px-4 py-12 md:py-20 ">
          <div className="container mx-auto space-y-20">
            {/* Intro Section */}
            <section className="grid md:grid-cols-2 items-center gap-16">
              <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                  About {company.name}
                </h1>
                <p className="mt-4 text-lg font-medium text-gray-900 leading-relaxed max-w-prose">
                  Since {company.founded}, {company.name} has shaped Mumbai&apos;s skyline, specializing in
                  shuttering,
                  reinforcement, and
                  concreting for
                  high-rise and super high-rise projects.
                </p>
                <p className="mt-4 text-lg font-semibold text-gray-800 leading-relaxed">
                  A tradition of quality,
                  safety, and
                  timely delivery is our hallmark.
                </p>
              </div>
              <div className="flex justify-center">
                import Image from "next/image";

                <Image
                  src="https://capacite.in/wp-content/uploads/2024/06/work-area-lg.jpg"
                  alt="Sai Infra Construction work area"
                  width={600}   // use actual or appropriate width
                  height={400}  // use actual or appropriate height
                  className="rounded-xl shadow-lg max-w-md w-full transition-transform duration-300 hover:scale-105"
                />

              </div>
            </section>

            <div className="border-t border-gray-200"></div>

            {/* Mission & Vision */}
            <section className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Our Mission & Vision
              </h2>
              <p className="mt-4 text-lg font-medium text-gray-800 leading-relaxed max-w-3xl mx-auto">
                We turn visions into reality — creating world-class spaces built to last, fostering trust and excellence in every relationship.
              </p>

              {/* Added Sub-points */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left">
                <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900">Our Mission</h3>
                  <p className="mt-2 font-medium text-gray-700 leading-relaxed">
                    To deliver safe, sustainable, and high-quality construction services
                    while building long-term partnerships based on trust, integrity, and reliability.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold text-gray-900">Our Vision</h3>
                  <p className="mt-2 font-medium text-gray-700 leading-relaxed">
                    To be recognized as the most trusted construction partner in India,
                    transforming skylines and creating spaces that inspire future generations.
                  </p>
                </div>
              </div>
            </section>


            <div className="border-t border-gray-200"></div>

            {/* Core Values */}
            <section>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-gray-900">
                Our Core Values
              </h2>
              <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10">
                <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                  <i className="fas fa-hard-hat text-5xl text-blue-600"></i>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">Safety First</h3>
                  <p className="mt-2 font-medium text-gray-700 leading-relaxed">
                    Worker safety and industry compliance guide our every move.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                  <i className="fas fa-building text-5xl text-blue-600"></i>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">Quality Construction</h3>
                  <p className="mt-2 font-medium text-gray-700 leading-relaxed">
                    Proven techniques for robust, lasting structures.
                  </p>
                </div>
                <div className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300">
                  <i className="fas fa-clock text-5xl text-blue-600"></i>
                  <h3 className="mt-4 text-xl font-bold text-gray-900">On-Time Delivery</h3>
                  <p className="mt-2 font-medium text-gray-700 leading-relaxed">
                    Deadlines met, promises kept — never at the expense of quality.
                  </p>
                </div>
              </div>
            </section>

            {/* CTA */}
            <section className="text-center border-t pt-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Ready to work with {company.name}?
              </h2>
              <p className="mt-2 text-lg font-medium text-gray-700 leading-relaxed">
                Let&apos;s build the future together. Start a conversation for collaboration.
              </p>
              <Link
                href="/contact"
                className="btn btn-primary mt-6 inline-block rounded-full px-8 py-3 font-semibold text-white bg-blue-700 hover:bg-blue-800 transition duration-300 shadow"
              >
                Contact Us
              </Link>
            </section>
          </div>
        </main>
      </section>



      <Footer compact />
    </>
  );
}
