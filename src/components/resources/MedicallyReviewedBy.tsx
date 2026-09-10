import React from "react";
import { ShieldCheck, Calendar } from "lucide-react";
import { MedicalReviewer } from "@/data/resourceArticles";

interface MedicallyReviewedByProps {
  reviewer: MedicalReviewer;
  className?: string;
}

export const MedicallyReviewedBy: React.FC<MedicallyReviewedByProps> = ({
  reviewer,
  className = "",
}) => {
  return (
    <div
      className={`p-4 rounded-2xl bg-vital-50/70 border border-vital-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs ${className}`}
    >
      <div className="flex items-start sm:items-center gap-3">
        <div className="w-9 h-9 rounded-xl bg-vital-600 text-white flex items-center justify-center shrink-0 shadow-sm">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center gap-1.5 font-bold text-clinical-950">
            <span>Medically Reviewed by</span>
            <span className="text-vital-800">{reviewer.name}</span>
          </div>
          <div className="text-clinical-600 text-[11px]">
            {reviewer.credentials} • {reviewer.affiliation}
          </div>
        </div>
      </div>

      <div className="flex items-center gap-1 text-[11px] text-clinical-500 shrink-0 font-medium pl-12 sm:pl-0">
        <Calendar className="w-3.5 h-3.5 text-vital-600" />
        <span>Reviewed on {reviewer.reviewedDate}</span>
      </div>
    </div>
  );
};
