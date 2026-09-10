import React from "react";
import { Brain, Heart, Sparkles, UserCheck } from "lucide-react";

export const PhilosophyBanner: React.FC = () => {
  return (
    <section className="py-20 bg-clinical-900 text-white relative overflow-hidden">
      {/* Background soft ambient accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-vital-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-intel-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-vital-500/10 border border-vital-400/30 text-vital-300 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            Our Guiding Philosophy
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight font-sans">
            AI does the preparation.{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vital-400 to-teal-200">
              Doctors do the care.
            </span>{" "}
            Patients get a better experience.
          </h2>
          <p className="mt-5 text-clinical-300 text-base sm:text-lg leading-relaxed">
            We reject the idea that AI should replace human doctors, and we refuse to accept that doctors should spend 60% of their workday typing into archaic billing software. DrGodly puts AI exactly where it belongs: doing the exhaustive background synthesis so human doctors can practice compassionate medicine.
          </p>
        </div>

        {/* 3 Pillars Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Pillar 1 */}
          <div className="p-8 rounded-3xl bg-clinical-950/70 border border-clinical-800 backdrop-blur hover:border-vital-500/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-vital-500/20 border border-vital-500/30 flex items-center justify-center text-vital-400 mb-6 group-hover:scale-110 transition-transform">
              <Brain className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-vital-400 mb-2">
              01 • Intelligent Synthesis
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              AI Does the Preparation
            </h3>
            <p className="text-sm text-clinical-300 leading-relaxed">
              DrGodly ingests years of unstructured lab PDFs, cross-checks active medications against current symptoms, structures chronological HPIs, and flags differential diagnoses before the visit starts.
            </p>
          </div>

          {/* Pillar 2 */}
          <div className="p-8 rounded-3xl bg-clinical-950/70 border border-clinical-800 backdrop-blur hover:border-vital-500/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-300 mb-6 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-teal-300 mb-2">
              02 • Human Connection
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Doctors Do the Care
            </h3>
            <p className="text-sm text-clinical-300 leading-relaxed">
              Freed from repetitive clipboard triage and frantic chart digging, licensed physicians can spend 100% of their consult looking patients in the eye, listening deeply, and exercising nuanced clinical judgment.
            </p>
          </div>

          {/* Pillar 3 */}
          <div className="p-8 rounded-3xl bg-clinical-950/70 border border-clinical-800 backdrop-blur hover:border-vital-500/40 transition-all group">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-300 mb-6 group-hover:scale-110 transition-transform">
              <UserCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
              03 • Continuous Continuity
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Patients Get Better Outcomes
            </h3>
            <p className="text-sm text-clinical-300 leading-relaxed">
              No repeating your story to 4 different specialists. No forgotten drug allergies. Patients enjoy rapid, reassuring access with a persistent health memory that travels with them for life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
