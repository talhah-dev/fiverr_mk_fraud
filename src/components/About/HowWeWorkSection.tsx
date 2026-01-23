"use client";

import { Target, Users, Shield, Zap, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function HowWeWorkSection() {
    const [hoveredPrinciple, setHoveredPrinciple] = useState<number | null>(null);

    const principles = [
        {
            icon: Target,
            title: "Practical",
            description: "Grounded in operational reality",
            detail: "We design solutions that work in your actual operating environment, not theoretical ideals.",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            icon: Shield,
            title: "Structured",
            description: "Clear methodology and process",
            detail: "Every engagement follows a defined approach that delivers measurable outcomes.",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            icon: Users,
            title: "Operational",
            description: "Focused on real-world execution",
            detail: "We work where fraud actually happens — in processes, decisions, and frontline operations.",
            gradient: "from-cyan-600 to-violet-600",
        },
    ];

    const differentiators = [
        "Not generic frameworks",
        "Not audit checklists",
        "Not theoretical exercises",
        "Not compliance-only solutions",
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#1d3658]/5 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/10 to-blue-500/10 px-5 py-2.5 shadow-sm backdrop-blur-sm">
                        <Zap className="h-4 w-4 text-[#1d3658]" />
                        <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                            Our Approach
                        </span>
                    </div>

                    <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1d3658] sm:text-5xl lg:text-6xl">
                        How we{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                                work
                            </span>
                            <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-violet-500/40 blur-xl" />
                        </span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                        Our approach is practical, structured, and grounded in operational reality — not generic frameworks or audit checklists.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
                    {principles.map((principle, index) => {
                        const Icon = principle.icon;
                        const isHovered = hoveredPrinciple === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredPrinciple(index)}
                                onMouseLeave={() => setHoveredPrinciple(null)}
                            >
                                <div
                                    className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${principle.gradient} opacity-0 blur-2xl transition-all duration-500 ${isHovered ? "opacity-40" : ""
                                        }`}
                                />

                                <div
                                    className={`relative h-full overflow-hidden rounded-3xl border-2 bg-white p-8 transition-all duration-500 ${isHovered
                                            ? "scale-105 border-transparent shadow-2xl"
                                            : "border-slate-200 shadow-lg"
                                        }`}
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-violet-50 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-60" : ""
                                            }`}
                                    />

                                    <div className="relative">
                                        <div
                                            className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${principle.gradient} shadow-lg transition-all duration-500 ${isHovered ? "rotate-12 scale-110" : ""
                                                }`}
                                        >
                                            <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                                        </div>

                                        <h3 className="mb-2 text-3xl font-bold text-[#1d3658]">
                                            {principle.title}
                                        </h3>

                                        <p className="mb-4 text-sm font-semibold text-slate-500">
                                            {principle.description}
                                        </p>

                                        <p className="leading-relaxed text-slate-600">
                                            {principle.detail}
                                        </p>
                                    </div>

                                    <div
                                        className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${principle.gradient} transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-xl lg:p-12">
                    <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                        <div>
                            <h3 className="mb-6 text-3xl font-bold text-[#1d3658]">
                                What sets us apart
                            </h3>
                            <p className="mb-8 text-lg leading-relaxed text-slate-600">
                                We don't rely on off-the-shelf solutions or tick-box compliance. Our work is tailored to your specific fraud risk profile and operational context.
                            </p>

                            <div className="space-y-3">
                                {differentiators.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-3 rounded-xl border-2 border-slate-200 bg-white p-4 transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:shadow-lg"
                                    >
                                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-orange-500">
                                            <svg className="h-4 w-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={3}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </div>
                                        <span className="font-semibold text-slate-700">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="overflow-hidden rounded-2xl border-2 border-[#1d3658]/10 bg-gradient-to-br from-[#1d3658] via-blue-800 to-cyan-700 p-8 shadow-2xl">
                            <h4 className="mb-6 text-2xl font-bold text-white">
                                What we deliver instead
                            </h4>

                            <div className="space-y-4">
                                {[
                                    "Controls designed for your operations",
                                    "Solutions tailored to real fraud patterns",
                                    "Practical frameworks that staff can execute",
                                    "Outcomes aligned to business priorities",
                                ].map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex items-start gap-3 rounded-xl border-2 border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                                    >
                                        <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 mt-0.5">
                                            <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                                        </div>
                                        <span className="font-semibold text-white">{item}</span>
                                    </div>
                                ))}
                            </div>

                            <Button className="mt-8 w-full rounded-xl border-2 border-white/30 bg-white/20 py-6 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/30 hover:shadow-xl">
                                <span className="flex items-center justify-center gap-2">
                                    See Our Approach in Action
                                    <ArrowRight className="h-5 w-5" />
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 rounded-3xl border-2 border-[#1d3658]/10 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 lg:p-10">
                    <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d3658] to-blue-600">
                            <Shield className="h-6 w-6 text-white" />
                        </div>
                        <div>
                            <p className="mb-2 text-lg font-bold text-[#1d3658]">
                                Built for operational environments
                            </p>
                            <p className="leading-relaxed text-slate-700">
                                We work with leadership and frontline teams to identify fraud pathways, strengthen controls, and embed practical prevention measures that function in real business operations — not just on paper.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}