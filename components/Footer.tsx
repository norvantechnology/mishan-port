"use client";

import { Mail } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "@/components/SocialIcons";

const socials = [
  { href: siteConfig.socials.email, icon: Mail, label: "Email" },
  { href: siteConfig.socials.linkedin, icon: LinkedinIcon, label: "LinkedIn" },
  { href: siteConfig.socials.github, icon: GithubIcon, label: "GitHub" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border section-padding py-10">
      <div className="container-narrow flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="text-sm text-muted">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mt-1 text-xs text-muted/70">Built with Next.js</p>
        </div>
        <div className="flex items-center gap-4">
          {socials.map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              aria-label={label}
              className="text-muted transition hover:text-accent"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
