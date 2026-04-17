import Link from "next/link";
import { MessageCircle, FileText, ArrowRight } from "lucide-react";

export default function BookCTA({ variant = "mid" }) {
  if (variant === "pre-footer") {
    return (
      <section className="py-20 px-6 bg-brand-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(38,178,230,0.25),_transparent_60%)] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-6">
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight">
            Ready to Start Your UK University Journey?
          </h2>
          <p className="text-brand-secondary text-lg font-semibold">
            Book a free consultation or apply today — it costs nothing to get started.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact-us"
              className="flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white text-white font-bold text-[15px] hover:bg-white hover:text-brand-primary transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Free Consultation
            </Link>
            <Link
              href="/apply-now"
              className="flex items-center gap-2 px-8 py-4 rounded-full bg-white text-brand-primary font-bold text-[15px] shadow-xl hover:bg-brand-secondary hover:text-white transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-3xl bg-white border border-slate-100 shadow-xl shadow-slate-200/40 p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <p className="text-brand-secondary font-bold text-sm uppercase tracking-widest">Free Consultation</p>
            <h2 className="text-3xl font-black text-slate-900 leading-tight">
              Speak to an admissions expert today.
            </h2>
            <p className="text-slate-500 text-base max-w-lg">
              Our advisors are ready to guide you — from course selection to your offer letter.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact-us"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-brand-primary text-brand-primary font-bold text-[15px] hover:bg-brand-primary hover:text-white transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Free Consultation
            </Link>
            <Link
              href="/apply-now"
              className="flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-brand-primary text-white font-bold text-[15px] shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <FileText className="w-5 h-5" />
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
