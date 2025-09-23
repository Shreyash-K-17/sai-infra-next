"use client";

import { useState } from 'react';

type Project = {
    name: string;
    location?: string;
    configuration: string;
    areaLakhSqft?: number;
    imageUrl?: string;
};

export default function ProjectCard({ p }: { p: Project }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article
            className="card p-3 sm:p-5 relative overflow-hidden w-full max-w-xs sm:max-w-md mx-auto flex flex-col justify-center items-center 
             h-48 sm:h-64 md:h-72 lg:h-80 transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
            {/* Image as background */}
            {p.imageUrl && (
                <img
                    src={p.imageUrl}
                    alt={`Image of ${p.name}`}
                    className="absolute inset-0 w-full h-full object-cover opacity-70 z-0"
                />
            )}

            {/* Text with semi-transparent background */}
            <div className="relative z-10 bg-black/30 p-2 sm:p-3 md:p-4 rounded w-full text-center">
                <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white">{p.name}</h3>
                {p.location && (
                    <p className="text-xs sm:text-sm md:text-base text-white/80 mt-1">{p.location}</p>
                )}
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white">{p.configuration}</p>
                {p.areaLakhSqft && (
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-medium text-white">
                        Area: {p.areaLakhSqft} Lacs sq.ft
                    </p>
                )}
            </div>
        </article>




    );
}
