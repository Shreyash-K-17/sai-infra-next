"use client";

import Image from 'next/image';

type Project = {
    name: string;
    location?: string;
    configuration: string;
    areaLakhSqft?: number;
    imageUrl?: string;
};

export default function ProjectCard({ p }: { p: Project }) {
    return (
        <article
            className="card p-3 sm:p-5 relative overflow-hidden w-full max-w-xs sm:max-w-md mx-auto flex flex-col justify-center items-center 
  h-48 sm:h-64 md:h-72 lg:h-80 transform transition duration-300 hover:scale-105 hover:shadow-xl group"
        >
            {p.imageUrl && (
                <div className="absolute inset-0 z-0">
                    <Image
                        src={p.imageUrl}
                        alt={`Image of ${p.name}`}
                        fill
                        style={{ objectFit: 'cover' }}
                        className="opacity-70 transition duration-300 group-hover:opacity-40"
                    />
                </div>
            )}

            {/* Text Box */}
            <div
                className="relative z-10 bg-black/30 group-hover:bg-white/90 transition-colors duration-300 
    p-2 sm:p-3 md:p-4 rounded w-full text-center"
            >
                <h3
                    className="text-sm sm:text-lg md:text-xl font-semibold text-white group-hover:text-gray-900"
                >
                    {p.name}
                </h3>
                {p.location && (
                    <p className="text-xs sm:text-sm md:text-base text-white/80 group-hover:text-gray-700 mt-1">
                        {p.location}
                    </p>
                )}
                <p className="mt-1 sm:mt-2 text-xs sm:text-sm md:text-base text-white group-hover:text-gray-800">
                    {p.configuration}
                </p>
                {p.areaLakhSqft && (
                    <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg font-medium text-white group-hover:text-gray-900">
                        Area: {p.areaLakhSqft} Lacs sq.ft
                    </p>
                )}
            </div>
        </article>

    );
}
