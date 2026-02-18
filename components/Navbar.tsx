"use client";

import { useState } from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 z-50 w-full bg-slate-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          PDC Limited Nigeria
        </Link>

        {/* Desktop Nav */}
       <nav className="hidden items-center gap-10 md:flex">
  {[
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ].map((link) => {
    const isActive = pathname === link.href;

    return (
      <Link
        key={link.name}
        href={link.href}
        className="relative group text-sm font-semibold"
      >
        <span
          className={`transition-colors duration-300 ${
            isActive ? "text-white" : "text-gray-300 group-hover:text-white"
          }`}
        >
          {link.name}
        </span>

        {/* Underline */}
        <span
          className={`absolute left-0 -bottom-1 h-[2px] bg-amber-500 transition-all duration-300 ${
            isActive ? "w-full" : "w-0 group-hover:w-full"
          }`}
        />
      </Link>
    );
  })}
</nav>


        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden">
          <div className="flex flex-col gap-6 bg-slate-900 px-6 py-8 text-white">
           {[
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
].map((link) => {
  const isActive = pathname === link.href;

  return (
    <Link
      key={link.name}
      href={link.href}
      onClick={() => setOpen(false)}
      className={`text-lg font-semibold transition-colors ${
        isActive ? "text-amber-400" : "hover:text-amber-400"
      }`}
    >
      {link.name}
    </Link>
  );
})}

          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
