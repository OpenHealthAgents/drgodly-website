export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  category: "patient" | "doctor" | "organization";
  avatarInitials: string;
  highlight: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "dr-vance",
    quote: "DrGodly fundamentally restored my joy in practicing medicine. In my 18 years as an internist, I spent half of every patient visit frantically reading through old PDF charts. Now, the AI has the pre-visit briefing ready in 45 seconds, the SOAP note is 95% complete when the call ends, and I can look my patient in the eye the entire time.",
    author: "Dr. Marcus Vance, MD",
    role: "Attending Physician & Clinical Assistant Professor",
    organization: "Pacific Northwest Health Partners",
    category: "doctor",
    avatarInitials: "MV",
    highlight: "Saves 2.5 hours of documentation every single day"
  },
  {
    id: "patient-elena",
    quote: "I've dealt with Hashimoto's and recurrent migraines for 6 years. Every new doctor made me fill out the exact same 15-page packet and never read it. With DrGodly, I uploaded my lab records once. During my telehealth call, the doctor already knew my exact thyroid medication history and connected the dots with my sleep issues immediately. It felt like healthcare finally had a memory.",
    author: "Elena Vasquez",
    role: "Chronic Care Patient & Architect",
    organization: "San Francisco, CA",
    category: "patient",
    avatarInitials: "EV",
    highlight: "Never had to repeat my 6-year medical story again"
  },
  {
    id: "dr-chen",
    quote: "As Chief Medical Officer of a 40-provider outpatient group, burnout from EHR charting was driving our best doctors to early retirement. DrGodly reduced our average chart-close time from 16 minutes to under 3 minutes per encounter, with zero compliance compromise.",
    author: "Dr. Alistair Chen, MD, FACP",
    role: "Chief Medical Officer",
    organization: "Summit Regional Health Network",
    category: "organization",
    avatarInitials: "AC",
    highlight: "Average chart-close time dropped by 81%"
  },
  {
    id: "patient-david",
    quote: "I asked a quick question when I woke up with chest tightness after a marathon. Instead of generic internet panic, DrGodly checked my previous sports physicals and ECG records, flagged that it was likely intercostal strain, but had a telehealth physician on screen with me in 10 minutes to verify. That balance of AI speed and real doctor safety is unbelievable.",
    author: "David Thorne",
    role: "Marathoner & Software Engineer",
    organization: "Austin, TX",
    category: "patient",
    avatarInitials: "DT",
    highlight: "AI speed with real human doctor safety"
  },
  {
    id: "dr-keller",
    quote: "The conversational EMR search alone is worth its weight in gold. Asking 'Has this patient taken macrolides in the past 3 years?' and getting an instant verified timeline with document citations saves me 10 minutes of blind scanning per complex consultation.",
    author: "Dr. Samantha Keller, MD",
    role: "Pediatric & Family Medicine Specialist",
    organization: "Midwest Family Care",
    category: "doctor",
    avatarInitials: "SK",
    highlight: "Conversational EMR search eliminates manual record digging"
  }
];
