/**
 * DrGodly Privacy-Preserving Healthcare Analytics Engine
 *
 * CRITICAL PRIVACY DIRECTIVE:
 * Never send Protected Health Information (PHI) to marketing analytics.
 * Strictly prohibited fields:
 * - symptoms, complaints, or chat free-text
 * - medical records, lab values, or file contents
 * - diagnoses, ICD-10/SNOMED descriptions
 * - medication names, dosages, or regimens
 * - patient names, email addresses, phone numbers, or health IDs
 */

export type AnalyticsCategory = "patient" | "doctor" | "content" | "engagement" | "funnel";

export type AnalyticsEventName =
  // Patient Journey & Funnel
  | "homepage_cta_clicked"
  | "ai_demo_opened"
  | "ai_demo_started"
  | "health_profile_cta_clicked"
  | "upload_cta_clicked"
  | "medical_record_upload_started"
  | "medical_record_upload_completed"
  | "doctor_booking_cta_clicked"
  | "signup_started"
  | "signup_completed"

  // Doctor Funnel
  | "doctor_page_viewed"
  | "demo_cta_clicked"
  | "demo_form_started"
  | "demo_form_completed"

  // Content & Exploration
  | "feature_page_viewed"
  | "resource_opened"
  | "faq_opened"
  | "video_played";

export interface SafeAnalyticsPayload {
  // Navigation & Location
  pagePath?: string;
  sourceLocation?: string; // e.g. "hero_primary", "nav_header", "footer"

  // Funnel Step
  funnelStage?:
    | "traffic"
    | "engagement"
    | "product_exploration"
    | "registration"
    | "activation"
    | "health_profile_creation"
    | "telemedicine_conversion";

  // Non-sensitive context metadata
  category?: string; // e.g. "Patient Education"
  articleSlug?: string;
  featureName?: string; // e.g. "ai_intake", "soap_notes"
  faqQuestionId?: string;
  fileCount?: number; // integer count only, NO filenames or contents
  stepIndex?: number;

  // Additional safe metadata
  [key: string]: string | number | boolean | undefined;
}

// Prohibited keys guardrail list to prevent accidental leakage
const PROHIBITED_PHI_KEYS = [
  "symptom",
  "symptoms",
  "diagnosis",
  "diagnoses",
  "medication",
  "medications",
  "prescription",
  "condition",
  "conditions",
  "disease",
  "patient_name",
  "patientName",
  "name",
  "email",
  "phone",
  "mrn",
  "ssn",
  "health_id",
  "medical_record",
  "lab_result",
  "lab_value",
  "note_text",
  "chat_text",
  "query",
];

class AnalyticsTracker {
  private anonymousSessionId: string = "";

  constructor() {
    if (typeof window !== "undefined") {
      this.initAnonymousSession();
    }
  }

  private initAnonymousSession() {
    const storageKey = "drgodly_anon_session_id";
    let sid = sessionStorage.getItem(storageKey);
    if (!sid) {
      sid = "anon_" + Math.random().toString(36).substring(2, 11) + "_" + Date.now().toString(36);
      sessionStorage.setItem(storageKey, sid);
    }
    this.anonymousSessionId = sid;
  }

