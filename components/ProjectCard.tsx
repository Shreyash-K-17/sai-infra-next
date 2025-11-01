"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: any }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group block">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(0,0,0,0.15)" }}
        className="bg-white rounded-xl shadow-lg overflow-hidden"
      >
        {project.imageUrl && (
          <motion.div
            className="relative w-full h-48 rounded-t-xl overflow-hidden"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <Image
              src={project.imageUrl}
              alt={project.name}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-t-xl"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        )}
        <div className="p-5">
          <h2 className="text-xl font-bold text-gray-900">{project.name}</h2>
          <p className="text-sm text-gray-500 mt-1">{project.location}</p>
        </div>
      </motion.div>
    </Link>
  );
}
