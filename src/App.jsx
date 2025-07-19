import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer1 from "./components/footer/Footer1";
import Home from "./components/footer/Home";
import Navbar from "./components/footer/Navbar";
import OurTeam from "./components/OurTeam";
import TermsOfService from "./components/footer/TermOfService";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import ScrollToTop from "./components/footer/ScrollToTop";
import ReturnRefundPolicy from "./components/footer/ReturnRefundPolicy";
import CookiePolicy from "./components/footer/CookiePolicy";
import FAQ from "./components/footer/FAQ";
import ContactPage from "./components/footer/ContactPage";

function App() {
  const myCompanyData = {
    companyName: "BhoomiTech Zone",
    websiteUrl: "https://www.bhoomitechzone.in",
    primaryContactEmail: "info@bhoomitechzone.in", // General contact for questions/cookies
    dataCorrectionEmail: "privacy@bhoomitechzone.in",
    childrensAgeLimit: 16,
    countryOfOperation: "India",

    // Cookie Policy specific links and partners
    googleAnalyticsPartnerSiteLink:
      "https://policies.google.com/technologies/partner-sites",
    allAboutCookiesLink: "https://www.allaboutcookies.org",
    googleAdsSettingsLink: "https://adssettings.google.com/authenticated",
    adPartners: [
      {
        name: "Rakuten Advertising",
        privacyLink:
          "https://rakutenadvertising.com/legal-notices/services-privacy-policy/",
        rightsLink:
          "https://rakutenadvertising.com/legal-notices/services-privacy-rights-request-form/",
      },
      // Add other advertising partners here if you have them:
      // {
      //   name: "Another Ad Network",
      //   privacyLink: "https://another-ad-network.com/privacy-policy",
      //   rightsLink: null, // Or provide a link if they have one
      // },
    ],

    // Terms of Service specific data
    helpEmail: "help@bhoomitechzone.in",
    generalInquiriesEmail: "hello@bhoomitechzone.in",
    supportEmail: "support@bhoomitechzone.in",
    amazonRoute53Link:
      "https://aws.amazon.com/route53/domain-registration-agreement/",
    amazonRegistrarPolicyLink:
      "https://aws.amazon.com/route53/registrar-policies/",
    gandiContractLink: "https://www.gandi.net/en/contracts",
    showDomainsSection: true,

    // Return/Refund Policy specific data
    returnPeriodDays: 30,
    refundContactEmail: "refunds@bhoomitechzone.in",
    allowCourseDownloadsForRefund: false,
    allowCertAccessForRefund: false,
    doesNotRefundEbooks: true,
    annualMembershipRefunds: false,
    iOSPurchasesHandledByApple: true,
    appleRefundPolicyLink: "https://support.apple.com/en-us/HT210904",
    refundProcessingDays: "5-7 business days",

    // Global last updated date for all policies
    lastUpdatedDate: "19th July 2025",
  };
  const faqData = [
    {
      question: "What is BM Point?",
      answer:
        "BM Point is your go-to platform for high-quality online learning resources, including tutorials, video courses, and certifications across various technical and professional domains.",
    },
    {
      question: "How do I create an account?",
      answer:
        "You can create an account by clicking the 'Sign Up' button in the top right corner of our website. Simply fill in your details, and you'll be ready to start learning!",
    },
    {
      question: "Are the courses self-paced?",
      answer:
        "Yes, all our courses are designed to be self-paced, allowing you to learn at your own convenience and schedule. You'll have unlimited access to the course content once purchased.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, MasterCard, American Express) and popular digital payment options. All payments are processed securely through our trusted third-party payment gateway.",
    },
    {
      question: "Do you offer certificates upon course completion?",
      answer:
        "Yes, upon successful completion of most of our courses and certifications, you will receive a verifiable digital certificate to showcase your new skills.",
    },
    {
      question: "How can I contact support?",
      answer: `If you have any questions or need assistance, you can reach our support team via email at ${myCompanyData.primaryContactEmail} or by visiting our 'Contact Us' page.`,
    },
  ];
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/team" element={<OurTeam />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route
            path="/terms"
            element={<TermsOfService {...myCompanyData} />}
          ></Route>
          <Route
            path="/privacy"
            element={<PrivacyPolicy {...myCompanyData} />}
          ></Route>
          <Route
            path="/refund"
            element={<ReturnRefundPolicy {...myCompanyData} />}
          ></Route>
          <Route
            path="/cookies"
            element={
              <CookiePolicy
                {...myCompanyData}
                contactEmail={myCompanyData.refundContactEmail}
              />
            }
          ></Route>
          <Route path="/faqs" element={<FAQ faqs={faqData} />}></Route>
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
