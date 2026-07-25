"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-10"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Education
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Academic Background
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="flex gap-4 rounded-2xl border border-border bg-surface/50 p-6"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent">
                <GraduationCap size={20} />
              </span>
              <div>
                <h3 className="mb-1 font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm text-muted">{item.institution}</p>
                <p className="mt-1 text-xs text-accent">{item.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
