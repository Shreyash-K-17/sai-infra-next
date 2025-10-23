import { workforce } from "@/lib/data";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

export async function generateStaticParams() {
    return workforce.map((member) => ({ slug: member.slug }));
}

// ✅ FIX HERE: await params
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const member = workforce.find((m) => m.slug === slug);
    if (!member) return {};
    return {
        title: `${member.role} — Team | Sai Infra`,
        description: member.description,
    };
}

// ✅ FIX HERE TOO
export default async function TeamMemberDetail({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const member = workforce.find((m) => m.slug === slug);
    if (!member) return notFound();

    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-sky-100 py-12 px-6 flex items-center justify-center">
<div className="max-w-5xl flex flex-col md:flex-row items-center gap-12 w-full bg-white rounded-3xl p-10 shadow-md">
    {/* Image */}
    <div className="relative w-full md:w-1/2 h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Image
        src={member.imageUrl}
        alt={`Photo of ${member.role}`}
        fill
        className="object-cover object-center"
        unoptimized
      />
    </div>

    {/* Text */}
    <div className="w-full md:w-1/2 space-y-8 text-center md:text-left">
      <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">{member.role}</h1>
      <p className="text-blue-800 font-semibold text-lg tracking-wider">Workforce Count: {member.count}</p>

      <p className="text-gray-700 text-lg leading-7 font-medium">{member.description}</p>
      <p className="text-gray-600 text-base leading-7">
        Every {member.role.toLowerCase()} at Sai Infra contributes to maintaining our reputation for excellence, safety, and innovation.
      </p>

      <a
    href="/team"
    className="inline-block mt-6 px-8 py-3 rounded-full bg-blue-700 text-white font-semibold 
               hover:bg-blue-800 
               transition duration-300 
               shadow-md hover:shadow-lg hover:scale-[1.03]"
    aria-label="Back to Team"
>
    ← Back to Team
</a>
    </div>
  </div>
</main>

            <Footer compact />
        </>
    );
}
