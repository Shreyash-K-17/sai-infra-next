"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { lightEquipment } from "@/lib/data";
import { heavyEquipment } from "@/lib/data";

export default function Equipment() {
    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-b from-blue-10 to-blue-50 border-b">
                <main className="section container flex flex-col items-center w-full max-w-7xl">
                    <h1 className="section-title">Our Equipment</h1>
                    <p className="section-sub text-center font-semibold max-w-2xl">
                        Sai Infra utilizes modern machinery and tools to ensure efficiency
                        and quality in every project.
                    </p>

                    {/* Lightweight Equipment Section */}
                    <section className="mt-12 w-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
                            Lightweight Equipment
                        </h2>

                        <ul className="mt-8 grid grid-cols-1 p-3 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                            {lightEquipment.map((tool, i) => (
                                <li
                                    key={i}
                                    className="bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 
                  hover:scale-105 hover:shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto group"
                                >
                                    <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-50 flex items-center justify-center p-4">
                                        <Image
                                            src={tool.image}
                                            alt={tool.name}
                                            width={400}
                                            height={200}
                                            className="object-contain max-h-full w-auto transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3 text-center bg-white">
                                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 tracking-tight">
                                            {tool.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-medium md:text-base text-gray-600 leading-relaxed">
                                            {tool.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>

                    {/* Heavy Equipment Section */}
                    <section className="mt-20 w-full">
                        <h2 className="text-2xl md:text-3xl font-bold text-black text-center mb-6">
                            Heavy Duty Equipment
                        </h2>

                        <ul className="mt-8 grid grid-cols-1 p-3 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
                            {heavyEquipment.map((tool, i) => (
                                <li
                                    key={i}
                                    className="bg-white shadow-md rounded-2xl overflow-hidden transform transition duration-300 
                  hover:scale-105 hover:shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto group"
                                >
                                    <div className="relative w-full h-40 sm:h-48 md:h-56 bg-gray-50 flex items-center justify-center p-4">
                                        <Image
                                            src={tool.image}
                                            alt={tool.name}
                                            width={400}
                                            height={200}
                                            className="object-contain max-h-full w-auto transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="p-4 sm:p-5 md:p-6 flex flex-col gap-3 text-center bg-white">
                                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 tracking-tight">
                                            {tool.name}
                                        </h3>
                                        <p className="text-xs sm:text-sm font-medium md:text-base text-gray-600 leading-relaxed">
                                            {tool.description}
                                        </p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </section>
                </main>
            </div>
            <Footer compact />
        </>
    );
}
