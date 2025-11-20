'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Shield, 
  Users, 
  Award, 
  AlertTriangle, 
  Mail, 
  Phone, 
  ExternalLink,
  FileText,
  Star,
  BookOpen,
  Target,
  TrendingUp
} from "lucide-react";

const AqfGuideDetails = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Introduction Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-8 border border-gray-100"
        >
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3">
                UK Agent Quality Framework
              </h1>
              <p className="text-xl text-gray-600 italic">
                For Students, Parents & Education Agents
              </p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-3 mb-4">
              <BookOpen className="w-6 h-6 text-blue-600" />
              London School of Excellence (LSOE)
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              The London School of Excellence (LSOE) is a UK-registered international student recruitment agency. We help students apply to accredited UK universities, colleges, and language schools. We follow the highest professional and ethical standards set by the UK AQF.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              The AQF is a national system established by the British Council, BUILA, UKCISA, and Universities UK International to ensure students get trustworthy and ethical guidance when applying to UK education institutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At LSOE, we strictly follow this framework and only work with certified and ethical agents and counsellors.
            </p>
            <a
              href="https://www.britishcouncil.org/education/agents-counsellors/uk-quality-agent-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-blue-600 hover:text-blue-700 font-semibold transition-colors group"
            >
              Read more on the British Council website
              <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8"
        >
          <motion.div variants={itemVariants} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-lg p-8 border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-blue-600" />
              How AQF Benefits Students and Parents
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Ensures agents provide honest, up-to-date advice",
                "Protects you from misleading or unethical practices",
                "Gives you control over your application documents",
                "Helps you make informed choices about your education"
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
            <p className="mt-6 text-gray-600 italic bg-white p-4 rounded-xl">
              💡 You are not required to use an agent. You may apply directly to LSOE.
            </p>
          </motion.div>
        </motion.div>

        {/* What to Expect Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8 mb-8"
        >
          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <Users className="w-7 h-7 text-purple-600" />
              Certified Education Agents
            </h2>
            <div className="space-y-3">
              {[
                "Listed in the British Council certified database",
                "Completed AQF and safeguarding training",
                "Follow the National Code of Ethical Practice",
                "Signed LSOE agreements"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="font-semibold text-gray-900 mb-3">Their responsibilities include:</p>
              <div className="space-y-2">
                {[
                  "Provide fee and service breakdowns",
                  "Share all documents submitted on your behalf",
                  "Never promise guaranteed visa/admission"
                ].map((resp, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-600 text-sm">{resp}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3 mb-6">
              <Target className="w-7 h-7 text-blue-600" />
              LSOE's Commitment to You
            </h2>
            <div className="space-y-4">
              {[
                { icon: TrendingUp, text: "Monitored agent activities and feedback" },
                { icon: BookOpen, text: "Regular agent training and updates" },
                { icon: Shield, text: "Complaint investigations are taken seriously" },
                { icon: CheckCircle, text: "Agents only approved after verification" }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    <Icon className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* QAHE Practice Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl shadow-lg p-8 mb-8 border border-purple-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our QAHE-Aligned Practice</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Agent Training – covering compliance, GDPR, ethics",
              "Performance Monitoring – enrolment, visa success, feedback",
              "Transparent Representation – partnership only, full disclosures",
              "Student Protection – no pressure, full access to documents",
              "Compliance & Reporting – detailed records and audits"
            ].map((practice, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-xl shadow-sm border border-purple-200"
              >
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{practice}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Checklist Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">How to Choose a Trusted Agent</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Are you certified by the British Council?",
              "Have you completed AQF training?",
              "Can I see a written agreement for services and fees?",
              "Will I get copies of all documents?",
              "How do you protect my data?",
              "Can you provide references?"
            ].map((question, index) => (
              <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-blue-600 font-bold text-xs">?</span>
                </div>
                <span className="text-gray-700">{question}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl">
            <p className="text-gray-700 italic">
              <strong>💡 Tip:</strong> If the answer is "no" to any of these, be cautious.
            </p>
          </div>
        </motion.div>

        {/* Red Flags Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl shadow-lg p-8 mb-8 border border-red-200"
        >
          <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3 mb-6">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            Red Flags to Watch Out For
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "\"Guaranteed offer\" or \"100% visa success\" claims",
              "No written agreement or fee breakdown",
              "Pressure to accept a course you didn't choose",
              "Requesting original documents without reason",
              "Advice that contradicts UK visa rules"
            ].map((flag, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-red-200"
              >
                <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{flag}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-6 p-4 bg-white rounded-xl">
            <p className="text-gray-700">
              <strong>Report issues to:</strong>{" "}
              <a
                href="mailto:agents@londonschoolofexcellence.com"
                className="text-red-600 hover:text-red-700 font-semibold inline-flex items-center gap-1"
              >
                <Mail className="w-4 h-4" />
                agents@londonschoolofexcellence.com
              </a>
            </p>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "Is using an agent required?", a: "No, you can apply directly to LSOE." },
              { q: "Is agent certification free?", a: "Yes, British Council training is free." },
              { q: "How long does certification last?", a: "3 years." },
              { q: "Can agents represent multiple UK institutions?", a: "Yes, if transparent." },
              { q: "What if my agent breaks the rules?", a: "We will terminate the agreement and accept complaints." }
            ].map((faq, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 5 }}
                className="p-5 bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all"
              >
                <p className="font-semibold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-blue-600">Q:</span> {faq.q}
                </p>
                <p className="text-gray-700 ml-5 flex items-start gap-2">
                  <span className="text-green-600 font-semibold">A:</span> {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Become a Partner Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl shadow-xl p-8 mb-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">Become an LSOE Partner Agent</h2>
          <p className="text-indigo-100 mb-6 text-lg">
            We welcome trained, ethical, student-focused agencies.
          </p>
          <div className="space-y-3 mb-6">
            {[
              "Complete British Council Certified Counsellor Training",
              "Sign the LSOE Agent Agreement",
              "Submit the Agent Compliance & Safeguarding Declaration"
            ].map((step, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="font-bold">{index + 1}</span>
                </div>
                <span className="text-white/90 pt-1">{step}</span>
              </div>
            ))}
          </div>
          <a
            href="mailto:agents@londonschoolofexcellence.com"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 px-6 py-3 rounded-xl font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            <Mail className="w-5 h-5" />
            Contact Us to Partner
          </a>
        </motion.div>

        {/* Resources Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <FileText className="w-8 h-8 text-purple-600" />
            Key Resources & Policies
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              { text: "British Council AQF Hub", url: "https://www.britishcouncil.org/education/agents-counsellors/uk-quality-agent-framework", external: true },
              { text: "BUILA – AQF Tools", url: "https://www.buila.ac.uk/activities/a-partnership-for-quality-uk-quality-framework-for-education-agents-2", external: true },
              { text: "UKCISA Agent Guidelines", url: "https://www.ukcisa.org.uk/our-work/working-with-agents/", external: true },
              { text: "UKVI Student Visa Info", url: "https://www.gov.uk/student-visa", external: true },
              { text: "Modern Slavery Policy", url: "/modern-slavery-policy", external: false },
              { text: "Privacy and Data Protection Policy", url: "/privacy-policy", external: false }
            ].map((resource, index) => (
              <motion.a
                key={index}
                href={resource.url}
                target={resource.external ? "_blank" : undefined}
                rel={resource.external ? "noopener noreferrer" : undefined}
                whileHover={{ scale: 1.02, x: 5 }}
                className="flex items-center gap-3 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl border border-purple-200 hover:border-purple-400 transition-all group"
              >
                <ExternalLink className="w-5 h-5 text-purple-600 group-hover:translate-x-1 transition-transform" />
                <span className="text-gray-700 font-medium">{resource.text}</span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-2xl shadow-xl p-8 text-white"
        >
          <h2 className="text-3xl font-bold mb-6">Need Help or Want to Report a Problem?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Email</p>
                  <a
                    href="mailto:admissions@londonschoolofexcellence.com"
                    className="font-semibold hover:underline"
                  >
                    admissions@londonschoolofexcellence.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-white/20 rounded-xl">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-blue-100">Phone</p>
                  <p className="font-semibold">+44 (0)1708 784 763</p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              <a
                href="https://forms.gle/buAh1b4MVd9tobBYA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-white text-blue-600 px-6 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-colors shadow-lg text-center inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Submit Student Complaint Form
              </a>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/20">
            <p className="text-blue-100">
              Visit our website:{" "}
              <a
                href="https://www.londonschoolofexcellence.com"
                className="font-semibold hover:underline text-white"
              >
                www.londonschoolofexcellence.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AqfGuideDetails;
