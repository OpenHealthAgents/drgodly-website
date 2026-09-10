# DrGodly Visual Design System Specification

## 1. Brand Personality & Design Philosophy

The DrGodly visual language communicates a distinct synthesis of **clinical precision**, **advanced intelligence**, and **calm human empathy**. It intentionally rejects the tropes of generic crypto/SaaS (excessive glassmorphism, hyperactive neon gradients, toy-like rounded bubbly buttons) in favor of the clean, authoritative, and quiet confidence of medical-grade software.

| Attribute | Visual Expression | Negative Space / What We Avoid |
| :--- | :--- | :--- |
| **Intelligent** | Data-dense tables, live citations, structured graphs, clean monospace biomarkers | No gimmicky "AI magic dust", sparkles without context, or neon purple glows |
| **Human** | Warm neutral undertones, generous padding, natural conversational phrasing | No cold sterile hospital gray, no hyper-mechanistic robotics imagery |
| **Trustworthy** | Precise typography, verifiable audit timestamps, cryptographic indicators | No ambiguous marketing claims or hidden disclaimers |
| **Calm** | Soft slate tones, low-saturation teal accents, spacious card layouts | No high-contrast alarms except for true emergency red flags |
| **Clinical** | Standardized medical coding (ICD-10, SNOMED, CPT, FHIR R4), lab reference ranges | No consumer symptom-checker trivia aesthetics |
| **Premium** | Apple-grade micro-borders (`border-clinical-200`), layered subtle shadows | No heavy drop shadows, no intrusive borders |
| **Secure** | SOC2 Type II badges, 256-bit AES encryption chips, zero-retention callouts | No generic padlock illustrations |

---

## 2. Typography System

The typography is built around **Geist Sans** (a modern, neutral geometric neo-grotesque) paired with **Geist Mono** for clinical codes, biomarkers, and timestamps.

### 2.1 Type Hierarchy

```
Headline 1 (Hero)      : 48px - 64px (3rem - 4rem)       | font-bold, tracking-tight, leading-[1.1]
Headline 2 (Sections)  : 32px - 40px (2rem - 2.5rem)     | font-bold, tracking-tight, leading-tight
Headline 3 (Cards/Mod) : 20px - 24px (1.25rem - 1.5rem)  | font-bold, tracking-normal, leading-snug
Headline 4 (Subhead)   : 16px - 18px (1rem - 1.125rem)   | font-semibold, text-clinical-900
Body Large (Lead)      : 18px - 20px (1.125rem - 1.25rem)| font-normal, text-clinical-600, leading-relaxed
Body Base (Default)    : 14px - 16px (0.875rem - 1rem)   | font-normal, text-clinical-700, leading-normal
Body Small (Labels)    : 12px - 13px (0.75rem - 0.8125rem)| font-medium, text-clinical-500
Micro / Eyebrow (Caps) : 10px - 11px (0.625rem - 0.6875rem)| font-bold, uppercase, tracking-wider
Clinical Data / Mono   : 11px - 13px (Geist Mono)        | font-mono, tabular-nums (e.g. 3.4 mEq/L, G44.209)
```

### 2.2 Typography Rules
- **Confident Headlines**: Hero headlines convey unequivocal value propositions without jargon (*"Healthcare that knows your story."*).
- **Tabular Numerics**: All clinical lab values, vitals, ICD-10 codes, and timestamps use `font-mono` with tabular figures so decimal points align vertically.
- **Eyebrow Tags**: Subsections are preceded by a restrained uppercase eyebrow in `text-vital-700` or `text-clinical-400` (`CAPABILITY 01 • INTAKE`).

---

## 3. Color System: Restrained Clinical-AI Palette

DrGodly employs a **purpose-driven color hierarchy** where color is used strictly to indicate state, clinical severity, and hierarchy rather than visual decoration.

### 3.1 Primary Tonal Range (Deep Clinical Navy / Slate)
Provides authority, depth, and foundation:
- `clinical-950` (`#020617`): Top-level contrast, primary dark cards, video consult background
- `clinical-900` (`#0f172a`): Primary button background, header bars, hero contrast elements
- `clinical-800` (`#1e293b`): Inner dark cards, borders on dark mode elements
- `clinical-700` (`#334155`): Secondary dark copy
- `clinical-600` (`#475569`): Standard explanatory body text
- `clinical-500` (`#64748b`): Secondary labels, inactive icons
- `clinical-400` (`#94a3b8`): Placeholder text, subtle borders
- `clinical-200` (`#e2e8f0`): Standard light card border
- `clinical-100` (`#f1f5f9`): Subtle secondary button fill, table row striping
- `clinical-50` (`#f8fafc`): Page canvas background, light section alternating background

