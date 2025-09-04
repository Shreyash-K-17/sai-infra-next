export default function Footer() {
return (
<footer className="mt-20 border-t border-gray-200">
<div className="container w-full px-4 py-8 text-sm text-gray-600 flex flex-col md:flex-row items-center justify-between gap-4">
<p>© {new Date().getFullYear()} Sai Infra Group. All rights reserved.</p>
<div className="flex gap-6">
<a href="#projects" className="hover:underline">Projects</a>
<a href="/contact" className="hover:underline">Contact</a>
<a href="mailto:sai.infragroup786@gmail.com" className="hover:underline">Email</a>
</div>
</div>
</footer>
);
}