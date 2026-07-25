"use client";

import { motion } from "framer-motion";
import {
  Cloud,
  Code2,
  Database,
  Sparkles,
  Terminal,
  Wrench,
} from "lucide-react";
import { skillCategories } from "@/lib/data";

const icons = [Code2, Terminal, Database, Cloud, Wrench, Sparkles];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-surface/40">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Skills
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tech Stack
          </h2>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="rounded-2xl border border-border bg-background/50 p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft text-accent">
                    <Icon size={18} />
                  </span>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                <motion.ul
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.li
                      key={skill}
                      variants={item}
                      whileHover={{ scale: 1.06, y: -2 }}
                      className="cursor-default rounded-full border border-border bg-surface px-3 py-1.5 text-xs text-muted transition hover:border-accent hover:text-accent hover:shadow-glow-sm sm:text-sm"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
