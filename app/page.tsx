import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="section justify-center items-start w-full px-4 py-8 bg-gradient-to-b from-white to-blue-50 border-b border-gray-200">
        <div className="container grid md:grid-cols-2 items-center gap-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              High-Rise Construction Excellence
            </h1>
            <p className="mt-4 text-gray-600 max-w-prose">
              Established in {company.founded}, {company.name} delivers
              shuttering, reinforcement, and concreting work for
              high-rise and super high-rise projects across Mumbai.
            </p>
            <p>We&apos;re happy to help you!</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
