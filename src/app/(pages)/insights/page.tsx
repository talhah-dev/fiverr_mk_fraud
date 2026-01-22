"use client";

import { BookOpen, TrendingUp, Shield, AlertTriangle, Calendar, ArrowRight, ExternalLink, Linkedin, FileText, Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Wrapper from "@/app/Wrapper";

export default function Insights() {
    const [activeCategory, setActiveCategory] = useState("all");
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const categories = [
        { id: "all", label: "All Insights", icon: BookOpen },
        { id: "fraud-trends", label: "Fraud Trends", icon: TrendingUp },
        { id: "controls", label: "Controls & Strategy", icon: Shield },
        { id: "case-studies", label: "Case Studies", icon: FileText },
    ];

    const insights = [
        {
            category: "fraud-trends",
            title: "The Rise of Social Engineering in Non-Financial Sectors",
            excerpt: "Understanding how fraud patterns from banking are now affecting retail, logistics, and public sector organizations across South Africa.",
            date: "January 15, 2026",
            readTime: "5 min read",
            type: "Article",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            category: "controls",
            title: "Building Fraud Controls That Don't Slow Your Business",
            excerpt: "A practical guide to embedding fraud prevention in daily operations without creating bureaucratic friction.",
            date: "January 10, 2026",
            readTime: "7 min read",
            type: "Guide",
            gradient: "from-blue-600 to-cyan-600",
        },
        {
            category: "case-studies",
            title: "How a Retail Organization Reduced Procurement Fraud by 60%",
            excerpt: "Real-world case study showing how simplified controls and better accountability transformed fraud outcomes.",
            date: "January 5, 2026",
            readTime: "8 min read",
            type: "Case Study",
            gradient: "from-cyan-600 to-violet-600",
        },
        {
            category: "fraud-trends",
            title: "Account Takeover Patterns in Loyalty Programmes",
            excerpt: "Analysis of how fraudsters exploit weak identity controls in customer benefit schemes.",
            date: "December 28, 2025",
            readTime: "6 min read",
            type: "Analysis",
            gradient: "from-violet-600 to-purple-600",
        },
        {
            category: "controls",
            title: "Third-Party Fraud Risk: What Your Vendor Due Diligence Misses",
            excerpt: "Beyond paperwork compliance: how to identify real fraud risks in your supplier relationships.",
            date: "December 20, 2025",
            readTime: "5 min read",
            type: "Article",
            gradient: "from-[#1d3658] to-blue-600",
        },
        {
            category: "fraud-trends",
            title: "Internal Fraud Red Flags Often Hidden in Plain Sight",
            excerpt: "Behavioral indicators and process anomalies that signal potential internal fraud before it becomes a major loss.",
            date: "December 15, 2025",
            readTime: "6 min read",
            type: "Guide",
            gradient: "from-blue-600 to-cyan-600",
        },
    ];

    const filteredInsights = activeCategory === "all"
        ? insights
        : insights.filter(insight => insight.category === activeCategory);

    const featuredInsight = {
        title: "2026 Fraud Risk Outlook: What Non-Financial Sectors Need to Know",
        excerpt: "Our comprehensive analysis of emerging fraud trends, control gaps, and strategic priorities for South African organizations outside the financial sector.",
        date: "January 20, 2026",
        readTime: "12 min read",
        gradient: "from-[#1d3658] via-blue-700 to-cyan-700",
    };

    return (
        <Wrapper>
            <div className="bg-white">
                <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-[#1d3658] to-slate-800">
                    <div className="absolute inset-0">
                        <div className="absolute left-0 top-0 h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-3xl" />
                        <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-cyan-500/10 blur-3xl" />
                        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
                    </div>

                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

                    <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="mb-12 text-center">
                            <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-blue-400/30 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 px-5 py-2.5 shadow-lg backdrop-blur-xl">
                                <BookOpen className="h-4 w-4 text-blue-300" />
                                <span className="text-sm font-bold uppercase tracking-wide text-blue-100">
                                    Knowledge Hub
                                </span>
                            </div>

                            <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
                                Fraud Risk{" "}
                                <span className="relative inline-block">
                                    <span className="relative z-10 bg-gradient-to-r from-blue-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                        Insights
                                    </span>
                                    <span className="absolute -bottom-2 left-0 h-4 w-full bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-violet-500/50 blur-xl" />
                                </span>
                            </h1>

                            <p className="mx-auto max-w-3xl text-xl leading-relaxed text-slate-300 lg:text-2xl">
                                Practical guidance, fraud trends, and real-world strategies for organisations managing fraud risk in non-financial sectors.
                            </p>
                        </div>
                    </div>
                </section>

                <section className="relative -mt-20 overflow-hidden">
                    <div className="mx-auto max-w-7xl px-6 lg:px-8">
                        <div className="relative overflow-hidden rounded-3xl border-2 border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-2xl">
                            <div className={`absolute inset-0 bg-gradient-to-r ${featuredInsight.gradient} opacity-5`} />

                            <div className="relative grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
                                <div>
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#1d3658]/10 to-blue-500/10 px-4 py-2">
                                        <AlertTriangle className="h-4 w-4 text-[#1d3658]" />
                                        <span className="text-sm font-bold uppercase tracking-wide text-[#1d3658]">
                                            Featured Report
                                        </span>
                                    </div>

                                    <h2 className="mb-4 text-3xl font-bold text-[#1d3658] lg:text-4xl">
                                        {featuredInsight.title}
                                    </h2>

                                    <p className="mb-6 text-lg leading-relaxed text-slate-600">
                                        {featuredInsight.excerpt}
                                    </p>

                                    <div className="mb-6 flex flex-wrap items-center gap-4 text-sm text-slate-600">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="h-4 w-4" />
                                            <span>{featuredInsight.date}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock className="h-4 w-4" />
                                            <span>{featuredInsight.readTime}</span>
                                        </div>
                                    </div>

                                    <Button className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#1d3658] to-blue-600 px-8 py-4 text-lg font-semibold shadow-xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
                                        <span className="relative z-10 flex items-center gap-2">
                                            Read Full Report
                                            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                        </span>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-[#1d3658] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                    </Button>
                                </div>

                                <div className="relative md:h-64 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1d3658] via-blue-700 to-cyan-700 p-8 shadow-xl lg:h-80">
                                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:30px_30px]" />
                                    <div className="relative flex h-full flex-col justify-between">
                                        <div className="space-y-4">
                                            {["Emerging fraud vectors", "Control effectiveness gaps", "Strategic recommendations"].map((item, index) => (
                                                <div key={index} className="flex items-center gap-3 rounded-xl border-2 border-white/20 bg-white/10 p-3 backdrop-blur-sm">
                                                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-cyan-400">
                                                        <span className="text-sm font-bold text-white">{index + 1}</span>
                                                    </div>
                                                    <span className="text-sm font-semibold text-white">{item}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-white">
                    <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]" />

                    <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="mb-12 flex flex-wrap items-center justify-center gap-4">
                            {categories.map((category) => {
                                const Icon = category.icon;
                                const isActive = activeCategory === category.id;

                                return (
                                    <button
                                        key={category.id}
                                        onClick={() => setActiveCategory(category.id)}
                                        className={`group flex items-center gap-2 rounded-full border-2 px-6 py-3 font-bold transition-all duration-300 ${isActive
                                            ? "border-[#1d3658] bg-gradient-to-r from-[#1d3658] to-blue-600 text-white shadow-lg"
                                            : "border-slate-200 bg-white text-slate-700 hover:border-[#1d3658] hover:bg-slate-50"
                                            }`}
                                    >
                                        <Icon className="h-5 w-5" />
                                        <span>{category.label}</span>
                                    </button>
                                );
                            })}
                        </div>

                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                            {filteredInsights.map((insight, index) => {
                                const isHovered = hoveredCard === index;

                                return (
                                    <div
                                        key={index}
                                        className="group relative"
                                        onMouseEnter={() => setHoveredCard(index)}
                                        onMouseLeave={() => setHoveredCard(null)}
                                    >
                                        <div
                                            className={`absolute -inset-1 rounded-3xl bg-gradient-to-r ${insight.gradient} opacity-0 blur-xl transition-all duration-500 ${isHovered ? "opacity-30" : ""
                                                }`}
                                        />

                                        <div
                                            className={`relative h-full overflow-hidden rounded-3xl border-2 bg-white shadow-lg transition-all duration-500 ${isHovered
                                                ? "scale-105 border-transparent shadow-2xl"
                                                : "border-slate-200"
                                                }`}
                                        >
                                            <div className={`h-48 bg-gradient-to-br ${insight.gradient} p-6`}>
                                                <div className="flex h-full flex-col justify-between">
                                                    <div className="flex items-start justify-between">
                                                        <div className="rounded-full bg-white/20 px-3 py-1 backdrop-blur-sm">
                                                            <span className="text-xs font-bold text-white">
                                                                {insight.type}
                                                            </span>
                                                        </div>
                                                        <Tag className="h-5 w-5 text-white/60" />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="p-6">
                                                <h3 className="mb-3 text-xl font-bold text-[#1d3658] transition-colors duration-300 group-hover:text-blue-600">
                                                    {insight.title}
                                                </h3>

                                                <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
                                                    {insight.excerpt}
                                                </p>

                                                <div className="mb-4 flex items-center gap-4 border-t border-slate-200 pt-4 text-xs text-slate-500">
                                                    <div className="flex items-center gap-1">
                                                        <Calendar className="h-3 w-3" />
                                                        <span>{insight.date}</span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="h-3 w-3" />
                                                        <span>{insight.readTime}</span>
                                                    </div>
                                                </div>

                                                <button
                                                    className={`flex w-full items-center justify-between rounded-xl bg-gradient-to-r ${insight.gradient} px-4 py-3 font-semibold text-white transition-all duration-300 hover:shadow-lg`}
                                                >
                                                    <span>Read Article</span>
                                                    <ArrowRight className="h-4 w-4" />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="relative overflow-hidden bg-gradient-to-br from-[#1d3658] via-blue-800 to-cyan-700">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px]" />

                    <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                            <div>
                                <div className="mb-6 inline-flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">
                                    <Linkedin className="h-4 w-4 text-cyan-300" />
                                    <span className="text-sm font-bold uppercase tracking-wide text-white">
                                        Stay Connected
                                    </span>
                                </div>

                                <h2 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl">
                                    Follow us on LinkedIn for latest insights
                                </h2>

                                <p className="mb-8 text-xl text-blue-100">
                                    Get fraud risk insights, industry updates, and practical guidance delivered directly to your feed.
                                </p>

                                <Button className="group rounded-2xl border-2 border-white/30 bg-white/20 px-8 py-4 text-lg font-bold text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50 hover:bg-white/30 hover:shadow-xl">
                                    <span className="flex items-center gap-2">
                                        <Linkedin className="h-5 w-5" />
                                        Follow on LinkedIn
                                        <ExternalLink className="h-4 w-4" />
                                    </span>
                                </Button>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { number: "50+", label: "Articles Published" },
                                    { number: "15k+", label: "Monthly Readers" },
                                    { number: "100+", label: "Fraud Patterns Analyzed" },
                                    { number: "25+", label: "Case Studies Shared" },
                                ].map((stat, index) => (
                                    <div
                                        key={index}
                                        className="rounded-2xl border-2 border-white/20 bg-white/10 p-6 text-center backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white/20"
                                    >
                                        <div className="mb-2 bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-4xl font-bold text-transparent">
                                            {stat.number}
                                        </div>
                                        <div className="text-sm font-medium text-blue-100">
                                            {stat.label}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div className="max-w-7xl p-5 mb-16 mx-auto">
                <div className="mt-20 overflow-hidden rounded-3xl border-2 border-blue-400/20 bg-gradient-to-br from-white via-blue-50/30 to-violet-50/30 md:p-8 py-8 p-5 shadow-2xl backdrop-blur-xl lg:p-12">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#3b82f608_1px,transparent_1px),linear-gradient(to_bottom,#3b82f608_1px,transparent_1px)] bg-[size:30px_30px]" />

                    <div className="relative grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
                        <div>
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500/20 to-violet-500/20 px-5 py-2.5 backdrop-blur-xl">
                                <div className="relative flex h-2 w-2">
                                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-500 opacity-75"></span>
                                    <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-600"></span>
                                </div>
                                <span className="text-sm font-bold text-[#1d3658]">
                                    Ready to Get Started?
                                </span>
                            </div>
                            <h3 className="mb-4 bg-gradient-to-r from-[#1d3658] via-blue-700 to-[#1d3658] bg-clip-text text-3xl font-bold text-transparent lg:text-4xl">
                                Experience the difference of practitioner-led fraud prevention
                            </h3>
                            <p className="text-lg text-slate-600">
                                See how our real-world approach transforms fraud risk management into a strategic advantage.
                            </p>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
                            <button className="group relative overflow-hidden rounded-2xl bg-gradient-to-r from-[#1d3658] to-blue-600 px-8 py-5 font-bold text-white shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50">
                                <span className="relative z-10 flex items-center justify-center gap-2">
                                    Book Your Consultation
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </button>

                            <button className="group rounded-2xl border-2 border-[#1d3658] bg-white px-8 py-5 font-bold text-[#1d3658] shadow-lg transition-all duration-300 hover:scale-105 hover:border-blue-500 hover:bg-gradient-to-r hover:from-blue-50 hover:to-violet-50">
                                <span className="flex items-center justify-center gap-2">
                                    View Case Studies
                                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </Wrapper>
    );
}