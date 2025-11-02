"use client";

import TurnoverChart from "@/components/TurnoverChart";
import { turnover } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

export default function Financials() {
  return (
    <>
      <Navbar />

      <main className="section container justify-center w-full px-4 py-12 items-center">
        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Financial Performance
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="section-sub font-medium"
        >
          Steady growth reflected in our annual turnover over the past years.
        </motion.p>

        {/* Chart Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mt-6 card p-6 shadow-lg rounded-xl bg-white"
        >
          <TurnoverChart data={turnover} />
        </motion.div>

        {/* Yearly List */}
        <motion.ul
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
          viewport={{ once: true }}
          className="mt-8 text-sm grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {turnover.map((t) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg p-3 shadow-sm 
                transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="text-sm font-medium text-gray-600 sm:w-1/4 mb-1 sm:mb-0">{t.year}</span>
              <b className="text-base sm:text-lg font-semibold text-gray-900">{formatINR(t.amount)}</b>
            </motion.li>
          ))}
        </motion.ul>
      </main>

      <Footer />
    </>
  );
}
