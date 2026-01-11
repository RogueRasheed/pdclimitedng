import Link from "next/link";
import Image from "next/image";
const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-slate-900 pt-24">
      {/* Background Image Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/jeriden-villegas-VLPUm5wP5Z0-unsplash.jpg"
          alt="Construction site"
          layout="fill"
          objectFit="cover"
          className="opacity-30"
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-6 px-6 py-32 text-white">
        <span className="w-fit rounded bg-amber-500 px-3 py-1 text-sm font-semibold text-slate-900">
          Leading Civil & Industrial Contractors
        </span>

        <h1 className="max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
          Building a <span className="text-amber-400">Better Future</span> for
          Nigeria
        </h1>

        <p className="max-w-2xl text-lg text-gray-300">
          Planning & Development Constructions Limited delivers innovative,
          reliable, and high-quality construction solutions for civil,
          industrial, and commercial projects.
        </p>

        <div className="flex gap-4">
          <Link
            href="/services"
            className="rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400"
          >
            Our Services
          </Link>

          <Link
            href="/about"
            className="rounded-md border border-white px-6 py-3 font-semibold text-white hover:bg-white hover:text-slate-900"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
