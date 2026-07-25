"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const socials = [
  { href: siteConfig.socials.email, icon: Mail, label: "Email" },
  { href: siteConfig.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.socials.github, icon: GithubIcon, label: "GitHub" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
    e.currentTarget.reset();
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-padding bg-surface/40">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mb-3 text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s Build Something Great
          </h2>
          <p className="mx-auto max-w-xl text-muted">
            Have a project in mind? Drop a message — I&apos;ll get back to you
            soon.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-5"
          >
            <div>
              <label htmlFor="name" className="mb-2 block text-sm text-muted">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:shadow-glow-sm"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm text-muted">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:shadow-glow-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none transition focus:border-accent focus:shadow-glow-sm"
                placeholder="Tell me about your project..."
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background shadow-glow transition hover:shadow-glow-sm"
            >
              <Send size={16} />
              Send Message
            </motion.button>
            {submitted && (
              <p className="text-sm text-accent" role="status">
                Thanks! This form is front-end only — email me directly for now.
              </p>
            )}
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center space-y-6"
          >
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Mail size={18} />
              </span>
              <div>
                <p className="text-sm text-muted">Email</p>
                <p className="font-medium text-foreground">{siteConfig.email}</p>
              </div>
            </a>
            <a
              href={`tel:${siteConfig.phone}`}
              className="flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4 transition hover:border-accent"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <Phone size={18} />
              </span>
              <div>
                <p className="text-sm text-muted">Phone</p>
                <p className="font-medium text-foreground">{siteConfig.phone}</p>
              </div>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-border bg-background/50 p-4">
              <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <MapPin size={18} />
              </span>
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="font-medium text-foreground">
                  {siteConfig.location}
                </p>
              </div>
            </div>

            <div className="flex gap-4 pt-2">
              {socials.map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent hover:shadow-glow-sm"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
