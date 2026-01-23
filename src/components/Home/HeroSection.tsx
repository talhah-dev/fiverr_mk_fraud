"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Radar, Users, AlertTriangle, ArrowRight, Sparkles, TrendingDown } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const fraudPoints = [
    {
      icon: ShieldCheck,
      title: "Weak Internal Controls",
      description: "Trusted processes exploited quietly over time.",
      gradient: "from-red-500 to-orange-500",
    },
    {
      icon: Radar,
      title: "Limited Fraud Visibility",
      description: "Losses hidden inside operational noise.",
      gradient: "from-amber-500 to-yellow-500",
    },
    {
      icon: Users,
      title: "People as the Front Line",
      description: "Staff unsure how to recognise or escalate fraud.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: AlertTriangle,
      title: "Reactive Responses",
      description: "Action only after losses become visible.",
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50/50 to-white">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-[#1d3658]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1d3658]/3 blur-3xl" />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="grid grid-cols-1 md:gap-16 gap-8 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/5 to-blue-500/5 px-5 py-2 shadow-sm backdrop-blur-sm">
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1d3658] opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1d3658]"></span>
              </div>
              <span className="text-sm font-semibold text-[#1d3658]">
                Fraud Strategy • Risk • Awareness
              </span>
              <Sparkles className="h-4 w-4 text-[#1d3658]" />
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl font-bold leading-[1.1] tracking-tight capitalize text-[#1d3658] sm:text-6xl lg:text-7xl">
              Fraud is not only a{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#1d3658] to-blue-600 bg-clip-text text-transparent">
                  banking
                </span>
                <span className="absolute -bottom-2 left-0 h-3 w-full bg-gradient-to-r from-[#1d3658]/20 to-blue-500/20 blur-sm" />
              </span>{" "}
              problem.
            </h1>

            {/* Description */}
            <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              We help non-financial organisations identify, understand, and reduce fraud risk across
              operations, digital channels, and frontline environments </p>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 ">
              <Button
                size="lg"
                className="group w-full relative overflow-hidden bg-gradient-to-r from-[#1d3658] to-[#2a4a7a] px-8 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1d3658]/20"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Fraud Readiness Call
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#2a4a7a] to-[#1d3658] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="group w-full border-2 border-[#1d3658]/30 px-8 text-base font-semibold text-[#1d3658] transition-all duration-300 hover:border-[#1d3658] hover:bg-[#1d3658]/5"
              >
                <TrendingDown className="mr-2 h-5 w-5" />
                Download Fraud Readiness Checklist
              </Button>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-3 pt-4">
              {["Strategy", "Fraud Health Checks", "Awareness & Resilience", "Internal Controls"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-gradient-to-r from-[#1d3658]/10 to-blue-500/10 px-4 py-2 text-sm font-medium text-[#1d3658] backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:from-[#1d3658]/20 hover:to-blue-500/20"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Content - Card */}
          <div className="relative">
            {/* Glow Effect */}
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-[#1d3658]/20 via-blue-500/10 to-purple-500/10 opacity-60 blur-3xl" />

            {/* Main Card */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200/80 bg-white/80 p-8 shadow-2xl backdrop-blur-xl lg:p-10">
              {/* Header */}
              <div className="mb-8 flex items-start justify-between">
                <h3 className="max-w-xs text-xl font-bold text-[#1d3658] lg:text-2xl">
                  Where fraud hides in real organisations
                </h3>
                <div className="flex h-12 w-12 shrink-0  items-center justify-center rounded-full bg-gradient-to-br from-[#1d3658] to-blue-600 shadow-lg">
                  <AlertTriangle className="h-6 w-6 text-white" />
                </div>
              </div>

              {/* Grid of Fraud Points */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {fraudPoints.map((point, index) => {
                  const Icon = point.icon;
                  const isHovered = hoveredCard === index;

                  return (
                    <div
                      key={index}
                      className="group relative overflow-hidden rounded-2xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50/50 p-5 transition-all duration-300 hover:scale-105 hover:border-[#1d3658]/30 hover:shadow-lg"
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      {/* Gradient Overlay */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${point.gradient} opacity-0 transition-opacity duration-300 ${isHovered ? "opacity-5" : ""
                          }`}
                      />

                      <div className="relative flex items-start gap-4">
                        {/* Icon */}
                        <div
                          className={`flex h-12 w-12 shrink-0 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${point.gradient} p-0.5 shadow-md transition-transform duration-300 ${isHovered ? "rotate-6 scale-110" : ""
                            }`}
                        >
                          <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                            <Icon className="h-5 w-5 text-[#1d3658]" strokeWidth={2.5} />
                          </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <p className="mb-1 font-semibold text-[#1d3658] transition-colors duration-300 group-hover:text-blue-700">
                            {point.title}
                          </p>
                          <p className="text-sm leading-relaxed text-slate-600">
                            {point.description}
                          </p>
                        </div>
                      </div>

                      {/* Bottom accent line */}
                      <div
                        className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${point.gradient} transition-all duration-300 ${isHovered ? "opacity-100" : "opacity-0"
                          }`}
                      />
                    </div>
                  );
                })}
              </div>

              {/* Bottom Info Box */}
              <div className="mt-8 overflow-hidden rounded-2xl border-2 border-[#1d3658]/10 bg-gradient-to-r from-[#1d3658]/5 via-blue-500/5 to-[#1d3658]/5 p-5 backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#1d3658]">
                    <Sparkles className="h-4 w-4 text-white" />
                  </div>
                  <p className="text-sm font-medium leading-relaxed text-[#1d3658]">
                    Designed for non-financial sectors where fraud risk lives inside
                    everyday operations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}