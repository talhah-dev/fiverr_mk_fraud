"use client";

import { Layers, Users, FileCheck, BarChart3, Shield, CheckCircle2, ArrowRight, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FraudProgrammeDesignSection() {
    const [hoveredFocus, setHoveredFocus] = useState<number | null>(null);

    const focusAreas = [
        {
            icon: Users,
            title: "Fraud governance, ownership, and decision rights",
            description: "Clear accountability structures and decision-making frameworks",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            icon: Layers,
            title: "Practical operating model",
            description: "Prevention, detection, and response mechanisms that work in reality",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            icon: FileCheck,
            title: "Usable policies and standards",
            description: "Documentation that's practical, not theoretical",
            gradient: "from-cyan-600 to-violet-600",
        },
        {
            icon: BarChart3,
            title: "Metrics and reporting",
            description: "Data that supports management decisions, not just compliance",
            gradient: "from-violet-600 to-purple-600",
        },
    ];

    const benefits = [
        "Framework aligned to your business reality",
        "Clear ownership and accountability",
        "Practical controls that enable operations",
        "Metrics that drive real decisions",
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1d3658] to-slate-800">
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-cyan-400/30 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
                        <Layers className="h-4 w-4 text-cyan-300" />
                        <span className="text-sm font-bold uppercase tracking-wide text-cyan-100">
                            Strategic Service
                        </span>
                    </div>

                    <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Fraud Programme{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                Design
                            </span>
                            <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-violet-500/50 blur-xl" />
                        </span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                        Design or refresh of a fraud framework that fits how your organisation really works.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="mb-8">
                            <h3 className="mb-4 text-3xl font-bold text-white">
                                Focus Areas
                            </h3>
                            <p className="text-lg text-slate-300">
                                We design comprehensive fraud programmes that support the business — not ones that exist only for audit or compliance.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {focusAreas.map((area, index) => {
                                const Icon = area.icon;
                                const isHovered = hoveredFocus === index;

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredFocus(index)}
                                        onMouseLeave={() => setHoveredFocus(null)}
                                    >
                                        <div
                                            className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${area.gradient} opacity-0 blur-xl transition-all duration-500 ${isHovered ? "opacity-60" : ""
                                                }`}
                                        />

                                        <div
                                            className={`relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl transition-all duration-500 ${isHovered
                                                    ? "scale-105 border-cyan-400/30 shadow-2xl shadow-cyan-500/20"
                                                    : "border-white/10 shadow-lg"
                                                }`}
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-violet-500/10 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""
                                                    }`}
                                            />

                                            <div className="relative flex items-start gap-4">
                                                <div
                                                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${area.gradient} shadow-lg transition-all duration-500 ${isHovered ? "rotate-12 scale-110 shadow-cyan-500/50" : ""
                                                        }`}
                                                >
                                                    <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                                                </div>

                                                <div className="flex-1">
                                                    <h4 className="mb-2 text-lg font-bold text-white">
                                                        {area.title}
                                                    </h4>
                                                    <p className="text-sm leading-relaxed text-slate-300">
                                                        {area.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div>
                        <div className="sticky top-8">
                            <div className="overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl lg:p-10">
                                <div className="mb-8 flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white">
                                        Programme Outcome
                                    </h3>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-violet-500 shadow-lg">
                                        <Target className="h-6 w-6 text-white" />
                                    </div>
                                </div>

                                <div className="mb-8 rounded-2xl border-2 border-white/10 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 p-6 backdrop-blur-sm">
                                    <p className="text-lg font-semibold text-white">
                                        A fraud programme that supports the business — not one that exists only for audit or compliance.
                                    </p>
                                </div>

                                <div className="mb-8 space-y-4">
                                    {benefits.map((benefit, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
                                        >
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 shadow-md transition-transform duration-300 group-hover:scale-110">
                                                <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={3} />
                                            </div>
                                            <span className="text-sm font-medium text-white">{benefit}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="mb-8 overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 backdrop-blur-sm">
                                    <div className="border-b border-white/10 p-5">
                                        <div className="flex items-center gap-3">
                                            <Shield className="h-5 w-5 text-cyan-300" />
                                            <span className="text-sm font-bold text-white">What You'll Build</span>
                                        </div>
                                    </div>
                                    <div className="space-y-3 p-5">
                                        {[
                                            "Governance framework & decision rights",
                                            "Operating model (prevent, detect, respond)",
                                            "Practical policies & standards",
                                            "Management metrics & reporting",
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-start gap-3">
                                                <div className="mt-0.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400" />
                                                <span className="text-sm text-slate-300">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-8 rounded-2xl bg-gradient-to-r from-blue-500/10 to-violet-500/10 p-5 backdrop-blur-sm">
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-cyan-400" />
                                        <span className="text-sm font-bold text-white">Typical Timeline</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-white">8-12</span>
                                        <span className="text-lg font-semibold text-slate-300">weeks</span>
                                    </div>
                                    <p className="mt-2 text-xs text-slate-400">
                                        From design to implementation roadmap
                                    </p>
                                </div>

                                <Button className="w-full rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-violet-600 py-6 text-lg font-bold shadow-2xl shadow-cyan-500/40 transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/60">
                                    <span className="flex items-center justify-center gap-2">
                                        Discuss Programme Design
                                        <ArrowRight className="h-5 w-5" />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        </section>
    );
}