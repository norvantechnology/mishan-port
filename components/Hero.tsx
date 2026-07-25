"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const socials = [
  { href: siteConfig.socials.email, icon: Mail, label: "Email" },
  { href: siteConfig.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.socials.github, icon: GithubIcon, label: "GitHub" },
];

export default function Hero() {
  const [typed, setTyped] = useState("");
  const full = siteConfig.title;

  useEffect(() => {
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) clearInterval(id);
    }, 40);
    return () => clearInterval(id);
  }, [full]);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden section-padding pt-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] opacity-40" />
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" />
        <div className="absolute -right-20 bottom-20 h-80 w-80 rounded-full bg-emerald-600/10 blur-[120px]" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[90px]" />
      </div>

      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Portfolio
          </p>
          <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mb-6 min-h-[2rem] text-lg text-accent sm:text-xl md:text-2xl">
            {typed}
            <span className="ml-0.5 inline-block h-5 w-0.5 animate-pulse bg-accent align-middle sm:h-6" />
          </p>
          <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {siteConfig.intro}
          </p>

          <div className="mb-12 flex flex-wrap gap-4">
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("#projects")}
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-background shadow-glow transition hover:shadow-glow-sm"
            >
              View Projects
            </motion.button>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => scrollTo("#contact")}
              className="rounded-lg border border-border bg-transparent px-6 py-3 text-sm font-semibold text-foreground transition hover:border-accent hover:shadow-glow-sm"
            >
              Contact Me
            </motion.button>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ href, icon: Icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={label}
                whileHover={{ scale: 1.15, y: -2 }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition hover:border-accent hover:text-accent hover:shadow-glow-sm"
              >
                <Icon size={18} />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
