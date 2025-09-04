import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EquipmentPage() {
    const equipment = [
        "Cutting Bending Machine",
        "Ply Cutting Machine",
        "Drill Machine",
        "Chipping Machine",
        "Breaker",
    ];


    return (
        <>
            <Navbar />
            <main className="section container justify-center w-full px-4 py-8 items-center">
                <h1 className="section-title">Our Equipment</h1>
                <p className="section-sub">
                    Sai Infra utilizes modern machinery and tools to ensure efficiency and
                    quality in every project.
                </p>
                <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
                    {equipment.map((e) => (
                        <li key={e} className="card p-4">
                            {e}
                        </li>
                    ))}
                </ul>
            </main>
            <Footer />
        </>
    );
}
