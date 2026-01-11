"use client";

import { useState } from "react";
import Link from "next/link";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full bg-slate-900/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          PDC Nigeria
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link href="/about" className="text-gray-300 hover:text-white">
            About
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-white">
            Services
          </Link>
          <Link href="/projects" className="text-gray-300 hover:text-white">
            Projects
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-white">
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <Link
          href="/contact"
          className="hidden rounded-md bg-amber-500 px-5 py-2 font-semibold text-slate-900 hover:bg-amber-400 md:block"
        >
          Get a Quote
        </Link>

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
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="text-lg hover:text-amber-400"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="text-lg hover:text-amber-400"
            >
              Services
            </Link>
            <Link
              href="/projects"
              onClick={() => setOpen(false)}
              className="text-lg hover:text-amber-400"
            >
              Projects
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="text-lg hover:text-amber-400"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-4 w-fit rounded-md bg-amber-500 px-6 py-3 font-semibold text-slate-900 hover:bg-amber-400"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
