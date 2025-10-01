import TurnoverChart from "@/components/TurnoverChart";
import { turnover } from "@/lib/data";
import { formatINR } from "@/lib/utils";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Financials() {
    return (
        <>
            <Navbar />
            <main className="section container justify-center w-full px-4 py-8 items-center">
                <h1 className="section-title">Financial Performance</h1>
                <p className="section-sub font-medium">
                    Steady growth reflected in our annual turnover over the past years.
                </p>
                <div className="mt-6 card p-6">
                    <TurnoverChart data={turnover} />
                </div>
                <ul className="mt-6 text-sm grid grid-cols-2 md:grid-cols-4 gap-2">
                    {turnover.map((t) => (
                        <li
                            key={t.year}
                            className="flex flex-col sm:flex-row sm:items-center justify-between bg-white rounded-lg p-3 
             transform transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                        >
                            <span className="text-sm font-medium text-gray-600 sm:w-1/4 mb-1 sm:mb-0">{t.year}</span>
                            <b className="text-base sm:text-lg font-semibold text-gray-900">{formatINR(t.amount)}</b>
                        </li>

                    ))}
                </ul>
            </main>
            <Footer />
        </>
    );
}
