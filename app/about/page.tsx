import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; 

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="section container mx-auto flex flex-col justify-center items-start w-full px-4 py-8 max-w-5xl">
        <h1 className="section-title text-3xl font-bold mb-4">About Sai Infra Group</h1>
        <p className="section-sub text-gray-700">
          Sai Infra Construction Company, established in 2018, is headquartered at
          Dadar (W), Mumbai. Initially founded by Mr. Rajkumar Jaiswal & Indu Raj
          Kumar Jaiswal as a subcontracting business specializing in shuttering,
          reinforcement, and concreting, the company has grown rapidly into the
          high-rise and super high-rise construction sector.
        </p>
        <ul className="mt-6 grid gap-3 text-sm list-disc pl-5">
          <li>
            <strong>Head Office:</strong> Office No-01, Matrukripa CHSL, Baburao
            Parulekar Marg, Near Shaitan Chauki Police Station, Dadar (W),
            Mumbai-400028
          </li>
          <li>
            <strong>Workforce:</strong> 1183+ motivated skilled and unskilled
            professionals
          </li>
          <li>
            <strong>Specialization:</strong> High-rise and Super high-rise sector
          </li>
          <li>
            <strong>Clients:</strong> Capacité Infraprojects Ltd, Godrej,
            Kalpataru, Piramal
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
