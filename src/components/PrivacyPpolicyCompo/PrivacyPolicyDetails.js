import React from "react";

const PrivacyPolicyDetails = () => {
  return (
    <>
      <div className="flex items-center justify-center py-5 bg-gray-200">
        <div className="container">
          <div className="bg-white rounded-lg shadow-lg p-5">
            <h1 class="text-3xl font-bold text-gray-800 mb-4">
              Privacy Policy
            </h1>

            <h2 class="text-2xl font-semibold text-gray-700 mt-6">
              1. Introduction
            </h2>
            <p class="mt-2">
              At <strong>London School of Excellence (LSOE) Pvt. Ltd.</strong>,
              we value your privacy and are committed to protecting your
              personal data. This Privacy Policy outlines how we collect, use,
              store, and retain your information in compliance with the{" "}
              <strong>UK GDPR</strong> and the{" "}
              <strong>Data Protection Act 2018</strong>.
            </p>

            <h2 class="text-2xl font-semibold text-gray-700 mt-6">
              2. Information We Collect
            </h2>
            <p class="mt-2">
              We collect personal data when you register, contact us, or use our
              services. This may include:
            </p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Name</strong>
              </li>
              <li>
                <strong>Contact details</strong> (email, phone number, address)
              </li>
              <li>
                <strong>Educational background</strong>
              </li>
              <li>
                <strong>Payment information</strong> (if applicable)
              </li>
            </ul>

            <h2 class="text-2xl font-semibold text-gray-700 mt-6">
              3. How We Use Your Data
            </h2>
            <p class="mt-2">Your information is used to:</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>Provide and improve our services</li>
              <li>Communicate with you regarding your account or inquiries</li>
              <li>Process payments and meet legal obligations</li>
              <li>Send marketing communications (only if you have opted in)</li>
            </ul>

            <h2 class="text-2xl font-semibold text-gray-700 mt-6">
              4. Data Retention
            </h2>
            <p class="mt-2">We retain personal data for specific periods:</p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Student records:</strong> Up to <strong>3 years</strong>{" "}
                after the last interaction
              </li>
              <li>
                <strong>Financial records:</strong> <strong>6 years</strong>{" "}
                (per <strong>HMRC</strong> regulations)
              </li>
              <li>
                <strong>Marketing data:</strong> Up to <strong>2 years</strong>{" "}
                if inactive
              </li>
              <li>
                <strong>General inquiries:</strong> <strong>6 months</strong>
              </li>
              <li>
                <strong>Employment records:</strong> <strong>3 years</strong>{" "}
                after employment ends
              </li>
            </ul>
            <p class="mt-2">
              After these periods, data is securely deleted or anonymized.
            </p>

            <h2 class="text-2xl font-semibold text-gray-700 mt-6">
              5. Data Security & Sharing
            </h2>
            <p class="mt-2">
              We implement strict security measures to protect your personal
              data. We do not share your information with third parties unless
              required by law or necessary for service operations.
            </p>

            <h2 class="text-2xl font-semibold text-gray-700 mt-6">
              6. Your Rights
            </h2>
            <p class="mt-2">
              Under <strong>UK GDPR</strong>, you have the right to:
            </p>
            <ul class="list-disc list-inside mt-2 space-y-1">
              <li>
                <strong>Access, correct, or delete</strong> your personal data
              </li>
              <li>
                <strong>Withdraw consent</strong> for marketing communications
              </li>
              <li>
                <strong>Request data restriction or portability</strong>
              </li>
            </ul>
            <p class="mt-2">
              To exercise these rights, please contact us at{" "}
              <a
                href="mailto:info.office@londonschoolofexcellence.com"
                class="text-blue-600 hover:underline"
              >
                info.office@londonschoolofexcellence.com
              </a>
              .
            </p>

            <h2 class="text-2xl font-semibold text-gray-700 mt-6">
              7. Updates & Contact
            </h2>
            <p class="mt-2">
              We may update this Privacy Policy periodically. For any questions
              or concerns, reach out to us at{" "}
              <a
                href="mailto:info.office@londonschoolofexcellence.com"
                class="text-blue-600 hover:underline"
              >
                info.office@londonschoolofexcellence.com
              </a>
              .
            </p>

            <p class="mt-6 font-semibold">
              By using our website, you agree to this Privacy Policy.
            </p>

            {/* <p className="text-lg font-normal">
              At LSOE Pvt. Ltd. (London School of Excellence & London Source of
              Employment), we take the privacy of our users seriously. We
              understand that your personal information is important to you and
              we are committed to protecting it. This Privacy Policy outlines
              the types of personal information we collect and how we use,
              disclose,and protect that information.
              <br />
              <br />
              <strong>Information Collection:</strong> We collect personal
              information from users when they register for an account, fill out
              a form, or use our services. The types of information we collect
              may include name, email address, phone number, and educational
              background. Use of Information: We use the personal information we
              collect to provide and improve our services, to communicate with
              users, and to comply with legal obligations. We may also use the
              information to personalize the user's experience on our website
              and to send promotional emails or messages.
              <br />
              <br />
              <strong>Disclosure of Information:</strong> We may disclose
              personal information to third parties in certain circumstances.
              For example, if required by law, or to protect the rights and
              safety of LSOE, our users, or others.
              <br />
              <br />
              <strong>Data Security:</strong> We take appropriate measures to
              protect personal information from unauthorized access, use, or
              disclosure. However, no security measure is 100% effective and we
              cannot guarantee the security of your personal information.
              Changes to Privacy Policy: We reserve the right to change this
              Privacy Policy at any time. Users should review this policy
              periodically to stay informed about how we are protecting their
              personal information. If you have any questions about this Privacy
              Policy, please contact us at{" "}
              <a className="link link-hover" href="mailto:info@lsoe.org.uk">
                info@lsoe.org.uk
              </a>
              <br />
              <br />
              By using our website and services, you consent to the collection,
              use, and disclosure of your personal information as described in
              this Privacy Policy.
            </p> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyDetails;
