"use client";
import WorkforceChart from "@/components/WorkforceChart";
import { workforce } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-blue-10 to-blue-50">
        <main className="section container grid md:grid-cols-2 gap-10 items-start w-full max-w-12xl px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.15 }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
          >
            <div className="flex flex-col items-center text-center">
              <h1 className="section-title">Our Workforce</h1>
              <p className="section-sub font-semibold mt-2">
                A strong workforce is the backbone of Sai Infra.
              </p>
            </div>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm max-w-4xl mx-auto mt-6">
              {workforce.map((w, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/team/${w.slug}`} className="block group">
                    <div className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50/60 transition-all duration-300">
                      <span className="font-medium text-gray-900 group-hover:text-blue-800">{w.role}</span>
                      <b className="text-gray-700 group-hover:text-blue-800">{w.count}</b>
                    </div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="p-3 bg-white border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <WorkforceChart data={workforce} />
          </motion.div>
        </main>
      </div>
      <Footer compact />
    </>
  );
}
