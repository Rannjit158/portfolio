import React from "react";
import { Mail, Phone, Github, Linkedin, Twitter, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "ranjitrajbanshi158@email.com",
      link: "ranjitrajbanshi158@email.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "9824301087",
      
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      title: "GitHub",
      url: "https://github.com/Rannjit158",
      color: "hover:text-blue-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      url: "https://www.linkedin.com/in/ranjit-rajbanshi-a62856343/",
      color: "hover:text-blue-600"
    },
    {
      icon: Twitter,
      title: "Twitter",
      url: "https://twitter.com",
      color: "hover:text-blue-600"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <div className="space-y-10">
            {/* Intro */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Let's Connect</h3>
              <p className="text-gray-400 leading-relaxed">
                I'm always interested in hearing about new opportunities, interesting projects, or simply chatting tech.
              </p>
            </div>

            {/* Contact Items */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => {
                const Icon = contact.icon;
                return (
                  <a
                    key={index}
                    href={contact.link}
                    className="flex items-center gap-4 p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition"
                  >
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold">{contact.title}</h4>
                      <p className="text-gray-400">{contact.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110 ${social.color}`}
                      title={social.title}
                    >
                      <Icon className="h-6 w-6" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-900 p-8 rounded-lg shadow-lg">
            <form className="space-y-6">
              {/* Header */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold">Send Message</h3>
                <p className="text-gray-400">
                  Fill out the form and I'll reach out as soon as I can.
                </p>
              </div>

              {/* Name Fields */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Ram"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Rajbanshi"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="ram@example.com"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Project Discussion"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project or just say hello!"
                  rows={5}
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded resize-none focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-2 rounded flex items-center justify-center gap-2 transition"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;