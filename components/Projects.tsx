"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close modal"
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 16, scale: 0.96 }}
        className="relative z-10 max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-2xl border border-border bg-surface p-6 shadow-glow sm:p-8"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 text-muted transition hover:bg-accent-soft hover:text-accent"
        >
          <X size={18} />
        </button>
        <h3
          id="project-modal-title"
          className="mb-2 pr-10 text-2xl font-bold text-foreground"
        >
          {project.title}
        </h3>
        <p className="mb-5 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="mb-5 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background px-3 py-1 text-xs text-accent"
            >
              {t}
            </span>
          ))}
        </div>
        <ul className="space-y-2">
          {project.details.map((d) => (
            <li key={d} className="flex gap-2 text-sm text-muted">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
              {d}
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="projects" className="section-padding bg-surface/40">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Projects
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Selected Work
          </h2>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group flex flex-col rounded-2xl border border-border bg-background/60 p-6 transition hover:border-accent/40 hover:shadow-glow-sm"
            >
              <h3 className="mb-3 text-xl font-semibold text-foreground group-hover:text-accent">
                {project.title}
              </h3>
              <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
                {project.description}
              </p>
              <div className="mb-5 flex flex-wrap gap-2">
                {project.tech.slice(0, 4).map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted"
                  >
                    {t}
                  </span>
                ))}
                {project.tech.length > 4 && (
                  <span className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted">
                    +{project.tech.length - 4}
                  </span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="inline-flex items-center gap-2 self-start text-sm font-medium text-accent transition hover:gap-3"
              >
                View Details
                <ExternalLink size={14} />
              </button>
            </motion.article>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
