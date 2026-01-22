"use client";

import { Briefcase, ShieldCheck, TrendingUp, Check, Award, ArrowRight, Star } from "lucide-react";
import { useState } from "react";

export default function ProofSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const proofPoints = [
    {
      icon: Briefcase,
      title: "Practitioner-Led",
      description:
        "Built by professionals with hands-on experience across fraud strategy, prevention, controls, and awareness.",
      highlights: ["15+ years experience", "Multi-industry expertise", "Real fraud cases"],
      gradient: "from-[#1d3658] via-[#2563eb] to-[#3b82f6]",
      bgGradient: "from-blue-50 via-indigo-50 to-slate-50",
      iconBg: "from-[#1d3658] to-[#2563eb]",
      glowColor: "bg-blue-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Practical by Design",
      description:
        "Focused on people, processes, and decision points — not just policies or systems.",
      highlights: ["Action-oriented", "No tick-box compliance", "Operational focus"],
      gradient: "from-[#1d3658] via-[#0891b2] to-[#06b6d4]",
      bgGradient: "from-cyan-50 via-teal-50 to-slate-50",
      iconBg: "from-[#1d3658] to-[#0891b2]",
      glowColor: "bg-cyan-500/20",
    },
    {
      icon: TrendingUp,
      title: "Outcome Focused",
      description:
        "Designed to reduce leakage, improve visibility, and enable faster, more confident responses.",
      highlights: ["Measurable results", "ROI-driven", "Sustainable impact"],
      gradient: "from-[#1d3658] via-[#7c3aed] to-[#8b5cf6]",
      bgGradient: "from-violet-50 via-purple-50 to-slate-50",
      iconBg: "from-[#1d3658] to-[#7c3aed]",
      glowColor: "bg-violet-500/20",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1d3658] to-slate-800">
      <div className="absolute inset-0">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
            <Award className="h-4 w-4 text-blue-300" />
            <span className="text-sm font-bold uppercase tracking-wide text-blue-100">
              Proven Expertise
            </span>
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight capitalize tracking-tight text-white sm:text-5xl lg:text-6xl">
            Built for{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                real-world
              </span>
              <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-violet-500/40 blur-xl" />
            </span>{" "}
            fraud risk
          </h2>

          <p className="text-lg leading-relaxed text-slate-300 sm:text-xl">
            Our work is grounded in operational reality — focused on outcomes,
            not theory, tools, or tick-box compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {proofPoints.map((point, index) => {
            const Icon = point.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${point.gradient} opacity-0 blur-2xl transition-all duration-500 ${
                    isHovered ? "opacity-60" : ""
                  }`}
                />

                <div
                  className={`relative h-full overflow-hidden rounded-3xl border-2 bg-gradient-to-br from-white to-slate-50 p-8 shadow-2xl transition-all duration-500 ${
                    isHovered
                      ? "scale-[1.05] border-transparent shadow-[0_20px_80px_-20px] shadow-blue-500/30"
                      : "border-slate-200"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${point.bgGradient} opacity-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-80" : ""
                    }`}
                  />

                  <div className="relative">
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${point.iconBg} p-1 shadow-2xl transition-all duration-500 ${
                          isHovered ? "rotate-12 scale-110 shadow-blue-500/50" : ""
                        }`}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-xl bg-white">
                          <Icon
                            className="h-7 w-7 text-[#1d3658]"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>

                      <div className={`h-20 w-20 rounded-full ${point.glowColor} blur-2xl transition-all duration-500 ${isHovered ? "scale-150" : "scale-0"}`} />
                    </div>

                    <h3 className="mb-4 text-2xl font-bold text-[#1d3658]">
                      {point.title}
                    </h3>

                    <p className="mb-6 leading-relaxed text-slate-600">
                      {point.description}
                    </p>

                    <div className="space-y-3">
                      {point.highlights.map((highlight, idx) => (
                        <div
                          key={idx}
                          className={`flex items-center gap-3 transition-all duration-300 ${
                            isHovered ? "translate-x-2" : ""
                          }`}
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <div className={`flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${point.iconBg} shadow-lg`}>
                            <Check className="h-4 w-4 text-white" strokeWidth={3} />
                          </div>
                          <span className="text-sm font-semibold text-slate-700">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div
                      className={`mt-8 overflow-hidden rounded-2xl border-2 transition-all duration-500 ${
                        isHovered
                          ? `border-transparent bg-gradient-to-r ${point.gradient} shadow-lg`
                          : "border-slate-200 bg-white"
                      }`}
                    >
                      <div className={`p-5 ${isHovered ? "bg-white/90 " : ""}`}>
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-bold transition-colors ${isHovered ? "text-[#1d3658]" : "text-slate-700"}`}>
                            Learn More About This
                          </span>
                          <div
                            className={`flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br ${point.iconBg} shadow-lg transition-all duration-300 ${
                              isHovered ? "translate-x-2 scale-110" : ""
                            }`}
                          >
                            <ArrowRight className="h-5 w-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`absolute right-0 top-0 h-32 w-32 rounded-full bg-gradient-to-br ${point.gradient} opacity-0 blur-3xl transition-opacity duration-500 ${
                      isHovered ? "opacity-20" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}