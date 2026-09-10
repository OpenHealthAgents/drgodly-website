"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  X, 
  ArrowRight,
  Activity,
  ChevronDown,
  ClipboardCheck,
  FileText,
  Video,
  BrainCircuit,
  FileCheck2,
  Database,
  SearchCode,
  GitMerge,
  LogIn
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MedicalSafetyBanner } from "@/components/layout/MedicalSafetyBanner";

interface NavbarProps {
  onOpenQuickAssess?: () => void;
  onOpenHealthProfile?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenQuickAssess: _onOpenQuickAssess,
  onOpenHealthProfile: _onOpenHealthProfile,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformDropdownOpen, setPlatformDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setPlatformDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setPlatformDropdownOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  const platformCapabilities = [
    {
      title: "AI Intake",
      desc: "Adaptive conversational intake replacing clipboards",
      href: "/platform/ai-intake",
      icon: <ClipboardCheck className="w-4 h-4 text-vital-600" />,
    },
    {
      title: "Pre-Visit Intelligence",
      desc: "60-second synthesized executive clinical report",
      href: "/platform/pre-visit-intelligence",
      icon: <FileText className="w-4 h-4 text-vital-600" />,
    },
    {
      title: "Telemedicine",
      desc: "AI-assisted video consults with ambient listening",
      href: "/platform/telemedicine",
      icon: <Video className="w-4 h-4 text-vital-600" />,
    },
    {
      title: "Clinical Decision Support",
      desc: "Ranked differential diagnoses with guideline citations",
      href: "/platform/clinical-decision-support",
      icon: <BrainCircuit className="w-4 h-4 text-vital-600" />,
    },
    {
      title: "AI SOAP Notes",
      desc: "Instant compliant charting with ICD-10 & CPT codes",
      href: "/platform/soap-notes",
      icon: <FileCheck2 className="w-4 h-4 text-vital-600" />,
    },
    {
      title: "AI-Native EMR",
      desc: "Structured knowledge graph for patient intelligence",
      href: "/platform/emr",
      icon: <Database className="w-4 h-4 text-vital-600" />,
    },
    {
      title: "Conversational EMR Search",
      desc: "Ask plain questions across 5 years of PDF charts",
      href: "/platform/emr-search",
      icon: <SearchCode className="w-4 h-4 text-vital-600" />,
    },
    {
      title: "Health History",
      desc: "Longitudinal record vault traveling with the patient",
      href: "/platform/health-history",
      icon: <GitMerge className="w-4 h-4 text-vital-600" />,
    },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Medical & Clinical Safety Advisory Banner */}
      <MedicalSafetyBanner />

