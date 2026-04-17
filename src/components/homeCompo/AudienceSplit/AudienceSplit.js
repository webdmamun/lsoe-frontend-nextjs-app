import Link from "next/link";
import { MapPin, Globe2, CheckCircle2, ArrowRight } from "lucide-react";

const ukBenefits = [
  "Student Finance England eligibility support",
  "UCAS application and personal statement guidance",
  "Flexible study options and location matching",
  "Local in-person and online advisor support",
];

const intlBenefits = [
  "UK university admissions from your home country",
  "Student Route visa guidance and CAS support",
  "Student accommodation search and booking",
  "English language pathway and entry requirement advice",
];

export default function AudienceSplit() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Choose the right path for{" "}
            <span className="text-brand-primary">your application</span>
          </h2>
          <p className="text-slate-500 mt-3 text-base max-w-2xl mx-auto">
            Whether you live in the UK or are applying from abroad, LSOE provides free, tailored admissions support for your situation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* UK / EU — visually primary */}
          <div className="relative rounded-3xl bg-brand-primary p-10 text-white overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(38,178,230,0.3),_transparent_60%)] pointer-events-none" />
            <div className="relative z-10 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5">
                <MapPin className="w-4 h-4 text-brand-secondary" />
                <span className="font-bold text-sm text-white">UK / EU Students</span>
              </div>
              <h3 className="text-2xl font-black text-white leading-snug">
                Living in the UK?<br />
                We make your application simple.
              </h3>
              <ul className="space-y-3">
                {ukBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-white/85 font-medium text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/uk-eu-students"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-brand-primary font-bold rounded-full hover:bg-brand-secondary hover:text-white transition-all duration-300 text-sm"
              >
                UK / EU Guidance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* International */}
          <div className="rounded-3xl bg-white border border-slate-100 p-10 shadow-sm hover:shadow-lg transition-shadow">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-full px-4 py-1.5">
                <Globe2 className="w-4 h-4 text-brand-secondary" />
                <span className="font-bold text-sm text-slate-700">International Students</span>
              </div>
              <h3 className="text-2xl font-black text-slate-900 leading-snug">
                Applying from abroad?<br />
                We guide you every step.
              </h3>
              <ul className="space-y-3">
                {intlBenefits.map((b, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-primary flex-shrink-0 mt-0.5" />
                    <span className="text-slate-600 font-medium text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/international-students"
                className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-brand-primary text-brand-primary font-bold rounded-full hover:bg-brand-primary hover:text-white transition-all duration-300 text-sm"
              >
                International Guidance
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
