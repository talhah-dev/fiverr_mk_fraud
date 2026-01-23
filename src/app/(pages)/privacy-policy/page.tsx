"use client";

import Wrapper from "@/app/Wrapper";
import { Shield, Lock, Eye, FileText, Mail, CheckCircle2, AlertCircle, Target } from "lucide-react";
import { useState } from "react";

export default function PrivacyPolicy() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const sections = [
        {
            id: "information-collection",
            icon: FileText,
            title: "Information We Collect",
            content: [
                {
                    subtitle: "Personal Information",
                    text: "When you interact with our website or services, we may collect personal information including your name, email address, company name, phone number, and any other information you voluntarily provide through contact forms, consultation requests, or newsletter subscriptions.",
                },
                {
                    subtitle: "Technical Information",
                    text: "We automatically collect certain technical information when you visit our website, including your IP address, browser type, device information, pages visited, time spent on pages, and referring website addresses.",
                },
                {
                    subtitle: "Communication Records",
                    text: "We maintain records of communications between you and MK Fraud Insights, including emails, form submissions, and consultation notes, to provide effective service and maintain accurate records of our engagement.",
                },
            ],
        },
        {
            id: "information-use",
            icon: Target,
            title: "How We Use Your Information",
            content: [
                {
                    subtitle: "Service Delivery",
                    text: "We use your personal information to respond to enquiries, schedule consultations, deliver requested services, and provide fraud risk advisory support tailored to your organisational needs.",
                },
                {
                    subtitle: "Communication",
                    text: "Your contact information enables us to send service updates, respond to requests, share relevant fraud risk insights, and maintain ongoing professional communication regarding our services.",
                },
                {
                    subtitle: "Service Improvement",
                    text: "We analyse usage patterns and feedback to improve our website functionality, refine our service offerings, and ensure we deliver relevant, practical fraud risk guidance.",
                },
            ],
        },
        {
            id: "information-sharing",
            icon: Lock,
            title: "Information Sharing and Disclosure",
            content: [
                {
                    subtitle: "No Sale of Personal Information",
                    text: "MK Fraud Insights does not sell, rent, or trade your personal information to third parties for marketing purposes.",
                },
                {
                    subtitle: "Service Providers",
                    text: "We may share information with trusted service providers who assist in operating our website, conducting business operations, or servicing you, provided they agree to keep this information confidential and use it only for the purposes we specify.",
                },
                {
                    subtitle: "Legal Obligations",
                    text: "We may disclose personal information when required by law, regulation, legal process, or governmental request, or when necessary to protect our rights, property, safety, or that of others.",
                },
            ],
        },
        {
            id: "data-protection",
            icon: Shield,
            title: "Data Protection and Security",
            content: [
                {
                    subtitle: "Security Measures",
                    text: "We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include secure data transmission, access controls, and regular security assessments.",
                },
                {
                    subtitle: "Data Retention",
                    text: "We retain personal information for as long as necessary to fulfil the purposes outlined in this privacy policy, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer required, it is securely deleted or anonymised.",
                },
            ],
        },
        {
            id: "your-rights",
            icon: Eye,
            title: "Your Rights Under POPIA",
            content: [
                {
                    subtitle: "Access and Correction",
                    text: "You have the right to request access to the personal information we hold about you and to request correction of any inaccurate or incomplete information.",
                },
                {
                    subtitle: "Objection and Restriction",
                    text: "You may object to the processing of your personal information or request restriction of processing in certain circumstances, subject to legal and contractual obligations.",
                },
                {
                    subtitle: "Deletion",
                    text: "You have the right to request deletion of your personal information, subject to our legal and contractual obligations to retain certain records.",
                },
                {
                    subtitle: "Data Portability",
                    text: "Where technically feasible, you may request that we provide your personal information in a structured, commonly used, and machine-readable format.",
                },
                {
                    subtitle: "Withdraw Consent",
                    text: "Where processing is based on consent, you have the right to withdraw that consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal.",
                },
            ],
        },
        {
            id: "cookies",
            icon: AlertCircle,
            title: "Cookies and Tracking",
            content: [
                {
                    subtitle: "Cookie Usage",
                    text: "Our website uses cookies and similar tracking technologies to enhance your browsing experience, analyse website traffic, and understand usage patterns. Cookies are small text files stored on your device that help us remember your preferences and improve website functionality.",
                },
                {
                    subtitle: "Cookie Control",
                    text: "You can control cookie settings through your browser preferences. Note that disabling certain cookies may limit your ability to use some features of our website.",
                },
            ],
        },
        {
            id: "contact",
            icon: Mail,
            title: "Contact and Complaints",
            content: [
                {
                    subtitle: "Privacy Enquiries",
                    text: "For questions about this privacy policy, requests to exercise your rights, or concerns about how we handle your personal information, please contact us at hello@mkfraud.co.za",
                },
                {
                    subtitle: "Complaints",
                    text: "If you believe we have not handled your personal information appropriately or in accordance with POPIA, you have the right to lodge a complaint with the Information Regulator of South Africa.",
                },
            ],
        },
    ];

    return (
        <Wrapper>
            <div className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1d3658] to-slate-800">
                    <div className="absolute inset-0">
                        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-3xl" />
                        <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-3xl" />
                    </div>

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

                    <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
                                <Shield className="h-4 w-4 text-blue-300" />
                                <span className="text-sm font-bold uppercase tracking-wide text-blue-100">
                                    Privacy & Data Protection
                                </span>
                            </div>

                            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Privacy{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                        Policy
                                    </span>
                                    <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-violet-500/50 blur-xl" />
                                </span>
                            </h1>

                            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300">
                                MK Fraud Insights is committed to protecting your privacy and handling your personal information responsibly in accordance with the Protection of Personal Information Act (POPIA).
                            </p>

                            <div className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
                                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                                <span className="text-sm font-semibold text-white">
                                    Last Updated: January 2026
                                </span>
                            </div>
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
                        <div className="mb-12">
                            <div className="overflow-hidden rounded-3xl border-2 border-[#1d3658]/10 bg-gradient-to-r from-blue-50 to-cyan-50 p-8 shadow-lg">
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#1d3658] to-blue-600">
                                        <Lock className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="mb-2 text-xl font-bold text-[#1d3658]">
                                            Our Commitment to Your Privacy
                                        </h2>
                                        <p className="leading-relaxed text-slate-700">
                                            This privacy policy explains how MK Fraud Insights collects, uses, protects, and manages your personal information when you interact with our website or engage our services. We handle all personal information in accordance with POPIA and applicable data protection regulations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {sections.map((section, index) => {
                                const Icon = section.icon;
                                const isActive = activeSection === section.id;

                                return (
                                    <div key={section.id} className="group relative">
                                        <div
                                            className={`absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#1d3658] to-blue-600 opacity-0 blur-xl transition-all duration-500 ${isActive ? "opacity-20" : ""
                                                }`}
                                        />

                                        <div
                                            className={`relative overflow-hidden rounded-3xl border-2 bg-white shadow-lg transition-all duration-500 ${isActive
                                                ? "border-blue-500/30 shadow-2xl"
                                                : "border-slate-200 hover:border-slate-300"
                                                }`}
                                        >
                                            <button
                                                onClick={() => setActiveSection(isActive ? null : section.id)}
                                                className="w-full p-8 text-left transition-all duration-300"
                                            >
                                                <div className="flex items-center gap-6">
                                                    <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1d3658] to-blue-600 shadow-lg">
                                                        <Icon className="h-8 w-8 text-white" strokeWidth={2.5} />
                                                    </div>

                                                    <div className="flex-1">
                                                        <h3 className="text-2xl font-bold text-[#1d3658]">
                                                            {section.title}
                                                        </h3>
                                                    </div>

                                                    <div
                                                        className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 transition-all duration-300 ${isActive ? "rotate-180 bg-blue-100" : ""
                                                            }`}
                                                    >
                                                        <svg
                                                            className={`h-5 w-5 transition-colors ${isActive ? "text-blue-600" : "text-slate-400"
                                                                }`}
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M19 9l-7 7-7-7"
                                                            />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </button>

                                            {isActive && (
                                                <div className="border-t-2 border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50/30 p-8">
                                                    <div className="space-y-6">
                                                        {section.content.map((item, idx) => (
                                                            <div key={idx}>
                                                                <h4 className="mb-3 text-lg font-bold text-[#1d3658]">
                                                                    {item.subtitle}
                                                                </h4>
                                                                <p className="leading-relaxed text-slate-700">
                                                                    {item.text}
                                                                </p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <div className="mt-12 overflow-hidden rounded-3xl border-2 border-slate-200 bg-white p-8 shadow-xl lg:p-12">
                            <div className="mb-8">
                                <h2 className="mb-4 text-3xl font-bold text-[#1d3658]">
                                    Changes to This Privacy Policy
                                </h2>
                                <p className="leading-relaxed text-slate-700">
                                    We may update this privacy policy from time to time to reflect changes in our practices, legal requirements, or service offerings. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your personal information.
                                </p>
                            </div>

                            <div className="rounded-2xl border-2 border-blue-500/20 bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 flex-shrink-0 text-[#1d3658]" />
                                    <div>
                                        <p className="mb-2 font-bold text-[#1d3658]">
                                            Questions or Concerns?
                                        </p>
                                        <p className="mb-3 text-sm leading-relaxed text-slate-700">
                                            If you have any questions about this privacy policy or how we handle your personal information, please contact us:
                                        </p>
                                        <a
                                            href="mailto:hello@mkfraud.co.za"
                                            className="inline-flex items-center gap-2 rounded-lg bg-[#1d3658] px-4 py-2 font-semibold text-white transition-all hover:bg-blue-700"
                                        >
                                            <Mail className="h-4 w-4" />
                                            hello@mkfraud.co.za
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Wrapper>
    );
}