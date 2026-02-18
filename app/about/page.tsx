import React from 'react';
import Image from 'next/image';
import { 
  TrackChanges as TargetIcon, 
  Groups as UsersIcon, 
  VerifiedUser as ShieldIcon, 
  History as HistoryIcon,
  FormatQuote as QuoteIcon
} from '@mui/icons-material';

const managementTeam = [
  {
    name: "Mr. Charles Edeoghon",
    role: "General Manager Projects",
    credentials: "B.Engr. (Civil)",
    bio: "With 28 years of experience, he has managed major infrastructure works including upgrading Escravos airport runway for Chevron and projects for Shell (SPDC).",
  },
  {
    name: "Prof. Achebo Joseph",
    role: "Director, Engineering Services",
    credentials: "B.Eng, M.Eng, PHD, COREN",
    bio: "A founding member since 1992, providing academic and technical leadership for mechanical and electrical engineering services.",
  },
  {
    name: "Engr. Martin Nyamali",
    role: "Technical Consultant",
    credentials: "B.Eng, M.Eng, MNSE, COREN",
    bio: "A chartered member of the American Society of Engineers with 27 years of experience in general construction and facility management.",
  }
];

const AboutPage = () => {
  return (
    <main className="pt-20">
      {/* 1. Hero Section */}
      <section className="bg-slate-900 text-white py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 uppercase tracking-tight">Building Excellence Since 1992</h1>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Planning Development Construction (PDC) Ltd is a multi-disciplinary consortium 
            providing professional leadership in the construction engineering industry.
          </p>
        </div>
      </section>

      {/* 2. Narrative Section */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Our Legacy</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">
              Three Decades of Inter-disciplinary Mastery
            </h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Incorporated in 1992, PDC was established to handle every conceivable project in the 
                civil and building industry. We offer a systematic approach to project 
                design, ensuring viability and sustainability.
              </p>
              <p>
                Our team brings together expertise in Civil Engineering, Architecture, Quantity Surveying, 
                and Management to provide an integrated service that minimizes client risk.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
             <div className="bg-slate-50 p-8 rounded-2xl text-center border border-slate-100 shadow-sm">
                <HistoryIcon sx={{ fontSize: 40, color: '#f59e0b', mb: 2 }} />
                <h4 className="text-3xl font-bold text-slate-900">30+</h4>
                <p className="text-slate-500 font-medium">Years Experience</p>
             </div>
             <div className="bg-slate-50 p-8 rounded-2xl text-center mt-8 border border-slate-100 shadow-sm">
                <ShieldIcon sx={{ fontSize: 40, color: '#f59e0b', mb: 2 }} />
                <h4 className="text-3xl font-bold text-slate-900">100%</h4>
                <p className="text-slate-500 font-medium">Reliability</p>
             </div>
          </div>
        </div>
      </section>

      {/* 3. FEATURED: MANAGING DIRECTOR (Achebo Patrick) */}
      <section className="py-24 px-6 lg:px-12 bg-slate-900 text-white relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/10 skew-x-12 translate-x-1/2" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* MD Image Box */}
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-2xl overflow-hidden border-4 border-amber-500 shadow-2xl">
                <Image 
                  src="/images/patrickachebo.jpg" // Path to the photo provided
                  alt="Achebo Patrick - Managing Director"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 p-6">
                   <h3 className="text-2xl font-bold">Achebo Patrick</h3>
                   <p className="text-amber-500 font-semibold uppercase tracking-wider text-sm">Managing Director</p>
                </div>
              </div>
            </div>

            {/* MD Content Details [cite: 2, 3, 4, 5] */}
            <div className="lg:col-span-7">
              <QuoteIcon sx={{ fontSize: 60, color: '#f59e0b', opacity: 0.3, mb: 2 }} />
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6">Principal Leadership</h2>
              
              <div className="space-y-6 text-slate-300 text-lg leading-relaxed">
                <p>
                  <span className="text-white font-bold">Achebo Patrick (Bsc Bldg. Dip Arch)</span>  is a seasoned professional with over <span className="text-white">29 years of post-graduation experience</span> in active engineering construction works.
                </p>
                <p>
                  He possesses considerable experience in various aspects of the construction industry. Prior to leading P.D.C Ltd, he established a distinguished career working with:
                </p>
                <ul className="space-y-2 list-none">
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span className="text-white">Emajoh Associates Owerri</span> (Structural Engineers) 
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span className="text-white">Cosmopolitan Architects Lagos</span> (Architects) 
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                    <span className="text-white">Patnoni Limited Benin</span> (Civil/Building Contractors) 
                  </li>
                </ul>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <div className="h-[2px] w-12 bg-amber-500" />
                <span className="uppercase tracking-[0.2em] text-amber-500 font-bold text-sm">A Legacy of Excellence</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. KEY MANAGEMENT TEAM GRID */}
      <section className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">Professional Core</span>
            <h3 className="text-4xl font-extrabold text-slate-900 mt-2">Management Personnel</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {managementTeam.map((member, idx) => (
              <div key={idx} className="flex flex-col p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-all group">
                <div className="w-16 h-16 rounded-full bg-slate-200 shrink-0 flex items-center justify-center text-slate-400 text-xl font-bold mb-6 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {member.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900">{member.name}</h4>
                  <p className="text-amber-600 font-bold text-xs mb-4 uppercase tracking-wide">
                    {member.role} <br/> <span className="text-slate-400 font-normal">{member.credentials}</span>
                  </p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Mission & Vision Strip */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex gap-6">
            <div className="bg-amber-500 p-4 rounded-xl h-fit">
              <TargetIcon sx={{ color: 'white' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed italic">
                &quot;To provide innovative and world-class solutions through the best people, processes, 
                and systems, and our commitment to partnership.&quot;
              </p>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="bg-slate-900 p-4 rounded-xl h-fit">
              <UsersIcon sx={{ color: 'white' }} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Partnership Approach</h3>
              <p className="text-slate-600 leading-relaxed">
                We view projects as more than assignments—moving forward in partnerships designed 
                to create and unleash value for our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;