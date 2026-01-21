"use client";

import { Search, Target, CheckCircle2, FileText, Calendar, TrendingUp, Shield, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FraudHealthCheckSection() {
    const [hoveredDiff, setHoveredDiff] = useState<number | null>(null);

    const differentiators = [
        {
            icon: Search,
            title: "Beyond policies to reality",
            description: "Looks beyond policies to how fraud actually happens in day-to-day operations",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            icon: Target,
            title: "Tests real effectiveness",
            description: "Tests whether controls are understood, applied, and effective — not just documented",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            icon: TrendingUp,
            title: "People & process insights",
            description: "Uses people and process insights, not only incidents",
            gradient: "from-cyan-600 to-violet-600",
        },
    ];

    const outputs = [
        {
            title: "Clear Findings Report",
            description: "Detailed analysis of where fraud is entering and why controls aren't stopping it",
            icon: FileText,
        },
        {
            title: "30-Day Quick Wins",
            description: "Immediate actions that close critical gaps",
            icon: Calendar,
        },
        {
            title: "60-Day Improvements",
            description: "Medium-term enhancements to strengthen defenses",
            icon: TrendingUp,
        },
        {
            title: "90-Day Strategic Build",
            description: "Long-term initiatives aligned to your operating reality",
            icon: Shield,
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
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
                            Flagship Service
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
                        A focused diagnostic to understand <span className="font-bold text-[#1d3658]">where fraud is entering</span>, <span className="font-bold text-[#1d3658]">why current controls are not stopping it</span>, and <span className="font-bold text-[#1d3658]">what will have the biggest impact if fixed first</span>.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="mb-8">
                            <h3 className="mb-6 text-3xl font-bold text-[#1d3658]">
                                What makes this different
                            </h3>
                            <p className="text-lg text-slate-600">
                                We go beyond surface-level audits to understand the real fraud pathways in your organization.
                            </p>
                        </div>

                        <div className="space-y-6">
                            {differentiators.map((diff, index) => {
                                const Icon = diff.icon;
                                const isHovered = hoveredDiff === index;

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredDiff(index)}
                                        onMouseLeave={() => setHoveredDiff(null)}
                                    >
                                        <div
                                            className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${diff.gradient} opacity-0 blur-xl transition-all duration-500 ${isHovered ? "opacity-30" : ""
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
                                                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${diff.gradient} shadow-lg transition-all duration-500 ${isHovered ? "rotate-12 scale-110" : ""
                                                        }`}
                                                >
                                                    <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                                                </div>

                                                <div className="flex-1">
                                                    <h4 className="mb-2 text-xl font-bold text-[#1d3658]">
                                                        {diff.title}
                                                    </h4>
                                                    <p className="leading-relaxed text-slate-600">
                                                        {diff.description}
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
                            <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl lg:p-10">
                                <div className="mb-8 flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-[#1d3658]">
                                        Your Action Plan
                                    </h3>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1d3658] to-blue-600 shadow-lg">
                                        <FileText className="h-6 w-6 text-white" />
                                    </div>
                                </div>

                                <p className="mb-8 text-slate-600">
                                    Clear findings + a prioritized <span className="font-bold text-[#1d3658]">30/60/90-day action plan</span> aligned to your operating reality.
                                </p>

                                <div className="space-y-4">
                                    {outputs.map((output, index) => {
                                        const Icon = output.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="group overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-5 transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20"
                                            >
                                                <div className="flex items-start gap-4">
                                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 shadow-md transition-transform duration-300 group-hover:rotate-6">
                                                        <Icon className="h-6 w-6 text-white" />
                                                    </div>
                                                    <div className="flex-1">
                                                        <h4 className="mb-1 font-bold text-[#1d3658]">
                                                            {output.title}
                                                        </h4>
                                                        <p className="text-sm text-slate-600">
                                                            {output.description}
                                                        </p>
                                                    </div>
                                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1d3658] to-blue-600">
                                                        <CheckCircle2 className="h-5 w-5 text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>

                                <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#1d3658]/10 via-blue-500/10 to-cyan-500/10 p-6 backdrop-blur-sm">
                                    <div className="mb-4 flex items-center gap-3">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-[#1d3658] to-blue-600">
                                            <Calendar className="h-5 w-5 text-white" />
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#1d3658]">
                                                Timeline: 4-6 Weeks
                                            </p>
                                            <p className="text-xs text-slate-600">
                                                From kickoff to actionable plan
                                            </p>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-600">Discovery & Assessment</span>
                                            <span className="font-semibold text-[#1d3658]">Week 1-3</span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-white">
                                            <div className="h-full w-3/5 rounded-full bg-gradient-to-r from-[#1d3658] to-blue-600" />
                                        </div>
                                        <div className="flex items-center justify-between text-sm">
                                            <span className="text-slate-600">Analysis & Planning</span>
                                            <span className="font-semibold text-[#1d3658]">Week 4-6</span>
                                        </div>
                                        <div className="h-2 overflow-hidden rounded-full bg-white">
                                            <div className="h-full w-2/5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600" />
                                        </div>
                                    </div>
                                </div>

                                <Button className="mt-8 w-full rounded-xl bg-gradient-to-r from-[#1d3658] via-blue-600 to-cyan-600 py-6 text-lg font-bold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
                                    Request a Health Check
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}