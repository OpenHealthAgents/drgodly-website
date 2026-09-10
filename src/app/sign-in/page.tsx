"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";
import { 
  Users, 
  Stethoscope, 
  ArrowRight, 
  ShieldCheck, 
  Lock, 
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function SignInPage() {
  const [authRole, setAuthRole] = useState<"patient" | "provider">("patient");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedIn, setIsSignedIn] = useState(false);

  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSignedIn(true);
  };

  return (
    <div className="min-h-screen bg-clinical-50 flex flex-col selection:bg-vital-100 selection:text-vital-900">
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-md mx-auto px-4 sm:px-6">
          <div className="text-center space-y-4 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-clinical-900 flex items-center justify-center text-white mx-auto shadow-clinical-md">
              <Lock className="w-5 h-5 text-vital-400" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-clinical-950 font-sans">
              Sign In to DrGodly
            </h1>
            <p className="text-xs sm:text-sm text-clinical-600">
              Access your encrypted health vault or clinical command center.
            </p>

            {/* Role Switcher */}
            <div className="inline-flex p-1 bg-clinical-200/60 rounded-xl border border-clinical-300 w-full">
              <button
                type="button"
                onClick={() => setAuthRole("patient")}
                className={cn(
                  "flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5",
                  authRole === "patient"
                    ? "bg-white text-clinical-950 shadow-sm"
                    : "text-clinical-600 hover:text-clinical-900"
                )}
              >
                <Users className="w-3.5 h-3.5 text-vital-600" />
                <span>Patient Portal</span>
              </button>

              <button
                type="button"
                onClick={() => setAuthRole("provider")}
                className={cn(
                  "flex-1 py-2 rounded-lg text-xs font-semibold transition-all flex items-center justify-center gap-1.5",
                  authRole === "provider"
                    ? "bg-white text-clinical-950 shadow-sm"
                    : "text-clinical-600 hover:text-clinical-900"
                )}
              >
                <Stethoscope className="w-3.5 h-3.5 text-vital-600" />
                <span>Clinician / EMR</span>
              </button>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-clinical-200 shadow-clinical-md space-y-5">
            {isSignedIn ? (
              <div className="py-8 text-center space-y-4 animate-in fade-in">
                <div className="w-14 h-14 rounded-full bg-vital-50 border border-vital-200 text-vital-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-clinical-950">
                  Authentication Successful
                </h3>
                <p className="text-xs text-clinical-600">
                  Redirecting to your secure {authRole === "patient" ? "Health Vault" : "Clinical Command Center"}...
                </p>
                <Button
                  variant="vital"
                  size="sm"
                  onClick={() => setIsSignedIn(false)}
                >
                  Sign Out / Reset
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="signin-identifier" className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                    {authRole === "patient" ? "Patient Email or MRN" : "Provider Email / NPI"}
                  </label>
                  <input
                    id="signin-identifier"
                    name="identifier"
                    type="text"
                    required
                    autoComplete="username"
                    placeholder={authRole === "patient" ? "jordan@example.com" : "dr.vance@healthpartners.org"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-sm text-clinical-900 bg-clinical-50/50"
                  />
                </div>

                <div className="space-y-1">
                  <div className="flex items-center justify-between">
                    <label htmlFor="signin-password" className="text-xs font-bold text-clinical-900 uppercase tracking-wider">
                      Password
                    </label>
                    <a href="#" className="text-[11px] text-vital-700 hover:text-vital-800 font-medium">
                      Forgot Password?
                    </a>
                  </div>
                  <input
                    id="signin-password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-sm text-clinical-900 bg-clinical-50/50"
                  />
                </div>

                <Button
                  type="submit"
                  variant="vital"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                  className="w-full justify-center text-sm font-semibold"
                >
                  Sign In to {authRole === "patient" ? "Patient Vault" : "Provider Workspace"}
                </Button>

                <div className="pt-2 text-center text-xs text-clinical-500">
                  Don&apos;t have an account yet?{" "}
                  <Link href="/get-started" className="text-vital-700 font-semibold hover:underline">
                    Get Started here
                  </Link>
                </div>
              </form>
            )}
          </div>

          <div className="text-[11px] text-clinical-400 flex items-center justify-center gap-1.5 pt-6 text-center">
            <ShieldCheck className="w-3.5 h-3.5 text-vital-600" />
            <span>256-bit SSL encrypted • HIPAA BAA compliant architecture</span>
          </div>
        </div>
      </main>

      <Footer />

      <QuickAssessModal
        isOpen={quickAssessOpen}
        onClose={() => setQuickAssessOpen(false)}
        onUpgradeToProfile={() => setHealthProfileOpen(true)}
      />

      <HealthProfileModal
        isOpen={healthProfileOpen}
        onClose={() => setHealthProfileOpen(false)}
      />

      <DoctorDemoModal
        isOpen={doctorDemoOpen}
        onClose={() => setDoctorDemoOpen(false)}
      />
    </div>
  );
}
