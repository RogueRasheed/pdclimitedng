// app/data/projects.ts

export type ProjectCategory =
  | "Industrial"
  | "Institutional"
  | "Hospitality"
  | "Residential"
  | "Commercial"
  | "Banking"
  | "Government";

export interface Project {
  id: number;
  title: string;
  location: string;
  category: ProjectCategory;
  images: string[];
  description: string;
  featured?: boolean;
}

export const projectsdata: Project[] = [
  // =========================
  // INDUSTRIAL
  // =========================
  {
    id: 1,
    title: "Rail Track Extension (Parts 1 & 2)",
    location: "Presco Plc, Obaretin, Benin City",
    category: "Industrial",
    images: [
      "/images/railway.jpg",
      "/images/railway2.jpg",
      "/images/railway3.jpg",
    ],
    description:
      "Civil works for refinery rail infrastructure expansion improving logistics capacity.",
    featured: true,
  },
  {
    id: 2,
    title: "Oil Mill Extension",
    location: "Presco Plc, Benin City",
    category: "Industrial",
    images: [
      "/images/oilmill.jpg",
      "/images/oilmill2.jpg",
    ],
    description:
      "Heavy structural foundations and civil engineering works for mill expansion.",
  },
  {
    id: 3,
    title: "Bio Gas Project Civil Works",
    location: "Presco Plc, Benin City",
    category: "Industrial",
    images: ["/images/biogas.jpg",
        "/images/biogas2.jpg",
        "/images/biogas3.jpg"
    ],
    description:
      "Civil engineering works for renewable energy bio-gas infrastructure.",
  },

  // =========================
  // INSTITUTIONAL / GOVERNMENT
  // =========================
  {
    id: 4,
    title: "Forward Operating Base (FOB) Ehor",
    location: "Ehor, Edo State",
    category: "Institutional",
    images: [
      "/images/fob.jpg",
      "/images/fob2.jpg",
      "/images/fob3.jpg",
      "/images/fob4.jpg",
      "/images/fob5.jpg",
      "/images/fob6.jpg",
      "/images/fob7.jpg",
      "/images/fob8.jpg",
      "/images/fob9.jpg",
      "/images/fob10.jpg",
      "/images/fob11.jpg",
      "/images/fob12.jpg",
      "/images/fob13.jpg",
      "/images/fob14.jpg",
      "/images/fob15.jpg",
      "/images/fob16.jpg",
      "/images/fob17.jpg",
      "/images/fob18.jpg",
      "/images/fob19.jpg",
      "/images/fob20.jpg",
      "/images/fob21.jpg",
      "/images/fob22.jpg",
      "/images/fob23.jpg",
      "/images/fob24.jpg",
      "/images/fob25.jpg",
      "/images/fob26.jpg",
      "/images/fob27.jpg",
    ],
    description:
      "Strategic military infrastructure project for the Nigerian Army.",
    featured: true,
  },
  {
    id: 5,
    title: "Benin Medical Care Hospital (LAPO)",
    location: "Benin City, Edo State",
    category: "Institutional",
    images: [
      "/images/bmc.jpg",
      "/images/bmc2.jpg",
    ],
    description:
      "Full hospital development project delivering modern healthcare facilities.",
    featured: true,
  },
  {
    id: 6,
    title: "NYSC Camp Kitchen & Dining Complex",
    location: "Okada, Edo State",
    category: "Government",
    images: ["/images/nysc.jpg",
        "/images/nysc2.jpg",
        "/images/nysccomplete.jpg"
    ],
    description:
      "Construction of institutional kitchen and dining facilities for NYSC camp.",
  },

  // =========================
  // HOSPITALITY
  // =========================
  {
    id: 7,
    title: "El-Green Hotels Ltd",
    location: "Asaba, Delta State",
    category: "Hospitality",
    images: [
      "/images/elgreen.jpg",
      "/images/elgreen2.jpg",
      "/images/elgreen3.jpg",
      "/images/elgreen4.jpg"
      
    ],
    description:
      "47-room luxury hotel development with high-end finishes.",
    featured: true,
  },

  // =========================
  // RESIDENTIAL
  // =========================
  {
    id: 8,
    title: "Grace Land Estate",
    location: "Agbor, Delta State",
    category: "Residential",
    images: [
      "/images/grace.jpg",
      "/images/grace2.jpg",
      "/images/gracelandcomplete2.jpg"
    ],
    description:
      "12-unit master-planned residential estate development.",
  },
  {
    id: 11,
    title: "Residential Development For Efosa Airhunmwunde Lot",
    location: "Port Antonio, Portland, Jamaica",
    category: "Residential",
    images: [
      "/images/efosa3.jpg",
      "/images/efosa.jpg",
      "/images/efosa2.jpg"
    ],
    description:
      "Expansion of the master-planned residential estate development.",
  },{
    id: 12,
    title: "Residential Estate Development For Forclass Nig. Ltd",
    location: "Rosetteenville, South Africa",
    category: "Residential",
    images: [
      "/images/forclass.jpg",
      "/images/forclass2.jpg",
      "/images/forclass3.jpg",
      "/images/forclass4.jpg"
    ],
    description:
      "Expansion of the master-planned residential estate development.",
  },

  // =========================
  // BANKING / COMMERCIAL
  // =========================
  {
    id: 9,
    title: "UBA Branch Developments",
    location: "Edo & Delta States",
    category: "Banking",
    images: ["/images/uba.jpg", 
        "/images/uba2.jpg",
        "/images/uba3.jpg",
        "/images/uba4.jpg"],
    description:
      "Multiple branch construction and upgrade projects for United Bank for Africa.",
  },
  {
    id: 10,
    title: "Oceanic Bank Branch Developments",
    location: "Edo, Delta & Enugu",
    category: "Banking",
    images: ["/images/oceanic.jpg",
        "/images/oceanic2.jpg",
        "/images/oceanic3.jpg",
        "/images/oceanic4.jpg",
        "/images/oceanic5.jpg",
        "/images/oceanic6.jpg"
    ],
    description:
      "Design and construction of multiple commercial banking offices.",
  },
];
