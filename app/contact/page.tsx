"use client";

import {
  LocationOn,
  Phone,
  Email,
  Call,
  MailOutline,
} from "@mui/icons-material";

export default function ContactPage() {
  return (
    <main className="pt-24 pb-32 bg-white">

      {/* 1. Header */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-20">
        <span className="text-amber-600 font-bold uppercase tracking-widest text-sm">
          Contact
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mt-2 tracking-tight">
          Let’s Build Something That Lasts
        </h1>
        <p className="text-slate-500 mt-4 max-w-2xl">
          Get in touch with Planning Development Construction Limited (PDC Ltd)
          for professional engineering and construction services across Nigeria.
        </p>
      </section>

      <section className="px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">

        {/* LEFT SIDE – Office Details */}
        <div className="space-y-12">

          {/* Head Office */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Head Office – Benin City
            </h3>

            <div className="space-y-4 text-slate-600">
              <div className="flex items-start gap-3">
                <LocationOn className="text-amber-600" />
                <p>
                  2nd Floor, Unity Bank Building <br />
                  69 Mission Road <br />
                  Benin City, Edo State, Nigeria
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-amber-600" />
                <p>
                  +234 803 673 3696 <br />
                  +234 802 303 8559
                </p>
              </div>

              <div className="flex items-center gap-3">
                <Email className="text-amber-600" />
                <p>pdclimited@yahoo.com</p>
              </div>
            </div>
          </div>

          {/* Delta Office */}
          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Delta State Office – Asaba
            </h3>

            <div className="space-y-4 text-slate-600">
              <div className="flex items-start gap-3">
                <LocationOn className="text-amber-600" />
                <p>
                  EL-Green Hotel Ltd <br />
                  32 Old Anwai Road (Infant Jesus Road) <br />
                  Asaba, Delta State
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE – Direct Contact Actions */}
        <div className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-center space-y-8">

          <h3 className="text-2xl font-bold text-slate-900">
            Reach Us Directly
          </h3>

          {/* Call Button */}
          <a
            href="tel:+2348036733696"
            className="flex items-center justify-center gap-3 bg-slate-900 text-white py-5 rounded-xl font-bold hover:bg-amber-600 transition-all"
          >
            <Call />
            Call PDC Ltd
          </a>

          {/* Email Button */}
          <a
            href="mailto:pdclimited@yahoo.com?subject=Project Inquiry - PDC Ltd&body=Dear PDC Ltd,%0D%0A%0D%0AI would like to inquire about..."
            className="flex items-center justify-center gap-3 border border-slate-900 text-slate-900 py-5 rounded-xl font-bold hover:bg-slate-900 hover:text-white transition-all"
          >
            <MailOutline />
            Send Email
          </a>

          <p className="text-slate-500 text-sm text-center mt-4">
            We respond promptly to all professional inquiries.
          </p>

        </div>
      </section>
    </main>
  );
}
