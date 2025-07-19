import React from "react";
import "./ReturnRefundPolicy.css"; // Create this CSS file for styling

const ReturnRefundPolicy = ({
  companyName,
  returnPeriodDays,
  contactEmail,
  allowCourseDownloadsForRefund = false,
  allowCertAccessForRefund = true,
  doesNotRefundEbooks = true,
  annualMembershipRefunds = false,
  iOSPurchasesHandledByApple = true,
  appleRefundPolicyLink,
}) => {
  return (
    <div className="return-refund-policy-container">
      <h1>Return, Refund, & Cancellation Policy</h1>
      <p>
        At <strong>{companyName}</strong>, we are committed to providing you
        with high-quality learning experiences, including tutorials, video
        courses, e-books, and certifications. We strive for transparency and
        accountability in all our services.
      </p>
      <hr />
      <h2>Our General Refund Principle</h2>
      <p>
        We want you to be satisfied with your purchase. Therefore, for most
        products, you can request a full refund within{" "}
        <strong>{returnPeriodDays} days</strong> of your purchase date. This
        period allows you to evaluate if the content meets your needs. Refunds
        are processed after this period to ensure fairness to our instructors
        and to prevent fraud.
      </p>
      <p>
        Before purchasing any course, certification, or e-book from{" "}
        {companyName}, we highly recommend reviewing the product curriculum and
        details to ensure it aligns with your learning goals.
      </p>

      <h2>Specific Product Refund Conditions:</h2>
      <h3>For Courses:</h3>
      <ul>
        <li>
          You are eligible for a full refund if you cancel within{" "}
          {returnPeriodDays} days of purchase, provided the conditions below are
          met.
        </li>
        {!allowCourseDownloadsForRefund && (
          <li>
            <strong>
              No refund will be provided if any downloadable material
            </strong>{" "}
            associated with the video course has been accessed or downloaded.
          </li>
        )}
        <li>
          Refunds are not available if the course completion certificate has
          already been issued.
        </li>
      </ul>
      <h3>For Certifications:</h3>
      <ul>
        <li>
          You are eligible for a full refund if you cancel within{" "}
          {returnPeriodDays} days of purchase, provided the conditions below are
          met.
        </li>
        {!allowCertAccessForRefund && (
          <li>
            Refunds will not be granted if a significant portion of the
            certification content has been accessed or downloaded before the
            request is submitted.
          </li>
        )}
        <li>
          No refund will be given after the completion or issuance of any
          certification.
        </li>
        <li>
          If you upgraded an existing certification, only the amount paid for
          the upgrade might be eligible for a refund, subject to the{" "}
          {returnPeriodDays}-day window and access conditions. The original base
          certification amount is typically non-refundable.
        </li>
      </ul>
      <h3>For E-books:</h3>
      {doesNotRefundEbooks ? (
        <p>
          Due to the instant and electronic nature of e-book content,{" "}
          <strong>
            {companyName} cannot offer refunds for any e-books purchased.
          </strong>{" "}
          Please ensure you review the book's description and preview (if
          available) before purchase.
        </p>
      ) : (
        <p>
          You are eligible for a full refund for e-books if you cancel within{" "}
          {returnPeriodDays} days of purchase, provided you have not downloaded
          the content.
        </p>
      )}
      <h3>For Annual Memberships / Subscriptions:</h3>
      {annualMembershipRefunds ? (
        <p>
          Our Annual Membership offers comprehensive access to our resources
          through a subscription. You may be eligible for a refund within{" "}
          {returnPeriodDays} days of purchase, provided you have not
          significantly used the membership. Please contact us for details.
        </p>
      ) : (
        <p>
          {companyName} Annual Membership offers a comprehensive learning
          package with unlimited access to our resources through a
          subscription-based model. Our Annual Membership does not offer a{" "}
          {returnPeriodDays}-day money-back guarantee, and no refunds or
          partial refunds are available for annual memberships or
          subscription-based products.
        </p>
      )}
      {iOSPurchasesHandledByApple && (
        <>
          <h3>For iOS (Apple) Purchases:</h3>
          <p>
            All purchases made through iOS apps (on iPhones and iPads) are
            handled directly by Apple. Therefore, cash refunds for in-app
            purchases will not be available through {companyName}.
          </p>
          <p>
            You can learn more about Apple's refund policy and how to request a
            refund from them here:{" "}
            {appleRefundPolicyLink ? (
              <a
                href={appleRefundPolicyLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                Apple's Refund Policy
              </a>
            ) : (
              "Please refer to Apple's official support pages for their refund policy."
            )}
          </p>
        </>
      )}
      <h2>Refund Process & Important Notes:</h2>
      <p>
        Refund requests must be submitted within {returnPeriodDays} days of
        purchase. We cannot offer a refund if cancellation is made after this
        period.
      </p>
      <p>
        All approved refund requests will be processed and paid within{" "}
        <strong>{}</strong> from the date of approval by our
        company.
      </p>
      <p>
        At our discretion, if we believe you are abusing our cancellation or
        refund policy, we reserve the right to ban your account and restrict all
        future use of our Services.
      </p>
      <h2>How to Request a Refund:</h2>
      <p>
        To request a refund, please contact us at{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a> with your order
        details and the reason for your request. We will review your request
        against the criteria outlined above.
      </p>
      <p>
        Last updated:{" "}
        {`${new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}`}
      </p>
    </div>
  );
};

export default ReturnRefundPolicy;
