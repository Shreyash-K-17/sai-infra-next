"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <>
      <Navbar />
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="section px-4 py-16 bg-gradient-to-b from-blue-10 to-blue-50"
      >
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container mx-auto max-w-7xl text-center mb-12"
        >
          <h1 className="section-title text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
            Our Projects
          </h1>
          <p className="section-sub font-semibold text-gray-700 mt-4 max-w-3xl mx-auto">
            From landmark skyscrapers to institutional buildings, Sai Infra has
            contributed to some of Mumbai&apos;s most ambitious construction projects.
          </p>
        </motion.div>

        {/* Animated grid with staggered children */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {projects.map((p) => (
            <motion.div
              key={p.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <Footer compact />
    </>
  );
}
