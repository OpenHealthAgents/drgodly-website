export interface FaqItem {
  id: string;
  category: "general" | "patients" | "doctors" | "security";
  question: string;
  answer: string;
}

export const FAQS: FaqItem[] = [
  {
    id: "general-1",
    category: "general",
    question: "Is DrGodly an AI doctor or a symptom checker?",
    answer: "Neither. DrGodly is an AI-native healthcare platform that connects your medical history, clinical intelligence, and human doctors. We do not replace physicians. Instead, our AI performs the heavy lifting—organizing your complete health history, synthesizing symptoms into structured clinical reports, and preparing clinical decision support—so licensed human doctors can deliver personalized care without administrative burden."
  },
  {
    id: "general-2",
    category: "general",
    question: "How does DrGodly differ from anonymous AI health apps?",
    answer: "Anonymous health chatbots evaluate your symptoms in a total vacuum—they don't know what medications you take, what your last blood panel revealed, or your surgical history. While DrGodly lets you ask an initial quick question, we believe symptoms are only part of the story. By securely connecting your past reports and medical history, DrGodly connects the dots between subtle symptoms and past health patterns, giving both you and your doctor high-precision clarity."
  },
  {
    id: "patients-1",
    category: "patients",
    question: "Can I use DrGodly without uploading my medical records right away?",
    answer: "Yes. You can immediately ask health questions and start a quick symptom intake. However, DrGodly becomes exponentially more valuable once you connect your secure health profile with previous lab results, prescriptions, and physician notes. The more context DrGodly has, the more accurate and tailored your insights and doctor consultations will be."
  },
  {
    id: "patients-2",
    category: "patients",
    question: "How quickly can I consult with a licensed doctor?",
    answer: "In most regions, you can connect with a board-certified telemedicine physician in under 15 minutes, 24/7/365. Because DrGodly prepares a comprehensive pre-visit clinical briefing before the physician enters the video room, your consultation begins immediately on the core issues without wasting 15 minutes answering repetitive clipboard questions."
  },
  {
    id: "doctors-1",
    category: "doctors",
    question: "How does DrGodly handle clinical liability and decision autonomy?",
    answer: "DrGodly operates under a strict 'human-in-the-loop' paradigm. Our AI serves exclusively as clinical decision support (CDS) and administrative acceleration. All differential diagnoses, clinical summaries, and SOAP notes must be reviewed, edited, and approved by the attending physician before signing into the official medical record. The doctor always retains 100% clinical authority."
  },
  {
    id: "doctors-2",
    category: "doctors",
    question: "Does DrGodly integrate with our existing EMR (Epic, Cerner, AthenaHealth)?",
    answer: "Yes. DrGodly supports bidirectional FHIR HL7 integrations, SMART-on-FHIR apps, and secure API bridges. Pre-visit summaries and finalized SOAP notes can automatically push into your hospital's existing EHR without dual documentation."
  },
  {
    id: "security-1",
    category: "security",
    question: "Is patient health data private and HIPAA-compliant?",
    answer: "Uncompromisingly yes. DrGodly is engineered with end-to-end encryption (AES-256 at rest, TLS 1.3 in transit), strict HIPAA Business Associate Agreements (BAAs), SOC2 Type II compliance controls, and zero-retention data policies. Your personal medical records are never used to train public third-party AI models."
  },
  {
    id: "security-2",
    category: "security",
    question: "Who owns my medical records on DrGodly?",
    answer: "You do. You have complete data sovereignty. You can export your full longitudinal health chart, delete your profile, or grant temporary access to external specialists at any time with cryptographic audit trails."
  }
];