  /**
   * Sanitizes payload by stripping any key that resembles sensitive health info
   */
  private sanitizePayload(payload?: SafeAnalyticsPayload): Record<string, unknown> {
    if (!payload) return {};

    const clean: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(payload)) {
      const lowerKey = k.toLowerCase();
      const isProhibited = PROHIBITED_PHI_KEYS.some((bad) => lowerKey.includes(bad));
      if (!isProhibited && v !== undefined) {
        clean[k] = v;
      }
    }
    return clean;
  }

  /**
   * Track high-level conversion events safely
   */
  public track(eventName: AnalyticsEventName, payload?: SafeAnalyticsPayload) {
    if (typeof window === "undefined") return;

    const sanitizedData = this.sanitizePayload(payload);
    const eventObject = {
      event: eventName,
      timestamp: new Date().toISOString(),
      sessionId: this.anonymousSessionId,
      path: window.location.pathname,
      ...sanitizedData,
    };

    // 1. Dispatch custom DOM event for integrations (GTM / Segment / Mixpanel)
    try {
      const customEvent = new CustomEvent("drgodly_analytics_event", { detail: eventObject });
      window.dispatchEvent(customEvent);

      // Support dataLayer if present
      if (Array.isArray((window as unknown as { dataLayer?: unknown[] }).dataLayer)) {
        (window as unknown as { dataLayer: unknown[] }).dataLayer.push(eventObject);
      }
    } catch {
      // Fail silently to never disrupt patient UX
    }

    // 2. Telemetry logging in non-production environments
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.log(`[DrGodly Analytics][${eventName}]`, eventObject);
    }
  }

  // --- Specific Reusable Patient Funnel Helpers ---

  public trackHomepageCta(source: string, label: string) {
    this.track("homepage_cta_clicked", {
      sourceLocation: source,
      buttonLabel: label,
      funnelStage: "engagement",
    });
  }

  public trackAiDemoOpened(feature: string) {
    this.track("ai_demo_opened", {
      featureName: feature,
      funnelStage: "product_exploration",
    });
  }

  public trackAiDemoStarted(feature: string) {
    this.track("ai_demo_started", {
      featureName: feature,
      funnelStage: "product_exploration",
    });
  }

  public trackHealthProfileCta(source: string) {
    this.track("health_profile_cta_clicked", {
      sourceLocation: source,
      funnelStage: "health_profile_creation",
    });
  }

  public trackUploadCta(source: string) {
    this.track("upload_cta_clicked", {
      sourceLocation: source,
      funnelStage: "activation",
    });
  }

  public trackUploadStarted(fileCount: number = 1) {
    this.track("medical_record_upload_started", {
      fileCount,
      funnelStage: "activation",
    });
  }

  public trackUploadCompleted(fileCount: number = 1) {
    this.track("medical_record_upload_completed", {
      fileCount,
      funnelStage: "activation",
    });
  }

  public trackDoctorBookingCta(source: string) {
    this.track("doctor_booking_cta_clicked", {
      sourceLocation: source,
      funnelStage: "telemedicine_conversion",
    });
  }

  public trackSignupStarted(type: "patient" | "doctor" = "patient") {
    this.track("signup_started", {
      userType: type,
      funnelStage: "registration",
    });
  }

  public trackSignupCompleted(type: "patient" | "doctor" = "patient") {
    this.track("signup_completed", {
      userType: type,
      funnelStage: "registration",
    });
  }

  // --- Specific Reusable Doctor Funnel Helpers ---

  public trackDoctorPageView() {
    this.track("doctor_page_viewed", {
      funnelStage: "product_exploration",
    });
  }

  public trackDemoCta(source: string) {
    this.track("demo_cta_clicked", {
      sourceLocation: source,
      funnelStage: "telemedicine_conversion",
    });
  }

  public trackDemoFormStarted() {
    this.track("demo_form_started", {
      funnelStage: "telemedicine_conversion",
    });
  }

  public trackDemoFormCompleted() {
    this.track("demo_form_completed", {
      funnelStage: "telemedicine_conversion",
    });
  }

  // --- Content Helpers ---

  public trackFeatureView(featureName: string) {
    this.track("feature_page_viewed", {
      featureName,
      funnelStage: "product_exploration",
    });
  }

  public trackResourceOpened(slug: string, category: string) {
    this.track("resource_opened", {
      articleSlug: slug,
      category,
      funnelStage: "engagement",
    });
  }

  public trackFaqOpened(faqId: string) {
    this.track("faq_opened", {
      faqQuestionId: faqId,
      funnelStage: "engagement",
    });
  }

  public trackVideoPlayed(videoTitle: string) {
    this.track("video_played", {
      videoIdentifier: videoTitle,
      funnelStage: "engagement",
    });
  }
}

export const analytics = new AnalyticsTracker();
