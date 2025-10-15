import { projects } from "@/lib/data";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

interface ProjectDetailProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
  const { slug } = await params;
  const project = projects.find(p => p.slug === slug);

  if (!project) return notFound();

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-sky-200 px-2 py-8 md:py-16">
                <div className="mx-auto max-w-5xl flex flex-col items-stretch gap-4 md:gap-8">

                    {/* HERO IMAGE + FLOAT CARD */}
                    <section className="relative rounded-3xl overflow-hidden min-h-72 flex items-end shadow-2xl transition-transform duration-500 hover:scale-[1.01] hover:shadow-3xl">
                        {project.imageUrl && (
                            <div className="relative w-full h-80 md:h-[28rem] rounded-3xl overflow-hidden flex items-end shadow-2xl">
                                <Image
                                    src={project.imageUrl}
                                    alt={project.name}
                                    fill
                                    style={{ objectFit: "cover", objectPosition: "center" }}
                                    className="transition-all duration-700 hover:brightness-110 hover:scale-105"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/60 via-transparent to-transparent"></div>
                            </div>
                        )}
                        <div className="absolute bottom-0 left-0 right-0 px-6 py-5 md:py-8 bg-white/70 backdrop-blur-md shadow-md rounded-b-2xl transition-all duration-500">
                            <h1 className="text-2xl md:text-4xl font-extrabold text-gray-900">{project.name}</h1>
                            <p className="text-sm md:text-lg text-blue-900/90 mt-1 font-medium transition-colors duration-300 hover:text-sky-900">
                                {project.location}
                            </p>
                        </div>
                    </section>

                    {/* INFO PANEL AND DETAILS */}
                    <section className="w-full flex flex-col md:flex-row gap-8 mt-6">
                        {/* INFO CARD */}
                        <div className="md:w-1/3 flex-col gap-6 flex">
                            <div className="rounded-2xl bg-white/80 shadow-lg border border-sky-100 p-5 flex flex-col gap-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white">
                                <span className="block text-gray-700 font-bold text-md mb-1">Configuration</span>
                                <h2 className="font-semibold text-sky-800 text-lg">{project.configuration}</h2>
                            </div>
                            <div className="rounded-2xl bg-white/80 shadow-lg border border-sky-100 p-5 flex flex-col gap-2 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-white">
                                <span className="block text-gray-700 font-bold text-md mb-1">Area</span>
                                <h2 className="text-sky-800 text-lg font-semibold">{project.areaLakhSqft} Lakh sq.ft</h2>
                            </div>
                            {project.highlights && (
                                <div className="rounded-2xl bg-blue-50/80 shadow-md border border-sky-100 p-5 flex flex-col gap-2 mt-4 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:bg-blue-100/90">
                                    <h3 className="font-bold text-blue-900 text-base mb-2 tracking-wide transition-colors duration-300 hover:text-sky-800">
                                        Key Highlights
                                    </h3>
                                    <ul className="flex flex-col gap-1 text-sm">
                                        {project.highlights.map((item, idx) => (
                                            <li key={idx} className="transition-transform duration-300 hover:translate-x-1">
                                                <span className="text-gray-700">{item.title}:</span>{" "}
                                                <span className="font-semibold text-blue-700">{item.text}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>

                        {/* DETAILS PANEL */}
                        <div className="md:w-2/3 flex flex-col gap-7 md:justify-center py-4">
                            <div className="bg-white/80 backdrop-blur rounded-2xl p-7 md:p-12 shadow-xl border border-sky-100 space-y-5 transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] hover:bg-white">
                                <p className="text-lg md:text-2xl text-gray-900 leading-snug font-medium transition-colors duration-300 hover:text-sky-800">
                                    {project.description}
                                </p>
                                <p className="text-base md:text-lg text-sky-900/80 transition-colors duration-300 hover:text-sky-950">
                                    {project.details}
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer compact />
        </>
    );
}
