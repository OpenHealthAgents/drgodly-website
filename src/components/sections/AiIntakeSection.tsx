"use client";

import React from "react";
import { MessageSquare, ArrowRight, CheckCircle2, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

interface AiIntakeSectionProps {
  onExperienceIntake?: () => void;
}

export const AiIntakeSection: React.FC<AiIntakeSectionProps> = ({
  onExperienceIntake,
}) => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Description */}
          <div className="lg:col-span-6 space-y-6">
            <Badge variant="vital" icon={<MessageSquare className="w-3.5 h-3.5" />}>
              Adaptive Clinical Intake
            </Badge>

            {/* Exact Headline */}
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Tell us what&apos;s wrong.{" "}
              <span className="text-vital-600">DrGodly knows what to ask next.</span>
            </h2>

            <p className="text-base sm:text-lg text-clinical-600 leading-relaxed">
              Traditional healthcare forces you through rigid 20-page forms with checkboxes that never quite fit your situation. DrGodly uses empathetic conversational intake that dynamically adapts its follow-up questions based on your clinical responses.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-clinical-700">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
                <span>Structured clinical intake without static paper forms</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
                <span>Automatic red-flag surveillance for neurological and cardiac alerts</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />
                <span>Synthesizes colloquial descriptions into clinical terminology</span>
              </div>
            </div>

            <div className="pt-4">
              <Button
                variant="vital"
                size="md"
                onClick={onExperienceIntake}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Experience AI Intake
              </Button>
            </div>
          </div>

          {/* Right: Simulated Chat Interface */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl border border-clinical-200 bg-clinical-50/50 p-6 sm:p-8 shadow-clinical-md space-y-4">
              <div className="flex items-center justify-between border-b border-clinical-200/80 pb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-clinical-900">
                  <div className="w-2.5 h-2.5 rounded-full bg-vital-500 animate-pulse" />
                  <span>DrGodly Adaptive Intake Dialogue</span>
                </div>
                <span className="text-[11px] text-clinical-500 font-mono">Session #INT-409</span>
              </div>

              {/* Chat Thread */}
              <div className="space-y-3.5 text-xs sm:text-sm">
                {/* 1. Patient */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="p-3.5 rounded-2xl rounded-tr-sm bg-clinical-900 text-white font-medium max-w-sm text-right">
                    &ldquo;I&apos;ve been having headaches.&rdquo;
                  </div>
                  <div className="w-7 h-7 rounded-full bg-clinical-800 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 2. AI */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-vital-100 text-vital-800 flex items-center justify-center text-[10px] font-bold shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-sm bg-white border border-clinical-200 text-clinical-800 font-medium max-w-sm">
                    &ldquo;When did the headaches begin?&rdquo;
                  </div>
                </div>

                {/* 3. Patient */}
                <div className="flex items-start gap-2.5 justify-end">
                  <div className="p-3.5 rounded-2xl rounded-tr-sm bg-clinical-900 text-white font-medium max-w-sm text-right">
                    &ldquo;About two weeks ago.&rdquo;
                  </div>
                  <div className="w-7 h-7 rounded-full bg-clinical-800 text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                    <User className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* 4. AI Adaptive Follow-up */}
                <div className="flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-vital-100 text-vital-800 flex items-center justify-center text-[10px] font-bold shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="p-3.5 rounded-2xl rounded-tl-sm bg-vital-50/80 border border-vital-200 text-vital-950 font-medium max-w-sm">
                    &ldquo;Have you noticed any changes in vision, weakness, numbness, vomiting or difficulty speaking?&rdquo;
                  </div>
                </div>
              </div>

              {/* Bottom Insight indicator */}
              <div className="pt-3 border-t border-clinical-200/80 text-[11px] text-clinical-500 flex items-center justify-between">
                <span>Adaptive neurology surveillance active</span>
                <span className="text-vital-700 font-semibold">Zero form fatigue</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
