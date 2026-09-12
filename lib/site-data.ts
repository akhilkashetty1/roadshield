import {
  GraduationCap,
  ClipboardCheck,
  Database,
  Megaphone,
  HeartHandshake,
  HardHat,
  Gauge,
  Map as MapIcon,
  Siren,
  FileText,
  Video,
  Repeat,
  Bike,
  Car,
  Users,
  Sparkles,
  Cpu,
  Award,
  type LucideIcon,
} from "lucide-react";

export type NavItem = { label: string; href: string };

export const NAV: NavItem[] = [
  { label: "Ride Smart", href: "/ride-smart" },
  { label: "Drive Smart", href: "/drive-smart" },
  { label: "Programs", href: "/programs" },
  { label: "Women Safety", href: "/pink-vehicle-check" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export type Service = { title: string; desc: string; icon: LucideIcon };

export const RIDE_SERVICES: Service[] = [
  {
    title: "Defensive Riding Training",
    desc: "Developing hazard awareness, anticipation, risk perception and safer decision-making — classroom plus practical, on-ground demos.",
    icon: GraduationCap,
  },
  {
    title: "Vehicle Assessments",
    desc: "Digital data collection and analysis with real-time tracking and follow-up to 100% compliance.",
    icon: ClipboardCheck,
  },
  {
    title: "Vehicle Database & Data",
    desc: "Live tracking of licence and insurance validity, with renewals followed up until completion.",
    icon: Database,
  },
  {
    title: "Communications",
    desc: "Topic-specific creatives, video bytes and mailers that keep safety front of mind all year.",
    icon: Megaphone,
  },
  {
    title: "Pink Vehicle Check",
    desc: "What every woman should know about her two-wheeler — hands-on maintenance and safety.",
    icon: HeartHandshake,
  },
  {
    title: "Safety Gear",
    desc: "Helmets, jackets, gloves and knee & elbow guards — fitted and used in every training.",
    icon: HardHat,
  },
];

export const DRIVE_SERVICES: Service[] = [
  {
    title: "Defensive Driving Training",
    desc: "Strengthening awareness, anticipation, space management and responsible driving behaviour — classroom, practical demos and driver assessment.",
    icon: GraduationCap,
  },
  {
    title: "Vehicle Assessments",
    desc: "Digital data collection and analysis, tracked in real time and followed up to 100% compliance.",
    icon: ClipboardCheck,
  },
  {
    title: "Fleet Database & Data",
    desc: "Real-time D/L and insurance validity tracking. We handle renewals end-to-end.",
    icon: Database,
  },
  {
    title: "Communications",
    desc: "A calendar of road-safety topics delivered as creatives, video bytes and mailers.",
    icon: Megaphone,
  },
  {
    title: "Driver Assessment",
    desc: "Objective, repeatable scoring of driver skill to target training where it matters most.",
    icon: Gauge,
  },
  {
    title: "Pink Vehicle Check",
    desc: "What every woman should know about her car — practical workshops and safety essentials.",
    icon: HeartHandshake,
  },
];

export const GEAR: string[] = [
  "Helmets",
  "Jackets",
  "Gloves",
  "Knee & elbow guards",
];

export type Program = {
  title: string;
  desc: string;
  points: string[];
  icon: LucideIcon;
};

export const PROGRAMS: Program[] = [
  {
    title: "Annual Road Safety Map",
    desc: "A charter roadmap of the core defensive-driving and road-safety activities for the year.",
    points: [
      "Identify, plot and execute trainings & assessments",
      "A clear calendar every stakeholder can follow",
      "Activities mapped across the full calendar year",
    ],
    icon: MapIcon,
  },
  {
    title: "Accident Management",
    desc: "From the roadside to the root cause — a complete response when things go wrong.",
    points: [
      "Roadside assistance & on-site first-aid",
      "Real-time accident tracking",
      "Investigation, RCA, analysis & action plan",
      "Accident counselling",
    ],
    icon: Siren,
  },
  {
    title: "Policy Frameworks",
    desc: "The documented backbone that makes safety repeatable across a whole fleet.",
    points: [
      "Fleet safety policies",
      "Accident reporting & investigation frameworks",
    ],
    icon: FileText,
  },
  {
    title: "Video Bytes",
    desc: "A growing library of bite-size, shareable safety content for drivers and riders.",
    points: [
      "Topic-specific short videos",
      "Built for mailers and social",
    ],
    icon: Video,
  },
];

export const PINK_CHECKLIST: string[] = [
  "How to change a wheel",
  "How to check air pressure & tyre tread",
  "Oil level & colour — when to change",
  "Coolant level — when to top up",
  "Parking hacks",
  "Driving hacks",
  "Safety tips for women drivers",
  "What to always carry in your car or bike",
];

export type AAA = {
  letter: string;
  title: string;
  desc: string;
  tags: string[];
};

export const AAA_STEPS: AAA[] = [
  {
    letter: "A.",
    title: "Anticipate",
    desc: "Build awareness and skill before the road tests it — training, communications and the annual safety map.",
    tags: ["Defensive Training", "Communications", "Safety Map"],
  },
  {
    letter: "A.",
    title: "Adapt",
    desc: "Measure, track and stay compliant — assessments, the fleet database, renewals and policy frameworks.",
    tags: ["Assessments", "Fleet Data", "Policies"],
  },
  {
    letter: "A.",
    title: "Arrive",
    desc: "Be there when it counts — accident management, roadside first-aid, counselling and women safety.",
    tags: ["Accident Mgmt", "Roadside Aid", "Women Safety"],
  },
];

export type Stat = { value: number; suffix?: string; label: string; note: string };

export const STATS: Stat[] = [
  { value: 12500, label: "Drivers & riders trained", note: "Sample" },
  { value: 340, label: "Fleets under coverage", note: "Sample" },
  { value: 100, suffix: "%", label: "Assessment follow-up", note: "From your brief" },
  { value: 24, suffix: "/7", label: "Accident support", note: "Roadside aid" },
];

export type Founder = {
  name: string;
  role: string;
  photo: string;
  photoPosition?: string;
  title?: string;
  bio?: string[];
  expertise?: string[];
};

/* ---------------------------------------------------------------
   Official positioning — verbatim from the RoadShield intro document.
   Edit here and it updates everywhere on the site.
---------------------------------------------------------------- */

export const WHO_WE_ARE = [
  "RoadShield, a division of CVS Motors, is dedicated to advancing road safety for two-wheeler and four-wheeler users.",
  "Our core area of focus is Defensive Riding and Defensive Driving, with an emphasis on developing safer mindsets, responsible road behaviour, and practical decision-making skills.",
  "We work with organizations to move beyond basic road-safety compliance and build a world-class road-safety culture — one where every journey is safer, every rider and driver is empowered to make the right choice, and safety becomes a deeply embedded personal and organizational value.",
];

export const VISION = {
  leadIn: "To create a world where road safety is",
  emphasis: "not just a rule to follow, but a value to live by.",
  support:
    "We envision safer roads powered by aware, skilled, responsible, and empowered riders and drivers, supported by organizations that place safety at the heart of their culture.",
};

export const MISSION_STATEMENT =
  "To help organizations reduce road risk and inspire lasting behavioural change by delivering innovative, engaging, and technology-enabled road-safety solutions focused on defensive riding, defensive driving, and safety leadership.";

export const STAND_FOR = {
  lead: "RoadShield challenges conventional thinking about road safety.",
  body: "We believe meaningful safety transformation happens when people understand the risk, recognize their responsibility, develop the right skills, and choose safer behaviour consistently.",
  close:
    "Through innovation, creative engagement, technology, and strong leadership, we help organizations continuously raise their road-safety benchmark.",
};

export type FocusArea = { title: string; desc: string; icon: LucideIcon };

export const CORE_FOCUS: FocusArea[] = [
  {
    title: "Defensive Riding",
    desc: "Developing hazard awareness, anticipation, risk perception, and safer decision-making among two-wheeler riders.",
    icon: Bike,
  },
  {
    title: "Defensive Driving",
    desc: "Strengthening awareness, anticipation, space management, and responsible driving behaviour among four-wheeler drivers.",
    icon: Car,
  },
  {
    title: "Behavioural Change",
    desc: "Transforming road-safety knowledge into consistent, measurable behaviour.",
    icon: Repeat,
  },
  {
    title: "Safety Culture",
    desc: "Embedding road safety into organizational values, systems, leadership, and everyday practices.",
    icon: Users,
  },
  {
    title: "Creative Engagement",
    desc: "Making safety communication relevant, memorable, and action-oriented.",
    icon: Sparkles,
  },
  {
    title: "Technology & Innovation",
    desc: "Leveraging modern tools and technology to improve learning, engagement, monitoring, and road-safety outcomes.",
    icon: Cpu,
  },
  {
    title: "Safety Leadership",
    desc: "Enabling leaders and managers to become role models and champions of road safety.",
    icon: Award,
  },
];

export const APPROACH_STEPS = [
  "Educate",
  "Engage",
  "Empower",
  "Influence",
  "Measure",
  "Improve",
];

export const APPROACH_NOTE = {
  lead: "We don't believe that a one-time training session creates a safety culture.",
  body: "RoadShield takes a continuous approach that combines knowledge, practical skills, behavioural interventions, leadership involvement, technology, and measurement to create sustainable change.",
};

export const CLOSING_LINES = [
  { subject: "Every rider", predicate: "has a choice." },
  { subject: "Every driver", predicate: "has a responsibility." },
  { subject: "Every organization", predicate: "has an opportunity to make a difference." },
];

export const FOUNDERS: Founder[] = [
  {
    name: "Anu Elisha",
    role: "Co-Founder, RoadShield",
    title: "Corporate Road Safety Strategist & Change Leader",
    photo: "/founders/anu.jpg",
    photoPosition: "center 22%",
    bio: [
      "Anu Elisha is a strategic and results-driven Safety Leader with 20 years of experience in the pharmaceutical industry, with deep expertise in Corporate Road Safety and a proven ability to transform road-safety awareness into a strong, visible, and sustainable organizational culture.",
      "Anu is recognized for raising the bar on corporate road safety through bold thinking, innovative initiatives, and high-impact engagement programs. She is passionate about moving road safety beyond traditional compliance and awareness by creating a culture where safe riding and driving become personal commitments and everyday behaviours.",
      "Anu has a strong track record of conceptualizing and aggressively driving rider-safety campaigns covering both two-wheelers and four-wheelers, with a sharp focus on risk perception, defensive riding/driving, responsible mobility, and prevention of road accidents.",
      "Anu is known for bringing a creative and unconventional approach to road safety — turning a traditionally serious subject into compelling campaigns and experiences that capture attention, generate interest, and drive active employee participation and behavioural change.",
    ],
    expertise: [
      "Corporate Road Safety Strategy & Leadership",
      "Two-Wheeler & Four-Wheeler Safety",
      "Rider & Driver Safety Campaigns",
      "Road Safety Culture Transformation",
      "On-Road Visibility & Rider Protection",
      "Vehicle Ergonomics & Human Factors",
      "Road Risk Identification & Mitigation",
      "Creative & Innovative Safety Initiatives",
      "Continuous Improvement & Safety Benchmarking",
      "Stakeholder Engagement & Safety Ownership",
    ],
  },
  {
    name: "Mayur Chandrashekar",
    role: "Co-Founder, RoadShield",
    photo: "/founders/mayur.jpg",
    photoPosition: "center 15%",
  },
];
