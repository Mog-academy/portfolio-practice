export type GalleryGroup = {
  id: string;
  label: string;
  images: string[];
};

export type Project = {
  slug: string;
  title: string;
  index: string;
  year: string;
  category: string;
  location: string;
  featured: boolean;
  invertTile?: boolean;
  span: "wide" | "narrow";
  cover: string;
  coverType: "image" | "video";
  description: string;
  gallery: GalleryGroup[];
  videos?: { src: string; label: string }[];
};

export const projects: Project[] = [
  {
    slug: "fortune-bay-residences",
    title: "Fortune Bay Residences",
    index: "01",
    year: "2024",
    category: "Residential",
    location: "Coastal",
    featured: true,
    span: "wide",
    cover: "/media/fortune-bay/cover.png",
    coverType: "image",
    description:
      "PLACEHOLDER: Residential visualization exploring waterfront massing, material rhythm, and quiet luxury through carefully staged daylight.",
    gallery: [
      {
        id: "stills",
        label: "Stills",
        images: ["/media/fortune-bay/cover.png", "/media/fortune-bay/02.png"],
      },
    ],
  },
  {
    slug: "skooni",
    title: "Skooni",
    index: "02",
    year: "2024",
    category: "Residential",
    location: "Urban",
    featured: true,
    span: "narrow",
    cover: "/media/skooni/cover.png",
    coverType: "image",
    description:
      "PLACEHOLDER: A multi-condition exterior and interior study — day, evening, and night — mapping how facade systems hold light across the diurnal cycle.",
    gallery: [
      {
        id: "day",
        label: "Day",
        images: [
          "/media/skooni/cover.png",
          "/media/skooni/day/D5_Scene 1 5_20240130_163353.png",
          "/media/skooni/day/D5_Scene 2 3_20240130_163052.png",
          "/media/skooni/day/D5_Scene 3 3_20240130_162927.png",
          "/media/skooni/day/D5_Scene 4 3_20240130_162755.png",
          "/media/skooni/day/D5_Scene 5 3_20240130_162618.png",
          "/media/skooni/day/D5_Scene 6 3_20240130_162438.png",
          "/media/skooni/day/D5_Scene 10 5_20240130_161809.png",
          "/media/skooni/day/D5_Scene 11 3_20240130_161642.png",
        ],
      },
      {
        id: "evening",
        label: "Evening",
        images: [
          "/media/skooni/evening/1.png",
          "/media/skooni/evening/2.png",
          "/media/skooni/evening/3.png",
          "/media/skooni/evening/4.png",
          "/media/skooni/evening/5.png",
          "/media/skooni/evening/6.png",
        ],
      },
      {
        id: "night",
        label: "Night",
        images: [
          "/media/skooni/night/Facade.png",
          "/media/skooni/night/D5_Scene 3 4_20240130_172322.png",
          "/media/skooni/night/D5_Scene 4 4_20240130_172149.png",
          "/media/skooni/night/D5_Scene 5 5_20240130_172009.png",
          "/media/skooni/night/D5_Scene 6 5_20240130_171824.png",
          "/media/skooni/night/D5_Scene 7 5_20240130_171637.png",
        ],
      },
    ],
  },
  {
    slug: "ngo-complex",
    title: "NGO Complex",
    index: "03",
    year: "2025",
    category: "Civic",
    location: "Campus",
    featured: true,
    span: "narrow",
    cover: "/media/ngo/cover.jpg",
    coverType: "image",
    description:
      "PLACEHOLDER: Civic campus walkthrough sequence — six shots documenting approach, threshold, and interior volume for an institutional complex.",
    gallery: [
      {
        id: "cover",
        label: "Cover",
        images: ["/media/ngo/cover.jpg"],
      },
    ],
    videos: [
      { src: "/media/ngo/Shot 1 1.mp4", label: "Shot 01" },
      { src: "/media/ngo/Shot 2 2.mp4", label: "Shot 02" },
      { src: "/media/ngo/Shot 3 1.mp4", label: "Shot 03" },
      { src: "/media/ngo/Shot 4 1.mp4", label: "Shot 04" },
      { src: "/media/ngo/Shot 5 1.mp4", label: "Shot 05" },
      { src: "/media/ngo/Shot 6 1.mp4", label: "Shot 06" },
    ],
  },
  {
    slug: "tasees-real-estate",
    title: "Tasees Real Estate",
    index: "04",
    year: "2025",
    category: "Commercial",
    location: "Development",
    featured: true,
    invertTile: true,
    span: "wide",
    cover: "/media/tasees/cover.mp4",
    coverType: "video",
    description:
      "PLACEHOLDER: Promotional cover sequence for a real-estate development — atmosphere first, brand second.",
    gallery: [],
    videos: [{ src: "/media/tasees/cover.mp4", label: "Cover Sequence" }],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects() {
  return projects.filter((p) => p.featured);
}

export const categories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
