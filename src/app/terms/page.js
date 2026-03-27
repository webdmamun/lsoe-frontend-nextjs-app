import AdmissionNav from "@/components/shared/header/AdmissionNav";
import AdmissionFooter from "@/components/shared/Footer/AdmissionFooter";

export const metadata = {
  title: "Terms & Conditions - LSOE",
  description: "Read the terms and conditions for using the LSOE portal and services.",
};

export default function TermsPage() {
  return (
    <>
      <AdmissionNav isDark={false} />
      <main className="bg-slate-50 pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 tracking-tight">
            Terms & <span className="text-brand-primary">Conditions</span>
          </h1>
          
          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 space-y-8 text-slate-600 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">1. Introduction</h2>
              <p>
                Welcome to London School of Excellence (LSOE). By accessing our website and using our services, you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">2. Use of Services</h2>
              <p>
                LSOE provides educational consultancy and admission support services. You agree to provide accurate and complete information when applying through our portal. Any fraudulent activity or misrepresentation may lead to immediate termination of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">3. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and images, is the property of London School of Excellence Ltd and is protected by copyright laws. You may not reproduce or distribute any content without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4">4. Limitation of Liability</h2>
              <p>
                While we strive for excellence, LSOE does not guarantee university placement as final decisions rest with the respective institutions. We are not liable for any indirect or consequential losses arising from the use of our consultancy services.
              </p>
            </section>

            <div className="pt-8 border-t border-slate-100 italic text-sm text-slate-400">
              Last Updated: March 2026
            </div>
          </div>
        </div>
      </main>
      <AdmissionFooter />
    </>
  );
}
