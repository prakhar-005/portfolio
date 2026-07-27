import { motion } from "framer-motion";
import { SKILLS } from "../constants";

export default function Skills() {
  return (
    <section id="skills" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-accent-blue tracking-widest uppercase">
            02 — Skills
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-16 max-w-xl"
        >
          Tools I work <span className="gradient-text">with</span>
        </motion.h2>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map(({ category, items }, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.08 }}
              className="glass rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300 group"
            >
              <h3 className="font-display font-semibold text-sm text-accent-blue tracking-wider uppercase mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1 rounded-lg bg-bg-primary text-text-muted text-sm font-mono border border-border group-hover:border-accent-blue/20 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}