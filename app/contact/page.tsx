"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { company } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen w-full flex flex-col justify-between items-center bg-gradient-to-b from-blue-50 to-blue-100 px-4">
        <main className="section container max-w-5xl grid md:grid-cols-2 gap-10 items-start bg-white shadow-xl rounded-2xl p-8 my-auto">
          {/* Contact info */}
          <div>
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
          </div>

          {/* Contact form */}
          <form
  className="card p-6 grid gap-4"
  onSubmit={async (e) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = (form[0] as HTMLInputElement).value;
    const email = (form[1] as HTMLInputElement).value;
    const message = (form[2] as HTMLTextAreaElement).value;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("Message sent! Thank you for contacting us.");
        form.reset();
      } else {
        alert(data.error || "Something went wrong.");
      }
    } catch (err) {
      console.error(err);
      alert("Failed to send message.");
    }
  }}
>

            <div>
              <label className="block text-sm font-medium">Name</label>
              <input
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                required
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Message</label>
              <textarea
                required
                rows={4}
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2"
                placeholder="Your message..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Send
            </button>
          </form>
        </main>
      </div>
      <Footer compact/>
    </>
  );
}