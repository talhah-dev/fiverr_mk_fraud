"use client";

import { ShieldAlert, TrendingDown, Users, AlertCircle, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function ProblemSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const problems = [
    {
      icon: ShieldAlert,
      title: "Hidden Loss",
      description:
        "Small, repeated fraud often looks like operational noise until it quietly becomes a persistent margin leak.",
      stat: "78%",
      statLabel: "of fraud goes undetected initially",
      gradient: "from-red-500 to-rose-600",
      bgGradient: "from-red-50 to-rose-50",
    },
    {
      icon: TrendingDown,
      title: "Misaligned Controls",
      description:
        "Audit and investigations alone cannot prevent modern fraud patterns driven by speed, scale, and social engineering.",
      stat: "65%",
      statLabel: "of controls are reactive, not preventive",
      gradient: "from-amber-500 to-orange-600",
      bgGradient: "from-amber-50 to-orange-50",
    },
    {
      icon: Users,
      title: "People Are the Gap",
      description:
        "Without clear awareness and escalation paths, employees and partners unintentionally enable fraud to succeed.",
      stat: "82%",
      statLabel: "of fraud involves internal actors",
      gradient: "from-blue-500 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#1d3658]/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-red-500/5 blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Header Section */}
        <div className="mb-20 max-w-3xl">
          {/* Warning Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-red-200 bg-gradient-to-r from-red-50 to-orange-50 px-5 py-2.5 shadow-sm">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <span className="text-sm font-bold uppercase tracking-wide text-red-700">
              Critical Business Risk
            </span>
          </div>

          <h2 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-[#1d3658] sm:text-5xl lg:text-6xl">
            Fraud is already in your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                operating model
              </span>
              <span className="absolute -bottom-2 left-0 h-3 w-full bg-gradient-to-r from-red-500/30 to-orange-500/30 blur-md" />
            </span>
          </h2>

          <p className="text-lg leading-relaxed text-slate-600 sm:text-xl">
            Most organisations don't see fraud clearly because it hides inside
            everyday processes, trusted roles, and operational noise.
          </p>
        </div>

        {/* Cards Grid */}
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
                {/* Glow effect on hover */}
                <div
                  className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r ${problem.gradient} opacity-0 blur-xl transition-all duration-500 ${
                    isHovered ? "opacity-20" : ""
                  }`}
                />

                {/* Main Card */}
                <div
                  className={`relative h-full overflow-hidden rounded-3xl border-2 bg-white p-8 shadow-lg transition-all duration-500 ${
                    isHovered
                      ? "scale-[1.02] border-transparent shadow-2xl"
                      : "border-slate-200"
                  }`}
                >
                  {/* Gradient Background on Hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${problem.bgGradient} opacity-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-100" : ""
                    }`}
                  />

                  {/* Content */}
                  <div className="relative">
                    {/* Icon Container */}
                    <div className="mb-6 flex items-center justify-between">
                      <div
                        className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${problem.gradient} p-0.5 shadow-lg transition-all duration-500 ${
                          isHovered ? "rotate-6 scale-110" : ""
                        }`}
                      >
                        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                          <Icon
                            className="h-7 w-7 text-[#1d3658]"
                            strokeWidth={2.5}
                          />
                        </div>
                      </div>

                      {/* Decorative element */}
                      <div
                        className={`h-12 w-12 rounded-full bg-gradient-to-br ${problem.gradient} opacity-10 blur-xl transition-all duration-500 ${
                          isHovered ? "scale-150 opacity-20" : ""
                        }`}
                      />
                    </div>

                    {/* Title */}
                    <h3 className="mb-4 text-2xl font-bold text-[#1d3658] transition-colors duration-300">
                      {problem.title}
                    </h3>

                    {/* Description */}
                    <p className="mb-6 leading-relaxed text-slate-600">
                      {problem.description}
                    </p>

                    {/* Stat Section */}
                    <div
                      className={`overflow-hidden rounded-xl border-2 bg-gradient-to-br transition-all duration-500 ${
                        isHovered
                          ? `border-transparent ${problem.bgGradient}`
                          : "border-slate-100 from-slate-50 to-white"
                      }`}
                    >
                      <div className="p-4">
                        <div className="flex items-end justify-between">
                          <div>
                            <div
                              className={`mb-1 bg-gradient-to-r ${problem.gradient} bg-clip-text text-4xl font-black text-transparent`}
                            >
                              {problem.stat}
                            </div>
                            <div className="text-sm font-medium text-slate-600">
                              {problem.statLabel}
                            </div>
                          </div>
                          <ArrowRight
                            className={`h-5 w-5 text-slate-400 transition-all duration-300 ${
                              isHovered
                                ? "translate-x-1 text-[#1d3658]"
                                : ""
                            }`}
                          />
                        </div>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1.5 w-full bg-slate-100">
                        <div
                          className={`h-full bg-gradient-to-r ${problem.gradient} transition-all duration-1000 ${
                            isHovered ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Corner accent */}
                  <div
                    className={`absolute right-0 top-0 h-24 w-24 bg-gradient-to-br ${problem.gradient} opacity-0 blur-2xl transition-opacity duration-500 ${
                      isHovered ? "opacity-10" : ""
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl border-2 border-[#1d3658]/10 bg-gradient-to-r from-[#1d3658]/5 via-transparent to-blue-500/5 p-8 text-center backdrop-blur-sm lg:p-12">
          <div className="mx-auto max-w-2xl">
            <h3 className="mb-4 text-2xl font-bold text-[#1d3658] lg:text-3xl">
              Don't wait for fraud to become visible
            </h3>
            <p className="mb-6 text-lg text-slate-600">
              Take proactive steps to identify, prevent, and respond to fraud before it impacts your bottom line.
            </p>
            <button className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1d3658] to-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1d3658]/20">
              Schedule Your Fraud Assessment
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}