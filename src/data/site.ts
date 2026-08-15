export const site = {
  name: "Mohamed Elgaili",
  firstName: "Mohamed",
  lastName: "Elgaili",
  brand: "Elgaili",
  role: "Architectural Portfolio",
  year: "2026",
  tagline: "Architecture as Permanence.",
  manifesto:
    "I believe in the structural poetry of light, material, and form. My practice investigates the tension between monumental presence and human scale, crafting visualizations that demand clarity and absolute intent.",
  methodologyIntro:
    "The process is reductive. Non-essentials are stripped away to reveal the inherent strength of the structure. Every frame is an exercise in intent, prioritizing spatial experience over superficial decoration.",
  methodology: [
    {
      number: "01",
      title: "Contextual Analysis",
      body: "Rigorous study of site, program, and atmospheric conditions before the first render.",
    },
    {
      number: "02",
      title: "Material Honesty",
      body: "Exposing structure, texture, and light as the primary aesthetic drivers.",
    },
    {
      number: "03",
      title: "Spatial Sequencing",
      body: "Choreographing movement through contrasting volumes of light and shadow.",
    },
  ],
  about: {
    headline: "Architecture as Permanence.",
    paragraphs: [
      "PLACEHOLDER: Replace this bio with your own words. Mohamed Elgaili works across architectural visualization, spatial storytelling, and image-making that treats light as a material.",
      "PLACEHOLDER: In a world of fleeting trends, the work anchors itself in proportion, scale, and the quiet authority of well-resolved form.",
      "PLACEHOLDER: The process is rigorous — an unwavering pursuit of clarity. Images are not decoration; they are declarations of intent inscribed through composition.",
      "PLACEHOLDER: True beauty emerges from structural integrity. Shadow is treated as a material, sculpting emptiness to define space.",
    ],
    ctaHeadline: "Build with intent. Or build nothing.",
    ctaLabel: "Start a Project",
    credentials: [
      { label: "Practice", value: "Architectural Visualization" },
      { label: "Focus", value: "Residential · Civic · Commercial" },
      { label: "Based", value: "Location TBD" },
    ],
  },
  galleryIntro:
    "An exploration of structural elements, focusing on the interplay of light, shadow, and geometry. Documented through high-contrast architectural imagery from recent commissions.",
  contact: {
    intro:
      "Open for new collaborations and commissions. Fill out the form or reach out via the channels below.",
    email: "hello@elgaili.com",
    phone: "+000 000 0000",
    address: ["Studio Address TBD", "City, Country"],
    careers: "careers@elgaili.com",
  },
  socials: [
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "Archive", href: "/projects" },
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Gallery", href: "/gallery" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} as const;

export type Site = typeof site;
