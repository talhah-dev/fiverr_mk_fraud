"use client";

import { ShieldCheck, AlertTriangle, Eye, TrendingUp, CheckCircle2, ArrowRight, Lock, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function ControlsMonitoringSection() {
    const [hoveredOutput, setHoveredOutput] = useState<number | null>(null);

    const outputs = [
        {
            icon: ShieldCheck,
            title: "Preventive and detective control design",
            description: "Controls that stop fraud before it happens and detect it when prevention fails",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            icon: Eye,
            title: "Monitoring and escalation logic",
            description: "Clear processes for identifying issues and ensuring they reach the right people",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            icon: TrendingUp,
            title: "Practical control recommendations",
            description: "Solutions tailored to your systems and processes, not generic frameworks",
            gradient: "from-cyan-600 to-violet-600",
        },
    ];

    const benefits = [
        {
            title: "Embedded Controls",
            description: "Work within existing systems",
            icon: Settings,
        },
        {
            title: "Clear Escalation",
            description: "Issues reach decision-makers",
            icon: AlertTriangle,
        },
        {
            title: "Prevention Focus",
            description: "Stop fraud before it occurs",
            icon: ShieldCheck,
        },
        {
            title: "Operational Flow",
            description: "No business slowdown",
            icon: TrendingUp,
        },
    ];

    return (
        <section id="controls" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1d3658] to-slate-800">
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
                <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-purple-500/10 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
            </div>

            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

            <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                <div className="mb-16 text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-purple-400/30 bg-gradient-to-r from-purple-500/20 to-blue-500/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
                        <Lock className="h-4 w-4 text-purple-300" />
                        <span className="text-sm font-bold uppercase tracking-wide text-purple-100">
                            Service Four
                        </span>
                    </div>

                    <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                        Controls &{" "}
                        <span className="relative inline-block">
                            <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent">
                                Monitoring Design
                            </span>
                            <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-purple-500/50 blur-xl" />
                        </span>
                    </h2>

                    <p className="mx-auto max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                        Support in designing and embedding fraud controls that work within existing systems and processes.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <div className="mb-8">
                            <h3 className="mb-4 text-3xl font-bold text-white">
                                What You Receive
                            </h3>
                            <p className="text-lg text-slate-300">
                                Practical control designs that integrate with your operations without adding unnecessary complexity.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {outputs.map((output, index) => {
                                const Icon = output.icon;
                                const isHovered = hoveredOutput === index;

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredOutput(index)}
                                        onMouseLeave={() => setHoveredOutput(null)}
                                    >
                                        <div
                                            className={`absolute -inset-0.5 rounded-2xl bg-gradient-to-r ${output.gradient} opacity-0 blur-xl transition-all duration-500 ${isHovered ? "opacity-60" : ""
                                                }`}
                                        />

                                        <div
                                            className={`relative overflow-hidden rounded-2xl border-2 bg-gradient-to-br from-white/10 to-white/5 p-6 backdrop-blur-xl transition-all duration-500 ${isHovered
                                                    ? "scale-105 border-purple-400/30 shadow-2xl shadow-purple-500/20"
                                                    : "border-white/10 shadow-lg"
                                                }`}
                                        >
                                            <div
                                                className={`absolute inset-0 bg-gradient-to-br from-blue-500/10 via-cyan-500/10 to-purple-500/10 opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-100" : ""
                                                    }`}
                                            />

                                            <div className="relative flex items-start gap-4">
                                                <div
                                                    className={`flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${output.gradient} shadow-lg transition-all duration-500 ${isHovered ? "rotate-12 scale-110 shadow-purple-500/50" : ""
                                                        }`}
                                                >
                                                    <Icon className="h-7 w-7 text-white" strokeWidth={2.5} />
                                                </div>

                                                <div className="flex-1">
                                                    <h4 className="mb-2 text-lg font-bold text-white">
                                                        {output.title}
                                                    </h4>
                                                    <p className="text-sm leading-relaxed text-slate-300">
                                                        {output.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-8 overflow-hidden rounded-2xl border-2 border-white/10 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 backdrop-blur-xl">
                            <div className="flex items-start gap-3">
                                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white/20">
                                    <Settings className="h-5 w-5 text-white" />
                                </div>
                                <div>
                                    <p className="mb-2 text-sm font-bold text-white">
                                        Embedded in Your Systems
                                    </p>
                                    <p className="text-sm text-slate-300">
                                        We design controls that work within your existing technology and processes, ensuring they are practical and sustainable.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="sticky top-8 space-y-6">
                            <div className="overflow-hidden rounded-3xl border-2 border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-2xl backdrop-blur-xl lg:p-10">
                                <div className="mb-8 flex items-center justify-between">
                                    <h3 className="text-2xl font-bold text-white">
                                        Service Benefits
                                    </h3>
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-blue-500 shadow-lg">
                                        <Lock className="h-6 w-6 text-white" />
                                    </div>
                                </div>

                                <div className="mb-8 rounded-2xl border-2 border-white/10 bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-6 backdrop-blur-sm">
                                    <p className="text-lg font-semibold text-white">
                                        Controls designed to work in practice, not just on paper.
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {benefits.map((benefit, index) => {
                                        const Icon = benefit.icon;
                                        return (
                                            <div
                                                key={index}
                                                className="group overflow-hidden rounded-2xl border-2 border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-purple-400/30 hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/20"
                                            >
                                                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-blue-500 transition-transform duration-300 group-hover:rotate-6">
                                                    <Icon className="h-5 w-5 text-white" />
                                                </div>
                                                <h4 className="mb-1 text-sm font-bold text-white">
                                                    {benefit.title}
                                                </h4>
                                                <p className="text-xs text-slate-300">
                                                    {benefit.description}
                                                </p>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="overflow-hidden rounded-3xl border-2 border-white/10 bg-white/5 p-8 backdrop-blur-xl">
                                <div className="mb-6">
                                    <h4 className="mb-3 text-xl font-bold text-white">
                                        Deliverables
                                    </h4>
                                    <div className="space-y-3">
                                        {[
                                            "Control design documentation",
                                            "Monitoring framework",
                                            "Escalation pathways",
                                            "Implementation guidance",
                                        ].map((item, index) => (
                                            <div key={index} className="flex items-center gap-3">
                                                <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-400">
                                                    <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                                                </div>
                                                <span className="text-sm font-medium text-white">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-5 backdrop-blur-sm">
                                    <div className="mb-3 flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-purple-400" />
                                        <span className="text-sm font-bold text-white">Typical Timeline</span>
                                    </div>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl font-black text-white">6-8</span>
                                        <span className="text-lg font-semibold text-slate-300">weeks</span>
                                    </div>
                                    <p className="mt-2 text-xs text-slate-400">
                                        From discovery to control implementation
                                    </p>
                                </div>

                                <Button className="mt-6 w-full rounded-xl bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 py-6 text-lg font-bold shadow-2xl shadow-purple-500/40 transition-all duration-300 hover:scale-105 hover:shadow-purple-500/60">
                                    <span className="flex items-center justify-center gap-2">
                                        Design Your Controls
                                        <ArrowRight className="h-5 w-5" />
                                    </span>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50" />
        </section>
    );
}