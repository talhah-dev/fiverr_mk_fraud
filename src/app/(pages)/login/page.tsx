"use client";

import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Eye, EyeOff, Lock, Mail, ShieldCheck } from "lucide-react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [remember, setRemember] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        console.log({
            email,
            password,
            remember,
        });
        setTimeout(() => {
            setLoading(false);
        }, 1200);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-slate-200 flex items-center justify-center px-6">
            <div className="w-full max-w-md">
                <div className="mb-10 text-center">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1d3658]">
                        <ShieldCheck className="h-7 w-7 text-white" />
                    </div>
                    <h1 className="text-2xl font-semibold text-[#1d3658]">
                        Admin Access
                    </h1>
                    <p className="mt-2 text-sm text-slate-600">
                        Login for MK Fraud Insights administrators
                    </p>
                </div>

                <Card className="border-slate-200 shadow-xl">
                    <CardHeader>
                        <CardTitle className="text-lg text-[#1d3658]">
                            Sign in to dashboard
                        </CardTitle>
                    </CardHeader>

                    <form onSubmit={handleSubmit}>
                        <CardContent className="space-y-6 ">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-slate-700">
                                    Email address
                                </Label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="admin@mkfraud.co.za"
                                        className="pl-10"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-slate-700">
                                    Password
                                </Label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                                    <Input
                                        id="password"
                                        type={showPassword ? "text" : "password"}
                                        placeholder="Enter your password"
                                        className="pl-10 pr-10"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </button>
                                </div>
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-[#1d3658] text-white hover:bg-[#1d3658]/90"
                                disabled={loading}
                            >
                                {loading ? "Signing in..." : "Sign in"}
                            </Button>

                            <div className="pb-4 text-center text-xs text-slate-500">
                                This area is restricted to authorised administrators only.
                            </div>
                        </CardContent>

                        <CardFooter className="flex flex-col gap-4 border-t">
                            <div className="w-full text-center text-xs text-slate-500">
                                All login attempts are monitored and logged
                            </div>
                            <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                                <span>© {new Date().getFullYear()}</span>
                                <span>MK Fraud Insights</span>
                            </div>
                        </CardFooter>
                    </form>
                </Card>
            </div>
        </div>
    );
}
