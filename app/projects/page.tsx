import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/data";

// Define the Project type (if not already defined elsewhere)
interface projects {
    name: string;
    location: string;
    configuration: string;
    areaLakhSqft: number;
    // Add any other fields that exist in your project objects
}

export default function ProjectsPage() {
    return (
        <>
            <Navbar />
            <main className="section container justify-center items-start w-full px-4 py-8">
                <h1 className="section-title">Our Projects</h1>
                <p className="section-sub">
                    From landmark skyscrapers to institutional buildings, Sai Infra has
                    contributed to some of Mumbai&apos;s most ambitious construction projects.
                </p>

                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((p) => (
                        <ProjectCard key={p.name} p={p} />
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
