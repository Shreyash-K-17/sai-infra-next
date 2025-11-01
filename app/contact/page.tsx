"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";
import { motion } from "framer-motion";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(null);
    setLoading(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      if (res.ok) {
        setStatus("✅ Message sent successfully!");
        form.reset();
      } else {
        const errorData = await res.json();
        setStatus(`❌ Error: ${errorData.error || "Something went wrong!"}`);
      }
    } catch (err) {
      console.error(err);
      setStatus("⚠️ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="min-h-screen w-full pt-10 pb-10 flex flex-col justify-between items-center bg-gradient-to-b from-blue-50 to-blue-100 px-4"
      >
        <main className="section container max-w-5xl grid md:grid-cols-2 gap-10 items-start bg-white shadow-xl rounded-2xl p-8 my-auto">
          {/* Contact info */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="section-title">Contact Us</h1>
            <p className="section-sub">
              We&apos;re happy to help you! Please use the contact form below{" "}
              <b>Get in Touch</b> to reach us.
            </p>
            <ul className="mt-6 text-sm space-y-2">
              <li>
                <strong>Address:</strong> {company.address}
              </li>
              <li>
                <strong>Mobile:</strong>{" "}
                <a href={`tel:${company.phone}`} className="underline">
                  {company.phone}
                </a>
              </li>
              <li>
                <strong>Email:</strong>{" "}
                <a href={`mailto:${company.email}`} className="underline">
                  {company.email}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contact form */}
          <motion.form
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="card p-6 grid gap-4"
            onSubmit={handleSubmit}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="block text-sm font-medium">Name</label>
              <input
                name="name"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="Your name"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="you@example.com"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="block text-sm font-medium">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 focus:ring-2 focus:ring-blue-400 transition-all"
                placeholder="Your message..."
              />
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="btn btn-primary"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send"}
            </motion.button>
            {status && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm mt-2"
              >
                {status}
              </motion.p>
            )}
          </motion.form>
        </main>
      </motion.div>
      <Footer compact />
    </>
  );
}
