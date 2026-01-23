"use client";

import { Mail, CheckCircle2, Linkedin, MessageSquare, Send, Clock, Shield, MapPin } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import Wrapper from "@/app/Wrapper";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    "Free 30-minute consultation",
    "Custom fraud risk assessment",
    "No obligation quote",
    "Expert guidance",
  ];

  return (
    <Wrapper>
      <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#1d3658]/5 blur-3xl" />
          <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/5 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
        </div>

        <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-[#1d3658]/20 bg-gradient-to-r from-[#1d3658]/10 to-blue-500/10 px-5 py-2.5 shadow-sm backdrop-blur-sm">
              <MessageSquare className="h-4 w-4 text-[#1d3658]" />
              <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                Get In Touch
              </span>
            </div>

            <h1 className="mx-auto mb-6 max-w-3xl text-center text-5xl font-bold leading-tight tracking-tight text-[#1d3658] sm:text-6xl lg:text-7xl">
              Let's discuss your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600 bg-clip-text text-transparent">
                  fraud strategy
                </span>
                <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-violet-500/40 blur-xl" />
              </span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Book a free consultation to explore how we can help strengthen your fraud defences and build resilience across your organisation.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-2xl lg:p-12">
                <div className="mb-8">
                  <h2 className="mb-2 text-3xl font-bold text-[#1d3658]">
                    Send us a message
                  </h2>
                  <p className="text-slate-600">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                {isSubmitted ? (
                  <div className="rounded-2xl border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 p-8 text-center">
                    <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500">
                      <CheckCircle2 className="h-8 w-8 text-white" strokeWidth={3} />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold text-green-900">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-green-700">
                      Thank you for contacting us. We'll review your message and respond within 24 hours during business days.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[#1d3658]">
                          Full Name *
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full rounded-xl border-2 bg-slate-50 px-4 py-3 text-slate-900 transition-all duration-300 focus:bg-white focus:outline-none ${focusedField === "name"
                              ? "border-blue-500 shadow-lg shadow-blue-500/20"
                              : "border-slate-200"
                              }`}
                            placeholder="John Doe"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[#1d3658]">
                          Email Address *
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full rounded-xl border-2 bg-slate-50 px-4 py-3 text-slate-900 transition-all duration-300 focus:bg-white focus:outline-none ${focusedField === "email"
                              ? "border-blue-500 shadow-lg shadow-blue-500/20"
                              : "border-slate-200"
                              }`}
                            placeholder="john@company.com"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="company" className="mb-2 block text-sm font-semibold text-[#1d3658]">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full rounded-xl border-2 bg-slate-50 px-4 py-3 text-slate-900 transition-all duration-300 focus:bg-white focus:outline-none ${focusedField === "company"
                            ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                            : "border-slate-200"
                            }`}
                          placeholder="Your Company Ltd"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-[#1d3658]">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full rounded-xl border-2 bg-slate-50 px-4 py-3 text-slate-900 transition-all duration-300 focus:bg-white focus:outline-none ${focusedField === "phone"
                            ? "border-cyan-500 shadow-lg shadow-cyan-500/20"
                            : "border-slate-200"
                            }`}
                          placeholder="+27 123 456 789"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="mb-2 block text-sm font-semibold text-[#1d3658]">
                        Service Interested In *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("service")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border-2 bg-slate-50 px-4 py-3 text-slate-900 transition-all duration-300 focus:bg-white focus:outline-none ${focusedField === "service"
                          ? "border-violet-500 shadow-lg shadow-violet-500/20"
                          : "border-slate-200"
                          }`}
                      >
                        <option value="">Select a service</option>
                        <option value="fraud-health-check">Fraud Health Check</option>
                        <option value="programme-design">Fraud Programme Design</option>
                        <option value="awareness">Awareness & Resilience</option>
                        <option value="controls">Internal Fraud Controls</option>
                        <option value="other">Other / Not Sure</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[#1d3658]">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full rounded-xl border-2 bg-slate-50 px-4 py-3 text-slate-900 transition-all duration-300 focus:bg-white focus:outline-none ${focusedField === "message"
                          ? "border-violet-500 shadow-lg shadow-violet-500/20"
                          : "border-slate-200"
                          }`}
                        placeholder="Tell us about your fraud challenges and how we can help..."
                      />
                    </div>

                    <Button
                      onClick={handleSubmit}
                      className="group w-full rounded-xl bg-gradient-to-r from-[#1d3658] to-blue-600 py-6 text-lg font-bold shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </Button>
                  </div>
                )}
              </div>

              <div className="grid grid-cols-1 mt-16 gap-4 sm:grid-cols-2">
                <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d3658] to-blue-600">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="mb-2 font-bold text-[#1d3658]">Email Us</h4>
                  <a href="mailto:hello@mkfraud.co.za" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                    hello@mkfraud.co.za
                  </a>
                </div>

                <div className="overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-6 shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-purple-600">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <h4 className="mb-2 font-bold text-[#1d3658]">LinkedIn</h4>
                  <a href="#" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
                    MK Fraud Insights
                  </a>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-6 shadow-xl">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-600 to-blue-600">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-2 font-bold text-[#1d3658]">Our Location</h4>
                    <p className="text-sm text-slate-600">South Africa</p>
                    <p className="mt-2 text-xs text-slate-500">
                      Serving clients across Africa and internationally
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-white shadow-2xl">
                <div className="bg-gradient-to-r from-[#1d3658] to-blue-700 p-6">
                  <h3 className="text-2xl font-bold text-white">
                    Book a Consultation
                  </h3>
                  <p className="mt-2 text-blue-100">
                    Schedule a time that works for you
                  </p>
                </div>
                <div className="h-[600px] bg-slate-50 p-4">
                  <div className="flex h-full items-center justify-center rounded-xl border-2 border-dashed border-slate-300 bg-white">
                    <div className="text-center">
                      <Shield className="mx-auto mb-4 h-12 w-12 text-slate-400" />
                      <p className="mb-2 font-semibold text-slate-700">Calendly Embed</p>
                      <p className="text-sm text-slate-500">Booking calendar will be embedded here</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-[#1d3658] to-blue-900 p-8 shadow-xl">
                <div className="mb-6 flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">What to Expect</h3>
                </div>

                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-blue-400">
                        <CheckCircle2 className="h-4 w-4 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-sm font-medium text-white">{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-white/10 p-4 backdrop-blur-sm">
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 flex-shrink-0 text-cyan-300" />
                    <div>
                      <p className="mb-1 text-sm font-bold text-white">Response Time</p>
                      <p className="text-xs text-blue-100">
                        We typically respond within 24 hours during business days
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}