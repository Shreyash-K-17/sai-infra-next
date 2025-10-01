import WorkforceChart from "@/components/WorkforceChart";
import { workforce } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Team() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-blue-10 to-blue-50">
        <main className="section container grid md:grid-cols-2 gap-10 items-start w-full max-w-12xl">
          <div>
            <div className="flex flex-col items-center text-center">
              <h1 className="section-title">Our Workforce</h1>
              <p className="section-sub font-semibold mt-2">
                A strong workforce is the backbone of Sai Infra. We are powered by
                engineers, foremen, skilled tradesmen, and dedicated unskilled staff.
              </p>
            </div>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 text-sm">
              {workforce.map((w) => (
                <li
                  key={w.role}
                  className="flex items-center justify-between p-2 sm:p-3 bg-white rounded-lg relative transform transition duration-300 hover:-translate-y-1 hover:shadow-lg text-xs sm:text-sm"
                >
                  <span>{w.role}</span>
                  <b>{w.count}</b>
                </li>
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
