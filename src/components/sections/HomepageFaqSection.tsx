"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

interface FaqItem {
  question: string;
  answer: string;
  category: "Overview" | "Clinical" | "Security" | "Workflow";
}

const FAQ_ITEMS: FaqItem[] = [
  {
    category: "Overview",
    question: "Is DrGodly an AI doctor?",
    answer:
      "No. DrGodly is not an AI doctor and does not independently diagnose or treat medical conditions. DrGodly is an AI-native healthcare platform that prepares patients, analyzes health records, and supports licensed human physicians. All medical diagnoses, prescriptions, and treatment plans are made solely by certified doctors.",
  },
  {
    category: "Clinical",
    question: "How does the AI intake work?",
    answer:
      "Instead of a static multiple-choice form, DrGodly's AI intake engages you in an adaptive, empathetic clinical conversation. It dynamically adjusts its follow-up questions based on your reported symptoms, duration, severity, and prior medical history to extract relevant clinical details before your consultation.",
  },
  {
    category: "Clinical",
    question: "Can I upload my past medical records?",
    answer:
      "Yes. You can upload PDFs, scanned hospital discharge summaries, laboratory reports, and prescription images. DrGodly's clinical parser extracts dates, biomarker values, diagnoses, and medication regimens into a structured, longitudinal health timeline.",
  },
  {
    category: "Clinical",
    question: "What is a pre-visit intelligence report?",
    answer:
      "It is an objective, 10-point synthesized clinical brief prepared for the attending doctor before the consultation starts. It includes your chief complaint, chronological timeline, active medications, relevant historical labs, reported allergies, red-flag risk factors, and suggested differential considerations with citations.",
  },
  {
    category: "Workflow",
    question: "How does telemedicine work on DrGodly?",
    answer:
      "DrGodly pairs HD encrypted video consultations with a real-time clinical workspace. When the doctor enters the call, they already have your complete pre-visit report and synthesized history open on their screen, eliminating repetitive intake questions and allowing immediate focus on care.",
  },
  {
    category: "Workflow",
    question: "Can doctors edit AI-generated SOAP notes?",
    answer:
      "Absolutely. Full physician control is mandatory across the platform. AI-drafted SOAP notes are recommendations generated from ambient consultation audio. Doctors can edit any field (Subjective, Objective, Assessment, Plan), add custom instructions, and must review and digitally sign before pushing to the EHR.",
  },
  {
    category: "Security",
    question: "Is my health data secure and private?",
    answer:
      "Yes. DrGodly is architected with strict healthcare security and privacy standards. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Your health data is never sold, never shared without your explicit consent, and never used to train public foundational AI models.",
  },
  {
    category: "Security",
    question: "Who owns my medical records?",
    answer:
      "You own your health data entirely. You have granular control over which doctors can access your records, and you can revoke access or export your complete longitudinal medical chart at any time.",
  },
  {
    category: "Clinical",
    question: "Can DrGodly replace in-person doctor visits?",
    answer:
      "DrGodly handles a wide spectrum of routine, primary, chronic, and urgent care consultations via telemedicine. However, it is not designed to replace in-person visits when physical physical examinations, emergency care, or surgical interventions are required. In emergencies, call your local emergency services immediately.",
  },
  {
    category: "Workflow",
    question: "How do doctors join the platform?",
    answer:
      "Licensed physicians can apply to join DrGodly by submitting their medical credentials and state license verification. Once verified, doctors receive onboarding to the clinical copilot workspace, scheduling system, and EHR integration modules.",
  },
  {
    category: "Overview",
    question: "How does DrGodly remember my health history over time?",
    answer:
      "DrGodly builds a persistent longitudinal health graph. Each consultation, lab report, medication renewal, and symptom check-in is linked to your central profile. When you consult a doctor months or years later, the platform cross-references past data to identify multi-year trends and drug interactions automatically.",
  },
];

import { analytics } from "@/lib/analytics";

export const HomepageFaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    const isOpening = openIndex !== index;
    setOpenIndex(isOpening ? index : null);
    if (isOpening) {
      analytics.trackFaqOpened(`faq_${index}`);
    }
  };

  return (
    <section className="py-24 bg-white border-b border-clinical-200 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="vital">Frequently Asked Questions</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            Everything you need to know about DrGodly.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            Clear answers about our AI technology, clinical oversight, patient privacy, and physician workflows.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-vital-300 bg-clinical-50/50 shadow-clinical-xs"
                    : "border-clinical-200 bg-white hover:border-clinical-300"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-clinical-950 pr-2">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? "bg-vital-100 text-vital-700 rotate-180"
                        : "bg-clinical-100 text-clinical-500"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 sm:pb-6 text-sm text-clinical-700 leading-relaxed border-t border-clinical-100 pt-4">
                    <p>{item.answer}</p>
                    <div className="mt-3">
                      <span className="text-[11px] font-mono text-clinical-400 uppercase tracking-wider">
                        Topic: {item.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Link to Full FAQ */}
        <div className="mt-12 text-center">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-vital-700 hover:text-vital-800 transition-colors"
          >
            Have more questions? Browse our comprehensive FAQ center <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
