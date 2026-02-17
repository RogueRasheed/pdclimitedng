import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] w-full bg-slate-900 pt-24">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg"
          alt="PDC Construction Site"
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-32 text-white">
        <span className="w-fit rounded bg-amber-500 px-3 py-1 text-sm font-bold uppercase tracking-wider text-slate-900">
          Established 1992
        </span>

        <h1 className="max-w-4xl text-4xl font-extrabold leading-tight md:text-7xl">
          Planning Development <br />
          <span className="text-amber-400">Construction</span> Limited
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl">
          An inter-disciplinary consortium providing world-class solutions in 
          civil engineering, architecture, and project management for over 30 years.
        </p>

        <div className="flex flex-wrap gap-4 pt-4">
          <Link
            href="/projects"
            className="rounded-md bg-amber-500 px-8 py-4 font-bold text-slate-900 transition-colors hover:bg-amber-400"
          >
            View Our Portfolio
          </Link>

          <Link
            href="/about"
            className="rounded-md border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-slate-900"
          >
            Meet the Team
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;