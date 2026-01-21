"use client";

import { Mail, Linkedin, ArrowRight, Shield, MapPin, ExternalLink } from "lucide-react";
import { useState } from "react";

export default function Footer() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Services", href: "#" },
    { name: "Industries", href: "#" },
    { name: "Insights", href: "#" },
  ];

  const serviceLinks = [
    { name: "Fraud Health Check", href: "#" },
    { name: "Fraud Programme Design", href: "#" },
    { name: "Awareness & Resilience", href: "#" },
    { name: "Internal Fraud Controls", href: "#" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-[#0f172a] to-slate-900">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-[#1d3658]/20 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-600/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6 inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d3658] via-blue-600 to-cyan-600 shadow-lg shadow-blue-500/30">
                <Shield className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <h3 className="bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-xl font-black text-transparent">
                MK Fraud Insights
              </h3>
            </div>
            <p className="mb-6 text-sm leading-relaxed text-slate-400">
              Specialist fraud risk and strategy consultancy helping
              organisations move beyond reactive controls toward resilient,
              intelligence-led fraud programmes.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-500/50 hover:bg-gradient-to-br hover:from-[#1d3658] hover:to-blue-600 hover:shadow-lg hover:shadow-blue-500/30"
              >
                <Linkedin className="h-5 w-5 text-slate-400 transition-colors group-hover:text-white" />
              </a>
              <a
                href="#"
                className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-cyan-500/50 hover:bg-gradient-to-br hover:from-cyan-600 hover:to-blue-600 hover:shadow-lg hover:shadow-cyan-500/30"
              >
                <Mail className="h-5 w-5 text-slate-400 transition-colors group-hover:text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <div className="h-1 w-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500" />
              Company
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-2 hover:text-blue-400"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <ArrowRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        hoveredLink === link.name ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <div className="h-1 w-8 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500" />
              Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-slate-400 transition-all duration-300 hover:translate-x-2 hover:text-cyan-400"
                    onMouseEnter={() => setHoveredLink(link.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    <ArrowRight
                      className={`h-4 w-4 transition-all duration-300 ${
                        hoveredLink === link.name ? "opacity-100" : "opacity-0"
                      }`}
                    />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-white">
              <div className="h-1 w-8 rounded-full bg-gradient-to-r from-violet-500 to-purple-500" />
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hello@mkfraud.co.za"
                className="group flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/30 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-blue-500/50 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#1d3658] to-blue-600 shadow-lg">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Email</p>
                  <p className="text-sm text-white">hello@mkfraud.co.za</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-slate-600 transition-all group-hover:text-blue-400" />
              </a>

              <a
                href="#"
                className="group flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/30 p-3 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-500/50 hover:bg-slate-800/60 hover:shadow-lg hover:shadow-cyan-500/20"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-600 to-blue-600 shadow-lg">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Connect</p>
                  <p className="text-sm text-white">LinkedIn Profile</p>
                </div>
                <ExternalLink className="ml-auto h-4 w-4 text-slate-600 transition-all group-hover:text-cyan-400" />
              </a>

              <div className="flex items-center gap-3 rounded-xl border border-slate-700/50 bg-slate-800/30 p-3 backdrop-blur-sm">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-purple-600 shadow-lg">
                  <MapPin className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-slate-500">Location</p>
                  <p className="text-sm text-white">South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-slate-700/50 bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 backdrop-blur-xl lg:p-12">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-cyan-600/5 to-violet-600/5" />
            
            <div className="relative flex flex-col items-center gap-6 text-center lg:flex-row lg:justify-between lg:text-left">
              <div className="max-w-xl">
                <h3 className="mb-2 text-2xl font-bold text-white lg:text-3xl">
                  Ready to strengthen your fraud defences?
                </h3>
                <p className="text-slate-400">
                  Get expert guidance tailored to your organisation's unique risk profile.
                </p>
              </div>
              <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1d3658] via-blue-600 to-cyan-600 px-8 py-4 font-bold text-white shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
                <span className="relative z-10 flex items-center gap-2">
                  Get Started Today
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-[#1d3658] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-700/50 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-slate-500 lg:flex-row lg:text-left">
            <p>
              © {new Date().getFullYear()} MK Fraud Insights. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-6">
              <a href="#" className="transition-colors hover:text-blue-400">
                Privacy Policy
              </a>
              <a href="#" className="transition-colors hover:text-blue-400">
                Terms of Service
              </a>
              <a href="#" className="transition-colors hover:text-blue-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}