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

export default function Projects() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-blue-10 to-blue-50 border-b">
                <main className="section container flex flex-col items-center w-full max-w-8xl">
                    <h1 className="section-title">Our Projects</h1>
                    <p className="section-sub font-semibold text-center">
                        From landmark skyscrapers to institutional buildings, Sai Infra has
                        contributed to some of Mumbai&apos;s most ambitious construction projects.
                    </p>
                    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {projects.map((p) => (
                            <ProjectCard key={p.name} p={p} />
                        ))}
                    </div>
                </main>
            </div>
            <Footer compact />
        </>
    );
}
