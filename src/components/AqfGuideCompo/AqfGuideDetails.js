import React from "react";
import Link from "next/link";

const AqfGuideDetails = () => {
  return (
    <div className="flex items-center justify-center py-5 bg-gray-200">
      <div className="container">
        <div className="bg-white rounded-lg shadow-lg p-5">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            UK Agent Quality Framework (AQF) Guide
          </h1>
          <p className="text-lg italic mb-6">
            For Students, Parents & Education Agents
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            London School of Excellence (LSOE)
          </h2>
          <p className="mt-2">
            The London School of Excellence (LSOE) is a UK-registered
            international student recruitment agency. We help students apply to
            accredited UK universities, colleges, and language schools. We
            follow the highest professional and ethical standards set by the UK
            AQF.
          </p>
          <p className="mt-2">
            The AQF is a national system established by the British Council,
            BUILA, UKCISA, and Universities UK International to ensure students
            get trustworthy and ethical guidance when applying to UK education
            institutions.
          </p>
          <p className="mt-2">
            At LSOE, we strictly follow this framework and only work with
            certified and ethical agents and counsellors.
            <br />
            <a
              href="https://www.britishcouncil.org/education/agents-counsellors/uk-quality-agent-framework"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Read more on the British Council website
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            How AQF Benefits Students and Parents
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Ensures agents provide honest, up-to-date advice</li>
            <li>Protects you from misleading or unethical practices</li>
            <li>Gives you control over your application documents</li>
            <li>Helps you make informed choices about your education</li>
          </ul>
          <p className="mt-2">
            You are not required to use an agent. You may apply directly to
            LSOE.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            What to Expect from Certified Education Agents
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Listed in the British Council certified database</li>
            <li>Completed AQF and safeguarding training</li>
            <li>Follow the National Code of Ethical Practice</li>
            <li>Signed LSOE agreements</li>
          </ul>

          <p className="font-medium mt-4">Their responsibilities include:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Provide fee and service breakdowns</li>
            <li>Share all documents submitted on your behalf</li>
            <li>Never promise guaranteed visa/admission</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            LSOE’s Commitment to You
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Monitored agent activities and feedback</li>
            <li>Regular agent training and updates</li>
            <li>Complaint investigations are taken seriously</li>
            <li>Agents only approved after verification</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            Additional Policies
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              {" "}
              <Link href="/modern-slavery-policy" className="link link-hover">
                Modern Slavery Policy
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="link link-hover">
                Privacy and Data Protection Policy
              </Link>
            </li>

            <li>Internal Agent Quality Commitment (QAHE-Aligned)</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            Our QAHE-Aligned Practice
          </h2>
          <ol className="list-decimal list-inside mt-2 space-y-1">
            <li>Agent Training – covering compliance, GDPR, ethics</li>
            <li>Performance Monitoring – enrolment, visa success, feedback</li>
            <li>
              Transparent Representation – partnership only, full disclosures
            </li>
            <li>Student Protection – no pressure, full access to documents</li>
            <li>Compliance & Reporting – detailed records and audits</li>
          </ol>

          <p className="mt-4">
            Contact us at:{" "}
            <a
              href="mailto:info@londonschoolofexcellence.com"
              className="text-blue-600 hover:underline"
            >
              info@londonschoolofexcellence.com
            </a>
            <br />
            Visit:{" "}
            <a
              href="https://www.londonschoolofexcellence.com"
              className="text-blue-600 hover:underline"
            >
              www.londonschoolofexcellence.com
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            How to Choose a Trusted Agent (Checklist)
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Are you certified by the British Council?</li>
            <li>Have you completed AQF training?</li>
            <li>Can I see a written agreement for services and fees?</li>
            <li>Will I get copies of all documents?</li>
            <li>How do you protect my data?</li>
            <li>Can you provide references?</li>
          </ul>

          <p className="italic mt-2">
            Tip: If the answer is "no" to any of these, be cautious.
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            Red Flags to Watch Out For
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1 text-red-600">
            <li>“Guaranteed offer” or “100% visa success” claims</li>
            <li>No written agreement or fee breakdown</li>
            <li>Pressure to accept a course you didn’t choose</li>
            <li>Requesting original documents without reason</li>
            <li>Advice that contradicts UK visa rules</li>
          </ul>

          <p className="mt-2">
            Report issues to:{" "}
            <a
              href="mailto:agents@londonschoolofexcellence.com"
              className="text-blue-600 hover:underline"
            >
              agents@londonschoolofexcellence.com
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            Frequently Asked Questions
          </h2>
          <ul className="mt-2 space-y-2">
            <li>
              <strong>Q:</strong> Is using an agent required?
              <br />
              <strong>A:</strong> No, you can apply directly to LSOE.
            </li>
            <li>
              <strong>Q:</strong> Is agent certification free?
              <br />
              <strong>A:</strong> Yes, British Council training is free.
            </li>
            <li>
              <strong>Q:</strong> How long does certification last?
              <br />
              <strong>A:</strong> 3 years.
            </li>
            <li>
              <strong>Q:</strong> Can agents represent multiple UK institutions?
              <br />
              <strong>A:</strong> Yes, if transparent.
            </li>
            <li>
              <strong>Q:</strong> What if my agent breaks the rules?
              <br />
              <strong>A:</strong> We will terminate the agreement and accept
              complaints.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            Become an LSOE Partner Agent
          </h2>
          <p className="mt-2">
            We welcome trained, ethical, student-focused agencies.
          </p>
          <ul className="list-decimal list-inside mt-2 space-y-1">
            <li>Complete British Council Certified Counsellor Training</li>
            <li>Sign the LSOE Agent Agreement</li>
            <li>Submit the Agent Compliance & Safeguarding Declaration</li>
          </ul>
          <p className="mt-2">
            Contact us at{" "}
            <a
              href="mailto:agents@londonschoolofexcellence.com"
              className="text-blue-600 hover:underline"
            >
              agents@londonschoolofexcellence.com
            </a>
          </p>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            Key Resources
          </h2>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>
              <a
                href="https://www.britishcouncil.org/education/agents-counsellors/uk-quality-agent-framework"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                British Council AQF Hub
              </a>
            </li>
            <li>
              <a
                href="https://www.buila.ac.uk/activities/a-partnership-for-quality-uk-quality-framework-for-education-agents-2"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                BUILA – AQF Tools
              </a>
            </li>
            <li>
              <a
                href="https://www.ukcisa.org.uk/our-work/working-with-agents/"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                UKCISA Agent Guidelines
              </a>
            </li>
            <li>
              <a
                href="https://www.gov.uk/student-visa"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                UKVI Student Visa Info
              </a>
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-700 mt-6">
            Need Help or Want to Report a Problem?
          </h2>
          <ul className="mt-2">
            <li>
              Email:{" "}
              <a
                href="mailto:admissions@londonschoolofexcellence.com"
                className="text-blue-600 hover:underline"
              >
                admissions@londonschoolofexcellence.com
              </a>
            </li>
            <li>Call: +44 (0)1708 784 763</li>

            <li>
              Or fill out our{" "}
              <a
                href="https://forms.gle/buAh1b4MVd9tobBYA"
                target="_blank"
                className="text-blue-600 hover:underline"
              >
                Student Complaint Form
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AqfGuideDetails;
