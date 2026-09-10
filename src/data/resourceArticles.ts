export interface ArticleAuthor {
  name: string;
  role: string;
  avatar?: string;
}

export interface MedicalReviewer {
  name: string;
  credentials: string; // e.g., "MD, FACP, Board-Certified Internal Medicine"
  affiliation: string;
  reviewedDate: string;
}

export interface ResourceArticle {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: 
    | "AI in Healthcare"
    | "Patient Education"
    | "Telemedicine"
    | "Clinical AI"
    | "Medical Records"
    | "Preventive Health"
    | "Chronic Care"
    | "Healthcare Technology";
  publishedDate: string;
  readTime: string;
  author: ArticleAuthor;
  medicalReviewer?: MedicalReviewer;
  keywords: string[];
  summary: string;
  content: {
    sectionHeading: string;
    paragraphs: string[];
    callout?: {
      title: string;
      text: string;
    };
  }[];
}

export const RESOURCE_CATEGORIES = [
  "All Categories",
  "AI in Healthcare",
  "Patient Education",
  "Telemedicine",
  "Clinical AI",
  "Medical Records",
  "Preventive Health",
  "Chronic Care",
  "Healthcare Technology",
] as const;

export const RESOURCE_ARTICLES: ResourceArticle[] = [
  {
    slug: "longitudinal-context-diagnostic-oversights",
    title: "Why Your Symptoms Are Only Part of the Story: The Power of Longitudinal Context",
    seoTitle: "AI Medical History & Longitudinal Patient Intake | DrGodly",
    metaDescription: "Explore how AI medical history synthesis interlinks previous lab results, active medications, and chronic conditions before your doctor consultation.",
    category: "Patient Education",
    publishedDate: "September 8, 2026",
    readTime: "5 min read",
    author: {
      name: "Dr. Sarah Chen",
      role: "VP of Clinical Informatics, DrGodly",
    },
    medicalReviewer: {
      name: "Dr. Marcus Vance",
      credentials: "MD, FACP, Board-Certified Internal Medicine",
      affiliation: "Clinical Review Board, DrGodly Health",
      reviewedDate: "September 9, 2026",
    },
    keywords: [
      "AI medical history",
      "AI patient intake",
      "longitudinal health records",
      "AI healthcare platform",
      "clinical context",
    ],
    summary: "When patients visit a doctor for fatigue or presyncope, symptoms alone only tell half the story. Connecting past lab trends and medication half-lives prevents adverse interactions.",
    content: [
      {
        sectionHeading: "The Fragmented Patient Story Problem",
        paragraphs: [
          "In traditional healthcare encounters, patients typically spend 15 minutes filling out paper clipboards from memory. If a patient is feeling unusually exhausted, they may mention the fatigue, but omit that they started a thiazide diuretic eight months ago or that their baseline serum potassium was on the low end of normal.",
          "When healthcare software operates without longitudinal health records, each appointment restarts the diagnostic puzzle from zero. This fragmentation leads to redundant blood draws, delayed diagnoses, and avoidable medication adverse events."
        ],
        callout: {
          title: "Clinical Fact",
          text: "Over 68% of diagnostic delays in outpatient primary care stem from missing historical lab records or unlinked medication changes across different clinics."
        }
      },
      {
        sectionHeading: "How AI Organizes and Contextualizes Past Records",
        paragraphs: [
          "DrGodly approaches patient preparation through an AI-native electronic medical record pipeline. When a patient describes their chief complaint in plain conversational language, the system does not attempt to issue an automated diagnosis. Instead, it securely cross-checks the timeline against uploaded PDF records, historical biomarker panels, and chronic diagnoses.",
          "By synthesizing these inputs into an objective pre-visit briefing, the clinician can immediately see that the patient's fatigue correlates with Hydrochlorothiazide therapy and borderline potassium levels—saving 10 minutes of discovery and enabling immediate, doctor-led care."
        ]
      }
    ]
  },
  {
    slug: "ambient-soap-notes-doctor-burnout",
    title: "Measuring Cognitive Burden: How Ambient SOAP Notes Reduce Charting Time",
    seoTitle: "AI SOAP Notes & Ambient Clinical Telemedicine Copilot | DrGodly",
    metaDescription: "Learn how ambient AI SOAP notes and real-time clinical copilot assistance reduce doctor documentation burnout while maintaining full clinician review authority.",
    category: "Clinical AI",
    publishedDate: "August 24, 2026",
    readTime: "7 min read",
    author: {
      name: "Dr. Elena Rostova",
      role: "Clinical Workflow Architect",
    },
    medicalReviewer: {
      name: "Dr. Arthur Pendelton",
      credentials: "MD, Board-Certified Family Medicine",
      affiliation: "Baystate Health & Informatics Council",
      reviewedDate: "August 26, 2026",
    },
    keywords: [
      "AI SOAP notes",
      "AI clinical copilot",
      "AI telemedicine",
      "clinical documentation",
      "electronic medical records",
    ],
    summary: "Physicians spend up to two hours documenting for every one hour of direct patient consultation. Ambient AI SOAP generation drafts notes for review, restoring patient eye contact.",
    content: [
      {
        sectionHeading: "The Crisis of 'Pajama Time' Documentation",
        paragraphs: [
          "Electronic health record systems were fundamentally engineered as billing databases rather than clinical comprehension engines. The result is 'pajama time': clinicians spending 2 to 3 hours every evening typing structured notes, selecting ICD-10 codes, and clicking checkboxes.",
          "This documentation load drives cognitive exhaustion, reduces appointment availability, and harms the doctor-patient therapeutic relationship by forcing clinicians to stare at computer screens during consultations."
        ]
      },
      {
        sectionHeading: "Ambient Audio to Structured Clinical Intelligence",
        paragraphs: [
          "DrGodly listens passively during video consultations—operating with strict zero-data-retention AI protocols. As the physician and patient converse, the platform structures spoken details into compliant Subjective, Objective, Assessment, and Plan (SOAP) drafts.",
          "Crucially, the attending physician retains 100% review autonomy. The draft is placed in an editable clinical editor, complete with suggested ICD-10 and CPT codes, waiting for clinician verification and electronic signature."
        ],
        callout: {
          title: "Safety Standard",
          text: "DrGodly AI outputs are assistive documentation tools. No clinical note is ever finalized, signed, or transmitted without affirmative human physician approval."
        }
      }
    ]
  },
  {
    slug: "conversational-emr-search-clinical-decision-support",
    title: "Natural Language Retrieval Across 5 Years of Scanned PDF Medical Charts",
    seoTitle: "AI EMR & Conversational Medical Record Search | DrGodly",
    metaDescription: "How conversational EMR search allows doctors and patients to query complex medical records in plain English with direct page-level citations.",
    category: "Medical Records",
    publishedDate: "August 12, 2026",
    readTime: "6 min read",
    author: {
      name: "Kalyan S.",
      role: "Principal Systems Architect, DrGodly",
    },
    medicalReviewer: {
      name: "Dr. Marcus Vance",
      credentials: "MD, FACP, Board-Certified Internal Medicine",
      affiliation: "Clinical Review Board, DrGodly Health",
      reviewedDate: "August 14, 2026",
    },
    keywords: [
      "AI EMR",
      "conversational EMR search",
      "AI medical records",
      "AI clinical decision support",
      "FHIR interoperability",
    ],
    summary: "Scanned hospital discharge PDFs and external lab printouts trap critical medical context. Natural language EMR search surfaces answers with verifiable source document citations.",
    content: [
      {
        sectionHeading: "The Scanned PDF Graveyard in Modern Healthcare",
        paragraphs: [
          "When patients switch doctors or visit a new specialist, their prior medical history is typically faxed or uploaded as a 100-page flattened PDF. In a busy 15-minute consultation, no clinician has time to scroll through 100 scanned pages to find a specific echocardiogram ejection fraction or kidney function test from three years ago.",
          "As a result, doctors either repeat expensive diagnostic tests or proceed without crucial historical context."
        ]
      },
      {
        sectionHeading: "Direct Citation Retrieval Engine",
        paragraphs: [
          "DrGodly ingests external records through an optical character recognition (OCR) and clinical knowledge graph pipeline. Clinicians can ask: 'Compare HbA1c values over the last 2 years' or 'What blood pressure medications has this patient previously discontinued?'",
          "Every response includes an excerpt and clickable link to the exact source PDF page, allowing doctors to instantly verify the finding with their own eyes before making clinical decisions."
        ]
      }
    ]
  },
  {
    slug: "managing-chronic-hypertension-telemedicine",
    title: "Continuous Care in Telemedicine: Managing Hypertension with Connected Data",
    seoTitle: "AI Telemedicine & Chronic Care Management Platform | DrGodly",
    metaDescription: "Explore how connecting home vitals, longitudinal lab records, and AI telemedicine consultations improves blood pressure control and medication adherence.",
    category: "Chronic Care",
    publishedDate: "July 28, 2026",
    readTime: "6 min read",
    author: {
      name: "Dr. Sarah Chen",
      role: "VP of Clinical Informatics, DrGodly",
    },
    medicalReviewer: {
      name: "Dr. Arthur Pendelton",
      credentials: "MD, Board-Certified Family Medicine",
      affiliation: "Baystate Health & Informatics Council",
      reviewedDate: "July 30, 2026",
    },
    keywords: [
      "telemedicine platform",
      "AI doctor consultation",
      "AI healthcare platform",
      "chronic care",
      "hypertension management",
    ],
    summary: "Hypertension is the leading modifiable risk factor for stroke and cardiovascular disease. Continuous telemedicine backed by longitudinal data bridges the gap between annual checkups.",
    content: [
      {
        sectionHeading: "The Limitation of Isolated Clinic Visits",
        paragraphs: [
          "A single blood pressure reading taken in a sterile clinic office often suffers from 'white-coat hypertension' or masked hypertension. Effective chronic condition management requires a continuous timeline of home readings, medication adherence records, and electrolyte monitoring.",
          "DrGodly allows patients to track blood pressure trends and medication changes continuously, automatically surfacing trends for physician review before telehealth consultations."
        ]
      },
      {
        sectionHeading: "Safety First: Recognizing Red Flags",
        paragraphs: [
          "Patients using DrGodly for chronic care receive immediate safety guidance. If a patient logs blood pressure exceeding hypertensive crisis thresholds (>180/120 mmHg) accompanied by headache or chest tightness, DrGodly immediately escalates the interaction to emergency care protocols.",
          "AI does not triage emergencies alone—it ensures that dangerous symptoms are directed to immediate emergency medical services without delay."
        ]
      }
    ]
  }
];
