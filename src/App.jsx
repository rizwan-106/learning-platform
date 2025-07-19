import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer1 from "./components/footer/Footer1";
import Home from "./components/footer/Home";
import Navbar from "./components/footer/Navbar";
import OurTeam from "./components/OurTeam";
import TermsOfService from "./components/footer/TermOfService";
import PrivacyPolicy from "./components/footer/PrivacyPolicy";
import ScrollToTop from "./components/footer/ScrollToTop";
import ReturnRefundPolicy from "./components/footer/ReturnRefundPolicy";

function App() {
  const myCompanyData = {
    companyName: "BhoomiTech Zone",
    websiteUrl: "https://www.bhoomitechzone.in",
    primaryContactEmail: "info@bhoomitechzone.in",
    dataCorrectionEmail: "privacy@bhoomitechzone.in",
    childrensAgeLimit: 16,
    countryOfOperation: "India",
    advertisingPartnerName: "Ezoic Inc.",
    advertisingPartnerPrivacyPolicyLink:
      "https://g.ezoic.net/privacy/bhoomitechzone.in",
    networkAdvertisingOptOutLink:
      "http://www.networkadvertising.org/managing/opt_out.asp",
    helpEmail: "help@bhoomitechzone.in",
    generalInquiriesEmail: "hello@bhoomitechzone.in",
    supportEmail: "support@bhoomitechzone.in",
    amazonRoute53Link:
      "https://aws.amazon.com/route53/domain-registration-agreement/",
    amazonRegistrarPolicyLink:
      "https://aws.amazon.com/route53/registrar-policies/",
    gandiContractLink: "https://www.gandi.net/en/contracts",
    showDomainsSection: true,
    returnPeriodDays: 30,
    refundContactEmail: "refunds@bhoomitechzone.in",
    allowCourseDownloadsForRefund: false,
    allowCertAccessForRefund: false,
    doesNotRefundEbooks: true,
    annualMembershipRefunds: false,
    iOSPurchasesHandledByApple: true,
    appleRefundPolicyLink: "https://support.apple.com/en-us/HT210904",
    refundProcessingDays: "5-7 business days",
    lastUpdatedDate: "19th July 2025",
  };
  return (
    <div>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/team" element={<OurTeam />}></Route>
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
        </Routes>
        <Footer1 />
      </BrowserRouter>
    </div>
  );
}

export default App;
