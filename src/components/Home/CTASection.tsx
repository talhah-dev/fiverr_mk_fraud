"use client";

import { ArrowRight, Calendar, CheckCircle2, Clock, Shield } from "lucide-react";
import { useState } from "react";

export default function CTASection() {
  const [isHovered, setIsHovered] = useState(false);

  const benefits = [
    {
      icon: Clock,
      text: "Get results in 30 days",
    },
    {
      icon: Shield,
      text: "Tailored to your risk profile",
    },
    {
      icon: CheckCircle2,
      text: "Actionable fraud prevention plan",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[600px] w-[600px] rounded-full bg-[#1d3658]/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-[#1d3658]/5 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,#1d365808,transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-[#1d3658]/10 bg-gradient-to-br from-white via-slate-50/50 to-white shadow-2xl">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:50px_50px]" />

          <div
            className="absolute right-0 top-0 h-[400px] w-[400px] bg-gradient-to-br from-[#1d3658] to-[#2a5080] opacity-5 blur-3xl"
          />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/10 to-[#1d3658]/5 px-5 py-2.5 shadow-sm backdrop-blur-sm">
                  <div className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#1d3658] opacity-75"></span>
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-[#1d3658]"></span>
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                    Limited Availability
                  </span>
                </div>

                <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-[#1d3658] sm:text-5xl lg:text-6xl">
                  Want a clear fraud plan in{" "}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-gradient-to-r from-[#1d3658] to-[#2a5080] bg-clip-text text-transparent">
                      30 days?
                    </span>
                    <svg
                      className="absolute -bottom-2 left-0 w-full text-[#1d3658]/20"
                      height="12"
                      viewBox="0 0 300 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6C75 6 75 0 150 0C225 0 225 6 300 6"
                        stroke="currentColor"
                        strokeWidth="3"
                      />
                    </svg>
                  </span>
                </h2>

                <p className="mb-8 text-lg leading-relaxed text-slate-600 sm:text-xl">
                  Book a call and we'll recommend the quickest, highest-impact path based on your organisation's environment.
                </p>

                <div className="mb-10 space-y-4">
                  {benefits.map((benefit, index) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-4 transition-all duration-300 hover:translate-x-2"
                      >
                        <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d3658] to-[#2a5080] shadow-lg">
                          <Icon className="h-5 w-5 text-white" strokeWidth={2.5} />
                        </div>
                        <span className="text-lg font-semibold text-[#1d3658]">
                          {benefit.text}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-4 sm:flex-row">
                  <button
                    className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1d3658] to-[#2a5080] px-8 py-5 text-lg font-bold text-white shadow-2xl shadow-[#1d3658]/20 transition-all duration-300 hover:scale-105 hover:shadow-[#1d3658]/30"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-3">
                      <Calendar className="h-6 w-6" />
                      Book Your Strategy Call
                      <ArrowRight
                        className={`h-6 w-6 transition-transform duration-300 ${
                          isHovered ? "translate-x-2" : ""
                        }`}
                      />
                    </span>
                    <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#2a5080] to-[#1d3658] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>

                  <button className="group rounded-2xl border-2 border-[#1d3658] bg-white px-8 py-5 text-lg font-bold text-[#1d3658] transition-all duration-300 hover:bg-[#1d3658]/5">
                    <span className="flex items-center justify-center gap-2">
                      Learn More
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>

                <p className="mt-6 flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="h-4 w-4 text-[#1d3658]" />
                  No commitment required • Free consultation
                </p>
              </div>

              <div className="relative">
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#1d3658]/20 to-transparent blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border-2 border-[#1d3658]/10 bg-gradient-to-br from-white to-slate-50/50 p-8 shadow-xl lg:p-10">
                  <div className="mb-8 flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-[#1d3658]">
                      What You'll Get
                    </h3>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#1d3658] to-[#2a5080] shadow-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                  </div>

                  <div className="space-y-5">
                    {[
                      {
                        title: "Risk Assessment",
                        description: "Complete analysis of your fraud exposure points",
                        progress: 100,
                      },
                      {
                        title: "Custom Strategy",
                        description: "Tailored plan aligned with your operations",
                        progress: 85,
                      },
                      {
                        title: "Implementation Roadmap",
                        description: "Clear 30-day action plan with priorities",
                        progress: 90,
                      },
                      {
                        title: "Expert Guidance",
                        description: "Direct access to fraud prevention specialists",
                        progress: 95,
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="group overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-5 transition-all duration-300 hover:scale-[1.02] hover:border-[#1d3658]/20 hover:shadow-lg"
                      >
                        <div className="mb-3 flex items-start justify-between">
                          <div className="flex-1">
                            <h4 className="mb-1 font-bold text-[#1d3658]">
                              {item.title}
                            </h4>
                            <p className="text-sm text-slate-600">
                              {item.description}
                            </p>
                          </div>
                          <CheckCircle2 className="h-5 w-5 flex-shrink-0 text-[#1d3658]" />
                        </div>

                        <div className="overflow-hidden rounded-full bg-slate-100">
                          <div
                            className="h-2 rounded-full bg-gradient-to-r from-[#1d3658] to-[#2a5080] transition-all duration-1000"
                            style={{ width: `${item.progress}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 rounded-2xl bg-gradient-to-r from-[#1d3658]/10 to-[#2a5080]/5 p-5">
                    <div className="flex items-start gap-3">
                      <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-[#1d3658]">
                        <Clock className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <p className="mb-1 text-sm font-bold text-[#1d3658]">
                          Fast Track Available
                        </p>
                        <p className="text-sm text-slate-600">
                          Urgent fraud concerns? We offer expedited 14-day assessments for critical situations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#1d3658] to-transparent opacity-50" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { number: "30", label: "Days to Strategy" },
            { number: "100%", label: "Customized" },
            { number: "24/7", label: "Support" },
            { number: "50+", label: "Clients Helped" },
          ].map((stat, index) => (
            <div
              key={index}
              className="rounded-2xl border-2 border-[#1d3658]/10 bg-white p-6 text-center transition-all duration-300 hover:scale-105 hover:border-[#1d3658]/20 hover:shadow-lg"
            >
              <div className="mb-2 bg-gradient-to-r from-[#1d3658] to-[#2a5080] bg-clip-text text-4xl font-black text-transparent">
                {stat.number}
              </div>
              <div className="text-sm font-medium text-slate-600">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}