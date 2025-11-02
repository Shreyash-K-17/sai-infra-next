"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { publicClients, privateClients, ClientLogo } from "@/lib/data";


export default function Home() {
  const [activeTab, setActiveTab] = useState("public");
    const logos: ClientLogo[] = activeTab === "public" ? publicClients : privateClients;

    // Framer Motion variant for the individual logo animation
    const itemVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    };

    // Framer Motion variant for the container (handles stagger effect)
    const containerVariants = {
        hidden: {},
        // The transition property here applies to the *children*
        visible: { transition: { staggerChildren: 0.09 } },
    };

  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-white to-blue-50 border-b border-gray-200">
        {/* HERO SECTION */}
        <main className="section justify-center border-b items-start w-full place-items-center px-4 py-12 md:py-20 mb-0">
          <motion.div
            className="container grid md:grid-cols-2 items-center justify-center gap-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                High-Rise Construction Excellence
              </h1>
              <p className="mt-4 text-lg font-medium text-gray-800 leading-relaxed max-w-prose">
                Established in {company.founded}, {company.name} delivers shuttering,
                reinforcement, and concreting work for high-rise and super high-rise projects
                across Mumbai.
              </p>
              <p className="mt-3 text-lg font-semibold text-gray-900 leading-relaxed">
                We&apos;re happy to help you!
              </p>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring" }}>
                <Link
                  href="/contact"
                  className="btn btn-primary mt-6 inline-block rounded-full px-8 py-3 font-semibold text-white bg-blue-700 hover:bg-blue-800 transition duration-300 shadow"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <Image
                src="https://capacite.in/wp-content/uploads/2024/07/DSC_9270-scaled.jpg"
                alt="Sai Infra Construction"
                height={400}
                width={600}
                className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md transition-transform duration-500 hover:scale-105"
              />
            </motion.div>
          </motion.div>
        </main>

        {/* CULTURE OF EXCELLENCE */}
        <motion.section
          className="section px-4 py-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Our Culture of Excellence
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-800 leading-relaxed">
              Since {company.founded}, {company.name} has built a reputation for quality,
              reliability, and timely delivery of ambitious projects across Mumbai.
            </p>
          </div>

          <div className="container mx-auto mt-12 grid gap-8 md:grid-cols-3 text-center">
            {[
              { title: "🏗️ Quality", desc: "Delivering precision in every project with world-class standards." },
              { title: "🤝 Reliability", desc: "Trusted by top developers for consistent and timely execution." },
              { title: "💡 Innovation", desc: "Leveraging new techniques and equipment for smarter construction." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300"
              >
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="mt-3 font-medium text-gray-700 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </section>

      <section className="section px-6 py-16 bg-white border-t border-gray-200 text-center">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }} // Animation runs only once when scrolled into view
                className="container mx-auto max-w-7xl"
            >
                {/* Header */}
                <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                    Our Elite Clients
                </h2>
                <p className="mt-4 font-medium text-gray-600">
                    SaiInfra culture of excellence has attracted industry respect
                </p>

                {/* Tab Toggle Buttons */}
                <div className="flex justify-center my-8 gap-2">
                    <button
                        onClick={() => setActiveTab("public")}
                        className={`px-6 py-2 border rounded-l text-lg font-medium shadow-md border-orange-300 transition-all duration-300 ${
                            activeTab === "public"
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-white text-gray-800 hover:bg-blue-50"
                        }`}
                        aria-pressed={activeTab === "public"}
                    >
                        Public Client
                    </button>
                    <button
                        onClick={() => setActiveTab("private")}
                        className={`px-6 py-2 border rounded-r text-lg font-medium shadow-md border-orange-300 transition-all duration-300 ${
                            activeTab === "private"
                                ? "bg-blue-600 text-white hover:bg-blue-700"
                                : "bg-white text-gray-800 hover:bg-blue-50"
                        }`}
                        aria-pressed={activeTab === "private"}
                    >
                        Private Client
                    </button>
                </div>

                {/* Animated Client Logos Grid */}
                {/* Animate key is used to force re-animation when the activeTab changes */}
                <motion.div
                    key={activeTab} 
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center"
                >
                    {logos.map((logo, i) => (
                        <motion.div
                            key={logo.alt}
                            variants={itemVariants}
                        >
                            <Image
                                src={logo.url}
                                alt={logo.alt}
                                // Assuming typical logo dimensions
                                width={120} 
                                height={60} 
                                className="mx-auto w-auto h-auto opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>

      <Footer compact />
    </>
  );
}
