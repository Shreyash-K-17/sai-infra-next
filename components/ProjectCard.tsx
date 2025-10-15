"use client";

import Image from 'next/image';
import Link from "next/link";

type Project = {
    name: string;
    location?: string;
    configuration: string;
    areaLakhSqft?: number;
    imageUrl: string;
};

export default function ProjectCard({ project }: { project: any }) {
    return (
        <Link href={`/projects/${project.slug}`} className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]">

                {project.imageUrl && (
                    <div className="relative w-full h-48 rounded-t-xl overflow-hidden">
                        <Image
                            src={project.imageUrl}
                            alt={project.name}
                            fill
                            style={{ objectFit: "cover" }}
                            className="rounded-t-xl transition-transform duration-500 group-hover:scale-105"
                            priority
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />

                    </div>
                )}

                <div className="p-5">
                    <h2 className="text-xl font-bold text-gray-900">
                        {project.name}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">{project.location}</p>
                </div>
            </div>
        </Link>
    );
}