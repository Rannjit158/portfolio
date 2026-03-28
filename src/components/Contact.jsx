// components/Contact.jsx
import { useState } from "react";
import { personalInfo } from "../data/portfolioData";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPaperPlane,
  FaSpinner,
} from "react-icons/fa";

const channels = [
  {
    href: `mailto:${personalInfo.email}`,
    icon: FaEnvelope,
    label: "Email",
    val: personalInfo.email,
  },
  {
    href: personalInfo.linkedinHandle,
    icon: FaLinkedin,
    label: "LinkedIn",
    val: personalInfo.linkedinHandle,
    target: "_blank",
  },
  {
    href: personalInfo.githubHandle,
    icon: FaGithub,
    label: "GitHub",
    val: personalInfo.githubHandle,
    target: "_blank",
  },
  {
    href: personalInfo.whatsappHandle,
    icon: FaWhatsapp,
    label: "WhatsApp",
    val: personalInfo.whatsappHandle,
    target: "_blank",
  },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const emailjs = window.emailjs;
      await emailjs.send(
        personalInfo.emailjsServiceId,
        personalInfo.emailjsTemplateId,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_name: personalInfo.name,
        },
      );
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus(null), 6000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-28 relative z-10">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-[var(--muted)] font-mono">
            Get In Touch
          </span>
          <h2 className="text-4xl font-extrabold mt-3 mb-4">
            Let's build something{" "}
            <span className="text-[var(--accent)]">amazing together</span>
          </h2>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message
            and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* 2-COLUMN GRID */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* LEFT COLUMN: CONTACT CHANNELS */}
          <div className="flex flex-col gap-6">
            {channels.map((ch) => {
              const Icon = ch.icon;
              return (
                <a
                  key={ch.label}
                  href={ch.href}
                  target={ch.target}
                  rel="noreferrer"
                  className="
                    flex items-center gap-4 p-5 rounded-xl
                    border border-[var(--border)] bg-[var(--card)]
                    transition-all duration-300
                    hover:bg-[var(--card-h)]
                    hover:border-[rgba(0,217,163,0.2)]
                  "
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-[rgba(0,217,163,0.1)] border border-[rgba(0,217,163,0.2)] text-[var(--accent)] text-lg shrink-0">
                    <Icon size={20} />
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-[var(--muted)] font-mono mb-1">
                      {ch.label}
                    </div>
                    <div className="text-sm font-medium text-[var(--text)]">
                      {ch.val}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* RIGHT COLUMN: CONTACT FORM */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <InputField
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                />
                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <InputField
                label="Subject"
                name="subject"
                type="text"
                placeholder="Project enquiry"
                value={form.subject}
                onChange={handleChange}
              />
              <TextArea
                label="Message"
                name="message"
                placeholder="Tell me about your project..."
                value={form.message}
                onChange={handleChange}
              />

              {status === "success" && (
                <div className="px-4 py-3 rounded-lg text-sm font-mono border bg-[rgba(0,217,163,0.1)] border-[rgba(0,217,163,0.3)] text-[var(--accent)]">
                  ✓ Message sent! I'll get back to you within 24 hours.
                </div>
              )}

              {status === "error" && (
                <div className="px-4 py-3 rounded-lg text-sm font-mono border bg-[rgba(255,80,80,0.1)] border-[rgba(255,80,80,0.3)] text-red-400">
                  ✗ Failed to send. Please email me directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary inline-flex items-center gap-2"
              >
                {status === "sending" ? (
                  <>
                    <FaSpinner className="animate-spin" /> Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

// InputField component
function InputField({ label, name, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase tracking-wider text-[var(--muted)] font-mono">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="
          w-full px-4 py-3 rounded-lg
          bg-[var(--card)] border border-[var(--border)]
          text-sm text-[var(--text)]
          outline-none transition-all duration-300
          focus:border-[var(--accent)]
          focus:ring-2 focus:ring-[rgba(0,217,163,0.15)]
        "
      />
    </div>
  );
}

// TextArea component
function TextArea({ label, name, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[11px] uppercase tracking-wider text-[var(--muted)] font-mono">
        {label}
      </label>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
        className="
          w-full px-4 py-3 rounded-lg min-h-[140px] resize-none
          bg-[var(--card)] border border-[var(--border)]
          text-sm text-[var(--text)]
          outline-none transition-all duration-300
          focus:border-[var(--accent)]
          focus:ring-2 focus:ring-[rgba(0,217,163,0.15)]
        "
      />
    </div>
  );
}
