import React from "react";
import "./PrivacyPolicy.css"; // Create a CSS file for styling if needed

const PrivacyPolicy = ({
  companyName,
  websiteUrl,
  primaryContactEmail,
  dataCorrectionEmail,
  childrensAgeLimit,
  countryOfOperation,
  advertisingPartnerName,
  advertisingPartnerPrivacyPolicyLink,
  networkAdvertisingOptOutLink,
  lastUpdatedDate,
  showAdvertisingSection = true,
}) => {
  return (
    // <div className="privacy-policy-container">
    //   <h1>Our Privacy Policy</h1>
    //   <p>
    //     Welcome to{" "}
    //     <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
    //       {websiteUrl.replace(/^(https?:\/\/(?:www\.)?)/, "")}
    //     </a>
    //     . This Privacy Policy explains how <strong>{companyName}</strong>{" "}
    //     collects, uses, and protects your personal information when you visit
    //     our website or use our services.
    //   </p>
    //   <p>
    //     Your privacy is very important to us. Please read this policy carefully.
    //     By using our website, you agree to the terms described here. We may
    //     update this policy from time to time, so please check back for the
    //     latest version.
    //   </p>
    //   <h2>What Information We Collect</h2>
    //   <h3>Information You Give Us:</h3>
    //   <ul>
    //     <li>
    //       <strong>When you create an account:</strong> We collect your name,
    //       email address, and sometimes your phone number.
    //     </li>
    //     <li>
    //       <strong>When you make a purchase:</strong> We collect billing details
    //       (but payment processing is handled by a secure third-party, we don't
    //       store your credit card numbers directly).
    //     </li>
    //     <li>
    //       <strong>When you contact us:</strong> If you use our contact forms or
    //       email us, we collect the information you provide in your message.
    //     </li>
    //     <li>
    //       <strong>When you post content:</strong> If our website allows you to
    //       post comments, participate in forums, or submit content, we collect
    //       the information you choose to share publicly.
    //     </li>
    //   </ul>
    //   <h3>Information We Collect Automatically:</h3>
    //   <p>
    //     When you visit our website, we automatically collect certain information
    //     about your device and how you interact with our site. This helps us
    //     understand our users and improve our services. This information may
    //     include:
    //   </p>
    //   <ul>
    //     <li>Your IP address</li>
    //     <li>Browser type and version</li>
    //     <li>Operating system</li>
    //     <li>Pages you visit on our site</li>
    //     <li>Time and date of your visit</li>
    //     <li>How long you spend on certain pages</li>
    //     <li>Referring website (how you found us)</li>
    //   </ul>
    //   <p>
    //     This type of data is usually collected through technologies like cookies
    //     and web beacons. For more details on this, please see our separate{" "}
    //     <a href="/cookie-policy">Cookie Policy</a>.
    //   </p>

    //   <h2>How We Use Your Information</h2>
    //   <p>We use the information we collect for the following purposes:</p>
    //   <ul>
    //     <li>
    //       To **provide and maintain our services**, including managing your
    //       account, processing transactions, and delivering the products or
    //       courses you've purchased.
    //     </li>
    //     <li>
    //       To **improve, personalize, and expand our website and services**,
    //       based on how users interact with them.
    //     </li>
    //     <li>
    //       To **communicate with you**, respond to your inquiries, and send you
    //       important updates or information related to your account or services.
    //     </li>
    //     <li>
    //       To **send you promotional offers** or information about products and
    //       services we think might interest you. You can opt out of these
    //       communications at any time.
    //     </li>
    //     <li>
    //       To **monitor and analyze usage trends** and activities on our website
    //       to ensure its functionality and security.
    //     </li>
    //     <li>
    //       To **detect, prevent, and address technical issues** or fraudulent
    //       activities.
    //     </li>
    //     <li>
    //       To **comply with legal obligations** and enforce our terms and
    //       policies.
    //     </li>
    //   </ul>

    //   <h2>How We Share Your Information</h2>
    //   <p>
    //     We value your trust and do not sell your personal information to third
    //     parties. However, we may share your information in the following
    //     situations:
    //   </p>
    //   <ul>
    //     <li>
    //       **With Service Providers:** We work with trusted third-party companies
    //       that help us operate our website and services (e.g., hosting, payment
    //       processing, analytics, email delivery). These providers only access
    //       your information to perform tasks on our behalf and are obligated to
    //       keep it confidential.
    //     </li>
    //     <li>
    //       **With Instructors (if applicable):** If you enroll in a course, we
    //       may share relevant personal information with the course instructor to
    //       enable them to provide the course and interact with you.
    //     </li>
    //     <li>
    //       **For Legal Reasons:** We may disclose your information if required by
    //       law (e.g., in response to a court order or subpoena), or if we believe
    //       it's necessary to protect our rights, property, or safety, or the
    //       rights, property, or safety of others.
    //     </li>
    //     <li>
    //       **Business Transfers:** If our company is involved in a merger,
    //       acquisition, or asset sale, your personal information may be
    //       transferred as part of that transaction. We will notify you if such a
    //       transfer occurs and if it results in a different privacy policy.
    //     </li>
    //     <li>
    //       **With Your Consent:** We may share your information for any other
    //       purpose with your explicit consent.
    //     </li>
    //   </ul>

    //   <h2>Children's Privacy</h2>
    //   <p>
    //     Our website is generally intended for users aged {childrensAgeLimit} and
    //     older. We do not knowingly collect personal information from children
    //     under {childrensAgeLimit} without parental consent. If you are a parent
    //     or guardian and believe your child has provided us with personal
    //     information, please contact us at{" "}
    //     <a href={`mailto:${primaryContactEmail}`}>{primaryContactEmail}</a>, and
    //     we will take steps to remove that information from our systems.
    //   </p>

    //   <h2>Your Choices and Rights</h2>
    //   <p>You have certain rights regarding your personal information:</p>
    //   <ul>
    //     <li>
    //       **Access and Correction:** You can review and update your account
    //       information by logging into your account settings. To request a copy
    //       or correction of other personal data we hold, please contact us at{" "}
    //       <a href={`mailto:${dataCorrectionEmail}`}>{dataCorrectionEmail}</a>.
    //     </li>
    //     <li>
    //       **Marketing Opt-Out:** You can opt out of receiving promotional emails
    //       from us by following the unsubscribe instructions included in those
    //       emails. Even if you opt out, we may still send you non-promotional
    //       messages related to your account or services.
    //     </li>
    //   </ul>

    //   <h2>Data Security</h2>
    //   <p>
    //     We implement various security measures to protect your personal
    //     information from unauthorized access, use, or disclosure. We use secure
    //     servers, encryption (like SSL/TLS) for data in transit, and restrict
    //     access to personal data to authorized personnel only.
    //   </p>
    //   <p>
    //     As a registered user, your account is protected by a password. You are
    //     responsible for keeping your password confidential and for any activity
    //     that occurs under your account. We recommend using a strong, unique
    //     password and changing it periodically.
    //   </p>
    //   <p>
    //     While we strive to protect your information, no method of transmission
    //     over the internet or electronic storage is 100% secure. Therefore, we
    //     cannot guarantee absolute security. You acknowledge and accept the
    //     inherent security risks of providing information over the internet.
    //   </p>
    //   <p>
    //     In the unlikely event of a data breach, we will notify you and relevant
    //     authorities as required by applicable laws. If you suspect your account
    //     has been compromised, please inform us immediately at{" "}
    //     <a href={`mailto:${primaryContactEmail}`}>{primaryContactEmail}</a>.
    //   </p>

    //   <h2>Third-Party Links and Services</h2>
    //   <p>
    //     Our website may contain links to other websites or services that are not
    //     operated by us. We are not responsible for the content, privacy
    //     policies, or practices of these third-party sites. We encourage you to
    //     review the privacy policies of any website you visit.
    //   </p>
    //   {showAdvertisingSection && (
    //     <>
    //       <h2>Third-Party Advertising</h2>
    //       <p>
    //         We may use third-party advertising partners, such as{" "}
    //         <strong>{advertisingPartnerName}</strong>, to serve ads on our
    //         website. These companies may use information (not including your
    //         name, address, email address, or telephone number) about your visits
    //         to this and other websites to provide advertisements about goods and
    //         services of interest to you.
    //       </p>
    //       <p>
    //         Their data collection and usage are governed by their own privacy
    //         policies. You can typically find{" "}
    //         <a
    //           href={advertisingPartnerPrivacyPolicyLink}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           {advertisingPartnerName}'s privacy policy here
    //         </a>
    //         .
    //       </p>
    //       <p>
    //         To learn more about interest-based advertising and to understand
    //         your choices about not having this information used by these
    //         companies, please visit:{" "}
    //         <a
    //           href={networkAdvertisingOptOutLink}
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           {networkAdvertisingOptOutLink}
    //         </a>
    //         .
    //       </p>
    //     </>
    //   )}

    //   <h2>International Users and Data Transfer</h2>
    //   <p>
    //     Our website is operated from {countryOfOperation}. If you are accessing
    //     our website from outside {countryOfOperation}, please be aware that your
    //     information may be transferred to, stored, and processed in{" "}
    //     {countryOfOperation} (or other countries where our service providers
    //     operate). The data protection laws in {countryOfOperation} may differ
    //     from those in your country.
    //   </p>
    //   <p>
    //     By using our website, you consent to the transfer of your personal data
    //     to {countryOfOperation} as described in this Privacy Policy.
    //   </p>

    //   <h2>Changes to This Privacy Policy</h2>
    //   <p>
    //     We may update this Privacy Policy periodically. We will notify you of
    //     any significant changes by posting the new policy on this page and
    //     updating the "Last updated" date. We encourage you to review this policy
    //     regularly to stay informed about how we are protecting your information.
    //   </p>

    //   <h2>Contact Us</h2>
    //   <p>
    //     If you have any questions or concerns about this Privacy Policy, please
    //     contact us at:{" "}
    //     <a href={`mailto:${primaryContactEmail}`}>{primaryContactEmail}</a>
    //   </p>
    //   <p>Last updated: {lastUpdatedDate}</p>
    // </div>
    <div className="privacy-policy-container space-y-6">
      <h1>Our Privacy Policy</h1>

      <p>
        Welcome to{" "}
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          {websiteUrl.replace(/^(https?:\/\/(?:www\.)?)/, "")}
        </a>
        . This Privacy Policy explains how <strong>{companyName}</strong>{" "}
        collects, uses, and protects your personal information when you visit
        our website or use our services.
      </p>

      <p>
        Your privacy is important to us. By using our website, you agree to the
        terms described here. We may update this policy periodically, so please
        check back for the latest version.
      </p>

      <h2>What Information We Collect</h2>

      <h3>Information You Give Us:</h3>
      <ul className="list-disc ml-6">
        <li>
          <strong>When you create an account:</strong> We collect your name,
          email address, and sometimes your phone number.
        </li>
        <li>
          <strong>When you make a purchase:</strong> We collect billing details
          (payments are securely handled by third parties; we do not store your
          credit card).
        </li>
        <li>
          <strong>When you contact us:</strong> We collect any info you provide
          in contact forms or emails.
        </li>
        <li>
          <strong>When you post content:</strong> If applicable, we collect what
          you publicly share in forums/comments.
        </li>
      </ul>

      <h3>Information We Collect Automatically:</h3>
      <p>
        We may collect the following information automatically when you visit
        our site:
      </p>
      <ul className="list-disc ml-6">
        <li>Your IP address</li>
        <li>Browser type and version</li>
        <li>Operating system</li>
        <li>Pages visited</li>
        <li>Date and time of your visit</li>
        <li>Time spent on pages</li>
        <li>Referring website</li>
      </ul>

      <p>
        We use cookies and similar technologies for this purpose. Learn more in
        our{" "}
        <a href="/cookie-policy" className="text-blue-500 underline">
          Cookie Policy
        </a>
        .
      </p>

      <h2>How We Use Your Information</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Provide and maintain services</strong> — including managing
          your account and processing orders.
        </li>
        <li>
          <strong>Improve and personalize our site</strong> — based on your
          interactions.
        </li>
        <li>
          <strong>Communicate with you</strong> — about your account, questions,
          or support needs.
        </li>
        <li>
          <strong>Send promotional offers</strong> — which you can opt out of
          anytime.
        </li>
        <li>
          <strong>Analyze usage</strong> — to improve functionality and
          security.
        </li>
        <li>
          <strong>Prevent fraud and ensure legal compliance</strong>.
        </li>
      </ul>

      <h2>How We Share Your Information</h2>
      <p>
        We don’t sell your personal information. We may share it under these
        circumstances:
      </p>
      <ul className="list-disc ml-6">
        <li>
          <strong>Service Providers:</strong> Trusted vendors helping us operate
          (e.g. hosting, analytics, email delivery).
        </li>
        <li>
          <strong>Instructors:</strong> If you enroll in a course, we may share
          relevant details with the instructor.
        </li>
        <li>
          <strong>Legal Requirements:</strong> If law enforcement or regulations
          require disclosure.
        </li>
        <li>
          <strong>Business Transfers:</strong> In a merger or acquisition, your
          info may transfer accordingly.
        </li>
        <li>
          <strong>With Your Consent:</strong> For any other use you approve.
        </li>
      </ul>

      <h2>Children’s Privacy</h2>
      <p>
        Our services are intended for users age {childrensAgeLimit}+ only. We
        don’t knowingly collect data from children under {childrensAgeLimit}. If
        you believe a child has provided us info, contact us at{" "}
        <a
          href={`mailto:${primaryContactEmail}`}
          className="text-blue-500 underline"
        >
          {primaryContactEmail}
        </a>
        .
      </p>

      <h2>Your Rights & Choices</h2>
      <ul className="list-disc ml-6">
        <li>
          <strong>Access/Correction:</strong> Update your account or email{" "}
          <a
            href={`mailto:${dataCorrectionEmail}`}
            className="text-blue-500 underline"
          >
            {dataCorrectionEmail}
          </a>
          .
        </li>
        <li>
          <strong>Marketing Opt-Out:</strong> Use unsubscribe links in emails.
          We may still send important service messages.
        </li>
      </ul>

      <h2>Data Security</h2>
      <p>
        We implement encryption, secure servers, and restricted access. As a
        user, you are responsible for keeping your password confidential.
      </p>
      <p>
        No system is 100% secure online. In case of a data breach, we’ll notify
        you and appropriate authorities as required. Contact us at{" "}
        <a
          href={`mailto:${primaryContactEmail}`}
          className="text-blue-500 underline"
        >
          {primaryContactEmail}
        </a>{" "}
        if you suspect unauthorized access.
      </p>

      <h2>Third-Party Links</h2>
      <p>
        We may link to external websites. We are not responsible for their
        privacy practices. Review their policies before engaging.
      </p>

      {showAdvertisingSection && (
        <>
          <h2>Third-Party Advertising</h2>
          <p>
            We may use advertising partners like{" "}
            <strong>{advertisingPartnerName}</strong>. Their policies apply when
            tracking your visits.
          </p>
          <p>
            Review their privacy policy{" "}
            <a
              href={advertisingPartnerPrivacyPolicyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              here
            </a>
            . Opt out of interest-based ads via{" "}
            <a
              href={networkAdvertisingOptOutLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              this link
            </a>
            .
          </p>
        </>
      )}

      <h2>International Users & Data Transfer</h2>
      <p>
        Our services operate from {countryOfOperation}. By using them, you
        consent to the transfer and processing of your data in{" "}
        {countryOfOperation}.
      </p>

      <h2>Policy Updates</h2>
      <p>
        We may revise this policy. Changes will be posted here with an updated
        date. Please check back regularly.
      </p>

      <h2>Contact Us</h2>
      <p>
        Questions? Email us at{" "}
        <a
          href={`mailto:${primaryContactEmail}`}
          className="text-blue-500 underline"
        >
          {primaryContactEmail}
        </a>
      </p>

      <p className="text-sm text-slate-500">Last updated: {lastUpdatedDate}</p>
    </div>
  );
};

export default PrivacyPolicy;
