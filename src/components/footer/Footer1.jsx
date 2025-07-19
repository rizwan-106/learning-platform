import React from "react";
import { Facebook, Twitter, Youtube, Linkedin, Instagram } from "lucide-react";
import { NavLink } from "react-router-dom";

const Footer1 = () => {
  const topTutorials = [
    "HTML Tutorial",
    "CSS Tutorial",
    "JavaScript Tutorial",
    "C Programming Tutorial",
    "C++ Tutorial",
    "Java Tutorial",
    "Python Tutorial",
    "C# Tutorial",
    "PHP Tutorial",
    "Go Tutorial",
    "SQL Tutorial",
  ];

  const trendingTechnologies = [
    "Cloud Computing Tutorial",
    "Amazon Web Services Tutorial",
    "Microsoft Azure Tutorial",
    "Git Tutorial",
    "Ethical Hacking Tutorial",
    "Docker Tutorial",
    "Kubernetes Tutorial",
    "DSA Tutorial",
    "Spring Boot Tutorial",
    "SDLC Tutorial",
    "Unix Tutorial",
  ];

  const certifications = [
    "Front-End Developer Certification",
    "Java & Spring Boot Advanced Certification",
    "MERN Full Stack Certification",
    "Python Programming Certification",
    "Artificial Intelligence And Machine Learning",
    "AWS Certification Training",
    "Data Science Advanced Certification",
    "Cloud Computing And DevOps",
    "Advanced Certification In Business Analytics",
    "DevOps Certification",
    "Game Development Certification",
  ];

  const compilersEditors = [
    "Online Java Compiler",
    "Online Python Compiler",
    "Online Go Compiler",
    "Online C Compiler",
    "Online C++ Compiler",
    "Online C# Compiler",
    "Online PHP Compiler",
    "Online MATLAB Compiler",
    "Online Bash Compiler",
    "Online SQL Compiler",
    "Online Html Editor",
  ];

  const footerLinks = [
    { label: "ABOUT US", to: "/about" },
    { label: "OUR TEAM", to: "/team" },
    { label: "CAREERS", to: "/careers" },
    { label: "JOBS", to: "/jobs" },
    { label: "CONTACT US", to: "/contact" },
    { label: "TERM OF USE", to: "/terms" },
    { label: "PRIVACY POLICY", to: "/privacy" },
    { label: "REFUND POLICY", to: "/refund" },
    { label: "COOKIES POLICY", to: "/cookies" },
    { label: "FAQ'S", to: "/faqs" },
  ];

  const FooterColumn = ({ title, items }) => (
    <div className="space-y-3">
      <h3 className="text-white font-bold text-sm uppercase tracking-wide mb-4">
        {title}
      </h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href="#"
              className="text-slate-400 text-sm hover:text-blue-400 transition-colors duration-300"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  return (
    <footer className="bg-slate-800 text-white py-10 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <FooterColumn title="Top Tutorials" items={topTutorials} />
          <FooterColumn
            title="Trending Technologies"
            items={trendingTechnologies}
          />
          <FooterColumn title="Certifications" items={certifications} />
          <FooterColumn title="Compilers & Editors" items={compilersEditors} />
        </div>

        <div className="border-t border-slate-600 pt-8 mb-8">
          <div className="flex flex-wrap justify-center items-center gap-4 text-sm">
            {footerLinks.map((link, index) => (
              <React.Fragment key={index}>
                <NavLink
                  to={link.to}
                  className="text-slate-400 hover:text-red-400 transition-colors duration-300"
                >
                  {link.label}
                </NavLink>
                {index < footerLinks.length - 1 && (
                  <span className="text-slate-500 hidden sm:inline">|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Brand, Social Icons, and App Store */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6 mb-8">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-slate-700 font-bold text-lg">BM</span>
            </div>
            <span className="text-white text-xl font-bold">BM Point</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors duration-300"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center hover:bg-red-500 transition-colors duration-300"
            >
              <Youtube size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 bg-slate-600 rounded-lg flex items-center justify-center hover:bg-pink-500 transition-colors duration-300"
            >
              <Instagram size={20} />
            </a>
          </div>

          {/* App Store Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="#">
              <img
                src="https://www.tutorialspoint.com/static/images/googleplay.svg"
                alt=""
              />
            </a>

            <a href="#">
              <img
                src="https://www.tutorialspoint.com/static/images/appstore.svg"
                alt=""
              />
            </a>
          </div>
        </div>

        {/* Company Description */}
        <div className="text-center">
          <p className="text-slate-400 text-sm leading-relaxed max-w-4xl mx-auto">
            Bhoomi Tech Point is a leading Ed Tech company striving to provide
            the best learning material on technical and non-technical subjects.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer1;
