import Link from "next/link";
import { LocationOn, Phone, Email } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white mt-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-20 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* Company */}
        <div>
          <h3 className="text-xl font-extrabold mb-6">
            Planning Development Construction Ltd
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Delivering professional engineering and construction services
            across Nigeria since 1992.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6">Quick Links</h4>
          <div className="space-y-3 text-slate-400 text-sm">
            <Link href="/" className="block hover:text-amber-500">Home</Link>
            <Link href="/about" className="block hover:text-amber-500">About</Link>
            <Link href="/projects" className="block hover:text-amber-500">Projects</Link>
            <Link href="/contact" className="block hover:text-amber-500">Contact</Link>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-6">Head Office</h4>

          <div className="space-y-4 text-slate-400 text-sm">
            <div className="flex items-start gap-3">
              <LocationOn sx={{ fontSize: 18 }} />
              <p>69 Mission Road, Benin City, Edo State</p>
            </div>

            <div className="flex items-center gap-3">
              <Phone sx={{ fontSize: 18 }} />
              <p>+234 803 673 3696</p>
            </div>

            <div className="flex items-center gap-3">
              <Email sx={{ fontSize: 18 }} />
              <p>pdclimited@yahoo.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 py-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} PDC Ltd. All Rights Reserved.
      </div>
    </footer>
  );
}
