"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

// All 15 Homepage Section Components
import { HeroSection } from "@/components/hero/HeroSection";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { DifferenceSection } from "@/components/sections/DifferenceSection";
import { AiIntakeSection } from "@/components/sections/AiIntakeSection";
import { UploadHistorySection } from "@/components/sections/UploadHistorySection";
import { PreVisitReportSection } from "@/components/sections/PreVisitReportSection";
import { TelemedicineSection } from "@/components/sections/TelemedicineSection";
import { ClinicalCopilotSection } from "@/components/sections/ClinicalCopilotSection";
import { SoapNotesSection } from "@/components/sections/SoapNotesSection";
import { AiEmrSection } from "@/components/sections/AiEmrSection";
import { LongitudinalTimelineSection } from "@/components/sections/LongitudinalTimelineSection";
import { SplitExperienceSection } from "@/components/sections/SplitExperienceSection";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { TestimonialsPlaceholderSection } from "@/components/sections/TestimonialsPlaceholderSection";
import { HomepageFaqSection } from "@/components/sections/HomepageFaqSection";
import { HomeCtaSection } from "@/components/sections/HomeCtaSection";

// Interactive Conversion Modals
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";

export default function HomePage() {
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);

  const homeStructuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
        "@id": "https://drgodly.com/#organization",
        "name": "DrGodly",
        "url": "https://drgodly.com",
        "logo": "https://drgodly.com/icon.svg",
        "description": "AI-native telemedicine platform combining patient intake, clinical decision support, pre-visit reports, and longitudinal health records.",
        "medicalSpecialty": ["GeneralMedicine", "PrimaryCare", "InternalMedicine"],
        "sameAs": [
          "https://twitter.com/drgodlyhealth",
          "https://linkedin.com/company/drgodly"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://drgodly.com/#website",
        "url": "https://drgodly.com",
        "name": "DrGodly",
        "publisher": { "@id": "https://drgodly.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://drgodly.com/resources?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-clinical-50 flex flex-col selection:bg-vital-100 selection:text-vital-900">
      {/* Schema.org JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeStructuredData) }}
      />

      {/* Sticky Top Navigation */}
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow">
        {/* Section 1: Hero Section */}
        <HeroSection
          onOpenQuickAssess={() => setQuickAssessOpen(true)}
        />

        {/* Section 2: The Problem */}
        <ProblemSection />

        {/* Section 3: The DrGodly Difference */}
        <DifferenceSection />

        {/* Section 4: AI Intake */}
        <AiIntakeSection
          onExperienceIntake={() => setQuickAssessOpen(true)}
        />

        {/* Section 5: Upload Your Health History */}
        <UploadHistorySection
          onBuildProfile={() => setHealthProfileOpen(true)}
        />

        {/* Section 6: Pre-Visit Intelligence */}
        <PreVisitReportSection />

        {/* Section 7: Telemedicine */}
        <TelemedicineSection
          onTalkToDoctor={() => setQuickAssessOpen(true)}
        />

        {/* Section 8: Clinical Decision Support */}
        <ClinicalCopilotSection
          onExploreClinicalAi={() => setDoctorDemoOpen(true)}
        />

        {/* Section 9: AI SOAP Notes */}
        <SoapNotesSection />

        {/* Section 10: AI-Native EMR */}
        <AiEmrSection />

        {/* Section 11: Longitudinal Health */}
        <LongitudinalTimelineSection />

        {/* Section 12: Patient + Doctor Split Experience */}
        <SplitExperienceSection
          onOpenQuickAssess={() => setQuickAssessOpen(true)}
          onOpenDoctorDemo={() => setDoctorDemoOpen(true)}
        />

        {/* Section 13: Privacy & Security */}
        <PrivacySection />

        {/* Section 14: Structured Testimonials */}
        <TestimonialsPlaceholderSection />

        {/* Section 15: Exact 11 FAQ Accordions */}
        <HomepageFaqSection />

        {/* Final Conversion CTA */}
        <HomeCtaSection
          onOpenQuickAssess={() => setQuickAssessOpen(true)}
          onOpenDoctorDemo={() => setDoctorDemoOpen(true)}
        />
      </main>

      {/* Global Clinical & Compliance Footer */}
      <Footer />

      {/* Interactive Conversion Modals */}
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