      {/* Main Navigation Bar */}
      <div
        className={cn(
          "transition-all duration-300 w-full",
          isScrolled
            ? "bg-white/95 backdrop-blur-md border-b border-clinical-200/80 shadow-clinical-sm py-2.5"
            : "bg-white/80 backdrop-blur-sm md:bg-white/30 md:backdrop-blur-none py-3.5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-clinical-900 flex items-center justify-center text-white shadow-clinical-sm group-hover:bg-vital-700 transition-colors">
              <Activity className="w-5 h-5 text-vital-400" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-clinical-950 font-sans flex items-center gap-1">
                DrGodly
                <span className="w-1.5 h-1.5 rounded-full bg-vital-500" />
              </span>
              <span className="text-[10px] uppercase tracking-wider text-clinical-500 font-semibold -mt-1">
                AI-Native Telemedicine
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-clinical-100/70 p-1.5 rounded-full border border-clinical-200/70 backdrop-blur-md">
            <Link
              href="/patients"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
                pathname === "/patients"
                  ? "bg-white text-clinical-950 shadow-clinical-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              Patients
            </Link>

            <Link
              href="/doctors"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
                pathname === "/doctors"
                  ? "bg-white text-clinical-950 shadow-clinical-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              Doctors
            </Link>

            <Link
              href="/how-it-works"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
                pathname === "/how-it-works"
                  ? "bg-white text-clinical-950 shadow-clinical-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              How It Works
            </Link>

            {/* Platform Dropdown with Megamenu */}
            <div className="relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setPlatformDropdownOpen(!platformDropdownOpen)}
                onMouseEnter={() => setPlatformDropdownOpen(true)}
                className={cn(
                  "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors flex items-center gap-1",
                  pathname.startsWith("/platform") || platformDropdownOpen
                    ? "bg-white text-clinical-950 shadow-clinical-sm"
                    : "text-clinical-600 hover:text-clinical-900"
                )}
                aria-expanded={platformDropdownOpen}
              >
                <span>Platform</span>
                <ChevronDown
                  className={cn(
                    "w-3.5 h-3.5 transition-transform duration-200",
                    platformDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {/* Megamenu Drawer */}
              {platformDropdownOpen && (
                <div
                  onMouseLeave={() => setPlatformDropdownOpen(false)}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2.5 w-[560px] bg-white rounded-2xl border border-clinical-200 shadow-2xl p-4 grid grid-cols-2 gap-2 animate-in fade-in slide-in-from-top-2"
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-clinical-100 flex items-center justify-between text-xs">
                    <span className="font-bold text-clinical-900 uppercase tracking-wider text-[11px]">
                      The 8 Platform Capabilities
                    </span>
                    <Link
                      href="/platform"
                      className="text-vital-700 hover:text-vital-800 font-semibold flex items-center gap-1"
                    >
                      Platform Overview <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>

                  {platformCapabilities.map((cap) => (
                    <Link
                      key={cap.href}
                      href={cap.href}
                      className="p-2.5 rounded-xl hover:bg-clinical-50 transition-colors flex items-start gap-3 group/item border border-transparent hover:border-clinical-200/80"
                    >
                      <div className="w-8 h-8 rounded-lg bg-vital-50 border border-vital-200 flex items-center justify-center shrink-0 mt-0.5 group-hover/item:scale-105 transition-transform">
                        {cap.icon}
                      </div>
                      <div className="space-y-0.5">
                        <div className="text-xs font-bold text-clinical-900 group-hover/item:text-vital-800 transition-colors">
                          {cap.title}
                        </div>
                        <div className="text-[11px] text-clinical-500 leading-tight">
                          {cap.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/resources"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
                pathname.startsWith("/resources") || pathname === "/faq"
                  ? "bg-white text-clinical-950 shadow-clinical-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              Resources
            </Link>

            <Link
              href="/about"
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors",
                pathname === "/about"
                  ? "bg-white text-clinical-950 shadow-clinical-sm"
                  : "text-clinical-600 hover:text-clinical-900"
              )}
            >
              About
            </Link>
          </nav>

          {/* Desktop Primary & Secondary CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/sign-in">
              <Button
                variant="ghost"
                size="sm"
                icon={<LogIn className="w-3.5 h-3.5" />}
                iconPosition="left"
              >
                Sign In
              </Button>
            </Link>

            {_onOpenQuickAssess ? (
              <Button
                variant="vital"
                size="sm"
                onClick={_onOpenQuickAssess}
                icon={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Get Started
              </Button>
            ) : (
              <Link href="/get-started">
                <Button
                  variant="vital"
                  size="sm"
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Get Started
                </Button>
              </Link>
            )}
          </div>

          {/* Mobile hamburger button */}
          <div className="flex lg:hidden items-center gap-2">
            <Link href="/get-started">
              <Button
                variant="vital"
                size="sm"
                className="px-3 py-1.5 text-xs font-semibold"
              >
                Get Started
              </Button>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-clinical-700 hover:text-clinical-900 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white/98 backdrop-blur-xl border-b border-clinical-200 px-4 pt-3 pb-6 space-y-4 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4">
          <div className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-clinical-900 hover:bg-clinical-50"
            >
              Overview
            </Link>
            <Link
              href="/patients"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-clinical-900 hover:bg-clinical-50"
            >
              Patients
            </Link>
            <Link
              href="/doctors"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-clinical-900 hover:bg-clinical-50"
            >
              Doctors
            </Link>
            <Link
              href="/how-it-works"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-clinical-900 hover:bg-clinical-50"
            >
              How It Works
            </Link>

            {/* Mobile Platform Section */}
            <div className="pt-2 border-t border-clinical-100">
              <div className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-clinical-400">
                Platform Capabilities
              </div>
              <div className="grid grid-cols-1 gap-1 pl-2 pt-1">
                <Link
                  href="/platform"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-1.5 rounded-lg text-xs font-bold text-vital-700 hover:bg-vital-50"
                >
                  → Platform Architecture
                </Link>
                {platformCapabilities.map((cap) => (
                  <Link
                    key={cap.href}
                    href={cap.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-clinical-700 hover:bg-clinical-50 flex items-center gap-2"
                  >
                    <span>{cap.title}</span>
                  </Link>
                ))}
              </div>
            </div>

            <Link
              href="/resources"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-clinical-900 hover:bg-clinical-50"
            >
              Resources & Blog
            </Link>
            <Link
              href="/faq"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-clinical-900 hover:bg-clinical-50"
            >
              FAQ
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-clinical-900 hover:bg-clinical-50"
            >
              About DrGodly
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="px-3 py-2 rounded-lg text-sm font-semibold text-clinical-900 hover:bg-clinical-50"
            >
              Contact & Inquiries
            </Link>
          </div>

          <div className="pt-3 border-t border-clinical-100 flex flex-col gap-2">
            <Link href="/sign-in" onClick={() => setMobileMenuOpen(false)}>
              <Button
                variant="outline"
                size="md"
                className="w-full justify-center"
                icon={<LogIn className="w-4 h-4" />}
                iconPosition="left"
              >
                Sign In
              </Button>
            </Link>
            {_onOpenQuickAssess ? (
              <Button
                variant="vital"
                size="md"
                className="w-full justify-center"
                onClick={() => {
                  setMobileMenuOpen(false);
                  _onOpenQuickAssess();
                }}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Start Quick Intake
              </Button>
            ) : (
              <Link href="/get-started" onClick={() => setMobileMenuOpen(false)}>
                <Button
                  variant="vital"
                  size="md"
                  className="w-full justify-center"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  Get Started
                </Button>
              </Link>
            )}
            {_onOpenHealthProfile && (
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-center text-xs"
                onClick={() => {
                  setMobileMenuOpen(false);
                  _onOpenHealthProfile();
                }}
              >
                View Sample Health Profile
              </Button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
