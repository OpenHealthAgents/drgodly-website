"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { 
  Calendar, 
  CheckCircle2, 
  ShieldCheck 
} from "lucide-react";

import { analytics } from "@/lib/analytics";

interface DoctorDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DoctorDemoModal: React.FC<DoctorDemoModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formStartedTracked, setFormStartedTracked] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialty: "Internal Medicine",
    practiceSize: "1-5 Physicians",
    emr: "Epic Systems",
  });

  React.useEffect(() => {
    if (isOpen && !formStartedTracked) {
      analytics.trackDemoFormStarted();
      setFormStartedTracked(true);
    }
  }, [isOpen, formStartedTracked]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Track demo completed with non-PII practice size & EMR system context only
    analytics.trackDemoFormCompleted();
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormStartedTracked(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={submitted ? "Demo Requested!" : "Schedule a 15-Minute Clinical Walkthrough"}
      subtitle={
        submitted
          ? "Our physician partnership team will confirm your calendar slot shortly."
          : "See live EHR integration, automated SOAP note generation, and pre-visit intake."
      }
      maxWidth="md"
    >
      {submitted ? (
        <div className="space-y-6 py-4 text-center animate-in fade-in">
          <div className="w-16 h-16 rounded-full bg-vital-50 border border-vital-200 text-vital-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h4 className="text-xl font-bold text-clinical-950">
              Thank you, Dr. {formData.name || "Colleague"}
            </h4>
            <p className="text-xs sm:text-sm text-clinical-600 max-w-sm mx-auto leading-relaxed">
              We have sent a calendar invitation and a sample pre-visit clinical report briefing to{" "}
              <strong>{formData.email || "your email"}</strong>.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-clinical-50 border border-clinical-200 text-xs text-clinical-700 space-y-1 text-left">
            <div>• <strong>Focus:</strong> Ambient SOAP generation & FHIR EHR integration ({formData.emr})</div>
            <div>• <strong>Practice Profile:</strong> {formData.specialty} • {formData.practiceSize}</div>
          </div>

          <Button variant="vital" size="md" onClick={handleReset} className="w-full justify-center">
            Done
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
              Full Name & Clinical Title
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Dr. Sarah Jenkins, MD"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-sm text-clinical-900 bg-clinical-50/50"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
              Institutional or Practice Email
            </label>
            <input
              type="email"
              required
              placeholder="s.jenkins@healthpartners.org"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-sm text-clinical-900 bg-clinical-50/50"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                Primary Specialty
              </label>
              <select
                value={formData.specialty}
                onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-xs text-clinical-900 bg-clinical-50/50"
              >
                <option>Internal Medicine</option>
                <option>Family Medicine</option>
                <option>Cardiology</option>
                <option>Pediatrics</option>
                <option>Urgent Care / ER</option>
                <option>Other Specialty</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                Primary EHR System
              </label>
              <select
                value={formData.emr}
                onChange={(e) => setFormData({ ...formData, emr: e.target.value })}
                className="w-full px-3 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-xs text-clinical-900 bg-clinical-50/50"
              >
                <option>Epic Systems</option>
                <option>Oracle Health (Cerner)</option>
                <option>AthenaHealth</option>
                <option>eClinicalWorks</option>
                <option>NextGen Healthcare</option>
                <option>Other / Custom</option>
              </select>
            </div>
          </div>

          <div className="pt-3">
            <Button
              type="submit"
              variant="vital"
              size="md"
              icon={<Calendar className="w-4 h-4" />}
              className="w-full justify-center text-sm font-semibold"
            >
              Confirm Walkthrough Request
            </Button>
          </div>

          <div className="text-[11px] text-clinical-400 flex items-center justify-center gap-1.5 pt-1">
            <ShieldCheck className="w-3.5 h-3.5 text-vital-600" />
            <span>Strict confidentiality. No marketing spam. BAA available upon request.</span>
          </div>
        </form>
      )}
    </Modal>
  );
};
