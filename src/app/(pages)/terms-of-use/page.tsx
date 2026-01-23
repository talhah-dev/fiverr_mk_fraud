"use client";

import Wrapper from "@/app/Wrapper";
import { FileText, Shield, AlertTriangle, Scale, Globe, UserCheck, Mail, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export default function TermsOfUse() {
    const [activeSection, setActiveSection] = useState<string | null>(null);

    const sections = [
        {
            id: "acceptance",
            icon: FileText,
            title: "Acceptance of Terms",
            content: [
                {
                    subtitle: "Agreement to Terms",
                    text: "By accessing or using the MK Fraud Insights website, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any part of these terms, you must not use our website or services.",
                },
                {
                    subtitle: "Capacity to Agree",
                    text: "You confirm that you have the legal capacity to enter into these Terms of Use. If you are accessing the website on behalf of an organisation, you represent that you have the authority to bind that organisation to these terms.",
                },
            ],
        },
        {
            id: "use-of-website",
            icon: Globe,
            title: "Use of Website",
            content: [
                {
                    subtitle: "Permitted Use",
                    text: "This website is provided for informational purposes and to facilitate enquiries about our fraud risk advisory services. You may view, download, and print content from this website for your personal or internal business use, provided you do not modify or remove any copyright or proprietary notices.",
                },
                {
                    subtitle: "Prohibited Activities",
                    text: "You agree not to use this website for any unlawful purpose or in any way that could damage, disable, overburden, or impair our systems. Prohibited activities include but are not limited to: attempting to gain unauthorised access to our systems, transmitting malicious code, scraping or automated data collection without permission, and misrepresenting your identity or affiliation.",
                },
            ],
        },
        {
            id: "intellectual-property",
            icon: Shield,
            title: "Intellectual Property Rights",
            content: [
                {
                    subtitle: "Ownership",
                    text: "All content on this website, including text, graphics, logos, images, and software, is the property of MK Fraud Insights or its licensors and is protected by South African and international intellectual property laws. The MK Fraud Insights name, logo, and all related marks are trademarks owned by MK Fraud Insights.",
                },
                {
                    subtitle: "Limited Licence",
                    text: "Subject to these Terms of Use, we grant you a limited, non-exclusive, non-transferable licence to access and use this website for its intended purposes. This licence does not include any right to reproduce, distribute, modify, or create derivative works from our content without prior written consent.",
                },
            ],
        },
        {
            id: "services-information",
            icon: UserCheck,
            title: "Services and Information",
            content: [
                {
                    subtitle: "No Professional Advice",
                    text: "Information provided on this website is for general informational purposes only and does not constitute professional fraud risk advice, legal advice, or any other form of professional guidance. You should not rely on website content as a substitute for professional consultation tailored to your specific circumstances.",
                },
                {
                    subtitle: "Service Engagement",
                    text: "Any formal engagement for fraud risk advisory services will be subject to a separate written agreement between you and MK Fraud Insights. Website content does not create a client relationship or any contractual obligations.",
                },
                {
                    subtitle: "Information Accuracy",
                    text: "While we endeavour to ensure information on this website is accurate and current, we make no representations or warranties regarding the completeness, accuracy, or reliability of any content. Information may become outdated, and we reserve the right to update or modify content without notice.",
                },
            ],
        },
        {
            id: "disclaimers",
            icon: AlertTriangle,
            title: "Disclaimers and Limitations",
            content: [
                {
                    subtitle: "Website Availability",
                    text: "We do not guarantee that this website will be available at all times or that access will be uninterrupted or error-free. We may suspend, withdraw, or restrict access to all or part of the website for business or operational reasons.",
                },
                {
                    subtitle: "No Warranties",
                    text: "This website and all content are provided on an as is and as available basis. To the fullest extent permitted by law, MK Fraud Insights disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, and non-infringement.",
                },
                {
                    subtitle: "Limitation of Liability",
                    text: "To the maximum extent permitted by South African law, MK Fraud Insights shall not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from your use of or inability to use this website, even if we have been advised of the possibility of such damages. This includes but is not limited to loss of data, loss of profits, or business interruption.",
                },
            ],
        },
        {
            id: "third-party-links",
            icon: Globe,
            title: "Third-Party Links and Resources",
            content: [
                {
                    subtitle: "External Links",
                    text: "This website may contain links to third-party websites or resources. These links are provided for your convenience only. We do not endorse and are not responsible for the content, accuracy, or practices of any third-party websites. Your use of third-party websites is at your own risk and subject to their respective terms and conditions.",
                },
            ],
        },
        {
            id: "user-submissions",
            icon: FileText,
            title: "User Submissions and Communications",
            content: [
                {
                    subtitle: "Submitted Information",
                    text: "Any information, feedback, or materials you submit through this website, including through contact forms or email, becomes the property of MK Fraud Insights. We may use such submissions for any purpose without compensation or attribution, subject to our Privacy Policy regarding personal information.",
                },
                {
                    subtitle: "Accuracy of Information",
                    text: "You are responsible for ensuring that any information you provide through this website is accurate, current, and complete. Providing false or misleading information may result in termination of your access to the website.",
                },
            ],
        },
        {
            id: "indemnification",
            icon: Shield,
            title: "Indemnification",
            content: [
                {
                    subtitle: "Your Indemnity",
                    text: "You agree to indemnify, defend, and hold harmless MK Fraud Insights, its directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including legal fees) arising from your use of this website, your violation of these Terms of Use, or your violation of any rights of another party.",
                },
            ],
        },
        {
            id: "governing-law",
            icon: Scale,
            title: "Governing Law and Jurisdiction",
            content: [
                {
                    subtitle: "South African Law",
                    text: "These Terms of Use are governed by and construed in accordance with the laws of the Republic of South Africa. Any disputes arising from these terms or your use of this website shall be subject to the exclusive jurisdiction of the South African courts.",
                },
            ],
        },
        {
            id: "changes-to-terms",
            icon: AlertTriangle,
            title: "Changes to Terms",
            content: [
                {
                    subtitle: "Modifications",
                    text: "We reserve the right to modify these Terms of Use at any time. Changes will be effective immediately upon posting to this website. Your continued use of the website after changes are posted constitutes your acceptance of the revised terms. We encourage you to review these terms periodically.",
                },
            ],
        },
        {
            id: "general-provisions",
            icon: FileText,
            title: "General Provisions",
            content: [
                {
                    subtitle: "Severability",
                    text: "If any provision of these Terms of Use is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these terms shall otherwise remain in full force and effect.",
                },
                {
                    subtitle: "Entire Agreement",
                    text: "These Terms of Use, together with our Privacy Policy, constitute the entire agreement between you and MK Fraud Insights regarding your use of this website and supersede all prior agreements and understandings.",
                },
                {
                    subtitle: "No Waiver",
                    text: "Our failure to enforce any right or provision of these Terms of Use shall not constitute a waiver of such right or provision. Any waiver must be in writing and signed by an authorised representative of MK Fraud Insights.",
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
                                <Scale className="h-4 w-4 text-blue-300" />
                                <span className="text-sm font-bold uppercase tracking-wide text-blue-100">
                                    Legal Terms
                                </span>
                            </div>

                            <h1 className="mb-6 text-5xl font-black leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Terms of{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                        Use
                                    </span>
                                    <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-violet-500/50 blur-xl" />
                                </span>
                            </h1>

                            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300">
                                Please read these Terms of Use carefully before using the MK Fraud Insights website. These terms govern your access to and use of our website and services.
                            </p>

                            <div className="mt-8 inline-flex items-center gap-2 rounded-xl border-2 border-white/20 bg-white/10 px-6 py-3 backdrop-blur-sm">
                                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                                <span className="text-sm font-semibold text-white">
                                    Effective Date: January 2026
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
                                        <AlertTriangle className="h-6 w-6 text-white" />
                                    </div>
                                    <div>
                                        <h2 className="mb-2 text-xl font-bold text-[#1d3658]">
                                            Important Notice
                                        </h2>
                                        <p className="leading-relaxed text-slate-700">
                                            By accessing or using this website, you acknowledge that you have read, understood, and agree to be bound by these Terms of Use and our Privacy Policy. If you do not agree to these terms, please discontinue use of this website immediately.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            {sections.map((section) => {
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
                            <div className="rounded-2xl border-2 border-blue-500/20 bg-gradient-to-r from-blue-50 to-cyan-50 p-6">
                                <div className="flex items-start gap-4">
                                    <Mail className="h-6 w-6 flex-shrink-0 text-[#1d3658]" />
                                    <div>
                                        <p className="mb-2 font-bold text-[#1d3658]">
                                            Questions About These Terms?
                                        </p>
                                        <p className="mb-3 text-sm leading-relaxed text-slate-700">
                                            If you have any questions or concerns about these Terms of Use, please contact us:
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