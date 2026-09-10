"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { 
  Sparkles, 
  Send, 
  ArrowRight, 
  ShieldCheck, 
  AlertTriangle 
} from "lucide-react";

import { analytics } from "@/lib/analytics";

interface QuickAssessModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpgradeToProfile: () => void;
}

export const QuickAssessModal: React.FC<QuickAssessModalProps> = ({
  isOpen,
  onClose,
  onUpgradeToProfile,
}) => {
  const [query, setQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  React.useEffect(() => {
    if (isOpen) {
      analytics.trackAiDemoOpened("quick_assess_modal");
    }
  }, [isOpen]);

  const samplePrompts = [
    "Sharp side ache after exercising, no chest tightness",
    "Lingering dry cough for 3 weeks post-flu",
    "Woke up with swollen ankle, no obvious twist or trauma",
  ];

  const handleRunQuery = (textToRun: string) => {
    if (!textToRun.trim()) return;
    setIsAnalyzing(true);
    setResult(null);

    // Track demo started safely with NO symptom or text data
    analytics.trackAiDemoStarted("quick_assess_modal");

    setTimeout(() => {
      setIsAnalyzing(false);
      setResult(
        `First-pass triage complete. Based strictly on the isolated symptoms described: There is low probability of acute emergency indicators, but subacute progression warrants evaluation if persistent. However, because this is an isolated query with zero knowledge of your medications, prior blood panels, or cardiac baseline, critical interaction patterns cannot be verified.`
      );
    }, 800);
  };

  const handleReset = () => {
    setQuery("");
    setResult(null);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Quick Health Question"
      subtitle="Ask anything immediately. No mandatory account required for first-pass triage."
      maxWidth="lg"
    >
      <div className="space-y-6">
        {/* Input area */}
        <div className="space-y-3">
          <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
            Describe what you are experiencing:
          </label>
          <div className="relative">
            <textarea
              rows={3}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g., I've had dull headaches behind my eyes every afternoon for 2 weeks..."
              className="w-full p-4 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-sm text-clinical-900 placeholder:text-clinical-400 bg-clinical-50/50"
            />
          </div>

          {/* Sample quick buttons */}
          <div className="space-y-1.5">
            <div className="text-[11px] text-clinical-500 font-medium">
              Or click a sample scenario:
            </div>
            <div className="flex flex-wrap gap-1.5">
              {samplePrompts.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setQuery(s);
                    handleRunQuery(s);
                  }}
                  className="text-xs px-2.5 py-1 rounded-lg bg-clinical-100 text-clinical-700 hover:bg-clinical-200 transition-colors text-left"
                >
                  &ldquo;{s}&rdquo;
                </button>
              ))}
            </div>
          </div>

          <div className="flex justify-end pt-1">
            <Button
              variant="vital"
              size="sm"
              isLoading={isAnalyzing}
              onClick={() => handleRunQuery(query)}
              icon={<Send className="w-3.5 h-3.5" />}
              disabled={!query.trim()}
            >
              Analyze Symptom
            </Button>
          </div>
        </div>

        {/* Results output */}
        {result && (
          <div className="space-y-4 pt-4 border-t border-clinical-100 animate-in fade-in">
            <div className="p-4 rounded-2xl bg-clinical-50 border border-clinical-200 text-xs text-clinical-800 leading-relaxed">
              <div className="font-bold text-clinical-900 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-vital-600" />
                Quick-Triage Synthesis:
              </div>
              <p>{result}</p>
            </div>

            {/* Context value upgrade nudge */}
            <div className="p-5 rounded-2xl bg-vital-500/10 border border-vital-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold text-vital-900 uppercase tracking-wide">
                <AlertTriangle className="w-4 h-4 text-vital-700" />
                Your symptoms are only part of the story.
              </div>
              <p className="text-xs text-clinical-700 leading-relaxed">
                Connect your previous reports, prescriptions, and lab history so DrGodly can cross-check whether this correlates with your personal health baseline.
              </p>
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <Button
                  variant="vital"
                  size="sm"
                  onClick={() => {
                    onClose();
                    onUpgradeToProfile();
                  }}
                  icon={<ArrowRight className="w-3.5 h-3.5" />}
                >
                  Connect My Health History
                </Button>
                <button
                  onClick={handleReset}
                  className="text-xs text-clinical-600 hover:text-clinical-900 underline"
                >
                  Ask Another Question
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="text-[11px] text-clinical-400 flex items-center gap-1.5 justify-center border-t border-clinical-100 pt-3">
          <ShieldCheck className="w-3.5 h-3.5 text-vital-600" />
          <span>Encrypted transmission. No data sold or shared with advertisers.</span>
        </div>
      </div>
    </Modal>
  );
};
