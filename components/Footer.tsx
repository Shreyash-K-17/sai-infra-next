import Link from "next/link";


export default function Footer({ compact = false }: { compact?: boolean }) {
    return (
        <footer
            className={`${compact ? "mt-0" : "mt-20"
                } border-t border-gray-200 bg-white text-gray-600`}
        >
            <div className="container mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
                {/* Company Info */}
                <div className="space-y-3">
                    <h2 className="text-lg font-semibold text-gray-900">Sai Infra Group</h2>
                    <p className="text-sm text-gray-500">
                        Building high-rise and super high-rise excellence in Mumbai since 2018.
                    </p>
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/about" className="hover:text-blue-600 transition-colors duration-200">About</Link></li>
                        <li><Link href="/projects" className="hover:text-blue-600 transition-colors duration-200">Projects</Link></li>
                        <li><Link href="/team" className="hover:text-blue-600 transition-colors duration-200">Team</Link></li>
                        <li><Link href="/equipment" className="hover:text-blue-600 transition-colors duration-200">Equipment</Link></li>
                        <li><Link href="/financials" className="hover:text-blue-600 transition-colors duration-200">Financials</Link></li>
                        <li><Link href="/contact" className="hover:text-blue-600 transition-colors duration-200">Contact</Link></li>
                    </ul>
                </div>

                {/* Social Media */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">Follow Us</h3>
                    <div className="flex flex-col space-y-2 text-sm">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
                            Facebook
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-pink-500 transition-colors duration-200">
                            Instagram
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-blue-700 transition-colors duration-200">
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3">
                    <h3 className="text-sm font-semibold text-gray-900">Contact</h3>
                    <p className="text-sm flex items-center gap-2">📍 Dadar (W), Mumbai</p>
                    <p className="text-sm flex items-center gap-2">📞 9702100956</p>
                    <p className="text-sm flex items-center gap-2">
                        ✉️ <a href="mailto:sai.infragroup786@gmail.com" className="hover:text-gray-900 transition-colors duration-200">
                            sai.infragroup786@gmail.com
                        </a>
                    </p>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-200 py-4 text-center text-sm text-gray-500">
                © {new Date().getFullYear()} Sai Infra Group. All rights reserved.
            </div>
        </footer>
    );
}