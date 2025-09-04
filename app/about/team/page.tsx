import WorkforceChart from "@/components/WorkforceChart";
import { workforce } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function TeamPage() {
  return (
    <>
      <Navbar />
      <main className="section container justify-center w-full px-4 py-8 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h1 className="section-title">Our Workforce</h1>
          <p className="section-sub">
            A strong workforce is the backbone of Sai Infra. We are powered by
            engineers, foremen, skilled tradesmen, and dedicated unskilled staff.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            {workforce.map((w) => (
              <li
                key={w.role}
                className="flex items-center justify-between card p-3"
              >
                <span>{w.role}</span>
                <b>{w.count}</b>
              </li>
            ))}
          </ul>
        </div>
        <div className="card p-6">
          <WorkforceChart data={workforce} />
        </div>
      </main>
      <Footer />
    </>
  );
}
