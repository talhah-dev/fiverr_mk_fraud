"use client";

import { Search, FileCheck, CheckCircle2, AlertTriangle, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FraudHealthCheckSection() {
    const [hoveredItem, setHoveredItem] = useState<number | null>(null);

    const whatYouReceive = [
        {
            icon: FileCheck,
            title: "Prioritised fraud risk register",
            description: "Clear view of your fraud exposures ranked by impact and likelihood",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            icon: Search,
            title: "Control gap analysis",
            description: "Detailed assessment of where your controls are failing or missing",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            icon: CheckCircle2,
            title: "Practical recommendations",
            description: "Actionable steps tailored to your operational environment",
            gradient: "from-cyan-600 to-violet-600",
        },
        {
            icon: ArrowRight,
            title: "Clear next-step roadmap",
            description: "Sequenced plan showing what to fix first and why",
            gradient: "from-violet-600 to-purple-600",
        },
    ];

    const thisIs = [
        "Diagnostic and action-oriented",
    ];

    const thisIsNot = [
        "A forensic investigation",
        "A regulatory audit",
        "A guarantee of zero fraud",
    ];

    return (
        <section id="health-check" className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-1/4 h-[500px] w-[500px] rounded-full bg-[#1d3658]/5 blur-3xl" />
                <div className="absolute right-0 bottom-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/10 to-blue-500/10 px-5 py-2.5 shadow-sm backdrop-blur-sm">
                        <Award className="h-4 w-4 text-[#1d3658]" />
                        <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                            Service One
                        </span>
                    </div>

                    <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[#1d3658] sm:text-5xl lg:text-6xl">
                        Fraud{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                                Health Check
                            </span>
                            <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-violet-500/40 blur-xl" />
                        </span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                        A structured assessment of fraud risk across your organisation, focusing on how fraud actually occurs in day-to-day operations.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="mb-8">
                            <h3 className="mb-6 text-3xl font-bold text-[#1d3658]">
                                What you receive
                            </h3>
                        </div>

                        <div className="space-y-4">
                            {whatYouReceive.map((item, index) => {
                                const Icon = item.icon;
                                const isHovered = hoveredItem === index;

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredItem(index)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                    >
                                        <div
                                            className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 blur-xl transition-all duration-500 ${isHovered ? "opacity-30" : ""
                                                }`}
                                        />

                                        <div
                                            className={`relative overflow-hidden rounded-2xl border-2 bg-white p-6 transition-all duration-500 ${isHovered
                                                    ? "scale-105 border-transparent shadow-2xl"
                                                    : "border-slate-200 shadow-md"
                                                }`}
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br from-blue-50 via-cyan-50 to-violet-50 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-60" : ""
                                                    }`}
                                            />

                                            <div className="relative flex items-start gap-4">
                                                <div
                                                    className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} shadow-lg transition-all duration-500 ${isHovered ? "rotate-12 scale-110" : ""
                                                        }`}
                                                >
                                                    <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                                                </div>

                                                <div className="flex-1">
                                                    <h4 className="mb-2 text-lg font-bold text-[#1d3658]">
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-sm leading-relaxed text-slate-600">
                                                        {item.description}
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
                        <div className="sticky top-8 space-y-6">
                            <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl">
                                <h3 className="mb-6 text-2xl font-bold text-[#1d3658]">
                                    This is
                                </h3>

                                <div className="space-y-3">
                                    {thisIs.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 rounded-xl border-2 border-green-200 bg-green-50 p-4"
                                        >
                                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-500">
                                                <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                                            </div>
                                            <p className="font-semibold text-green-900">{item}</p>
                                        </div>
                                    ))}
                                </div>

                                <h3 className="mb-6 mt-8 text-2xl font-bold text-[#1d3658]">
                                    This is not
                                </h3>

                                <div className="space-y-3">
                                    {thisIsNot.map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 rounded-xl border-2 border-slate-200 bg-white p-4"
                                        >
                                            <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-200">
                                                <svg
                                                    className="h-4 w-4 text-slate-600"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth={3}
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="M6 18L18 6M6 6l12 12"
                                                    />
                                                </svg>
                                            </div>
                                            <p className="font-semibold text-slate-700">{item}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-[#1d3658] to-blue-900 p-8 shadow-2xl">
                                <div className="mb-6">
                                    <h4 className="mb-2 text-xl font-bold text-white">
                                        Ready to understand your fraud risk?
                                    </h4>
                                    <p className="text-blue-100">
                                        Get clear visibility into where fraud is happening and what to fix first.
                                    </p>
                                </div>

                                <Button className="w-full rounded-xl border-2 border-white/30 bg-white/20 py-6 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/30 hover:shadow-xl">
                                    <span className="flex items-center justify-center gap-2">
                                        Request a Health Check
                                        <ArrowRight className="h-5 w-5" />
                                    </span>
                                </Button>

                                <div className="mt-6 rounded-xl bg-white/10 p-4 backdrop-blur-sm">
                                    <div className="flex items-center gap-2">
                                        <AlertTriangle className="h-5 w-5 text-cyan-300" />
                                        <div>
                                            <p className="text-sm font-bold text-white">Typical Duration</p>
                                            <p className="text-xs text-blue-100">4-6 weeks from start to actionable plan</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}