"use client";

import { Shield, Menu, X, ChevronDown, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [isScrolled, setIsScrolled] = useState(false);

    useState(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    });

    const navLinks = [
        { name: "Home", href: "/" },
        {
            name: "Services",
            href: "/services",
            dropdown: [
                { name: "Fraud Health Check", href: "/services#health-check" },
                { name: "Programme Design", href: "/services#programme-design" },
                { name: "Awareness & Resilience", href: "/services#awareness" },
                { name: "Internal Controls", href: "/services#controls" },
            ],
        },
        { name: "Industries", href: "/industries" },
        { name: "About", href: "/about" },
        { name: "Insights", href: "/insights" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <nav
            className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${isScrolled
                ? "border-b border-slate-200 bg-white/95 shadow-lg backdrop-blur-xl"
                : "bg-white"
                }`}
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="flex h-20 md:h-24 items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d3658] via-blue-600 to-cyan-600 shadow-lg">
                            <Shield className="h-7 w-7 text-white" strokeWidth={2.5} />
                        </div>
                        <div>
                            <h1 className="bg-gradient-to-r from-[#1d3658] via-blue-700 to-cyan-700 bg-clip-text text-xl font-bold text-transparent">
                                MK Fraud Insights
                            </h1>
                            <p className="text-xs font-medium text-slate-600">
                                Fraud Risk Strategy
                            </p>
                        </div>
                    </div>

                    <div className="hidden items-center gap-8 lg:flex">
                        {navLinks.map((link) => (
                            <div
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                                onMouseLeave={() => setActiveDropdown(null)}
                            >
                                <Link
                                    href={link.href}
                                    className="group flex items-center py-3 gap-1 font-semibold text-slate-700 transition-colors hover:text-blue-600"
                                >
                                    {link.name}
                                    {link.dropdown && (
                                        <ChevronDown
                                            className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
                                                }`}
                                        />
                                    )}
                                </Link>

                                {link.dropdown && activeDropdown === link.name && (
                                    <div className="absolute left-0 top-full mt-0 w-64 overflow-hidden rounded-2xl border-2 border-slate-200 bg-white shadow-2xl">
                                        <div className="p-2">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="group flex items-center gap-3 rounded-xl p-3 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50"
                                                >
                                                    <div className="flex h-2 w-2 rounded-full bg-gradient-to-r from-[#1d3658] to-blue-600 opacity-0 transition-opacity group-hover:opacity-100" />
                                                    <span className="font-semibold text-slate-700 transition-colors group-hover:text-[#1d3658]">
                                                        {item.name}
                                                    </span>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <div className="hidden items-center gap-4 lg:flex">
                        <Link
                            href="tel:+27123456789"
                            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-[#1d3658]"
                        >
                            <Phone className="h-4 w-4" />
                            <span className="hidden xl:inline">+27 123 456 789</span>
                        </Link>
                        <Link href={"/contact"}>
                            <Button className="group relative overflow-hidden bg-gradient-to-r from-[#1d3658] to-blue-600 px-16 py-6 font-bold shadow-lg transition-all duration-300 hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30">
                                <Mail className="h-6 w-6" />
                                Book a Call
                            </Button>
                        </Link>
                    </div>

                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="flex h-10 w-10 items-center justify-center rounded-lg border-2 border-slate-200 bg-white transition-all duration-300 hover:border-[#1d3658] hover:bg-slate-50 lg:hidden"
                    >
                        {isMobileMenuOpen ? (
                            <X className="h-5 w-5 text-[#1d3658]" />
                        ) : (
                            <Menu className="h-5 w-5 text-[#1d3658]" />
                        )}
                    </button>
                </div>

                <div
                    className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen
                        ? "max-h-[800px] opacity-100"
                        : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="border-t border-slate-200 py-4">
                        <div className="space-y-1">
                            {navLinks.map((link) => (
                                <div key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="flex items-center justify-between rounded-xl p-4 font-semibold text-slate-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:text-[#1d3658]"
                                        onClick={() => {
                                            if (link.dropdown) {
                                                setActiveDropdown(
                                                    activeDropdown === link.name ? null : link.name
                                                );
                                            } else {
                                                setIsMobileMenuOpen(false);
                                            }
                                        }}
                                    >
                                        {link.name}
                                        {link.dropdown && (
                                            <ChevronDown
                                                className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === link.name ? "rotate-180" : ""
                                                    }`}
                                            />
                                        )}
                                    </Link>
                                    {link.dropdown && activeDropdown === link.name && (
                                        <div className="ml-4 space-y-1 border-l-2 border-slate-200 pl-4">
                                            {link.dropdown.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className="block rounded-lg p-3 text-sm font-medium text-slate-600 transition-all duration-300 hover:bg-blue-50 hover:text-[#1d3658]"
                                                    onClick={() => setIsMobileMenuOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                        <div className="mt-4 space-y-3 border-t border-slate-200 pt-4">
                            <Link
                                href="tel:+27123456789"
                                className="flex items-center gap-3 rounded-xl border-2 border-slate-200 bg-white p-4 font-semibold text-slate-700 transition-all duration-300 hover:border-[#1d3658] hover:bg-slate-50"
                            >
                                <Phone className="h-5 w-5 text-[#1d3658]" />
                                +27 123 456 789
                            </Link>
                            <Link href={"/contact"}>
                                <Button className="w-full rounded-xl bg-gradient-to-r from-[#1d3658] via-blue-600 to-cyan-600 py-4 font-bold shadow-lg">
                                    <span className="flex items-center justify-center gap-2">
                                        <Mail className="h-5 w-5" />
                                        Book a Call
                                    </span>
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
