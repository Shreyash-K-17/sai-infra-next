import TurnoverChart from "@/components/TurnoverChart";
import { turnover } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function FinancialsPage() {
    return (
        <>
            <Navbar />
            <main className="section container justify-center w-full px-4 py-8 items-center">
                <h1 className="section-title">Financial Performance</h1>
                <p className="section-sub">
                    Steady growth reflected in our annual turnover over the past years.
                </p>
                <div className="mt-6 card p-6">
                    <TurnoverChart data={turnover} />
                </div>
                <ul className="mt-6 text-sm grid grid-cols-2 md:grid-cols-4 gap-2">
                    {turnover.map((t) => (
                        <li
                            key={t.year}
                            className="flex items-center justify-between card p-3"
                        >
                            <span>{t.year}</span>
                            <b>{formatINR(t.amount)}</b>
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    );
}
