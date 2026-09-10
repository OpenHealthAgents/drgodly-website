"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";
import { 
  RESOURCE_ARTICLES, 
  RESOURCE_CATEGORIES 
} from "@/data/resourceArticles";
import { 
  BookOpen, 
  ArrowRight, 
  Clock, 
  ShieldCheck, 
  Search, 
  Download 
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function ResourcesPage() {
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All Categories");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredArticles = RESOURCE_ARTICLES.filter((art) => {
    const matchesCategory =
      selectedCategory === "All Categories" || art.category === selectedCategory;
    const matchesSearch =
      searchQuery === "" ||
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.keywords.some((k) => k.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-clinical-50 flex flex-col selection:bg-vital-100 selection:text-vital-900">
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<BookOpen className="w-3.5 h-3.5" />}>
              Clinical Evidence & Healthcare Intelligence
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              DrGodly Healthcare <span className="text-vital-600">Resource Hub</span>
            </h1>

            <p className="text-base sm:text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              Explore peer-reviewed clinical research, technical architecture dossiers, and patient education guides. All clinical articles undergo rigorous physician review before publication.
            </p>

            {/* Search Bar */}
            <div className="max-w-xl mx-auto relative pt-2">
              <Search className="w-4 h-4 text-clinical-400 absolute left-4.5 top-5.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by topic (e.g. AI EMR, SOAP notes, chronic care)..."
                className="w-full pl-11 pr-4 py-3 rounded-2xl border border-clinical-200 bg-white text-sm text-clinical-900 placeholder-clinical-400 focus:outline-none focus:ring-2 focus:ring-vital-500/40 shadow-clinical-sm"
              />
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div className="mt-12 flex items-center gap-2 overflow-x-auto pb-4 no-scrollbar max-w-5xl mx-auto">
            {RESOURCE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  "px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border",
                  selectedCategory === cat
                    ? "bg-clinical-900 text-white border-clinical-900 shadow-sm"
                    : "bg-white text-clinical-700 border-clinical-200 hover:bg-clinical-50"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {filteredArticles.length > 0 ? (
              filteredArticles.map((art) => (
                <Card
                  key={art.slug}
                  variant="solid"
                  elevation="sm"
                  hoverEffect
                  className="p-8 flex flex-col justify-between space-y-6 group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <Badge variant="vital" size="sm">
                        {art.category}
                      </Badge>
                      <span className="text-clinical-400 font-mono text-[11px]">
                        {art.publishedDate}
                      </span>
                    </div>

                    <Link href={`/resources/${art.slug}`}>
                      <h2 className="text-xl font-bold text-clinical-950 group-hover:text-vital-800 transition-colors leading-snug">
                        {art.title}
                      </h2>
                    </Link>

                    <p className="text-xs sm:text-sm text-clinical-600 leading-relaxed">
                      {art.summary}
                    </p>

                    {/* Medically Reviewed Badge Mini */}
                    {art.medicalReviewer && (
                      <div className="pt-2 flex items-center gap-1.5 text-[11px] text-vital-800 font-medium">
                        <ShieldCheck className="w-3.5 h-3.5 text-vital-600" />
                        <span>Medically reviewed by {art.medicalReviewer.name}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-4 border-t border-clinical-100 flex items-center justify-between text-xs font-semibold">
                    <div className="flex items-center gap-1 text-clinical-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{art.readTime}</span>
                    </div>
                    <Link
                      href={`/resources/${art.slug}`}
                      className="text-vital-700 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Read Full Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </Card>
              ))
            ) : (
              <div className="col-span-2 text-center py-16 text-clinical-500 text-sm">
                No articles found matching &ldquo;{searchQuery}&rdquo;. Try another search or category.
              </div>
            )}
          </div>

          {/* Whitepaper Download CTA */}
          <div className="mt-20 max-w-5xl mx-auto p-8 sm:p-10 rounded-3xl bg-clinical-900 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-clinical-lg">
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-vital-400 font-mono">
                Clinical Whitepaper
              </span>
              <h3 className="text-2xl font-bold text-white">
                Download: The 2026 Clinical AI Safety & Liability Dossier
              </h3>
              <p className="text-xs sm:text-sm text-clinical-300 max-w-xl leading-relaxed">
                Includes clinical decision support guidelines, malpractice liability frameworks, and zero-retention AI compliance standards for physician practices.
              </p>
            </div>

            <Button
              variant="vital"
              size="lg"
              onClick={() => setDoctorDemoOpen(true)}
              icon={<Download className="w-4 h-4" />}
              className="shrink-0"
            >
              Request PDF Dossier
            </Button>
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
