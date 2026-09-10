"use client";

import React, { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { 
  UploadCloud, 
  FileText, 
  CheckCircle2, 
  Lock, 
  ArrowRight,
  Sparkles
} from "lucide-react";
import { analytics } from "@/lib/analytics";

interface HealthProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const HealthProfileModal: React.FC<HealthProfileModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const conditionOptions = [
    "Hypertension / Blood Pressure",
    "Type 2 Diabetes / Pre-diabetes",
    "Asthma / Respiratory Allergies",
    "Thyroid Condition (Hashimoto's/Hypo)",
    "Migraines / Chronic Headaches",
    "High Cholesterol / Dyslipidemia",
  ];

  const toggleCondition = (cond: string) => {
    setSelectedConditions((prev) =>
      prev.includes(cond) ? prev.filter((c) => c !== cond) : [...prev, cond]
    );
  };

  const handleSimulateUpload = (fileName: string) => {
    if (!uploadedFiles.includes(fileName)) {
      setUploadedFiles((prev) => [...prev, fileName]);
    }
  };

  const handleReset = () => {
    setStep(1);
    setName("");
    setSelectedConditions([]);
    setUploadedFiles([]);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleReset}
      title={
        step === 1
          ? "Step 1: Your Health Baseline"
          : step === 2
          ? "Step 2: Connect Your Past Records"
          : "Context Ingestion Complete"
      }
      subtitle={
        step === 1
          ? "Give DrGodly the context behind your health for more personalized insights."
          : step === 2
          ? "Upload your previous reports, prescriptions, and lab panels so DrGodly can understand your journey."
          : "Your longitudinal health graph is encrypted and ready for your doctor."
      }
      maxWidth="lg"
    >
      <div className="space-y-6">
        {/* Step Progress Pills */}
        <div className="flex items-center gap-2 border-b border-clinical-100 pb-4">
          {[1, 2, 3].map((s) => (
            <div
              key={s}
              className={`flex-1 h-1.5 rounded-full transition-all ${
                step >= s ? "bg-vital-600" : "bg-clinical-200"
              }`}
            />
          ))}
        </div>

        {/* STEP 1: BASIC DEMOGRAPHICS & CHRONIC CONDITIONS */}
        {step === 1 && (
          <div className="space-y-5 animate-in fade-in">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                Preferred Name
              </label>
              <input
                type="text"
                placeholder="e.g. Jordan Miller"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-sm text-clinical-900 bg-clinical-50/50"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                Do you have any existing diagnosed conditions? (Optional)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {conditionOptions.map((cond) => {
                  const isSelected = selectedConditions.includes(cond);
                  return (
                    <button
                      key={cond}
                      type="button"
                      onClick={() => toggleCondition(cond)}
                      className={`p-3 rounded-xl border text-xs font-medium text-left transition-all flex items-center justify-between ${
                        isSelected
                          ? "bg-vital-50 border-vital-500 text-vital-900 font-semibold"
                          : "bg-white border-clinical-200 text-clinical-700 hover:bg-clinical-50"
                      }`}
                    >
                      <span>{cond}</span>
                      {isSelected && <CheckCircle2 className="w-4 h-4 text-vital-600 shrink-0" />}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <Button
                variant="vital"
                size="md"
                onClick={() => setStep(2)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Continue to Connect Records
              </Button>
            </div>
          </div>
        )}

        {/* STEP 2: CONNECT PAST RECORDS */}
        {step === 2 && (
          <div className="space-y-5 animate-in fade-in">
            <div className="p-6 rounded-2xl border-2 border-dashed border-vital-300 bg-vital-50/30 text-center space-y-3">
              <UploadCloud className="w-10 h-10 text-vital-600 mx-auto" />
              <div>
                <div className="text-sm font-bold text-clinical-900">
                  Drag and drop past lab reports, discharge summaries or Rx photos
                </div>
                <div className="text-xs text-clinical-500 mt-0.5">
                  Supports PDF, PNG, JPG, or C-CDA XML (AES-256 encrypted on upload)
                </div>
              </div>

              {/* Sample 1-click uploads for simulator */}
              <div className="pt-2">
                <span className="text-[11px] font-semibold text-clinical-500 uppercase tracking-wider block mb-2">
                  Or simulate uploading sample records:
                </span>
                <div className="flex flex-wrap justify-center gap-2">
                  {[
                    "Quest_Comprehensive_Metabolic_Panel_2024.pdf",
                    "Active_Prescriptions_List.pdf",
                    "Cardiology_Consult_Summary.pdf",
                  ].map((file) => (
                    <button
                      key={file}
                      type="button"
                      onClick={() => handleSimulateUpload(file)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 ${
                        uploadedFiles.includes(file)
                          ? "bg-vital-100 border-vital-400 text-vital-900 font-semibold"
                          : "bg-white border-clinical-300 text-clinical-700 hover:bg-clinical-100"
                      }`}
                    >
                      <FileText className="w-3.5 h-3.5 text-vital-600" />
                      <span>{file}</span>
                      {uploadedFiles.includes(file) && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-vital-600" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {uploadedFiles.length > 0 && (
              <div className="p-3.5 rounded-xl bg-clinical-50 border border-clinical-200 text-xs space-y-1">
                <span className="font-bold text-clinical-800">
                  Ready to correlate {uploadedFiles.length} document(s):
                </span>
                {uploadedFiles.map((f, i) => (
                  <div key={i} className="text-clinical-600 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-vital-600" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-clinical-600 hover:text-clinical-900 font-medium"
              >
                Back
              </button>
              <Button
                variant="vital"
                size="md"
                onClick={() => setStep(3)}
                icon={<ArrowRight className="w-4 h-4" />}
              >
                Generate Living Health Profile
              </Button>
            </div>
          </div>
        )}

        {/* STEP 3: SYNTHESIS COMPLETE */}
        {step === 3 && (
          <div className="space-y-6 animate-in fade-in">
            <div className="p-6 rounded-2xl bg-vital-500/10 border border-vital-500/30 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-vital-600 text-white flex items-center justify-center mx-auto shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-clinical-950">
                Your Health History Helps DrGodly Connect the Dots
              </h4>
              <p className="text-xs sm:text-sm text-clinical-700 max-w-md mx-auto leading-relaxed">
                We have synthesized your profile. When you book a telemedicine consult, your doctor will enter the call already knowing your baseline, active medications, and lab trends.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-clinical-900 text-white text-xs space-y-2">
              <div className="text-vital-400 font-bold uppercase tracking-wide">
                Summary of Context Linked:
              </div>
              <div className="text-clinical-300">
                • <strong>Patient:</strong> {name || "Elena Rostova"}
              </div>
              <div className="text-clinical-300">
                • <strong>Monitored:</strong> {selectedConditions.length ? selectedConditions.join(", ") : "Standard Wellness Monitoring"}
              </div>
              <div className="text-clinical-300">
                • <strong>Clinical Documents:</strong> {uploadedFiles.length ? `${uploadedFiles.length} records parsed` : "Sample metabolic panels parsed"}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Button
                variant="vital"
                size="md"
                onClick={() => {
                  analytics.trackSignupCompleted("patient");
                  analytics.trackDoctorBookingCta("health_profile_completion");
                  handleReset();
                }}
                className="flex-1 justify-center"
              >
                Consult a Doctor With Context
              </Button>
              <Button
                variant="outline"
                size="md"
                onClick={() => {
                  analytics.trackSignupCompleted("patient");
                  handleReset();
                }}
                className="flex-1 justify-center"
              >
                Close & Return
              </Button>
            </div>
          </div>
        )}

        <div className="text-[11px] text-clinical-400 flex items-center gap-1.5 justify-center border-t border-clinical-100 pt-3">
          <Lock className="w-3.5 h-3.5 text-vital-600" />
          <span>Zero third-party LLM training. Private, HIPAA-compliant encryption.</span>
        </div>
      </div>
    </Modal>
  );
};
