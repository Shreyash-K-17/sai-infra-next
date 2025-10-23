import WorkforceChart from "@/components/WorkforceChart";
import { workforce } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-blue-10 to-blue-50">
        <main className="section p-5 container grid md:grid-cols-2 gap-10 items-start w-full max-w-12xl">
          <div>
            <div className="flex flex-col items-center text-center">
              <h1 className="section-title">Our Workforce</h1>
              <p className="section-sub font-semibold mt-2">
                A strong workforce is the backbone of Sai Infra. We are powered by
                engineers, foremen, skilled tradesmen, and dedicated unskilled staff.
              </p>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3 text-sm max-w-4xl mx-auto">
              {workforce.map((w) => (
                <Link key={w.slug} href={`/team/${w.slug}`} className="block group">
                  <li
                    className="flex items-center justify-between p-4 bg-white rounded-lg border border-gray-100
              shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-blue-50/60 transition-all duration-300"
                  >
                    <span className="font-medium text-gray-900 group-hover:text-blue-800">{w.role}</span>
                    <b className="text-gray-700 group-hover:text-blue-800">{w.count}</b>
                  </li>
                </Link>
              ))}
            </ul>

          </div>
          <div className="p-3 bg-white rounded-xl transform transition duration-300 hover:-translate-y-2 hover:shadow-lg">
            <WorkforceChart data={workforce} />
          </div>

        </main>
      </div>
      <Footer compact />
    </>
  );
}
