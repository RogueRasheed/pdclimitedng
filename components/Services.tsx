import React from 'react';
import { 
  Business, 
  Architecture, 
  ContentPaste, 
  WaterDrop, 
  Lightbulb, 
  LocalShipping 
} from '@mui/icons-material'; // Or your preferred icon library

const services = [
  {
    title: "Civil & Building Engineering",
    description: "Expertise in roads, rail track extensions, and large-scale residential estate development.",
    icon: <Business className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Architectural Design",
    description: "Conceptual formulation and detailed designs that ensure project viability and sustainability.",
    icon: <Architecture className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Project Management",
    description: "Comprehensive oversight from pre-investment studies to final implementation and supervision.",
    icon: <ContentPaste className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Water Engineering",
    description: "Specialized services in water supply, distribution systems, and industrial storage solutions.",
    icon: <WaterDrop className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Technical Consultancy",
    description: "Providing institutional development and financial/commercial analysis for complex projects.",
    icon: <Lightbulb className="w-8 h-8 text-amber-500" />,
  },
  {
    title: "Industrial Facilities",
    description: "Construction and maintenance for corporate giants like Presco Plc and leading financial institutions.",
    icon: <LocalShipping className="w-8 h-8 text-amber-500" />,
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-white py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-amber-600 font-bold uppercase tracking-widest text-sm mb-4">
          Our Expertise
        </h2>
        <p className="text-4xl md:text-5xl font-extrabold text-slate-900">
          World-Class Solutions <br /> For Complex Challenges
        </p>
        <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
          PDC offers a systematic approach to project design and development, 
          leveraging over 30 years of experience in the Nigerian construction landscape.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-900 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="mb-6 inline-block p-3 bg-white rounded-lg shadow-sm group-hover:bg-slate-800 transition-colors">
              {service.icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-white transition-colors">
              {service.title}
            </h3>
            <p className="text-slate-600 group-hover:text-slate-400 leading-relaxed transition-colors">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center">
        <a 
          href="/services" 
          className="inline-flex items-center gap-2 font-bold text-slate-900 border-b-2 border-amber-500 pb-1 hover:text-amber-600 transition-colors"
        >
          Explore Detailed Services <span>&rarr;</span>
        </a>
      </div>
    </section>
  );
};

export default ServicesSection;