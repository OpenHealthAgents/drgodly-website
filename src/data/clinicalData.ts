export interface DualPathComparison {
  query: string;
  quickStart: {
    mode: string;
    badge: string;
    response: string;
    limitations: string[];
    riskLevel: string;
  };
  personalized: {
    mode: string;
    badge: string;
    connectedContext: {
      medications: string[];
      labs: string[];
      conditions: string[];
      allergies: string[];
    };
    aiSynthesis: string;
    clinicalFinding: string;
    doctorPreparation: string[];
    actionPlan: string;
  };
}

export const COMPARISON_DATA: DualPathComparison = {
  query: "I've had lingering fatigue for 3 weeks, mild lightheadedness when standing up quickly, and occasional calf muscle twitches.",
  quickStart: {
    mode: "Quick Question (Zero Context)",
    badge: "Anonymous Surface Triage",
    response: "Fatigue and lightheadedness are common symptoms that can stem from inadequate hydration, lack of sleep, or iron deficiency. Ensure you drink 2-3 liters of fluids daily, elevate your legs, and reduce stress. If symptoms persist for more than 4 weeks or you experience fainting, consult a primary care physician.",
    limitations: [
      "Blind to underlying cardiovascular or metabolic medications",
      "Unable to cross-reference historical electrolyte panels",
      "Risk of missing dangerous drug-induced hypokalemia",
      "No pre-visit synthesis prepared for your doctor"
    ],
    riskLevel: "Potential Diagnostic Blindspot"
  },
  personalized: {
    mode: "Personalized Health Profile (With DrGodly Context)",
    badge: "Context-Aware Clinical Intelligence",
    connectedContext: {
      medications: ["Hydrochlorothiazide 25mg daily (Thiazide Diuretic)", "Lisinopril 10mg"],
      labs: ["Serum K+: 3.3 mEq/L (Low normal on 3-month prior panel)", "eGFR: 82 mL/min"],
      conditions: ["Essential Hypertension (Diagnosed 2022)", "Pre-diabetes"],
      allergies: ["Sulfa antibiotics (Urticaria)"]
    },
    aiSynthesis: "Correlating your reported muscle twitching and orthostatic lightheadedness with your active Hydrochlorothiazide therapy and prior borderline potassium (3.3 mEq/L). High probability of drug-induced mild hypokalemia and volume depletion rather than simple fatigue.",
    clinicalFinding: "🚨 Clinical Correlation Detected: Thiazide-induced potassium wasting combined with postural hypotension.",
    doctorPreparation: [
      "Ordered stat repeat Basic Metabolic Panel (BMP) to verify serum K+ & Creatinine",
      "Drafted medication review to evaluate switching to ACEI monotherapy or potassium-sparing agent",
      "Prepared orthostatic vital sign checklist for physician review",
      "Generated structured HPI ready for telehealth MD within 15 minutes"
    ],
    actionPlan: "Dr. Sarah Lin (Internal Medicine) has been pre-briefed with your full lab timeline. Connect in 1 tap."
  }
};

