import Link from "next/link";
import Image from "next/image";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const FeaturedProjects = () => {
  const projects = [
    { 
    title: "Residential Development For Efosa Airhunmwunde Lot",
    location: "Port Antonio, Portland, Jamaica",
    category: "Residential",
    image: "/images/efosa2.jpg",
    description:
      "Expansion of the master-planned residential estate development.",
    },
    {
      title: "Rail Track Extension",
      location: "Presco Oil Plc, Benin",
      category: "Industrial",
      image: "/images/railway3.jpg",
      description: "Specialized civil engineering for industrial rail logistics and refinery infrastructure."
    },
    {
      title: "Grace Land Estate",
      location: "Agbor, Delta State",
      category: "Residential",
      image: "/images/gracelandcomplete2.jpg",
      description: "A 12-unit housing estate demonstrating excellence in master-planned communities."
    },
  ];

  return (
    <section className="bg-slate-50 py-24 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
              Our Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2">
              Signature Projects
            </h2>
          </div>
          <Link 
            href="/projects" 
            className="group flex items-center gap-2 font-semibold text-slate-900 hover:text-amber-600 transition-colors"
          >
            View Full Portfolio <ArrowForwardIcon className="group-hover:translate-x-1 transition-transform"/>
          </Link>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group flex flex-col bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/0 transition-colors z-10"/>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              {/* Content */}
              <div className="p-6 flex flex-col grow">
                <div className="mb-4">
                  <span className="text-xs font-bold text-amber-600 uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2 group-hover:text-amber-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-slate-400 text-sm font-medium">
                  <span className="w-2 h-2 rounded-full bg-amber-500 mr-2"></span>
                  {project.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;