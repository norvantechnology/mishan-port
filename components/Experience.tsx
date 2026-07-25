"use client";

import { motion } from "framer-motion";
import { experiences } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mb-12"
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Experience
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Work History
          </h2>
        </motion.div>

        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute left-3 top-2 origin-top md:left-1/2 md:-translate-x-px"
            style={{
              width: 2,
              height: "calc(100% - 1rem)",
              background:
                "linear-gradient(to bottom, var(--accent), transparent)",
            }}
          />

          <ul className="space-y-12">
            {experiences.map((exp, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.li
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative grid md:grid-cols-2 md:gap-10"
                >
                  <div
                    className={`absolute left-3 top-2 z-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background md:left-1/2 ${
                      isLeft ? "" : ""
                    }`}
                  />

                  <div
                    className={`${
                      isLeft
                        ? "md:col-start-1 md:pr-10 md:text-right"
                        : "md:col-start-2 md:pl-10"
                    } ml-10 md:ml-0`}
                  >
                    <p className="mb-1 text-sm text-accent">{exp.period}</p>
                    <h3 className="text-xl font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="mb-4 text-sm text-muted">
                      {exp.company}, {exp.location}
                    </p>
                    <ul
                      className={`space-y-2 text-sm leading-relaxed text-muted ${
                        isLeft ? "md:ml-auto" : ""
                      }`}
                    >
                      {exp.highlights.map((h) => (
                        <li
                          key={h}
                          className={`flex gap-2 ${
                            isLeft ? "md:flex-row-reverse" : ""
                          }`}
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
