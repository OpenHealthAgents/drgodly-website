"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { FAQS } from "@/data/faqs";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

export const FaqSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<"all" | "general" | "patients" | "doctors" | "security">("all");
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    "general-1": true,
    "general-2": true,
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const filteredFaqs = FAQS.filter((f) => {
    if (activeCategory === "all") return true;
    return f.category === activeCategory;
  });

  return (
    <section id="faqs" className="py-24 bg-clinical-50/60 border-t border-clinical-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="vital" icon={<HelpCircle className="w-3.5 h-3.5" />}>
            Common Inquiries
          </Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base text-clinical-600">
            Clear answers about our AI philosophy, clinical safety, physician collaboration, and privacy guardrails.
          </p>
        </div>

        {/* Category switcher */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {(
            [
              { id: "all", label: "All Questions" },
              { id: "general", label: "Platform Positioning" },
              { id: "patients", label: "For Patients" },
              { id: "doctors", label: "For Clinicians" },
              { id: "security", label: "Security & HIPAA" },
            ] as const
          ).map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all",
                activeCategory === cat.id
                  ? "bg-clinical-900 text-white shadow-sm"
                  : "bg-white text-clinical-600 border border-clinical-200 hover:bg-clinical-100"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordions */}
        <div className="space-y-3">
          {filteredFaqs.map((faq) => {
            const isOpen = !!openIds[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-clinical-200 bg-white overflow-hidden shadow-clinical-sm transition-all"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-clinical-900 text-sm sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-clinical-500 shrink-0 transition-transform duration-200",
                      isOpen && "rotate-180 text-vital-600"
                    )}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-clinical-600 leading-relaxed border-t border-clinical-100/60 animate-in fade-in">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
