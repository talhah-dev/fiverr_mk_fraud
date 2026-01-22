"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, CheckCircle2, Sparkles, Target, Users, TrendingUp, Star, User } from "lucide-react";
import { useState } from "react";

export default function ServicesHero() {
    const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

    const features = [
        {
            icon: Target,
            text: "Results-focused approach",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            icon: Users,
            text: "People-centered solutions",
            gradient: "from-cyan-600 to-blue-600",
        },
        {
            icon: TrendingUp,
            text: "Business-enabling controls",
            gradient: "from-violet-600 to-blue-600",
        },
    ];

    const stats = [
        { number: "30", label: "Day Action Plans", suffix: "" },
        { number: "50", label: "Clients Served", suffix: "+" },
        { number: "98", label: "Success Rate", suffix: "%" },
    ];

    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1d3658] to-slate-800">
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 rounded-full border-2 border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
                            <Shield className="h-4 w-4 text-blue-300" />
                            <span className="text-sm font-bold uppercase tracking-wide text-blue-100">
                                Professional Services
                            </span>
                            <Sparkles className="h-4 w-4 text-cyan-300" />
                        </div>

                        <h1 className="text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                            Fraud services that work in{" "}
                            <span className="relative inline-block">
                                <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                    practice
                                </span>
                                <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-violet-500/50 blur-xl" />
                            </span>
                        </h1>

                        <p className="text-lg leading-relaxed text-slate-300 sm:text-xl lg:text-2xl">
                            Practical interventions that reduce fraud, enable people, and strengthen controls — without slowing the business.
                        </p>

                        <div className="space-y-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                const isHovered = hoveredFeature === index;

                                return (
                                    <div
                                        key={index}
                                        className="group flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
                                        onMouseEnter={() => setHoveredFeature(index)}
                                        onMouseLeave={() => setHoveredFeature(null)}
                                    >
                                        <div
                                            className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${feature.gradient} shadow-lg transition-all duration-300 ${isHovered ? "scale-110 shadow-blue-500/50" : ""
                                                }`}
                                        >
                                            <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                                        </div>
                                        <span className="text-lg font-semibold text-white transition-colors duration-300">
                                            {feature.text}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                            <Button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 px-8 py-6 text-lg font-bold shadow-2xl shadow-blue-500/40 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/60">
                                <span className="relative z-10 flex items-center gap-2">
                                    Book a Call
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-600 to-cyan-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            </Button>

                            <Button
                                variant="outline"
                                className="group rounded-2xl border-2 border-white/30 bg-white/10 px-8 py-6 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/20"
                            >
                                <span className="flex items-center gap-2">
                                    Explore Services
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </Button>
                        </div>

                        <div className="flex md:flex-row flex-col items-center gap-3 pt-4">
                            <div className="flex -space-x-2">
                                {[1, 2, 3, 4].map((i) => (
                                    <div
                                        key={i}
                                        className="h-10 flex items-center justify-center text-white/80 w-10 rounded-full border-2 border-slate-800 bg-gradient-to-br from-blue-500 to-cyan-500"
                                    >
                                        <User />
                                    </div>
                                ))}
                            </div>
                            <div className="flex md:flex-row flex-col items-center gap-2">
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <Star key={i} className="fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-slate-300">
                                    Trusted by 50+ organizations
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-blue-500/20 via-cyan-500/10 to-violet-500/20 blur-3xl" />

                        <div className="relative overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl lg:p-10">
                            <div className="mb-8">
                                <div className="mb-6 flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white">
                                        What You Get
                                    </h3>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-lg">
                                        <CheckCircle2 className="h-6 w-6 text-white" />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        { title: "Fraud Health Check", description: "Deep diagnostic of your fraud exposure" },
                                        { title: "Programme Design", description: "Custom fraud framework aligned to your operations" },
                                        { title: "Awareness Training", description: "Enable employees, customers, and suppliers" },
                                        { title: "Control Strengthening", description: "Protect value without slowing business" },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="group overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-cyan-500/20"
                                        >
                                            <div className="flex items-start gap-4">
                                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500">
                                                    <CheckCircle2 className="h-5 w-5 text-white" />
                                                </div>
                                                <div className="flex-1">
                                                    <h4 className="mb-1 font-bold text-white">{item.title}</h4>
                                                    <p className="text-sm text-slate-300">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="rounded-2xl border-2 border-white/10 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 p-6 backdrop-blur-sm">
                                <div className="grid grid-cols-3 gap-4 text-center">
                                    {stats.map((stat, index) => (
                                        <div key={index}>
                                            <div className="mb-1 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-3xl font-bold text-transparent">
                                                {stat.number}{stat.suffix}
                                            </div>
                                            <div className="text-xs font-medium text-slate-300">{stat.label}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50" />
        </section>
    );
}