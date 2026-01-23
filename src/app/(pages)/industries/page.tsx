"use client";

import { ShoppingCart, Truck, Building2, Zap, GraduationCap, Globe, AlertTriangle, ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Wrapper from "@/app/Wrapper";

export default function Industries() {
    const [selectedIndustry, setSelectedIndustry] = useState<number | null>(null);

    const industries = [
        {
            icon: ShoppingCart,
            title: "Retail & Consumer Businesses",
            whatItLooksLike: [
                "Refund abuse, returns manipulation, and false claims",
                "Loyalty and rewards programme exploitation",
                "Employee-assisted theft and internal collusion",
            ],
            whyItPersists: [
                "High transaction volumes mask small but frequent abuse",
                "Frontline staff are pressured to prioritise customer experience over controls",
                "Limited visibility across channels (in-store, online, customer service)",
            ],
            affects: [
                "Revenue leakage",
                "Customer trust",
                "Staff morale and accountability",
            ],
            gradient: "from-[#1d3658] to-blue-600",
            bgGradient: "from-blue-50 to-slate-50",
        },
        {
            icon: Truck,
            title: "Logistics, Distribution & Supply Chains",
            whatItLooksLike: [
                "Ghost deliveries and falsified proof of delivery",
                "Inventory shrinkage and stock diversion",
                "Supplier and employee collusion",
            ],
            whyItPersists: [
                "Heavy reliance on manual processes and third-party operators",
                "Weak reconciliation between physical movement and system records",
                "Limited oversight across extended supply chains",
            ],
            affects: [
                "Cost of goods sold",
                "Operational efficiency",
                "Supplier relationships",
            ],
            gradient: "from-blue-600 to-cyan-600",
            bgGradient: "from-cyan-50 to-blue-50",
        },
        {
            icon: Building2,
            title: "Public Sector & State-Linked Entities",
            whatItLooksLike: [
                "Procurement manipulation and bid rigging",
                "Identity misuse and benefit fraud",
                "Asset misappropriation",
            ],
            whyItPersists: [
                "Complex procurement rules create loopholes",
                "Fragmented accountability and oversight",
                "Limited consequences for control failures",
            ],
            affects: [
                "Public funds",
                "Institutional credibility",
                "Service delivery",
            ],
            gradient: "from-cyan-600 to-violet-600",
            bgGradient: "from-violet-50 to-cyan-50",
        },
        {
            icon: Zap,
            title: "Utilities & Infrastructure Providers",
            whatItLooksLike: [
                "Meter tampering and usage manipulation",
                "Billing fraud and account interference",
                "Contractor and maintenance collusion",
            ],
            whyItPersists: [
                "Legacy systems with limited monitoring",
                "Operational focus on continuity over control",
                "Large physical networks that are hard to supervise",
            ],
            affects: [
                "Revenue assurance",
                "Infrastructure sustainability",
                "Customer trust",
            ],
            gradient: "from-violet-600 to-purple-600",
            bgGradient: "from-purple-50 to-violet-50",
        },
        {
            icon: GraduationCap,
            title: "Education, Healthcare & Social Services",
            whatItLooksLike: [
                "False claims and eligibility abuse",
                "Procurement and supplier fraud",
                "Identity and access misuse",
            ],
            whyItPersists: [
                "High administrative complexity",
                "Trust-based operating models",
                "Underinvestment in fraud controls",
            ],
            affects: [
                "Funding and budgets",
                "Service quality",
                "Reputational integrity",
            ],
            gradient: "from-purple-600 to-pink-600",
            bgGradient: "from-pink-50 to-purple-50",
        },
        {
            icon: Globe,
            title: "Digital Platforms & Service Providers",
            whatItLooksLike: [
                "Account takeovers and identity abuse",
                "Platform manipulation and policy exploitation",
                "Insider-enabled abuse",
            ],
            whyItPersists: [
                "Rapid scaling without proportional control design",
                "Reliance on automated decisioning without human oversight",
                "Misalignment between product growth and risk management",
            ],
            affects: [
                "Platform integrity",
                "User trust",
                "Regulatory exposure",
            ],
            gradient: "from-[#1d3658] to-blue-600",
            bgGradient: "from-blue-50 to-slate-50",
        },
    ];

    return (
        <Wrapper>
            <div className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1d3658] to-slate-800">
                    <div className="absolute inset-0">
                        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-3xl" />
                        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
                        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
                    </div>

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

                    <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
                                <AlertTriangle className="h-4 w-4 text-blue-300" />
                                <span className="text-sm font-bold uppercase tracking-wide text-blue-100">
                                    Industry Focus
                                </span>
                            </div>

                            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Fraud risk does not follow{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                        industry labels
                                    </span>
                                    <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-violet-500/50 blur-xl" />
                                </span>
                            </h1>

                            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 lg:text-2xl">
                                It follows operational patterns, incentives, and control weaknesses. We focus on how fraud manifests in real operating environments — not generic sector classifications.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#1d3658]/5 blur-3xl" />
                        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
                    </div>

                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32 lg:pt-20">
                        <div className="space-y-6">
                            {industries.map((industry, index) => {
                                const Icon = industry.icon;
                                const isSelected = selectedIndustry === index;

                                return (
                                    <div key={index} className="group relative">
                                        <div
                                            className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${industry.gradient} opacity-0 blur-xl transition-all duration-500 ${isSelected ? "opacity-30" : ""
                                                }`}
                                        />

                                        <div
                                            className={`relative overflow-hidden rounded-3xl border-2 bg-white shadow-xl transition-all duration-500 ${isSelected
                                                ? "border-transparent shadow-2xl"
                                                : "border-slate-200 hover:border-slate-300"
                                                }`}
                                        >
                                            <button
                                                onClick={() => setSelectedIndustry(isSelected ? null : index)}
                                                className="w-full p-8 text-left transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-6 justify-between">
                                                    <div className="flex md:flex-row flex-col gap-6 md:items-center">
                                                        <div
                                                            className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${industry.gradient} shadow-lg transition-all duration-500 ${isSelected ? "rotate-12 scale-110" : ""
                                                                }`}
                                                        >
                                                            <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                                                        </div>

                                                        <div className="flex-1">
                                                            <h3 className="text-2xl font-bold text-[#1d3658]">
                                                                {industry.title}
                                                            </h3>
                                                        </div>
                                                    </div>

                                                    <div
                                                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 ${isSelected ? "rotate-180" : ""
                                                            }`}
                                                    >
                                                        <svg
                                                            className={`h-5 w-5 transition-all ${isSelected ? "text-[#1d3658]" : "text-slate-400"
                                                                }`}
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 9l-7 7-7-7"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </button>

                                            {isSelected && (
                                                <div className={`border-t-2 border-slate-200 bg-gradient-to-br ${industry.bgGradient} p-8`}>
                                                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                                                        <div>
                                                            <div className="mb-4 flex items-center gap-2">
                                                                <AlertTriangle className="h-5 w-5 text-[#1d3658]" />
                                                                <h4 className="text-lg font-bold text-[#1d3658]">
                                                                    What it looks like
                                                                </h4>
                                                            </div>
                                                            <div className="space-y-3">
                                                                {industry.whatItLooksLike.map((item, idx) => (
                                                                    <div key={idx} className="flex items-start gap-2">
                                                                        <span className="mt-1 text-[#1d3658]">•</span>
                                                                        <p className="text-sm font-medium text-slate-700">{item}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="mb-4 flex items-center gap-2">
                                                                <AlertTriangle className="h-5 w-5 text-[#1d3658]" />
                                                                <h4 className="text-lg font-bold text-[#1d3658]">
                                                                    Why it persists
                                                                </h4>
                                                            </div>
                                                            <div className="space-y-3">
                                                                {industry.whyItPersists.map((item, idx) => (
                                                                    <div key={idx} className="flex items-start gap-2">
                                                                        <span className="mt-1 text-[#1d3658]">•</span>
                                                                        <p className="text-sm font-medium text-slate-700">{item}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>

                                                        <div>
                                                            <div className="mb-4 flex items-center gap-2">
                                                                <CheckCircle2 className="h-5 w-5 text-[#1d3658]" />
                                                                <h4 className="text-lg font-bold text-[#1d3658]">
                                                                    Affects
                                                                </h4>
                                                            </div>
                                                            <div className="space-y-3">
                                                                {industry.affects.map((item, idx) => (
                                                                    <div key={idx} className="flex items-start gap-2">
                                                                        <span className="mt-1 text-[#1d3658]">•</span>
                                                                        <p className="text-sm font-medium text-slate-700">{item}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-16 rounded-3xl border-2 border-[#1d3658]/10 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 lg:p-10">
                            <div className="flex items-start gap-4">
                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d3658] to-blue-600">
                                    <CheckCircle2 className="h-6 w-6 text-white" />
                                </div>
                                <div>
                                    <p className="mb-2 text-lg font-bold text-[#1d3658]">
                                        Our Focus
                                    </p>
                                    <p className="leading-relaxed text-slate-700">
                                        Across industries, fraud thrives where controls are misaligned with how work actually gets done. Our focus is on identifying those gaps — and helping organisations close them practically.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-gradient-to-br from-[#1d3658] via-blue-800 to-cyan-700">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

                    <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                            <div>
                                <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                                    Ready to address fraud risk in your industry?
                                </h2>
                                <p className="mb-8 text-xl leading-relaxed text-blue-100">
                                    Book a call to discuss how fraud manifests in your operating environment and how we can help you build effective defences.
                                </p>

                                <div className="space-y-4">
                                    <Button className="w-full rounded-xl border-2 border-white/30 bg-white/20 py-6 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/30 hover:shadow-xl sm:w-auto">
                                        <span className="flex items-center justify-center gap-2">
                                            Book a Strategy Call
                                            <ArrowRight className="h-5 w-5" />
                                        </span>
                                    </Button>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { number: "6", label: "Industry Sectors" },
                                    { number: "15+", label: "Fraud Patterns" },
                                    { number: "50+", label: "Clients Served" },
                                    { number: "100%", label: "Customized Solutions" },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl border-2 border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20"
                                    >
                                        <div className="mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-4xl font-bold text-transparent">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm font-medium text-blue-100">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Wrapper>
    );
}