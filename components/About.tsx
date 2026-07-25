"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Globe2, Languages, MapPin } from "lucide-react";
import { siteConfig, stats } from "@/lib/data";

function Counter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.max(1, Math.ceil(value / 40));
    const id = setInterval(() => {
      current = Math.min(current + step, value);
      setCount(current);
      if (current >= value) clearInterval(id);
    }, 30);
    return () => clearInterval(id);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="section-padding">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
        >
          <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">
            Who I Am
          </h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="text-base leading-relaxed text-muted sm:text-lg"
          >
            {siteConfig.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-start gap-3 text-muted">
              <MapPin className="mt-0.5 shrink-0 text-accent" size={18} />
              <div>
                <p className="text-sm text-muted">Location</p>
                <p className="font-medium text-foreground">{siteConfig.location}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-muted">
              <Languages className="mt-0.5 shrink-0 text-accent" size={18} />
              <div>
                <p className="text-sm text-muted">Languages</p>
                <p className="font-medium text-foreground">
                  {siteConfig.languages.join(", ")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 text-muted">
              <Globe2 className="mt-0.5 shrink-0 text-accent" size={18} />
              <div>
                <p className="text-sm text-muted">Focus</p>
                <p className="font-medium text-foreground">MERN & Cloud</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-3"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-surface/60 px-6 py-8 text-center"
            >
              <p className="mb-2 text-3xl font-bold text-accent sm:text-4xl">
                <Counter
                  value={stat.value}
                  suffix={stat.suffix}
                  inView={inView}
                />
              </p>
              <p className="text-sm text-muted">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
