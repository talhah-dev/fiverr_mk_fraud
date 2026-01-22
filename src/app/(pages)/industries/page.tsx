"use client";

import { AlertTriangle, UserX, ShoppingCart, TrendingDown, Package, Shield, ArrowRight, CheckCircle2, Target, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Wrapper from "@/app/Wrapper";

export default function Industries() {
    const [selectedVector, setSelectedVector] = useState<number | null>(null);

    const fraudVectors = [
        {
            icon: AlertTriangle,
            title: "Scams, Social Engineering & Impersonation",
            whatItLooksLike: [
                "Customers or suppliers deceived into making payments or sharing credentials",
                "Fake support desks, impersonated executives, spoofed communications",
            ],
            whyItPersists: [
                "Low awareness outside fraud teams",
                "Inconsistent verification and escalation paths",
                "Over-reliance on customer vigilance alone",
            ],
            affectedSectors: [
                "Retail & eCommerce",
                "Marketplaces",
                "Mobile Wallets",
                "Telecommunications",
            ],
            gradient: "from-[#1d3658] to-blue-600",
            bgGradient: "from-blue-50 to-slate-50",
        },
        {
            icon: UserX,
            title: "Account, Benefit & Entitlement Abuse",
            whatItLooksLike: [
                "Account takeovers and credential misuse",
                "Abuse of grants, benefits, discounts, or loyalty programmes",
            ],
            whyItPersists: [
                "Weak identity checks after onboarding",
                "Controls designed for access, not misuse",
                "Limited monitoring of entitlement behaviour",
            ],
            affectedSectors: [
                "Public sector & grants",
                "Education & healthcare payments",
                "Loyalty programmes",
            ],
            gradient: "from-blue-600 to-cyan-600",
            bgGradient: "from-cyan-50 to-blue-50",
        },
        {
            icon: ShoppingCart,
            title: "Procurement, Vendor & Third-Party Fraud",
            whatItLooksLike: [
                "Ghost vendors, inflated invoices, kickbacks",
                "Collusion between staff and suppliers",
            ],
            whyItPersists: [
                "Controls focused on paperwork, not behaviour",
                "Poor visibility into third-party relationships",
                "Accountability diluted across functions",
            ],
            affectedSectors: [
                "Property & facilities",
                "Utilities",
                "NGOs",
                "Public sector entities",
            ],
            gradient: "from-cyan-600 to-violet-600",
            bgGradient: "from-violet-50 to-cyan-50",
        },
        {
            icon: TrendingDown,
            title: "Internal Fraud & Collusion",
            whatItLooksLike: [
                "Override abuse, conflicts of interest, policy circumvention",
                "Fraud hidden inside 'trusted' roles",
            ],
            whyItPersists: [
                "Over-trust in senior or long-tenured staff",
                "Weak consequence management",
                "Limited detection beyond whistleblowing",
            ],
            affectedSectors: [
                "Utilities",
                "Property & facilities",
                "Education & healthcare",
                "Public institutions",
            ],
            gradient: "from-violet-600 to-purple-600",
            bgGradient: "from-purple-50 to-violet-50",
        },
        {
            icon: Package,
            title: "Logistics, Fulfilment & Asset Leakage",
            whatItLooksLike: [
                "Delivery fraud, inventory diversion, false confirmations",
                "Assets disappearing between dispatch and receipt",
            ],
            whyItPersists: [
                "Limited end-to-end visibility",
                "Fragmented accountability across vendors",
                "Controls not designed for high-volume environments",
            ],
            affectedSectors: [
                "Logistics & delivery ecosystems",
                "Retail & eCommerce",
            ],
            gradient: "from-purple-600 to-pink-600",
            bgGradient: "from-pink-50 to-purple-50",
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
                                <Target className="h-4 w-4 text-blue-300" />
                                <span className="text-sm font-bold uppercase tracking-wide text-blue-100">
                                    Fraud Vectors
                                </span>
                            </div>

                            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Fraud patterns that{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                        cut across industries
                                    </span>
                                    <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-violet-500/50 blur-xl" />
                                </span>
                            </h1>

                            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 lg:text-2xl">
                                We focus on the <span className="font-bold text-cyan-300">vectors</span> fraudsters exploit — not the sector labels organisations sit under.
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

                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="mb-16 text-center">
                            <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[#1d3658] sm:text-5xl">
                                Fraud Vectors
                            </h2>
                            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600">
                                Click on each vector to explore how fraud manifests across different sectors and why traditional controls often fail to stop it.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {fraudVectors.map((vector, index) => {
                                const Icon = vector.icon;
                                const isSelected = selectedVector === index;

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                    >
                                        <div
                                            className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${vector.gradient} opacity-0 blur-xl transition-all duration-500 ${isSelected ? "opacity-30" : ""
                                                }`}
                                        />

                                        <div
                                            className={`relative overflow-hidden rounded-3xl border-2 bg-white shadow-xl transition-all duration-500 ${isSelected
                                                ? "border-transparent shadow-2xl"
                                                : "border-slate-200 hover:border-slate-300"
                                                }`}
                                        >
                                            <button
                                                onClick={() => setSelectedVector(isSelected ? null : index)}
                                                className="w-full p-8 text-left transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-6">
                                                    <div
                                                        className={`flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${vector.gradient} shadow-lg transition-all duration-500 ${isSelected ? "rotate-12 scale-110" : ""
                                                            }`}
                                                    >
                                                        <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                                                    </div>

                                                    <div className="flex-1">
                                                        <h3 className="mb-2 text-2xl font-bold text-[#1d3658]">
                                                            {vector.title}
                                                        </h3>
                                                        <div className="flex flex-wrap gap-2">
                                                            {vector.affectedSectors.map((sector, idx) => (
                                                                <span
                                                                    key={idx}
                                                                    className={`rounded-full bg-gradient-to-r ${vector.gradient} px-3 py-1 text-xs font-semibold text-white`}
                                                                >
                                                                    {sector}
                                                                </span>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    <div
                                                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 ${isSelected ? "rotate-180" : ""
                                                            }`}
                                                    >
                                                        <ArrowRight
                                                            className={`h-5 w-5 transition-all ${isSelected ? "text-[#1d3658]" : "text-slate-400"
                                                                }`}
                                                        />
                                                    </div>
                                                </div>
                                            </button>

                                            {isSelected && (
                                                <div
                                                    className={`border-t-2 border-slate-200 bg-gradient-to-br ${vector.bgGradient} p-8`}
                                                >
                                                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                                                        <div>
                                                            <div className="mb-4 flex items-center gap-2">
                                                                <Zap className="h-5 w-5 text-[#1d3658]" />
                                                                <h4 className="text-lg font-bold text-[#1d3658]">
                                                                    What it looks like
                                                                </h4>
                                                            </div>
                                                            <div className="space-y-3">
                                                                {vector.whatItLooksLike.map((item, idx) => (
                                                                    <div key={idx} className="flex items-start gap-3">
                                                                        <div className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${vector.gradient}`}>
                                                                            <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                                                                        </div>
                                                                        <p className="text-sm font-medium text-slate-700">
                                                                            {item}
                                                                        </p>
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
                                                                {vector.whyItPersists.map((item, idx) => (
                                                                    <div key={idx} className="flex items-start gap-3">
                                                                        <div className={`mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${vector.gradient}`}>
                                                                            <AlertTriangle className="h-4 w-4 text-white" strokeWidth={3} />
                                                                        </div>
                                                                        <p className="text-sm font-medium text-slate-700">
                                                                            {item}
                                                                        </p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="mt-8 rounded-2xl border-2 border-[#1d3658]/10 bg-white/80 p-6 backdrop-blur-sm">
                                                        <div className="flex items-start gap-3">
                                                            <Shield className="h-6 w-6 flex-shrink-0 text-[#1d3658]" />
                                                            <div>
                                                                <p className="mb-2 text-sm font-bold text-[#1d3658]">
                                                                    Our Approach
                                                                </p>
                                                                <p className="text-sm text-slate-600">
                                                                    Each vector is addressed through a combination of <span className="font-semibold">awareness</span>, <span className="font-semibold">operating controls</span>, and <span className="font-semibold">decision-level accountability</span> — tailored to how your organisation actually functions.
                                                                </p>
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
                    </div>
                </section>

                <section className="relative overflow-hidden bg-gradient-to-br from-[#1d3658] via-blue-800 to-cyan-700">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

                    <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                            <div>
                                <h2 className="mb-6 text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
                                    Not limited by sector labels
                                </h2>
                                <p className="mb-8 text-xl leading-relaxed text-blue-100">
                                    Fraud doesn't respect industry boundaries. The same tactics work across retail, public sector, utilities, and logistics — because they exploit universal weaknesses in controls, awareness, and accountability.
                                </p>

                                <div className="space-y-4">
                                    {[
                                        "Cross-sector fraud patterns require cross-sector solutions",
                                        "Controls designed for how fraud actually happens",
                                        "Awareness training that reflects real threat scenarios",
                                        "Accountability frameworks that work in your context",
                                    ].map((point, index) => (
                                        <div
                                            key={index}
                                            className="flex items-start gap-4 rounded-2xl border-2 border-white/20 bg-white/10 p-5 backdrop-blur-sm"
                                        >
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400">
                                                <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={3} />
                                            </div>
                                            <p className="font-semibold text-white">{point}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-3xl border-2 border-white/20 bg-white/10 p-8 backdrop-blur-xl lg:p-10">
                                <h3 className="mb-6 text-2xl font-bold text-white">
                                    Ready to address your fraud vectors?
                                </h3>
                                <p className="mb-8 text-lg text-blue-100">
                                    Book a call to discuss which fraud patterns are most relevant to your organisation and how we can help you build effective defences.
                                </p>

                                <div className="space-y-4">
                                    <Button className="w-full rounded-xl border-2 border-white/30 bg-white/20 py-6 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/30 hover:shadow-xl">
                                        <span className="flex items-center justify-center gap-2">
                                            Book a Strategy Call
                                            <ArrowRight className="h-5 w-5" />
                                        </span>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="w-full rounded-xl border-2 border-white bg-white py-6 text-lg font-bold text-[#1d3658] transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    >
                                        <span className="flex items-center justify-center gap-2">
                                            View Our Services
                                            <ArrowRight className="h-5 w-5" />
                                        </span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Wrapper>
    );
}