### 3.2 Clinical Vital Teal (Healthcare & Living Intelligence)
Represents health vitality, positive outcomes, and primary call-to-actions:
- `vital-600` (`#0d9488`): Primary brand accent, primary CTA buttons, active timeline milestones
- `vital-700` (`#0f766e`): Hover state for vital buttons, high-contrast text on light backgrounds
- `vital-500` (`#14b8a6`): Interactive toggles, focus rings
- `vital-100` (`#ccfbf1`): Text selection highlight, active tab background
- `vital-50` (`#f0fdfa`): Badge backgrounds, alert containers

### 3.3 Intelligence Indigo (Clinical Synthesis & CDS)
Designates AI-assisted reasoning, guideline citations, and data synthesis:
- `intel-600` (`#4f46e5`): Guideline references, peer-reviewed citations, differential diagnosis bars
- `intel-100` (`#e0e7ff`): CDS badge fill, guideline pill fill
- `intel-50` (`#eef2ff`): Clinical copilot panel backgrounds

### 3.4 Semantic Clinical Severity Tokens
- **Critical / Red-Flag**: `red-600` (`#dc2626`) / `red-50` (`#fef2f2`) — Reserved exclusively for emergency alerts (e.g. 911 chest pain warning, anaphylaxis allergy badge).
- **Attention / Actionable**: `amber-600` (`#d97706`) / `amber-50` (`#fffbeb`) — Clinical drug-nutrient interactions, borderline lab values (e.g. Potassium 3.3 mEq/L).
- **Verified / Optimal**: `emerald-600` (`#059669`) / `emerald-50` (`#ecfdf5`) — Normal lab results, verified physician e-signatures, encryption lock states.

---

## 4. UI Architecture & Elevation

### 4.1 Cards & Containers
- **Corner Radii**: Standard cards use `rounded-2xl` (16px) or `rounded-3xl` (24px) for hero containers. Inner pills and input tags use `rounded-xl` (12px) or `rounded-full` for badges.
- **Borders**: Hairline borders `border border-clinical-200` (80% opacity) give clean architectural definition across high-DPI displays.
- **Shadows**:
  - `shadow-clinical-sm`: `0 1px 3px 0 rgba(15, 23, 42, 0.05)`
  - `shadow-clinical-md`: `0 4px 6px -1px rgba(15, 23, 42, 0.06)`
  - `shadow-clinical-lg`: `0 10px 25px -3px rgba(15, 23, 42, 0.07)`
  - `shadow-clinical-glow`: `0 0 40px -10px rgba(13, 148, 136, 0.15)`

### 4.2 Data Visualizations
- All charts (such as the 2-year HbA1c trajectory in `SimulatedAiNativeEmr`) prioritize clean line weights, reference zone bands (green normal vs amber borderline), and discrete interactive hover points over decorative 3D effects.

---

## 5. Meaningful Animations & State Transitions

Animations are functional and communicate state changes rather than decorative flair:

1. **Medical Record $\rightarrow$ Structured Health Data**:
   - `animate-document-scan`: Linear laser line sweeps downward across uploaded laboratory PDFs during OCR ingestion.
   - Stage transitions fade in step-by-step (`Upload` $\rightarrow$ `Extract` $\rightarrow$ `Review` $\rightarrow$ `Confirm`).
2. **Symptoms $\rightarrow$ AI Intake**:
   - Dynamic typing indicators (`typing-dot-1`, `typing-dot-2`, `typing-dot-3`) simulate real-time clinical reasoning before structured questions appear.
   - Context chips animate into the top status bar as new facts are confirmed.
3. **Health History $\rightarrow$ Pre-Visit Report**:
   - 60-second summary toggle transitions smoothly between quick bullet points and full 9-section clinical executive synthesis.
4. **Consultation $\rightarrow$ SOAP Note**:
   - Live ambient audio indicators (pulsing red live recording dot and real-time caption updates) visually demonstrate background charting.
   - Copy and electronic signature buttons trigger instantaneous feedback state with a checkmark.

---

## 6. Responsive & Mobile-First Strategy

DrGodly treats mobile devices as the primary patient access point:
- **Mobile Navigation**: Sticky header with high-contrast burger menu opening a full-screen drawer with quick-action CTAs (*"Sign In"*, *"Get Started"*).
- **Horizontal Scroll Containers**: Capability tabs and comparison pills on mobile use smooth touch scrolling with invisible scrollbars (`no-scrollbar`) so interfaces never feel truncated.
- **Touch Targets**: All buttons, toggle chips, and accordion headers maintain a minimum touch target of 44x44px with active tactile press feedback (`active:scale-[0.98]`).
- **Flexible Grid Breakpoints**:
  - `sm` (640px): 1-column to 2-column transition for summary cards
  - `md` (768px): Dual-pane layout for consultation video & copilot drawer
  - `lg` (1024px): 4-column capability architecture grid
  - `xl` (1280px): Maximum constrained container for widescreen clinical workstations
