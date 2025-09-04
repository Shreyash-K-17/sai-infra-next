import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import TurnoverChart from "@/components/TurnoverChart";
import WorkforceChart from "@/components/WorkforceChart";
import { company, projects, turnover, workforce } from "@/lib/data";
import { formatINR } from "@/lib/utils";

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
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
