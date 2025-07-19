import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", formData);
    alert("Message sent successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center my-6 border-b pb-2">
        Contact BM Point
      </h2>

      {/* <div className="w-full mb-6">
        <iframe
          title="Bhoomi Techzone Location"
          src="https://www.google.com/maps/embed?pb=!1m18!..." // Add Bhoomi Techzone's actual location here
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div> */}
      {/* <div className="w-full h-72 mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0354345473183!2d77.37889457554252!3d28.628700075666796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef287f5311e9%3A0x66c6cbb28edcd647!2sBhoomi%20Techzone%20Pvt.%20Ltd.(BTPL)%20%7C%20Best%20Website%20Designing%20%26%20SEO%20Company%20in%20Noida%2C%20Delhi-NCR%2C%20India!5e0!3m2!1sen!2sin!4v1752927570796!5m2!1sen!2sin"
          width="600"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div> */}
      <div className="w-full h-72 mb-6">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0354345473183!2d77.37889457554252!3d28.628700075666796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef287f5311e9%3A0x66c6cbb28edcd647!2sBhoomi%20Techzone%20Pvt.%20Ltd.(BTPL)%20%7C%20Best%20Website%20Designing%20%26%20SEO%20Company%20in%20Noida%2C%20Delhi-NCR%2C%20India!5e0!3m2!1sen!2sin!4v1752927570796!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div className="text-sm text-gray-600 mb-6 text-center">
        Bhoomi Techzone Pvt. Ltd., 4th Floor, Incor9 Building, Plot No: 123,
        Sector 10, Noida, Uttar Pradesh - 201301, INDIA
        <br />
        <span className="text-green-600 font-medium">
          For business inquiries, contact us at{" "}
          <a href="mailto:info@bhoomitechzone.com" className="underline">
            info@bhoomitechzone.com
          </a>
        </span>
      </div>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="border rounded px-3 py-2 col-span-1 md:col-span-2"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email (required)"
          className="border rounded px-3 py-2 col-span-1 md:col-span-2"
          required
        />
        <input
          type="text"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          placeholder="Subject"
          className="border rounded px-3 py-2 col-span-1 md:col-span-2"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Message (required)"
          rows="5"
          className="border rounded px-3 py-2 col-span-1 md:col-span-2"
          required
        ></textarea>

        <div className="col-span-1 md:col-span-2 flex items-center gap-2 mt-2">
          <input type="checkbox" required /> <span>I am human</span>
        </div>

        <button
          type="submit"
          className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 mt-4 col-span-1 md:col-span-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