export const DOCTOR_WORKSPACE_DEMO = {
  patient: {
    name: "Elena Rostova",
    age: 46,
    gender: "Female",
    mrn: "DG-884219",
    visitType: "AI-Prepared Telehealth Consultation",
    time: "10:30 AM (In 4 mins)",
    status: "Pre-charting Complete",
    primaryInsurance: "BlueCross PPO",
  },
  preVisitSummary: {
    chiefComplaint: "Subacute fatigue, orthostatic dizziness, and bilateral calf cramps x 3 weeks.",
    hpiTimeline: [
      "Week 1: Progressive mid-day lethargy despite 7-8 hours restful sleep.",
      "Week 2: Onset of transient lightheadedness upon standing from desk, resolves within 15 seconds.",
      "Week 3: Involuntary nocturnal muscle fasciculations in lower calves. Denies syncope, chest pain, palpitations, or shortness of breath."
    ],
    pertinentHistory: {
      medications: "Hydrochlorothiazide 25mg PO QD (since March 2023), Metformin 500mg PO BID.",
      pastLabs: "K+ 3.4 mEq/L (3 mos ago), HbA1c 5.8% (6 mos ago), eGFR 88.",
      allergies: "NKDA (No known drug allergies)."
    },
    intakeRedFlags: "Zero red flags for acute coronary syndrome or neurological deficit. High index of suspicion for medication-induced electrolyte perturbation."
  },
  clinicalDecisionSupport: [
    {
      diagnosis: "Drug-Induced Hypokalemia (Secondary to Thiazide Diuretic)",
      confidence: "88%",
      rationale: "Combination of calf fasciculations, orthostatic lightheadedness, concurrent Hydrochlorothiazide, and borderline prior serum potassium (3.4 mEq/L).",
      guidelineCitation: "AHA/ACC 2024 Hypertension Guideline - Section 7.2: Thiazide adverse metabolic effects.",
      urgency: "Moderate - Same-Day Lab Work Required"
    },
    {
      diagnosis: "Orthostatic Hypotension / Relative Volume Depletion",
      confidence: "74%",
      rationale: "Postural dizziness reported within 15s of rising. Likely exacerbated by summer heat and mild hypovolemia.",
      guidelineCitation: "Consensus Statement on Orthostatic Hypotension (Autonomic Neuroscience 2022).",
      urgency: "Actionable"
    },
    {
      diagnosis: "Early Peripheral Neuropathy or Magnesium Depletion",
      confidence: "22%",
      rationale: "Known pre-diabetes and concurrent diuretic therapy can deplete magnesium alongside potassium.",
      guidelineCitation: "ADA Standards of Care in Diabetes (2025).",
      urgency: "Differential Rule-Out"
    }
  ],
  soapNote: {
    subjective: "46yo female with history of HTN and pre-diabetes presents via DrGodly Telehealth with 3-week history of fatigue, postural dizziness, and bilateral calf cramping. Patient reports consistent adherence to Hydrochlorothiazide 25mg daily. Denies dyspnea, chest pain, presyncope, or visual changes.",
    objective: "Home BP reported 104/66 mmHg sitting, pulse 72 bpm regular. Alert, oriented x 4. Video examination shows no acute distress, speech clear, no obvious tremor. AI intake completed and verified with patient.",
    assessment: "1. Hypokalemia, suspected secondary to thiazide diuretic therapy (ICD-10: E87.6)\n2. Orthostatic intolerance / volume depletion (ICD-10: I95.1)\n3. Essential hypertension, well-controlled (ICD-10: I10)",
    plan: "1. Discontinue Hydrochlorothiazide 25mg immediately.\n2. Initiate Lisinopril 10mg PO QD for blood pressure maintenance without potassium wasting.\n3. Stat outpatient order for Basic Metabolic Panel (BMP) and serum Magnesium today.\n4. Recommend dietary potassium repletion and 2.5L daily hydration.\n5. Follow-up video consultation in 7 days to review lab values and BP diary."
  },
  emrSearchSamples: [
    {
      query: "Show eGFR and potassium trajectory since 2022",
      result: "Found 4 lab panels: K+ was 4.2 (Aug 2022) -> 3.9 (May 2023) -> 3.4 (Nov 2023). eGFR stable between 84-88 mL/min/1.73m²."
    },
    {
      query: "Has patient ever had adverse reaction to ACE inhibitors?",
      result: "No documented history of cough, angioedema, or adverse events under ACE-inhibitors. Tolerated Captopril briefly in 2020."
    },
    {
      query: "Summarize cardiology visit from October 2023",
      result: "Echocardiogram normal EF 62%, normal LV wall thickness, no valvular abnormalities noted by Dr. Marcus Sterling."
    }
  ]
};
