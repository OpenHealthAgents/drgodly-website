export interface FeatureItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  benefit: string;
  audience: "patients" | "doctors" | "both" | "enterprise";
  tag: string;
  iconName: string;
  clinicalMetric?: string;
}

export const PLATFORM_FEATURES: FeatureItem[] = [
  {
    id: "patient-intake",
    number: "01",
    title: "AI-Powered Patient Intake",
    shortDesc: "Empathetic, adaptive conversational intake that captures the complete clinical picture before the visit.",
    fullDesc: "Replaces cumbersome 20-page clipboard forms with an intelligent, adaptive clinical dialogue. It dynamically follows up on symptoms, onset, severity, and modifying factors—synthesizing patient language into structured medical terminology.",
    benefit: "Cuts patient intake friction by 75% and ensures zero missing context.",
    audience: "both",
    tag: "Preparation",
    iconName: "ClipboardCheck",
    clinicalMetric: "75% faster intake completion",
  },
  {
    id: "pre-visit-reports",
    number: "02",
    title: "AI-Generated Pre-Visit Clinical Reports",
    shortDesc: "A 60-second executive clinical briefing ready before the physician enters the exam room.",
    fullDesc: "Generates an objective, prioritized clinical synthesis highlighting chief complaint, chronological HPI (History of Present Illness), pertinent positives & negatives, and vital trends. Doctors never start a visit blind.",
    benefit: "Eliminates 10 minutes of blind chart review per patient.",
    audience: "doctors",
    tag: "Clinical Synthesis",
    iconName: "FileText",
    clinicalMetric: "Under 60s pre-chart review",
  },
  {
    id: "assisted-telemedicine",
    number: "03",
    title: "AI-Assisted Telemedicine Consultations",
    shortDesc: "Real-time ambient intelligence that listens, highlights red flags, and surfaces relevant patient history live.",
    fullDesc: "High-definition video consultations augmented by ambient clinical listening. As the patient speaks, DrGodly silently cross-references their 5-year record, prompting the physician if reported symptoms conflict with past lab results or prescriptions.",
    benefit: "Full eye-contact medicine without doctor head-down typing.",
    audience: "both",
    tag: "Care Delivery",
    iconName: "Video",
    clinicalMetric: "100% focused human connection",
  },
  {
    id: "decision-support",
    number: "04",
    title: "Clinical Decision Support for Doctors",
    shortDesc: "Evidence-based differential diagnoses, interaction checks, and guideline recommendations at the point of care.",
    fullDesc: "A non-intrusive second set of clinical eyes. DrGodly surfaces ranked differential diagnoses with direct citations to clinical peer-reviewed literature (UpToDate, PubMed, ACC/AHA guidelines), cross-checked against the patient's genetic and pharmacological history.",
    benefit: "Reduces diagnostic oversight and adverse drug interactions.",
    audience: "doctors",
    tag: "Diagnostic Safety",
    iconName: "BrainCircuit",
    clinicalMetric: "99.4% drug interaction catch rate",
  },
  {
    id: "soap-notes",
    number: "05",
    title: "AI-Generated SOAP Notes",
    shortDesc: "Accurate, compliant clinical documentation generated seconds after the consultation ends.",
    fullDesc: "Converts ambient consultation audio and pre-intake synthesis into fully compliant Subjective, Objective, Assessment, and Plan notes tailored to the doctor's specialty and billing coding standards (ICD-10 & CPT).",
    benefit: "Saves 2.5 hours of pajama-time documentation every day.",
    audience: "doctors",
    tag: "Automation",
    iconName: "FileCheck2",
    clinicalMetric: "2.5 hrs saved daily per MD",
  },
  {
    id: "ai-native-emr",
    number: "06",
    title: "AI-Native Electronic Medical Records",
    shortDesc: "Structured for intelligence, not just billing. An EMR designed from the ground up for comprehension.",
    fullDesc: "Legacy EMRs are billing databases disguised as medical records. DrGodly structures clinical data as an interactive knowledge graph—interlinking lab histories, imaging reports, clinician notes, and specialist consults into an intuitive timeline.",
    benefit: "Instant longitudinal clarity across disparate health systems.",
    audience: "enterprise",
    tag: "Infrastructure",
    iconName: "Database",
    clinicalMetric: "Sub-second record aggregation",
  },
  {
    id: "conversational-search",
    number: "07",
    title: "Conversational EMR Search",
    shortDesc: "Ask natural clinical questions across years of unstructured charts, PDFs, and lab panels.",
    fullDesc: "No more digging through 400-page scanned PDF archives. Physicians and patients can query in plain English: 'What was her eGFR trajectory over the last 3 years?' or 'Did she ever have an adverse reaction to ACE inhibitors?' and get instant cited answers.",
    benefit: "Instant answer retrieval with direct document page links.",
    audience: "doctors",
    tag: "Search & Retrieval",
    iconName: "SearchCode",
    clinicalMetric: "Zero manual PDF scrolling",
  },
  {
    id: "longitudinal-history",
    number: "08",
    title: "Longitudinal Patient Health History",
    shortDesc: "A unified, living story of your health that grows with you across clinics, years, and specialists.",
    fullDesc: "Patients own their continuous health story. When moving between primary care, cardiologists, and urgent care, DrGodly ensures the new clinician instantly inherits the complete, organized backstory without repeating redundant tests.",
    benefit: "Never re-explain your entire medical history again.",
    audience: "patients",
    tag: "Continuity",
    iconName: "GitMerge",
    clinicalMetric: "Continuous health narrative",
  },
  {
    id: "personalized-intelligence",
    number: "09",
    title: "Personalized AI Health Intelligence",
    shortDesc: "Proactive, context-aware insights grounded in your biology, medications, and lifestyle biomarkers.",
    fullDesc: "Unlike generic health chatbots that dish out boilerplate web advice, DrGodly knows your baseline. It interprets your blood test trends over time, flags medication renewal timing, and prepares you for upcoming doctor conversations.",
    benefit: "Empowers patients to be educated, active partners in their health.",
    audience: "patients",
    tag: "Patient Empowerment",
    iconName: "Sparkles",
    clinicalMetric: "High-precision personal context",
  },
];
