import React from 'react';
import { 
  Business as BusinessIcon, 
  Architecture as ArchitectureIcon, 
  AssignmentTurnedIn as AssignmentIcon, 
  WaterDrop as WaterDropIcon, 
  Lightbulb as LightbulbIcon, 
  PrecisionManufacturing as EngineeringIcon 
} from '@mui/icons-material';

const services = [
  {
    title: "Civil & Building Engineering",
    description: "Expertise in roads, rail track extensions, and large-scale residential estate development[cite: 404].",
    icon: <BusinessIcon sx={{ fontSize: 32, color: '#f59e0b' }} />,
  },
  {
    title: "Architectural Design",
    description: "Conceptual formulation and detailed designs that ensure project viability and sustainability[cite: 396, 400].",
    icon: <ArchitectureIcon sx={{ fontSize: 32, color: '#f59e0b' }} />,
  },
  {
    title: "Project Management",
    description: "Comprehensive oversight from pre-investment studies to final implementation and supervision[cite: 401, 402].",
    icon: <AssignmentIcon sx={{ fontSize: 32, color: '#f59e0b' }} />,
  },
  {
    title: "Water Engineering",
    description: "Specialized services in water supply, distribution systems, and industrial storage solutions[cite: 405].",
    icon: <WaterDropIcon sx={{ fontSize: 32, color: '#f59e0b' }} />,
  },
  {
    title: "Technical Consultancy",
    description: "Providing institutional development and financial/commercial analysis for complex projects[cite: 392, 398].",
    icon: <LightbulbIcon sx={{ fontSize: 32, color: '#f59e0b' }} />,
  },
  {
    title: "Industrial Facilities",
    description: "Construction and maintenance for corporate giants like Presco Plc and leading financial institutions[cite: 410, 415].",
    icon: <EngineeringIcon sx={{ fontSize: 32, color: '#f59e0b' }} />,
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
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div 
            key={index} 
            className="group p-8 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-900 transition-all duration-300"
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
    </section>
  );
};

export default ServicesSection;