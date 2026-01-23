"use client";

import { Users, TrendingUp, Eye, CheckCircle2, ArrowRight, Lightbulb, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function FraudAwarenessTrainingSection() {
    const [hoveredFocus, setHoveredFocus] = useState<number | null>(null);

    const focusAreas = [
        {
            icon: Users,
            title: "Frontline awareness",
            description: "Helping frontline staff recognise fraud risks they encounter daily and know how to respond",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            icon: TrendingUp,
            title: "Manager escalation",
            description: "Equipping managers to identify patterns, assess risks, and escalate issues effectively",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            icon: Eye,
            title: "Executive oversight",
            description: "Providing executives with visibility into fraud risks and control effectiveness",
            gradient: "from-cyan-600 to-violet-600",
        },
    ];

    const benefits = [
        {
            title: "Role-Specific",
            description: "Tailored to each level",
            icon: Users,
        },
        {
            title: "Practical Focus",
            description: "Real scenarios and risks",
            icon: Shield,
        },
        {
            title: "Clear Actions",
            description: "Know what to do next",
            icon: CheckCircle2,
        },
        {
            title: "Ongoing Support",
            description: "Not one-time training",
            icon: Lightbulb,
        },
    ];

    return (
        <section id="awareness" className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
            <div className="absolute inset-0 -z-10">
                <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#1d3658]/5 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/5 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />
            </div>

            <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/10 to-cyan-500/10 px-5 py-2.5 shadow-sm backdrop-blur-sm">
                        <Lightbulb className="h-4 w-4 text-[#1d3658]" />
                        <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                            Service Three
                        </span>
                    </div>

                    <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[#1d3658] sm:text-5xl lg:text-6xl">
                        Fraud Awareness &{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                                Training
                            </span>
                            <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-violet-500/40 blur-xl" />
                        </span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                        Practical training that helps staff recognise fraud risks relevant to their roles and environments.
                    </p>
                </div>

                <div className="mb-16">
                    <h3 className="mb-8 text-center text-2xl font-bold text-[#1d3658]">
                        Focus Areas
                    </h3>

                    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
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
                                        className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${area.gradient} opacity-0 blur-2xl transition-all duration-500 ${isHovered ? "opacity-40" : ""
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
                                            <div className="mb-6 flex items-center justify-between">
                                                <div
                                                    className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${area.gradient} shadow-lg transition-all duration-500 ${isHovered ? "rotate-12 scale-110" : ""
                                                        }`}
                                                >
                                                    <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                                                </div>
                                            </div>

                                            <h4 className="mb-3 text-2xl font-bold text-[#1d3658]">
                                                {area.title}
                                            </h4>

                                            <p className="leading-relaxed text-slate-600">
                                                {area.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-xl lg:p-10">
                        <div className="mb-8">
                            <h3 className="mb-4 text-3xl font-bold text-[#1d3658]">
                                Training Approach
                            </h3>
                            <p className="text-lg text-slate-600">
                                Role-based training designed for how fraud actually presents in your operating environment.
                            </p>
                        </div>

                        <div className="space-y-5">
                            {[
                                "Scenarios based on real fraud patterns",
                                "Practical examples from your industry",
                                "Clear guidance on what to do and who to tell",
                                "Regular reinforcement, not one-time events",
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="group flex items-start gap-4 rounded-2xl border-2 border-slate-200 bg-white p-5 transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:shadow-lg hover:shadow-blue-500/20"
                                >
                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#1d3658] to-blue-600 transition-transform duration-300 group-hover:rotate-6">
                                        <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={3} />
                                    </div>
                                    <p className="flex-1 font-semibold text-slate-700">{item}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#1d3658]/10 via-blue-500/10 to-cyan-500/10 p-6 backdrop-blur-sm">
                            <div className="flex items-start gap-3">
                                <Shield className="h-6 w-6 flex-shrink-0 text-[#1d3658]" />
                                <div>
                                    <p className="mb-2 font-bold text-[#1d3658]">
                                        Relevant to Your Environment
                                    </p>
                                    <p className="text-sm text-slate-600">
                                        Training is tailored to the fraud risks present in your specific operations, not generic content.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-[#1d3658] via-blue-800 to-cyan-700 p-8 shadow-xl lg:p-10">
                        <div className="mb-8">
                            <h3 className="mb-4 text-3xl font-bold text-white">
                                Service Benefits
                            </h3>
                            <p className="text-lg text-blue-100">
                                Staff who can recognise fraud risks and respond appropriately, reducing successful fraud attempts.
                            </p>
                        </div>

                        <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {benefits.map((benefit, index) => {
                                const Icon = benefit.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group overflow-hidden rounded-2xl border-2 border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20 hover:shadow-lg"
                                    >
                                        <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 transition-transform duration-300 group-hover:rotate-6">
                                            <Icon className="h-5 w-5 text-white" />
                                        </div>
                                        <h4 className="mb-1 text-sm font-bold text-white">
                                            {benefit.title}
                                        </h4>
                                        <p className="text-xs text-blue-100">{benefit.description}</p>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="space-y-4">
                            <div className="rounded-2xl border-2 border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                                <h4 className="mb-3 text-lg font-bold text-white">
                                    Deliverables
                                </h4>
                                <div className="space-y-2">
                                    {[
                                        "Role-based training materials",
                                        "Real scenario examples",
                                        "Escalation guidance",
                                        "Ongoing reinforcement plan",
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-center gap-2">
                                            <CheckCircle2 className="h-4 w-4 text-cyan-300" strokeWidth={3} />
                                            <span className="text-sm text-white">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border-2 border-white/20 bg-white/10 p-6 backdrop-blur-sm">
                                <div className="mb-4 flex items-center gap-2">
                                    <div className="h-2 w-2 rounded-full bg-cyan-300" />
                                    <span className="text-sm font-bold text-white">Programme Duration</span>
                                </div>
                                <div className="flex items-baseline gap-2">
                                    <span className="text-3xl font-black text-white">4-6</span>
                                    <span className="text-lg font-semibold text-blue-200">weeks</span>
                                </div>
                                <p className="mt-2 text-xs text-blue-200">
                                    Initial delivery with ongoing support
                                </p>
                            </div>
                        </div>

                        <Button className="mt-6 w-full rounded-xl border-2 border-white/30 bg-white/20 py-6 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/30 hover:shadow-xl">
                            <span className="flex items-center justify-center gap-2">
                                Start Training Programme
                                <ArrowRight className="h-5 w-5" />
                            </span>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}