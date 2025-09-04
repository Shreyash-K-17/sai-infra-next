import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="section container justify-center items-start w-full px-4 py-8">
                <h1 className="section-title">Our Projects</h1>
                <p className="section-sub">
                    From landmark skyscrapers to institutional buildings, Sai Infra has
                    contributed to some of Mumbai's most ambitious construction projects.
                </p>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <ProjectCard key={p.name} p={p as any} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
