"use client";

import { ShieldAlert, TrendingDown, Users, AlertCircle } from "lucide-react";
import { useState } from "react";

export default function ProblemSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const problems = [
    {
      icon: ShieldAlert,
      title: "Hidden Loss",
      description:
        "Fraud often hides inside operational noise, small exceptions, and manual workarounds — going unnoticed until it becomes material.",
      gradient: "from-[#1d3658] to-blue-600",
      bgGradient: "from-blue-50 to-slate-50",
    },
    {
      icon: TrendingDown,
      title: "Misaligned Controls",
      description:
        "Many controls are built for audit and compliance, not prevention. As a result, fraud is detected late or managed reactively.",
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-cyan-50 to-blue-50",
    },
    {
      icon: Users,
      title: "People Are the Gap",
      description:
        "When roles, escalation paths, and accountability are unclear, even well-intentioned staff become part of the exposure.",
      gradient: "from-cyan-600 to-violet-600",
      bgGradient: "from-violet-50 to-cyan-50",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#1d3658]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="mb-20 max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/10 to-blue-500/10 px-5 py-2.5 shadow-sm">
            <AlertCircle className="h-4 w-4 text-[#1d3658]" />
            <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
              Core Problem
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1d3658] sm:text-5xl lg:text-6xl">
            Fraud is already embedded in your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                operating model
              </span>
              <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-violet-500/40 blur-xl" />
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
            Most organisations don't see fraud clearly because it hides inside everyday processes, trusted roles, and operational noise.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${problem.gradient} opacity-0 blur-xl transition-all duration-500 ${isHovered ? "opacity-30" : ""
                    }`}
                />

                <div
                  className={`relative h-full overflow-hidden rounded-3xl border-2 bg-white p-8 shadow-lg transition-all duration-500 ${isHovered
                    ? "scale-[1.02] border-transparent shadow-2xl"
                    : "border-slate-200"
                    }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${problem.bgGradient} opacity-0 transition-opacity duration-500 ${isHovered ? "opacity-60" : ""
                      }`}
                  />

                  <div className="relative">
                    <div className="mb-6">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${problem.gradient} shadow-lg transition-all duration-500 ${isHovered ? "rotate-12 scale-110" : ""
                          }`}
                      >
                        <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                      </div>
                    </div>

                    <h3 className="mb-4 text-2xl font-bold text-[#1d3658]">
                      {problem.title}
                    </h3>

                    <p className="leading-relaxed text-slate-600">
                      {problem.description}
                    </p>
                  </div>

                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${problem.gradient} transition-all duration-500 ${isHovered ? "opacity-100" : "opacity-0"
                      }`}
                  />

                  <div
                    className={`absolute right-0 top-0 h-24 w-24 bg-gradient-to-br ${problem.gradient} opacity-0 blur-2xl transition-opacity duration-500 ${isHovered ? "opacity-10" : ""
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