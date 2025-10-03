"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { company } from "@/lib/data";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"public" | "private">("public");
  return (
    <>
      <Navbar />

      <section className="bg-gradient-to-b from-white to-blue-50 border-b border-gray-200">
        {/* Hero Section */}
        <main className="section justify-center border-b items-start w-full place-items-center px-4 py-12 md:py-20 mb-0">
          <div className="container grid md:grid-cols-2 items-center justify-center gap-10">
            {/* Text Section */}
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                High-Rise Construction Excellence
              </h1>
              <p className="mt-4 text-lg font-medium text-gray-800 leading-relaxed max-w-prose">
                Established in {company.founded}, {company.name} delivers
                shuttering, reinforcement, and
                concreting work for
                high-rise and super high-rise projects across Mumbai.
              </p>
              <p className="mt-3 text-lg font-semibold text-gray-900 leading-relaxed">
                We&apos;re happy to help you!
              </p>
              <Link
                href="/contact"
                className="btn btn-primary mt-6 inline-block rounded-full px-8 py-3 font-semibold text-white bg-blue-700 hover:bg-blue-800 transition duration-300 shadow"
              >
                Get in Touch
              </Link>
            </div>

            {/* Image Section */}
            <div className="flex justify-center">
              <img
                src="https://capacite.in/wp-content/uploads/2024/07/DSC_9270-scaled.jpg"
                alt="Sai Infra Construction"
                className="rounded-xl shadow-lg w-full max-w-sm md:max-w-md transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </main>

        {/* Culture of Excellence Section */}
        <section className="section px-4 py-16 text-center">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Our Culture of Excellence
            </h2>
            <p className="mt-4 text-lg font-medium text-gray-800 leading-relaxed">
              Since {company.founded}, {company.name} has built a reputation for
              quality,
              reliability, and
              timely delivery of ambitious
              projects across Mumbai.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="container mx-auto mt-12 grid gap-8 md:grid-cols-3 text-center">
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-gray-900">🏗️ Quality</h3>
              <p className="mt-3 font-medium text-gray-700 leading-relaxed">
                Delivering precision in every project with world-class standards.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-gray-900">🤝 Reliability</h3>
              <p className="mt-3 font-medium text-gray-700 leading-relaxed">
                Trusted by top developers for consistent and timely execution.
              </p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
              <h3 className="text-xl font-bold text-gray-900">💡 Innovation</h3>
              <p className="mt-3 font-medium text-gray-700 leading-relaxed">
                Leveraging new techniques and equipment for smarter construction.
              </p>
            </div>
          </div>
        </section>
      </section>



      {/* Elite Clientele Section */}
      <section className="section px-6 py-16 bg-white border-t border-gray-200 text-center">
        <div className="container mx-auto max-w-7xl"> {/* wider than before */}
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Our Elite Clients
          </h2>
          <p className="mt-4 font-medium text-gray-600">
            SaiInfra culture of excellence has attracted industry respect
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center my-8">
            <button
              onClick={() => setActiveTab("public")}
              className={`px-6 py-2 border rounded-r text-lg font-medium shadow-md border-orange-300 
              transition-all duration-300 
              ${activeTab === "public"
                  ? "bg-blue-300 text-black hover:bg-blue-100"
                  : "bg-white text-black hover:bg-blue-100"
                }`}
            >
              Public Client
            </button>
            <button
              onClick={() => setActiveTab("private")}
              className={`px-6 py-2 border rounded-r text-lg font-medium shadow-md border-orange-300 
              transition-all duration-300 
              ${activeTab === "private"
                  ? "bg-blue-300 text-black hover:bg-blue-100"
                  : "bg-white text-black hover:bg-blue-100"
                } ml-[-1px]`}

            >
              Private Client
            </button>
          </div>

          {/* Public Clients */}
          {activeTab === "public" && (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
              <Image src="https://capacite.in/wp-content/uploads/2024/06/client-logo-2.jpg" alt="MHADA" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/03.jpg" alt="CIDCO" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/10.jpg" alt="BSNL" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2025/04/client-logo-1.jpg" alt="NBCC" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2025/04/pwd.jpg" alt="PWD" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2025/04/bmc.jpg" alt="BMC" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/08.jpg" alt="Rail Vikas Nigam" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/06.jpg" alt="IOCL" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/07.jpg" alt="GIFT City" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2025/04/1.jpg" alt="ICT" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2025/04/jnpa.jpg" alt="JNPA" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/client-logo-1.jpg" alt="MMRDA" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2025/05/08.jpg" alt="NHSRCL" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
            </div>
          )}

          {activeTab === "private" && (
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
              <Image src="https://capacite.in/wp-content/uploads/2025/09/Hinduja-Group-Logo.png" alt="Hinduja" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/12.jpg" alt="Oberoi" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/17.jpg" alt="Raymond" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/11.jpg" alt="Hiranandani" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/BRIGADE-GROUP17.png" alt="Brigade" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2025/04/signature.jpg" alt="Piramal" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/TATA-TRUST.png" alt="Tata Trust" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2025/04/shefi.jpg" alt="Transcon" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/16.jpg" alt="Rustomjee" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/13.jpg" alt="Brookfield" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2025/04/kalpataru.jpg" alt="Kalpataru" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/BROOKFIELD-1.png" alt="Emaar MGF" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/GIC-SINGAPORE.png" alt="Wadhwa" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
              <Image src="https://capacite.in/wp-content/uploads/2024/06/15.jpg" alt="Saifee Burhani Trust" width={96} height={96} className="mx-auto transition-transform duration-300 hover:scale-110 hover:opacity-80" />
            </div>
          )}
        </div>
      </section>




      <Footer compact />
    </>
  );
}
