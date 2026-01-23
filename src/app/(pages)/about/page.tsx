"use client";

import { Shield, Target, Users, TrendingUp, CheckCircle2, Lightbulb, Award, ArrowRight, Briefcase, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Wrapper from "@/app/Wrapper";
import HowWeWorkSection from "@/components/About/HowWeWorkSection";

export default function About() {
    const [hoveredValue, setHoveredValue] = useState<number | null>(null);

    const approaches = [
        {
            icon: Target,
            title: "Strategic clarity",
            description: "What matters most",
            detail: "We help you focus on the fraud risks that actually threaten your business, not theoretical scenarios.",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            icon: Shield,
            title: "Controls that work",
            description: "In operations",
            detail: "Practical controls embedded in daily processes, not separate compliance exercises.",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            icon: Users,
            title: "Enablement",
            description: "People + process + data",
            detail: "Building fraud capability across your organization through awareness, training, and tools.",
            gradient: "from-cyan-600 to-violet-600",
        },
    ];

    const expertise = [
        {
            icon: Briefcase,
            title: "Practitioner Experience",
            description: "Built by professionals with hands-on experience across fraud strategy, prevention, controls, and enablement",
        },
        {
            icon: TrendingUp,
            title: "Cross-Sector Background",
            description: "Experience spanning financial services and non-financial environments, with deep exposure to real-world fraud patterns",
        },
        {
            icon: Lightbulb,
            title: "Operational Reality",
            description: "Approach grounded in how businesses actually work — informed by strategy, analytics, and frontline risk management",
        },
    ];

    const values = [
        { title: "Practical outcomes over theory", icon: Target },
        { title: "Real-world experience", icon: Award },
        { title: "Client-focused solutions", icon: Users },
        { title: "Continuous improvement", icon: TrendingUp },
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
                        <div className="mb-12 text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
                                <Shield className="h-4 w-4 text-blue-300" />
                                <span className="text-sm font-bold uppercase tracking-wide text-blue-100">
                                    About Us
                                </span>
                            </div>

                            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                                MK Fraud{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                        Insights
                                    </span>
                                    <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-violet-500/50 blur-xl" />
                                </span>
                            </h1>

                            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 lg:text-2xl">
                                We are a fraud risk consulting venture focused on non-financial sectors in South Africa — helping organisations build practical fraud capability, reduce leakage, and protect customers.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
                            {approaches.map((approach, index) => {
                                const Icon = approach.icon;
                                const isHovered = hoveredValue === index;

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredValue(index)}
                                        onMouseLeave={() => setHoveredValue(null)}
                                    >
                                        <div
                                            className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${approach.gradient} opacity-0 blur-2xl transition-all duration-500 ${isHovered ? "opacity-60" : ""
                                                }`}
                                        />

                                        <div
                                            className={`relative h-full overflow-hidden rounded-3xl border-2 bg-gradient-to-br from-white/10 to-white/5 p-8 backdrop-blur-xl transition-all duration-500 ${isHovered
                                                ? "scale-105 border-cyan-400/30 shadow-2xl shadow-cyan-500/20"
                                                : "border-white/10 shadow-xl"
                                                }`}
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-violet-500/10 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""
                                                    }`}
                                            />

                                            <div className="relative">
                                                <div
                                                    className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${approach.gradient} shadow-lg transition-all duration-500 ${isHovered ? "rotate-12 scale-110" : ""
                                                        }`}
                                                >
                                                    <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                                                </div>

                                                <h3 className="mb-2 text-2xl font-bold text-white">
                                                    {approach.title}
                                                </h3>
                                                <p className="mb-4 text-sm font-semibold text-cyan-300">
                                                    {approach.description}
                                                </p>
                                                <p className="text-sm leading-relaxed text-slate-300">
                                                    {approach.detail}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
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
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/10 to-blue-500/10 px-5 py-2.5 shadow-sm backdrop-blur-sm">
                                <Award className="h-4 w-4 text-[#1d3658]" />
                                <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                                    Experience & Leadership
                                </span>
                            </div>

                            <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1d3658] sm:text-5xl lg:text-6xl">
                                Built by{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                                        practitioners
                                    </span>
                                    <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-violet-500/40 blur-xl" />
                                </span>
                            </h2>

                            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                                Our approach is grounded in operational reality, not theory — informed by strategy, analytics, and frontline risk management experience.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            {expertise.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div
                                        key={index}
                                        className="group overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 hover:scale-105 hover:border-blue-500/30 hover:shadow-2xl hover:shadow-blue-500/20"
                                    >
                                        <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d3658] to-blue-600 shadow-lg transition-transform duration-300 group-hover:rotate-6">
                                            <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                                        </div>
                                        <h3 className="mb-4 text-xl font-bold text-[#1d3658]">
                                            {item.title}
                                        </h3>
                                        <p className="leading-relaxed text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <HowWeWorkSection />

                <section className="relative overflow-hidden bg-gradient-to-br from-[#1d3658] via-blue-800 to-cyan-700">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

                    <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                            <div>
                                <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">
                                    Our values drive everything we do
                                </h2>
                                <p className="mb-8 text-xl leading-relaxed text-blue-100">
                                    We believe in delivering tangible outcomes that make a real difference to your organization's fraud resilience.
                                </p>

                                <div className="space-y-4">
                                    {values.map((value, index) => {
                                        const Icon = value.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="group flex items-center gap-4 rounded-2xl border-2 border-white/20 bg-white/10 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20 hover:shadow-xl"
                                            >
                                                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 to-blue-400 shadow-lg transition-transform duration-300 group-hover:rotate-6">
                                                    <Icon className="h-6 w-6 text-white" strokeWidth={2.5} />
                                                </div>
                                                <span className="text-lg font-bold text-white">
                                                    {value.title}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-3xl border-2 border-white/20 bg-white/10 p-8 backdrop-blur-xl lg:p-10">
                                <h3 className="mb-6 text-2xl font-bold text-white">
                                    Why work with us?
                                </h3>

                                <div className="space-y-5">
                                    {[
                                        { title: "Non-Financial Sector Focus", description: "Deep understanding of fraud risks outside traditional banking" },
                                        { title: "Practical Implementation", description: "Solutions designed for real-world operational environments" },
                                        { title: "End-to-End Capability", description: "From strategy and assessment to enablement and controls" },
                                        { title: "South African Context", description: "Local expertise with understanding of regional fraud patterns" },
                                    ].map((reason, index) => (
                                        <div
                                            key={index}
                                            className="group flex items-start gap-4 rounded-2xl border-2 border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:border-white/30 hover:bg-white/10"
                                        >
                                            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-blue-400 mt-1">
                                                <CheckCircle2 className="h-5 w-5 text-white" strokeWidth={3} />
                                            </div>
                                            <div>
                                                <h4 className="mb-1 font-bold text-white">{reason.title}</h4>
                                                <p className="text-sm text-blue-100">{reason.description}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>



                <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
                    <div className="absolute inset-0 -z-10">
                        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-[#1d3658]/5 blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
                    </div>

                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl lg:p-12">
                            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                                <div>
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1d3658]/10 px-4 py-2">
                                        <div className="relative flex h-2 w-2">
                                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1d3658] opacity-75"></span>
                                            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1d3658]"></span>
                                        </div>
                                        <span className="text-sm font-semibold text-[#1d3658]">
                                            Let's Work Together
                                        </span>
                                    </div>
                                    <h3 className="mb-4 text-3xl font-bold text-[#1d3658] lg:text-4xl">
                                        Ready to strengthen your fraud defences?
                                    </h3>
                                    <p className="text-lg text-slate-600">
                                        Book a call to discuss how we can help your organisation build practical fraud capability and reduce risk.
                                    </p>
                                </div>

                                <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                                    <Button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1d3658] via-blue-600 to-cyan-600 px-8 py-6 text-lg font-bold shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Book a Call
                                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-[#1d3658] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </Button>

                                    <Button
                                        variant="outline"
                                        className="group rounded-2xl border-2 border-[#1d3658] px-8 py-6 text-lg font-bold text-[#1d3658] transition-all duration-300 hover:bg-[#1d3658]/5"
                                    >
                                        <span className="flex items-center gap-2">
                                            View Services
                                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
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