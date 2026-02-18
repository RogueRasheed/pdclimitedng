"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { 
  FilterList as FilterIcon, 
  Engineering as IndustrialIcon, 
  Home as ResidentialIcon, 
  AccountBalance as InstitutionalIcon, 
  Hotel as HospitalityIcon,
  Business as CommercialIcon,
  CheckCircle as CompletedIcon,
  LocationOn as LocationIcon,
  Close as CloseIcon,
  ArrowBackIosNew as PrevIcon,
  ArrowForwardIos as NextIcon
} from '@mui/icons-material';
import { projectsdata } from "@/app/data/projects";


// Project Data with multiple images per project

const categories = [
  "All",
  ...Array.from(new Set(projectsdata.map(p => p.category)))
];


const ProjectsPage = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projectsdata[0] | null>(null);
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // SIDE EFFECT: Handle Scroll Lock safely
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Cleanup when component unmounts
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [selectedProject]);

  const filteredProjects =
  filter === "All"
    ? projectsdata
    : projectsdata.filter(p => p.category === filter);

const sortedProjects = [
  ...filteredProjects.filter(p => p.featured),
  ...filteredProjects.filter(p => !p.featured),
];


  const openGallery = (project: typeof projectsdata[0]) => {
    setSelectedProject(project);
    setCurrentImgIndex(0);
  };

  const closeGallery = () => {
    setSelectedProject(null);
  };

  const nextImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev + 1) % selectedProject.images.length);
    }
  };

  const prevImg = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedProject) {
      setCurrentImgIndex((prev) => (prev - 1 + selectedProject.images.length) % selectedProject.images.length);
    }
  };

  return (
    <main className="pt-24 pb-32 bg-white">
      {/* 1. Header */}
      <section className="px-6 lg:px-12 mb-16 max-w-7xl mx-auto">
        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Portfolio</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-2 tracking-tight">Engineering the Future</h1>
        <p className="text-slate-500 mt-4 max-w-xl">Explore our gallery of completed works across Nigeria.</p>
      </section>

      {/* 2. Filter Bar */}
      <section className="px-6 lg:px-12 mb-12 sticky top-20 z-30 bg-white/90 backdrop-blur-md py-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-xs font-bold transition-all duration-300 border ${
                filter === cat ? "bg-slate-900 text-white border-slate-900 shadow-xl" : "bg-white text-slate-500 border-slate-200 hover:border-amber-500"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* 3. Project Gallery Grid */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer" onClick={() => openGallery(project)}>
            <div className="relative h-[400px] w-full overflow-hidden rounded-2xl mb-6 shadow-sm border border-slate-100">
              <Image src={project.images[0]} alt={project.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-slate-900/60 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                 <span className="bg-white text-slate-900 px-6 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-xl">View {project.images.length} Photos</span>
              </div>
            </div>
            <div className="px-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-amber-600">{project.category}</span>
                <div className="h-[1px] w-4 bg-slate-200" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors">{project.title}</h3>
              <div className="flex items-center gap-1 text-slate-400 text-sm mt-2">
                <LocationIcon sx={{ fontSize: 16 }} />
                {project.location}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* 4. Lightbox Overlay */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex flex-col items-center justify-center p-4">
          {/* Close Button */}
          <button onClick={closeGallery} className="absolute top-6 right-6 text-white hover:text-amber-500 transition-colors z-[110]">
            <CloseIcon sx={{ fontSize: 40 }} />
          </button>

          {/* Image Display */}
          <div className="relative w-full max-w-6xl aspect-[4/3] md:aspect-[16/9] flex items-center justify-center">
            <Image 
              src={selectedProject.images[currentImgIndex]} 
              alt="Project View" 
              fill 
              className="object-contain" 
            />
            
            {/* Nav Arrows */}
            <button onClick={prevImg} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full text-white ml-2 transition-all">
              <PrevIcon />
            </button>
            <button onClick={nextImg} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-4 rounded-full text-white mr-2 transition-all">
              <NextIcon />
            </button>
          </div>

          {/* Caption */}
          <div className="mt-8 text-center max-w-2xl">
            <h4 className="text-white text-2xl font-bold uppercase tracking-tight">{selectedProject.title}</h4>
            <p className="text-amber-500 font-bold text-xs mt-2 uppercase tracking-[0.3em]">{selectedProject.location}</p>
            <div className="mt-4 flex justify-center gap-2">
               {selectedProject.images.map((_, i) => (
                 <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === currentImgIndex ? 'bg-amber-500 w-6' : 'bg-slate-700'} transition-all`} />
               ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
};

export default ProjectsPage;