import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { personalInfo } from "../data/portfolioData";
import emailjs from "@emailjs/browser";
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaPaperPlane,
  FaSpinner,
  FaFileDownload,
} from "react-icons/fa";
import { CV_OPEN_EVENT } from "../hooks/useCvDownload";
import Reveal from "./animations/Reveal";
import { Stagger, StaggerItem } from "./animations/Stagger";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCard from "./ui/AnimatedCard";
import AnimatedButton from "./ui/AnimatedButton";

const channels = [
  {
    href: `mailto:${personalInfo.email}`,
    icon: FaEnvelope,
    label: "Email",
    val: personalInfo.email,
  },
  {
    icon: FaFileDownload,
    label: "Curriculum Vitae",
    val: "View or download my CV",
    onClick: () => window.dispatchEvent(new CustomEvent(CV_OPEN_EVENT)),
  },
  {
    href: personalInfo.linkedin,
    icon: FaLinkedin,
    label: "LinkedIn",
    val: personalInfo.linkedinHandle,
    target: "_blank",
  },
  {
    href: personalInfo.github,
    icon: FaGithub,
    label: "GitHub",
    val: personalInfo.githubHandle,
    target: "_blank",
  },
  {
    href: personalInfo.whatsapp,
    icon: FaWhatsapp,
    label: "WhatsApp",
    val: personalInfo.whatsappHandle,
    target: "_blank",
  },
];

const STATUS_MSG = {
  success: (
    <div className="rounded-lg border border-[rgba(0,217,163,0.3)] bg-[rgba(0,217,163,0.1)] px-4 py-3 font-mono text-sm text-[var(--accent)]">
      ✓ Message sent! I'll get back to you within 24 hours.
    </div>
  ),
  error: (
    <div className="rounded-lg border border-[rgba(255,80,80,0.3)] bg-[rgba(255,80,80,0.1)] px-4 py-3 font-mono text-sm text-red-400">
      ✗ Failed to send. Please email me directly.
    </div>
  ),
  limit: (
    <div className="rounded-lg border border-[rgba(255,80,80,0.3)] bg-[rgba(255,80,80,0.1)] px-4 py-3 font-mono text-sm text-red-400">
      🚫 Limit reached: You can only send 3 messages per day. Try again
      tomorrow.
    </div>
  ),
};

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

  const getTodayKey = (email) => {
    const today = new Date().toISOString().split("T")[0];
    return `contact_limit_${email}_${today}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emailKey = form.email.trim().toLowerCase();
    const storageKey = getTodayKey(emailKey);

    let count = Number(localStorage.getItem(storageKey) || 0);

    if (count >= 3) {
      setStatus("limit");
      return;
    }

    setStatus("sending");

    try {
      await emailjs.send(
        personalInfo.emailjsServiceId,
        personalInfo.emailjsTemplateId,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          subject: form.subject,
          message: form.message,
          to_name: personalInfo.name,
        },
        personalInfo.emailjsPublicKey,
      );

      localStorage.setItem(storageKey, count + 1);

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus(null), 6000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="relative z-10 py-28">
      <div className="container mx-auto px-6">
        {/* HEADER */}
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's build something"
          accent="amazing together"
          description="Have a project in mind? I'd love to hear about it. Send me a message and I'll get back to you within 24 hours."
        />

        {/* GRID */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* LEFT */}
          <Stagger className="flex flex-col gap-6" staggerChildren={0.09}>
            {channels.map((ch) => {
              const Icon = ch.icon;
              const card = (
                <AnimatedCard tilt={4}>
                  <div className="flex items-center gap-4 rounded-xl border border-[var(--border)] bg-[var(--card)] p-5 transition-all duration-300 hover:border-[rgba(0,217,163,0.2)] hover:bg-[var(--card-h)]">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-[rgba(0,217,163,0.2)] bg-[rgba(0,217,163,0.1)] text-lg text-[var(--accent)]">
                      <Icon size={20} />
                    </div>
                    <div className="min-w-0">
                      <div className="mb-1 font-mono text-[11px] uppercase tracking-wider text-[var(--muted)]">
                        {ch.label}
                      </div>
                      <div className="truncate text-sm font-medium text-[var(--text)]">
                        {ch.val}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              );

              return (
                <StaggerItem key={ch.label}>
                  {ch.onClick ? (
                    <button
                      type="button"
                      onClick={ch.onClick}
                      className="block w-full cursor-pointer text-left"
                    >
                      {card}
                    </button>
                  ) : (
                    <a href={ch.href} target={ch.target} rel="noreferrer" className="block">
                      {card}
                    </a>
                  )}
                </StaggerItem>
              );
            })}
          </Stagger>

          {/* RIGHT */}
          <Reveal delay={0.1} variant="slideRight">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid gap-4 sm:grid-cols-2">
                <InputField
                  label="Your Name"
                  name="name"
                  type="text"
                  placeholder="Ram Prasad"
                  value={form.name}
                  onChange={handleChange}
                />

                <InputField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="ram@example.com"
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

              <AnimatePresence mode="wait">
                {status && status !== "sending" && (
                  <motion.div
                    key={status}
                    initial={{ opacity: 0, y: 8, height: 0 }}
                    animate={{ opacity: 1, y: 0, height: "auto" }}
                    exit={{ opacity: 0, y: -8, height: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {STATUS_MSG[status]}
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatedButton
                type="submit"
                magnetic={false}
                disabled={status === "sending"}
                wrapperClassName="w-full"
                className="w-full justify-center"
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
              </AnimatedButton>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* INPUT FIELD */
function InputField({ label, name, type, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="group flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] transition-colors duration-300 group-focus-within:text-[var(--accent)]">
          {label}
        </span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="w-full rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all duration-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(0,217,163,0.15)]"
        />
      </label>
    </div>
  );
}

/* TEXTAREA */
function TextArea({ label, name, placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="group flex flex-col gap-2">
        <span className="font-mono text-[11px] uppercase tracking-wider text-[var(--muted)] transition-colors duration-300 group-focus-within:text-[var(--accent)]">
          {label}
        </span>
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required
          className="min-h-[140px] w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--card)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all duration-300 focus:border-[var(--accent)] focus:ring-2 focus:ring-[rgba(0,217,163,0.15)]"
        />
      </label>
    </div>
  );
}
