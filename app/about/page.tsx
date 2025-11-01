"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { company } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";

export default function About() {
  return (
    <>
      <Navbar />
      <section className="bg-gradient-to-b from-white to-blue-50 border-gray-200">
        <main className="section px-4 py-12 md:py-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="container mx-auto space-y-20"
          >
            {/* Intro Section */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 items-center gap-16"
            >
              <motion.div
                initial={{ x: -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.7 }}
              >
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                  About {company.name}
                </h1>
                <p className="mt-4 text-lg font-medium text-gray-900 leading-relaxed max-w-prose">
                  Since {company.founded}, {company.name} has shaped Mumbai&apos;s skyline,
                  specializing in shuttering, reinforcement, and concreting for
                  high-rise and super high-rise projects.
                </p>
                <p className="mt-4 text-lg font-semibold text-gray-800 leading-relaxed">
                  A tradition of quality, safety, and timely delivery is our hallmark.
                </p>
              </motion.div>
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="flex justify-center"
              >
                <Image
                  src="https://capacite.in/wp-content/uploads/2024/06/work-area-lg.jpg"
                  alt="Sai Infra Construction work area"
                  width={600}
                  height={400}
                  className="rounded-xl shadow-lg max-w-md w-full transition-transform duration-300 hover:scale-105"
                />
              </motion.div>
            </motion.section>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="border-t border-gray-200"
            ></motion.div>

            {/* Mission & Vision */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-gray-900">
                Our Mission & Vision
              </h2>
              <p className="mt-4 text-lg font-medium text-gray-800 leading-relaxed max-w-3xl mx-auto">
                We turn visions into reality — creating world-class spaces built to
                last, fostering trust and excellence in every relationship.
              </p>

              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.2 },
                  },
                }}
                viewport={{ once: true }}
                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto text-left"
              >
                {[
                  {
                    title: "Our Mission",
                    desc: "To deliver safe, sustainable, and high-quality construction services while building long-term partnerships based on trust, integrity, and reliability.",
                  },
                  {
                    title: "Our Vision",
                    desc: "To be recognized as the most trusted construction partner in India, transforming skylines and creating spaces that inspire future generations.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
                  >
                    <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 font-medium text-gray-700 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="border-t border-gray-200"
            ></motion.div>

            {/* Core Values */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center text-gray-900">
                Our Core Values
              </h2>
              <motion.div
                initial="hidden"
                whileInView="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
                }}
                viewport={{ once: true }}
                className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-10"
              >
                {[
                  {
                    icon: "fas fa-hard-hat",
                    title: "Safety First",
                    desc: "Worker safety and industry compliance guide our every move.",
                  },
                  {
                    icon: "fas fa-building",
                    title: "Quality Construction",
                    desc: "Proven techniques for robust, lasting structures.",
                  },
                  {
                    icon: "fas fa-clock",
                    title: "On-Time Delivery",
                    desc: "Deadlines met, promises kept — never at the expense of quality.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="p-8 bg-white rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300"
                  >
                    <i className={`${item.icon} text-5xl text-blue-600`}></i>
                    <h3 className="mt-4 text-xl font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 font-medium text-gray-700 leading-relaxed">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.section>

            {/* CTA */}
            <motion.section
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center border-t pt-12"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                Ready to work with {company.name}?
              </h2>
              <p className="mt-2 text-lg font-medium text-gray-700 leading-relaxed">
                Let&apos;s build the future together. Start a conversation for collaboration.
              </p>
              <motion.div whileHover={{ scale: 1.05 }}>
                <Link
                  href="/contact"
                  className="btn btn-primary mt-6 inline-block rounded-full px-8 py-3 font-semibold text-white bg-blue-700 hover:bg-blue-800 transition duration-300 shadow"
                >
                  Contact Us
                </Link>
              </motion.div>
            </motion.section>
          </motion.div>
        </main>
      </section>
      <Footer compact />
    </>
  );
}
