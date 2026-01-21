"use client";

import { Search, Layers, Users, ShieldCheck, ArrowRight, CheckCircle2, Sparkles, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function EngagementOptionsSection() {
    const [hoveredOption, setHoveredOption] = useState<number | null>(null);

    const options = [
        {
            icon: Search,
            badge: "Starter",
            title: "Fraud Health Check",
            description: "Perfect for organizations that need to understand their fraud exposure and get a clear action plan",
            includes: [
                "Complete fraud diagnostic",
                "30/60/90-day action plan",
                "Priority recommendations",
                "Control gap analysis",
            ],
            timeline: "4-6 weeks",
            bestFor: "First step in fraud risk management",
            gradient: "from-[#1d3658] to-blue-600",
            bgGradient: "from-blue-50 to-slate-50",
        },
        {
            icon: Layers,
            badge: "Build",
            title: "Health Check + Programme Design",
            description: "For organizations ready to build a comprehensive fraud framework based on diagnostic insights",
            includes: [
                "Everything in Starter",
                "Fraud programme framework",
                "Governance & operating model",
                "Policies & standards",
                "Metrics & reporting structure",
            ],
            timeline: "12-18 weeks",
            bestFor: "Building lasting fraud capability",
            gradient: "from-blue-600 to-cyan-600",
            bgGradient: "from-cyan-50 to-blue-50",
        },
        {
            icon: Users,
            badge: "Enable",
            title: "Awareness & Resilience Enablement",
            description: "Targeted enablement for employees, customers, and suppliers to reduce fraud at decision points",
            includes: [
                "Audience-specific training",
                "Continuous enablement programme",
                "Reporting path integration",
                "Real scenario simulations",
            ],
            timeline: "6-8 weeks",
            bestFor: "Strengthening human defenses",
            gradient: "from-cyan-600 to-violet-600",
            bgGradient: "from-violet-50 to-cyan-50",
        },
        {
            icon: ShieldCheck,
            badge: "Strengthen",
            title: "Internal Fraud & Procurement Controls",
            description: "Strengthen internal and third-party controls without adding operational friction",
            includes: [
                "Control framework review",
                "Accountability strengthening",
                "Early warning systems",
                "Vendor risk integration",
            ],
            timeline: "6-10 weeks",
            bestFor: "Operational control improvement",
            gradient: "from-violet-600 to-purple-600",
            bgGradient: "from-purple-50 to-violet-50",
        },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-[#1d3658]/5 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full bg-blue-500/5 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
            </div>

            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/10 to-blue-500/10 px-5 py-2.5 shadow-sm backdrop-blur-sm">
                        <Sparkles className="h-4 w-4 text-[#1d3658]" />
                        <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                            Flexible Engagement
                        </span>
                    </div>

                    <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[#1d3658] sm:text-5xl lg:text-6xl">
                        Choose Your{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                                Starting Point
                            </span>
                            <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-violet-500/40 blur-xl" />
                        </span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                        Select the engagement that matches your fraud risk maturity and business priorities. Every option delivers practical outcomes.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                    {options.map((option, index) => {
                        const Icon = option.icon;
                        const isHovered = hoveredOption === index;

                        return (
                            <div
                                key={index}
                                className="group relative"
                                onMouseEnter={() => setHoveredOption(index)}
                                onMouseLeave={() => setHoveredOption(null)}
                            >
                                <div
                                    className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${option.gradient} opacity-0 blur-2xl transition-all duration-500 ${isHovered ? "opacity-40" : ""
                                        }`}
                                />

                                <div
                                    className={`relative h-full overflow-hidden rounded-3xl border-2 bg-white shadow-xl transition-all duration-500 ${isHovered
                                            ? "scale-[1.02] border-transparent shadow-2xl"
                                            : "border-slate-200"
                                        }`}
                                >
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-br ${option.bgGradient} opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-60" : ""
                                            }`}
                                    />

                                    <div className="relative p-8 lg:p-10">
                                        <div className="mb-6 flex items-start justify-between">
                                            <div
                                                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${option.gradient} shadow-lg transition-all duration-500 ${isHovered ? "rotate-12 scale-110" : ""
                                                    }`}
                                            >
                                                <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                                            </div>

                                            <div className={`rounded-full bg-gradient-to-r ${option.gradient} px-4 py-1.5 shadow-md`}>
                                                <span className="text-sm font-bold text-white">
                                                    {option.badge}
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="mb-3 text-2xl font-bold text-[#1d3658]">
                                            {option.title}
                                        </h3>

                                        <p className="mb-6 leading-relaxed text-slate-600">
                                            {option.description}
                                        </p>

                                        <div className="mb-6 space-y-3">
                                            <p className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                                                What's Included
                                            </p>
                                            {option.includes.map((item, idx) => (
                                                <div key={idx} className="flex items-start gap-3">
                                                    <div className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${option.gradient} mt-0.5`}>
                                                        <CheckCircle2 className="h-3 w-3 text-white" strokeWidth={3} />
                                                    </div>
                                                    <span className="text-sm font-medium text-slate-700">
                                                        {item}
                                                    </span>
                                                </div>
                                            ))}
                                        </div>

                                        <div className="mb-6 grid grid-cols-2 gap-4">
                                            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 p-4">
                                                <div className="mb-1 flex items-center gap-2">
                                                    <Calendar className="h-4 w-4 text-[#1d3658]" />
                                                    <p className="text-xs font-bold uppercase tracking-wide text-[#1d3658]">
                                                        Timeline
                                                    </p>
                                                </div>
                                                <p className="text-sm font-semibold text-slate-700">
                                                    {option.timeline}
                                                </p>
                                            </div>

                                            <div className="rounded-xl bg-gradient-to-br from-slate-50 to-blue-50 p-4">
                                                <div className="mb-1 flex items-center gap-2">
                                                    <Sparkles className="h-4 w-4 text-[#1d3658]" />
                                                    <p className="text-xs font-bold uppercase tracking-wide text-[#1d3658]">
                                                        Best For
                                                    </p>
                                                </div>
                                                <p className="text-sm font-semibold text-slate-700">
                                                    {option.bestFor}
                                                </p>
                                            </div>
                                        </div>

                                        <Button
                                            className={`group w-full rounded-xl bg-gradient-to-r ${option.gradient} py-5 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                Select This Option
                                                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        </Button>
                                    </div>

                                    <div
                                        className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${option.gradient} transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                                            }`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-16 overflow-hidden rounded-3xl border-2 border-[#1d3658]/10 bg-gradient-to-r from-white via-slate-50/50 to-white p-8 shadow-xl lg:p-12">
                    <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1d3658]/10 px-4 py-2">
                                <div className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1d3658] opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1d3658]"></span>
                                </div>
                                <span className="text-sm font-semibold text-[#1d3658]">
                                    Need Help Choosing?
                                </span>
                            </div>
                            <h3 className="mb-4 text-3xl font-bold text-[#1d3658] lg:text-4xl">
                                Not sure which option fits your needs?
                            </h3>
                            <p className="text-lg text-slate-600">
                                Book a call and we'll recommend the quickest, highest-impact path based on your organisation's environment and fraud risk profile.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                            <Button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1d3658] via-blue-600 to-cyan-600 px-8 py-6 text-lg font-bold shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
                                <span className="relative z-10 flex items-center gap-2">
                                    Book a Scoping Call
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-[#1d3658] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </Button>

                            <Button
                                variant="outline"
                                className="group rounded-2xl border-2 border-[#1d3658] px-8 py-6 text-lg font-bold text-[#1d3658] transition-all duration-300 hover:bg-[#1d3658]/5"
                            >
                                <span className="flex items-center gap-2">
                                    View Pricing
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}