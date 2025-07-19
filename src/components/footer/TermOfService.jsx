import React from "react";
import "./TermOfService.css";

const TermsOfService = ({
  companyName,
  helpEmail,
  generalInquiriesEmail,
  supportEmail,
  countryOfLaw,
  amazonRoute53Link,
  amazonRegistrarPolicyLink,
  gandiContractLink,
  lastUpdatedDate,
  showDomainsSection = true,
}) => {
  return (
    <div className="terms-of-service-container">
      <h1>Welcome to BM Point!</h1>
      <p>
        Thanks for visiting BM Point or using our services. When you do, you're
        agreeing to these simple rules, called our "Terms." These Terms apply to
        everyone who uses our website, whether you're just looking around,
        buying something, or contributing content.
      </p>
      <p>
        Please read these Terms carefully. If you don't agree with them, please
        don't use our website or services.
      </p>

      {/* --- Who We Are --- */}
      <h2>Who We Are</h2>
      <p>
        BM Point is operated by {companyName}. We provide all the content,
        information, and tools you see here.
      </p>
      <p>
        We might add new features or tools in the future, and when we do,
        they'll also be covered by these Terms. We can update these Terms at any
        time, so please check back occasionally. If you keep using our website
        after we post changes, it means you accept those changes.
      </p>

      {/* --- Using BM Point and Our Services --- */}
      <h2>Using BM Point and Our Services</h2>
      <ul>
        <li>
          <strong>Age Limit:</strong> Our services aren't really for kids under
          16. We don't knowingly collect personal information from anyone under
          13, especially in ways that aren't allowed by privacy laws like COPPA.
          If you're a parent or guardian and think your child has shared
          information with us by mistake, please contact us at{" "}
          <a href={`mailto:${helpEmail}`}>{helpEmail}</a>. We'll look into it
          and remove the information if needed.
        </li>
        <li>
          <strong>Schools:</strong> If a school uses our services for teaching,
          it's the school's job to make sure they have permission to share
          student information with us (like getting parental consent if required
          by law). When a school uses our services for students, they're
          confirming they have all the necessary permissions.
        </li>
        <li>
          <strong>Accounts:</strong> Some parts of our services might ask you to
          create an account. We'll collect information like your name and email.
          How we use your data is explained in our{" "}
          <a href="/privacy-policy">
            <strong>Privacy Policy</strong>
          </a>
          .
        </li>
        <li>
          <strong>Be Lawful:</strong> Please don't use our products for anything
          illegal or unauthorized. You need to follow all laws and rules,
          including copyright laws.
        </li>
        <li>
          <strong>No Bad Stuff:</strong> Don't send any viruses, worms, or
          harmful code through our services.
        </li>
        <li>
          <strong>Breaking the Rules:</strong> If you don't follow these Terms,
          we might stop your access to our services right away. We can also
          remove or limit your account and any content you've created (like
          websites or other data) if we think it's necessary.
        </li>
      </ul>

      {/* --- Our Content (Intellectual Property) --- */}
      <h2>Our Content (Intellectual Property)</h2>
      <p>
        All the content on BM Point, like text, pictures, and tools, belongs to
        us. You can't use it in ways that aren't specifically allowed here.
      </p>
      <h3>
        What You <em>Can</em> Do (Fair Use)
      </h3>
      <p>You can use our copyrighted material for:</p>
      <ul>
        <li>Research</li>
        <li>News reporting</li>
        <li>Citations</li>
        <li>Commentary</li>
      </ul>
      <p>You can also:</p>
      <ul>
        <li>Linking to BM Point</li>
        <li>Including references to BM Point in search engines</li>
        <li>
          Using BM Point for Teaching (with some rules):
          <ul>
            <li>
              <strong>Allowed:</strong> Copying examples and code snippets for
              non-profit teaching or research. Copying small parts for classroom
              use.
            </li>
            <li>
              <strong>Not Allowed:</strong> Copying for profit or commercial
              use. Copying large amounts of material word-for-word.
            </li>
          </ul>
        </li>
      </ul>

      {/* --- Privacy and Cookies --- */}
      <h2>Privacy and Cookies</h2>
      <p>
        By using our website and services, you agree that we can collect, use,
        and process your personal information as explained in our{" "}
        <a href="/privacy-policy">
          <strong>Privacy Policy</strong>
        </a>
        .
      </p>
      <p>
        You have rights regarding your data. You can find more information about
        these rights and how to use them in our{" "}
        <a href="/privacy-policy">
          <strong>Privacy Policy</strong>
        </a>
        .
      </p>
      <p>
        We use cookies (small files) and similar technologies to improve your
        experience. To learn more about how we use cookies, please see our{" "}
        <a href="/cookie-policy">
          <strong>Cookie Policy</strong>
        </a>
        .
      </p>

      {/* --- Products and Services --- */}
      <h2>Products and Services</h2>
      <ul>
        <li>
          <strong>Changes:</strong> We might change product descriptions and
          prices at any time without notice to keep things current. We can also
          stop offering any service if our rules, guidelines, or laws are
          broken.
        </li>
        <li>
          <strong>Accuracy:</strong> We try our best to provide accurate
          information, but we can't guarantee that everything will always be
          perfect or exactly what you expect.
        </li>
      </ul>

      {/* --- Changes to Service and Prices --- */}
      <h2>Changes to Service and Prices</h2>
      <p>
        If you buy a subscription, the price you pay will stay the same for the
        period you paid for. We might adjust prices for any future periods.
      </p>
      <p>
        We're not responsible for any losses you might have if we change our
        website, adjust prices, or stop a service.
      </p>

      {/* --- Accuracy of Information --- */}
      <h2>Accuracy of Information</h2>
      <p>
        We do our best to provide correct and current information. However, we
        can't promise that everything on our website is completely up-to-date or
        always accurate. Please don't rely only on our website when making
        important decisions. You use the information here at your own risk.
      </p>
      <p>
        Some content might be old. We provide historical information for
        reference only, as it might not be correct anymore. We can change the
        content of our website at any time, and we won't be responsible for it.
        It's your job to keep an eye on any changes.
      </p>
      <p>
        If you find any errors, please let us know at{" "}
        <a href={`mailto:${helpEmail}`}>{helpEmail}</a> so we can fix them.
      </p>

      {/* --- Refund Policy --- */}
      <h2>Refund Policy</h2>
      <ul>
        <li>
          <strong>Exams and Courses:</strong> You can get a refund for a course
          or exam within 14 days of getting your access email,{" "}
          <em>unless you've already used any exam attempts</em>. If you've used
          an attempt, the sale is final. For product questions or issues,
          contact us at{" "}
          <a href={`mailto:${generalInquiriesEmail}`}>
            {generalInquiriesEmail}
          </a>
          .
        </li>
        <li>
          <strong>Plans and Subscriptions:</strong> We don't give refunds for
          plans or subscriptions. You can cancel your subscription anytime, but
          you won't get a refund for the period you've already paid for.
        </li>
      </ul>

      {/* --- Domains (if applicable) - Conditional Rendering --- */}
      {showDomainsSection && (
        <>
          <h2>Domains (if applicable)</h2>
          <p>If we offer a service for buying domain names:</p>
          <p>
            We provide a service to help you buy domains that work with our web
            hosting platform ("Spaces").
          </p>
          <p>
            When you buy a domain, you become its owner and must follow all
            related rules.
          </p>
          <p>
            We work with third-party companies (like Amazon) for domain
            registration. You can check their terms here:{" "}
            {amazonRoute53Link && (
              <a href={amazonRoute53Link}>
                Amazon Route 53 Domain Registration Agreement
              </a>
            )}{" "}
            {amazonRegistrarPolicyLink && (
              <a href={amazonRegistrarPolicyLink}>
                Amazon Registrar Policy Page
              </a>
            )}{" "}
            {gandiContractLink && (
              <a href={gandiContractLink}>Gandi Contract Page</a>
            )}{" "}
            (Remove if not applicable).
          </p>
          <p>
            We handle the buying and billing. If you have any complaints or
            questions about these third-party products, please contact us at{" "}
            <a href={`mailto:${supportEmail}`}>{supportEmail}</a>.
          </p>
          <p>
            Domain agreements automatically renew each year. If you don't want
            to renew, you must cancel before the current agreement ends. See
            "Billing and Account Information" for more details.
          </p>
          <p>
            We're not responsible for any problems caused by the domain registry
            administrator's actions (like domain registration or renewal
            issues). Please review all third-party policies before buying a
            domain to understand their terms.
          </p>
          <p>---</p> {/* Separator for visual clarity */}
        </>
      )}

      {/* --- Billing and Account Information --- */}
      <h2>Billing and Account Information</h2>
      <ul>
        <li>
          <strong>Order Limits:</strong> We can refuse any order. We can also
          limit or cancel quantities purchased by any person, household, or for
          any specific order. This applies to orders made with the same account,
          payment method, or billing/shipping address.
        </li>
        <li>
          <strong>Order Changes:</strong> If we need to change or cancel an
          order, we'll email you at the address you provided.
        </li>
        <li>
          <strong>Accurate Info:</strong> You agree to give us current,
          complete, and accurate purchase and account information for all
          orders. You must keep your account details updated (like your email
          and payment method) so we can process your transactions and contact
          you if needed.
        </li>
      </ul>

      {/* --- Optional Tools and Third-Party Links --- */}
      <h2>Optional Tools and Third-Party Links</h2>
      <ul>
        <li>
          <strong>Third-Party Tools:</strong> We might give you access to tools
          from other companies that we don't create, watch, or control. These
          tools are provided "as is" (meaning without guarantees). We're not
          responsible for any problems you have using these tools. If you use
          them, you do so at your own risk. Make sure you understand and agree
          to the terms of the third-party provider first.
        </li>
        <li>
          <strong>External Links:</strong> Our website might have links to other
          websites or services we don't control. While we try to avoid linking
          to bad content, we can't guarantee the accuracy or quality of
          third-party materials, products, or services. We're not responsible
          for any harm you experience from third-party websites or services.
          Always review their policies before you do anything with them. If you
          have complaints or questions about third-party products or services,
          contact them directly.
        </li>
      </ul>

      {/* --- Errors and Mistakes --- */}
      <h2>Errors and Mistakes</h2>
      <p>
        Sometimes, our website or services might have typos, inaccuracies, or
        missing information about product descriptions, prices, promotions,
        shipping, or availability. We can correct these errors and change or
        update information, or even cancel orders if the information is wrong.
        We can do this at any time, even after you've placed an order, without
        prior notice.
      </p>

      {/* --- Things You Cannot Do (Prohibited Use) --- */}
      <h2>Things You Cannot Do (Prohibited Use)</h2>
      <p>
        When using our website or content, you <strong>must not</strong>:
      </p>
      <ul>
        <li>Do anything illegal.</li>
        <li>Encourage others to do anything illegal.</li>
        <li>
          Break any international, national, regional, or local laws or rules.
        </li>
        <li>
          Violate our intellectual property rights or the rights of others.
        </li>
        <li>
          Harass, abuse, insult, harm, defame, slander, disparage, intimidate,
          or discriminate against anyone or any group. This includes based on
          gender, sexual orientation, religion, ethnicity, <strong>race</strong>
          , age, national origin, or disability.
        </li>
        <li>Give false or misleading information.</li>
        <li>
          Upload or send viruses, malicious code, or anything harmful designed
          to mess with our service, other websites, or the internet.
        </li>
        <li>
          Collect or track personal information about others without permission.
        </li>
        <li>
          Engage in spamming, phishing, pharming, pretexting, spidering,
          crawling, or scraping (basically, trying to steal data or exploit our
          site).
        </li>
        <li>Use our website or content for offensive or unethical purposes.</li>
        <li>Interfere with or try to get around our security features.</li>
      </ul>
      <p>
        If you do any of these things, we can stop your use of our website or
        services.
      </p>

      {/* --- No Guarantees (Disclaimer of Warranties) and Our Responsibility (Limitation of Liability) --- */}
      <h2>
        No Guarantees (Disclaimer of Warranties) and Our Responsibility
        (Limitation of Liability)
      </h2>
      <ul>
        <li>
          We don't guarantee that our service will always be uninterrupted, on
          time, secure, or error-free.
        </li>
        <li>
          We don't guarantee that the results you get from using our service
          will be accurate or reliable.
        </li>
        <li>
          You create and own any content you generate on our site, and you're
          fully responsible for it. We're not responsible for any errors in your
          content.
        </li>
        <li>
          By using our service, you accept that you do so at your own risk.
          Unless we say otherwise, we offer our website and services "as is" and
          "as available," meaning without any express or implied promises or
          guarantees.
        </li>
        <li>
          <strong>
            We are not responsible for any injury, loss, claim, or any direct,
            indirect, accidental, punitive, special, or resulting damages of any
            kind.
          </strong>
          This includes our directors, officers, employees, partners, agents,
          contractors, suppliers, or licensors.
        </li>
      </ul>

      {/* --- Protecting Us (Indemnification) --- */}
      <h2>Protecting Us (Indemnification)</h2>
      <p>
        By using our services, you agree that BM Point and its related parties
        (owners, partners, employees, etc.) are not responsible for any claims
        or lawsuits from others that come from you breaking these Terms, any
        linked documents, or any laws or rights of others. Also, we can ask you
        to pay reasonable attorney's fees if your breach causes us to incur
        them.
      </p>

      {/* --- The Full Agreement --- */}
      <h2>The Full Agreement</h2>
      <p>
        If we don't use or enforce any right or rule in these Terms, it doesn't
        mean we're giving up that right or rule.
      </p>
      <p>
        These Terms, along with any policies or rules on our website, make up
        the entire agreement between you and BM Point. They control your use of
        our service and replace any previous agreements or discussions.
      </p>
      <p>
        Any confusion in interpreting these Terms shouldn't be used against the
        party who wrote them.
      </p>

      {/* --- Laws and Disputes --- */}
      <h2>Laws and Disputes</h2>
      <p>
        These Terms and any separate agreements where we provide you services
        will be governed by and interpreted according to the laws of{" "}
        {countryOfLaw}
        unless we specifically agree otherwise in writing with a signed entity.
      </p>
      <p>
        You understand that these Terms form a contract between you and BM
        Point, even if they're electronic and not physically signed. This
        contract governs how you use our services.
      </p>

      {/* --- Changes to These Terms --- */}
      <h2>Changes to These Terms</h2>
      <p>
        You can always see the most up-to-date version of these Terms on this
        page.
      </p>
      <p>
        We can update, change, or replace any part of these Terms by posting
        updates on our website. It's your responsibility to check our website
        regularly for changes.
      </p>
      <p>
        If you keep using or accessing our website or service after we post
        changes, it means you accept those changes.
      </p>

      {/* --- Contact Us --- */}
      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns about these Terms, please contact
        us at <a href={`mailto:${helpEmail}`}> {helpEmail}</a>.
      </p>
      <p>Last updated: {lastUpdatedDate}</p>
    </div>
  );
};

export default TermsOfService;
