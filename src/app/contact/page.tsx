"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { QuickAssessModal } from "@/components/modals/QuickAssessModal";
import { HealthProfileModal } from "@/components/modals/HealthProfileModal";
import { DoctorDemoModal } from "@/components/modals/DoctorDemoModal";
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  Building2, 
  ShieldCheck 
} from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    category: "Provider Partnership",
    organization: "",
    message: "",
  });
  const [quickAssessOpen, setQuickAssessOpen] = useState(false);
  const [healthProfileOpen, setHealthProfileOpen] = useState(false);
  const [doctorDemoOpen, setDoctorDemoOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-clinical-50 flex flex-col selection:bg-vital-100 selection:text-vital-900">
      <Navbar
        onOpenQuickAssess={() => setQuickAssessOpen(true)}
        onOpenHealthProfile={() => setHealthProfileOpen(true)}
      />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="vital" icon={<Mail className="w-3.5 h-3.5" />}>
              Get in Touch
            </Badge>

            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
              Contact the DrGodly{" "}
              <span className="text-vital-600">Clinical & Enterprise Team</span>
            </h1>

            <p className="text-lg text-clinical-600 leading-relaxed max-w-2xl mx-auto">
              Have questions about deploying DrGodly at your hospital network, integrating your practice EHR, or patient support? We are here to help.
            </p>
          </div>

          <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-7 bg-white p-8 rounded-3xl border border-clinical-200 shadow-clinical-md">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-16 h-16 rounded-full bg-vital-50 border border-vital-200 text-vital-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-clinical-950">
                    Message Received
                  </h3>
                  <p className="text-sm text-clinical-600 max-w-sm mx-auto leading-relaxed">
                    Thank you for reaching out, {formData.name || "Colleague"}. Our clinical partnership team will respond within 1 business day.
                  </p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Inquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Dr. Jordan Miller"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-sm text-clinical-900 bg-clinical-50/50"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                      Work Email
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="j.miller@healthsystem.org"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-sm text-clinical-900 bg-clinical-50/50"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                        Inquiry Nature
                      </label>
                      <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-xs text-clinical-900 bg-clinical-50/50"
                      >
                        <option>Provider Partnership / MD Join</option>
                        <option>Hospital System / Enterprise Sales</option>
                        <option>EHR & FHIR Integration</option>
                        <option>Patient Support & Feedback</option>
                        <option>Press & Media</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                        Organization / Clinic
                      </label>
                      <input
                        type="text"
                        placeholder="Summit Medical Group"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-3 py-2.5 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-xs text-clinical-900 bg-clinical-50/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-clinical-900 uppercase tracking-wider block">
                      Message / Project Details
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your practice, clinical specialty, or deployment requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full p-4 rounded-xl border border-clinical-300 focus:outline-none focus:ring-2 focus:ring-vital-500 text-sm text-clinical-900 bg-clinical-50/50"
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="vital"
                    size="md"
                    icon={<Send className="w-4 h-4" />}
                    className="w-full justify-center text-sm font-semibold"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>

            {/* Direct Contact Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="p-7 rounded-3xl bg-clinical-900 text-white space-y-5">
                <span className="text-xs font-bold uppercase tracking-wider text-vital-400">
                  Direct Inquiries
                </span>

                <div className="space-y-3 text-xs text-clinical-300">
                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-vital-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Clinical Partnerships</strong>
                      clinical@drgodly.com
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Building2 className="w-4 h-4 text-vital-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Enterprise & Health Systems</strong>
                      enterprise@drgodly.com
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-4 h-4 text-vital-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block">Compliance & BAA Officer</strong>
                      security@drgodly.com
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-clinical-800 text-xs text-clinical-400">
                  Average response time: &lt; 4 business hours.
                </div>
              </div>
            </div>
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
