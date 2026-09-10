import React from "react";
import { MessageSquareWarning, FolderX, Clock4, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

export const ProblemSection: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="warning">The Healthcare Status Quo</Badge>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-clinical-950 font-sans leading-tight">
            Healthcare shouldn&apos;t start from scratch every time.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-clinical-600 leading-relaxed">
            The modern healthcare system is plagued by amnesia. Patients are treated like strangers at every encounter, while clinicians struggle with disjointed records.
          </p>
        </div>

        {/* 3 Problems */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
          {/* Problem 1 */}
          <div className="p-8 rounded-3xl bg-clinical-50 border border-clinical-200/80 hover:border-amber-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <MessageSquareWarning className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Problem 01
            </div>
            <h3 className="text-xl font-bold text-clinical-950">
              Repeating your story
            </h3>
            <p className="text-sm text-clinical-700 leading-relaxed italic">
              &ldquo;Every visit shouldn&apos;t begin with the same questions.&rdquo;
            </p>
            <p className="text-xs text-clinical-500 leading-relaxed">
              Patients with complex or chronic conditions spend their first 10 minutes recounting surgical dates, allergies, and previous medications over and over.
            </p>
          </div>

          {/* Problem 2 */}
          <div className="p-8 rounded-3xl bg-clinical-50 border border-clinical-200/80 hover:border-amber-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <FolderX className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Problem 02
            </div>
            <h3 className="text-xl font-bold text-clinical-950">
              Scattered records
            </h3>
            <p className="text-sm text-clinical-700 leading-relaxed italic">
              &ldquo;Your medical history lives across PDFs, prescriptions, labs and different hospitals.&rdquo;
            </p>
            <p className="text-xs text-clinical-500 leading-relaxed">
              Diagnostic test panels from 2023, paper discharge summaries, and clinic portals never talk to one another, leaving critical blindspots.
            </p>
          </div>

          {/* Problem 3 */}
          <div className="p-8 rounded-3xl bg-clinical-50 border border-clinical-200/80 hover:border-amber-300 transition-all space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
              <Clock4 className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-amber-800">
              Problem 03
            </div>
            <h3 className="text-xl font-bold text-clinical-950">
              Limited consultation time
            </h3>
            <p className="text-sm text-clinical-700 leading-relaxed italic">
              &ldquo;Doctors spend valuable minutes collecting information and documenting the encounter.&rdquo;
            </p>
            <p className="text-xs text-clinical-500 leading-relaxed">
              In a standard 15-minute visit, half the appointment is lost to manual data entry, leaving barely enough time for compassionate human listening.
            </p>
          </div>
        </div>

        {/* Transition Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-vital-500/10 border border-vital-500/30 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-vital-950">
            <Sparkles className="w-5 h-5 text-vital-600 shrink-0" />
            <span>DrGodly connects the dots before care begins.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
