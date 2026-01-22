"use client";

import { Button } from "@/components/ui/button";
import { Radar, ShieldCheck, Users, Layers, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ServicesSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const services = [
    {
      icon: Users,
      title: "Awareness & Resilience",
      description:
        "Enable employees, customers, and suppliers to recognise fraud early and act with confidence.",
    },
    {
      icon: Radar,
      title: "Fraud Health Check",
      description:
        "Pinpoint where fraud enters, why controls fail, and what to fix first with a clear action plan.",
    },
    {
      icon: ShieldCheck,
      title: "Internal Fraud Controls",
      description:
        "Strengthen internal and third-party controls without adding friction or bureaucracy.",
    },
    {
      icon: Layers,
      title: "Fraud Programme Design",
      description:
        "Build a clear, practical fraud framework with ownership, accountability, and direction.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#1d3658]/5 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#1d3658]/3 blur-3xl" />
      </div>

      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border-2 border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/10 to-[#1d3658]/5 px-5 py-2.5 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-[#1d3658]" />
              <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                Core Services
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-[1.1] capitalize tracking-tight text-[#1d3658] sm:text-5xl lg:text-6xl">
              Practical fraud support{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-[#1d3658] to-[#2a5080] bg-clip-text text-transparent">
                  where risk actually lives
                </span>
              </span>
            </h2>

            <p className="max-w-xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              We don't sell tools or theory. We help organisations understand how
              fraud really happens and design controls that work inside everyday
              operations.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button className="group relative overflow-hidden bg-gradient-to-r from-[#1d3658] to-[#2a5080] px-8 py-6 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#1d3658]/20">
                <span className="relative z-10 flex items-center gap-2">
                  Request a Fraud Health Check
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 -z-0 bg-gradient-to-r from-[#2a5080] to-[#1d3658] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Button>

              <Button
                variant="outline"
                className="group border-2 border-[#1d3658]/30 px-8 py-6 text-base font-semibold text-[#1d3658] transition-all duration-300 hover:border-[#1d3658] hover:bg-[#1d3658]/5"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </div>

            {/* <div className="grid grid-cols-2 gap-4 rounded-2xl border-2 border-[#1d3658]/10 bg-gradient-to-br from-white to-slate-50/50 p-6 shadow-sm">
              <div className="text-center">
                <div className="mb-2 text-3xl font-black text-[#1d3658]">50+</div>
                <div className="text-sm font-medium text-slate-600">Clients Served</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-black text-[#1d3658]">15+</div>
                <div className="text-sm font-medium text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-black text-[#1d3658]">98%</div>
                <div className="text-sm font-medium text-slate-600">Success Rate</div>
              </div>
              <div className="text-center">
                <div className="mb-2 text-3xl font-black text-[#1d3658]">24/7</div>
                <div className="text-sm font-medium text-slate-600">Support Available</div>
              </div>
            </div> */}
          </div>

          <div className="relative">
            <div className="absolute -inset-8 rounded-3xl bg-gradient-to-tr from-[#1d3658]/20 via-transparent to-[#1d3658]/10 blur-3xl" />

            <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredCard === index;

                return (
                  <div
                    key={index}
                    className="group relative"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div
                      className={`absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-[#1d3658] to-[#2a5080] opacity-0 blur-lg transition-all duration-500 ${
                        isHovered ? "opacity-30" : ""
                      }`}
                    />

                    <div
                      className={`relative h-full overflow-hidden rounded-3xl border-2 bg-white p-8 shadow-lg transition-all duration-500 ${
                        isHovered
                          ? "scale-105 border-[#1d3658]/20 shadow-2xl shadow-[#1d3658]/10"
                          : "border-slate-200"
                      }`}
                    >
                      <div
                        className={`absolute inset-0 bg-gradient-to-br from-[#1d3658]/5 to-transparent opacity-0 transition-opacity duration-500 ${
                          isHovered ? "opacity-100" : ""
                        }`}
                      />

                      <div className="relative">
                        <div
                          className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d3658] to-[#2a5080] p-0.5 shadow-lg transition-all duration-500 ${
                            isHovered ? "rotate-12 scale-110" : ""
                          }`}
                        >
                          <div className="flex h-full w-full items-center justify-center rounded-2xl bg-white">
                            <Icon
                              className="h-6 w-6 text-[#1d3658]"
                              strokeWidth={2.5}
                            />
                          </div>
                        </div>

                        <h3 className="mb-3 text-xl font-bold text-[#1d3658] transition-colors duration-300">
                          {service.title}
                        </h3>

                        <p className="mb-6 leading-relaxed text-slate-600">
                          {service.description}
                        </p>

                        <div
                          className={`flex items-center gap-2 text-sm font-semibold text-[#1d3658] transition-all duration-300 ${
                            isHovered ? "translate-x-2" : ""
                          }`}
                        >
                          <span>Learn More</span>
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>

                      <div
                        className={`absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#1d3658] to-[#2a5080] transition-all duration-500 ${
                          isHovered ? "opacity-100" : "opacity-0"
                        }`}
                      />

                      <div
                        className={`absolute right-0 top-0 h-32 w-32 bg-gradient-to-br from-[#1d3658] to-[#2a5080] opacity-0 blur-2xl transition-opacity duration-500 ${
                          isHovered ? "opacity-5" : ""
                        }`}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}