import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";


export default function Projects() {
    return (
        <>
            <Navbar />
            <section className="section px-4 py-16 bg-gradient-to-b from-blue-10 to-blue-50">
                <div className="container mx-auto max-w-7xl">
                    <div className="text-center mb-12">
                        <h1 className="section-title text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                            Our Projects
                        </h1>
                        <p className="section-sub font-semibold text-gray-700 mt-4 max-w-3xl mx-auto">
                            From landmark skyscrapers to institutional buildings, Sai Infra
                            has contributed to some of Mumbai&apos;s most ambitious construction projects.
                        </p>
                    </div>

                    {/* ✅ Responsive grid */}
                    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
                        {projects.map((p) => (
                            <ProjectCard key={p.slug} project={p} />
                        ))}
                    </div>
                </div>
            </section>

            <Footer compact />
        </>
    );
}
