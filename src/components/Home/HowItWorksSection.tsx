"use client";

import { GraduationCap, Map, Layers, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function HowItWorksSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);


  const steps = [
    {
      icon: GraduationCap,
      title: "Train & Sensitise",
      description:
        "Targeted fraud awareness for employees, customers, and suppliers — focused on recognition, response, and escalation.",
      timeline: "Weeks 1–2",
      color: "from-blue-500 to-cyan-500",
      delay: "0ms",
    },
    {
      icon: Map,
      title: "Assess & Map",
      description:
        "Review controls, behaviours, and incident patterns to understand how fraud actually enters your organisation.",
      timeline: "Weeks 3–4",
      color: "from-violet-500 to-purple-500",
      delay: "100ms",
    },
    {
      icon: Layers,
      title: "Build & Embed",
      description:
        "Translate insight into practical controls, playbooks, and ongoing enablement that support everyday decision-making.",
      timeline: "Month 2–3",
      color: "from-fuchsia-500 to-pink-500",
      delay: "200ms",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-50">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-4 top-0 h-72 w-72 animate-pulse rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute -right-4 bottom-0 h-72 w-72 animate-pulse rounded-full bg-purple-100/40 blur-3xl" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Header */}
        <div className="mb-20 max-w-3xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-500"></span>
            </span>
            Our Process
          </div>
          <h2 className="bg-gradient-to-r from-[#1d3658] to-blue-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-5xl lg:text-6xl">
            From awareness to sustained fraud resilience
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
            We follow a clear, practical path that turns insight into action and
            embeds fraud resilience into daily operations.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="relative grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Connection Lines */}
          <div className="absolute left-0 top-1/2 hidden h-0.5 w-full md:block">
            <div className="h-full w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
          </div>

          {steps.map((step, index) => {
            const Icon = step.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={index}
                className="group relative"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ animationDelay: step.delay }}
              >
                {/* Card */}
                <div
                  className={`relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all duration-500 ${
                    isHovered
                      ? "scale-105 shadow-2xl shadow-blue-500/10"
                      : "shadow-lg hover:shadow-xl"
                  }`}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 transition-opacity duration-500 ${
                      isHovered ? "opacity-5" : ""
                    }`}
                  />

                  <div className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-bold text-slate-400 transition-all duration-300 group-hover:bg-slate-200">
                    {index + 1}
                  </div>

                  <div className="relative mb-6">
                    <div
                      className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} p-0.5 shadow-lg transition-transform duration-300 ${
                        isHovered ? "rotate-6 scale-110" : ""
                      }`}
                    >
                      <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                        <Icon className={`h-7 w-7 bg-gradient-to-br ${step.color} bg-clip-text opacity-75`} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="mb-3 text-2xl font-bold text-[#1d3658] transition-colors duration-300 group-hover:text-blue-900">
                      {step.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-slate-600">
                      {step.description}
                    </p>

                    {/* Timeline Badge */}
                    <div className="flex items-center justify-between">
                      <span
                        className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${step.color} px-4 py-2 text-sm font-semibold text-white shadow-md`}
                      >
                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {step.timeline}
                      </span>

                      {/* Arrow */}
                      <ArrowRight
                        className={`h-5 w-5 text-slate-400 transition-all duration-300 ${
                          isHovered ? "translate-x-1 text-blue-600" : ""
                        }`}
                      />
                    </div>
                  </div>

                  {/* Bottom Gradient Line */}
                  <div
                    className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r ${step.color} transition-all duration-500 ${
                      isHovered ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </div>

                {/* Connector Arrow (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="absolute -right-4 top-1/2 z-10 hidden -translate-y-1/2 md:block">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md ring-4 ring-slate-100">
                      <ArrowRight className="h-4 w-4 text-blue-600" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-slate-500">
            Ready to get started?
          </p>
          <button className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1d3658] to-blue-900 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
            Begin Your Journey
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}