import React from "react";
import "./CookiePolicy.css"; // Your CSS file for styling

const CookiePolicy = ({
  companyName,
  websiteUrl,
  contactEmail,
  googleAnalyticsPartnerSiteLink,
  allAboutCookiesLink,
  googleAdsSettingsLink,
  adPartners = [], // This is an array of objects for multiple ad partners
  lastUpdatedDate,
}) => {
  return (
    <div className="cookie-policy-container">
      <h1>Our Digital Cookie Guidelines</h1>
      <p>
        This page details how {companyName} uses tiny data files called
        "cookies" and other similar digital tracking tools on our website,{" "}
        <a href={websiteUrl} target="_blank" rel="noopener noreferrer">
          {websiteUrl.replace(/^(https?:\/\/(?:www\.)?)/, "")}
        </a>
      </p>
      <p>
        Understanding how we use these technologies is important for your online
        privacy. Here, you'll learn what cookies are, why they're used on our
        site, and how you can manage your preferences.
      </p>

      <h2>What Are Cookies Exactly?</h2>
      <p>
        Imagine a cookie as a small digital label a website places on your
        computer or mobile device. This label contains an ID (a sequence of
        characters). When your web browser asks for another page from the same
        website, it sends this ID back to the server. This lets the website
        remember your device.
      </p>
      <p>
        Websites widely use cookies to streamline your experience, remember your
        settings, keep you logged in, or recognize you if you return. While
        cookies generally don't hold personal identification directly, any
        personal information we store about you might be connected to the data
        collected via cookies.
      </p>
      <p>
        Both {companyName} and other third parties (like our advertising
        partners) deploy cookies. This allows us to track some of your
        activities both on and off the{" "}
        {websiteUrl.replace(/^(https?:\/\/(?:www\.)?)/, "")} website, helping us
        to store and retrieve certain data about your Browse history and how you
        interact with our services.
      </p>
      <h3>Cookie Lifespans:</h3>
      <ul>
        <li>
          <strong>Session Cookies:</strong> These are temporary cookies that
          disappear shortly after you leave our website or close your browser.
          We use them to identify you during a single visit, for instance, when
          you're logged into your {companyName} account for a continuous
          session.
        </li>
        <li>
          <strong>Persistent Cookies:</strong> These cookies stay on your device
          for a longer, pre-set duration. They're utilized when we need to
          recognize you over an extended period, such as when you opt to remain
          signed in to your account.
        </li>
      </ul>
      <p>
        This policy covers both first-party cookies (set by us) and third-party
        cookies (set by others through our site). Please note that adjusting
        your cookie settings may impact how you experience our platform and
        could limit certain functionalities, including the convenience of
        staying logged in.
      </p>

      <h2>Our Reasons for Using Cookies</h2>
      <p>
        We utilize cookies and analogous technologies (such as web beacons or
        pixel tags) to refine our services and align them with user preferences.
        Our objective is to deliver, analyze, and enhance our offerings in
        various ways:
      </p>
      <ul>
        <li>To confirm the identity of individuals accessing user accounts.</li>
        <li>
          To customize the behavior of our products and services based on your
          activities or preferences across different parts of our website.
        </li>
        <li>
          To provide mechanisms for users to opt out of specific types of
          content personalization or tailoring.
        </li>
        <li>
          To facilitate the provision and administration of our services,
          including showing personalized content.
        </li>
        <li>
          To support the essential functions of our advertising and marketing
          efforts.
        </li>
        <li>
          To assist in identifying and correcting operational issues, bugs, and
          errors, ensuring our products run efficiently.
        </li>
        <li>
          To identify individual users to attribute their actions across various
          site sections.
        </li>
        <li>
          To retain details about your browser and your specific preferences.
        </li>
        <li>
          To remember your chosen settings and other selections you've made on
          our website.
        </li>
      </ul>

      <h2>Insights & Third-Party Integrations</h2>
      <p>
        Our collaboration with advertising and analytics partners, like Google,
        involves the use of cookies to display relevant advertisements across
        our platform.
      </p>
      <h3>Regarding Google Analytics:</h3>
      <p>
        {companyName} leverages Google Analytics, a robust and widely-adopted
        web traffic analysis tool. It provides us with in-depth, real-time
        insights into how our site is used, by whom, and to what extent.
      </p>
      <p>
        We employ Google Analytics to gauge site traffic, observe visitor
        behavior patterns, and continually refine our service delivery. For a
        comprehensive understanding of the information shared with Google, its
        processing methods, and how you can control the data Google collects on{" "}
        {websiteUrl.replace(/^(https?:\/\/(?:www\.)?)/, "")}, please refer to:{" "}
        <a
          href={googleAnalyticsPartnerSiteLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {googleAnalyticsPartnerSiteLink}
        </a>
      </p>
      <p>
        Beyond personal data, certain anonymous information is automatically
        recorded when you visit our site. This encompasses your Internet service
        provider's name, your IP address, the date and time of your visit, the
        specific pages you view on our site, occasional geographic location
        data, and the web address of the site that directed you to us. We might
        also use your IP address to infer your organizational affiliation. This
        anonymous data is crucial for improving the site, analyzing trends, and
        general site administration.
      </p>
      <p>
        We may monitor your specific interactions with our site—such as which
        pages you browse, content you engage with, and comments you submit—and
        integrate this information with your user profile on our platform.
      </p>
      {/* Conditionally renders the list of other ad partners if the array is not empty */}
      {adPartners.length > 0 && (
        <>
          <h3>Our Other Advertising Collaborators:</h3>
          <p>
            The entities listed below may gather personal data when you engage
            with our digital properties. This includes IP addresses, digital
            identifiers, and information about your Browse habits and app usage,
            as well as how you interact with our sites and advertisements. Such
            data serves various objectives, including the personalization of
            offers or ads, analytics on user engagement with websites or ads,
            and other commercial purposes.
          </p>
          <p>
            For more specific details on the collection, utilization, and
            potential sale of your personal data by these partners, alongside
            information on your rights, please consult the links provided:
          </p>
          <ul>
            {adPartners.map((partner, index) => (
              <li key={index}>
                <strong>{partner.name}:</strong>{" "}
                {partner.privacyLink && (
                  <a
                    href={partner.privacyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Privacy Policy
                  </a>
                )}
                {partner.rightsLink && (
                  <>
                    {" | "}{" "}
                    <a
                      href={partner.rightsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Rights Request Form
                    </a>
                  </>
                )}
              </li>
            ))}
          </ul>
        </>
      )}

      <h2>Your Options for Cookie Management</h2>
      <p>
        While most web browsers accept cookies by default, you have the ability
        to adjust your browser settings to decline them. For guidance on how to
        do this, please consult your browser's support documentation. Be aware
        that opting to decline cookies might affect your ability to sign in,
        personalize your experience, or use certain interactive features within
        our Services.
      </p>
      <ul>
        <li>
          To prevent Google Analytics from using your data for display
          advertising or to customize ads on the Google Display Network, visit
          the{" "}
          <a
            href={googleAdsSettingsLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings page
          </a>
        </li>
        <li>
          For comprehensive information about how targeting cookies work and
          strategies to disable them universally, you can explore{" "}
          <a
            href={allAboutCookiesLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {allAboutCookiesLink}
          </a>
        </li>
      </ul>
      <h2>Policy Revisions & Contact Information</h2>
      <p>
        We may periodically revise this Cookie Policy to reflect changes in our
        practices or to comply with new regulations. When updates occur, we will
        publish the revised policy on this page, accompanied by a new "Last
        updated" date. For any significant alterations, we commit to taking
        reasonable steps to inform you in advance.
      </p>
      <p>
        Should you have any questions or require further clarification about our
        use of cookies, please do not hesitate to contact us via email at{" "}
        <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
      </p>
      <p>Last updated: {lastUpdatedDate}</p>
    </div>
  );
};

export default CookiePolicy;
