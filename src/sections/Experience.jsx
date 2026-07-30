import { motion } from "framer-motion";
import { EXPERIENCES } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6">
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
            03 — Experience
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
          My <span className="gradient-text">Journey</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2 hidden md:block" />

          <div className="flex flex-col gap-12">
            {EXPERIENCES.map(({ year, title, company, type, description, tags }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.15 }}
                className={`relative grid md:grid-cols-2 gap-8 ${
                  i % 2 === 0 ? "md:text-right" : ""
                }`}
              >
                {/* Dot on timeline */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full bg-accent-blue border-2 border-bg-primary -translate-x-1/2 hidden md:block" />

                {i % 2 === 0 ? (
                  <>
                    {/* Left side — content */}
                    <div className="glass rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300 md:mr-8">
                      <div className="flex items-center gap-2 mb-1 md:justify-end">
                        <span className="text-xs font-mono text-accent-purple">{type}</span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-text-primary mb-1">
                        {title}
                      </h3>
                      <p className="text-sm text-accent-blue mb-3">{company}</p>
                      <p className="text-sm text-text-muted leading-relaxed mb-4">
                        {description}
                      </p>
                      <div className="flex flex-wrap gap-2 md:justify-end">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-md bg-bg-primary text-text-muted text-xs font-mono border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right side — year */}
                    <div className="hidden md:flex items-center md:pl-8">
                      <span className="font-mono text-sm text-text-muted">{year}</span>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Left side — year */}
                    <div className="hidden md:flex items-center justify-end md:pr-8">
                      <span className="font-mono text-sm text-text-muted">{year}</span>
                    </div>

                    {/* Right side — content */}
                    <div className="glass rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300 md:ml-8 md:text-left">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-accent-purple">{type}</span>
                      </div>
                      <h3 className="font-display font-semibold text-lg text-text-primary mb-1">
                        {title}
                      </h3>
                      <p className="text-sm text-accent-blue mb-3">{company}</p>
                      <p className="text-sm text-text-muted leading-relaxed mb-4">
                        {description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-md bg-bg-primary text-text-muted text-xs font-mono border border-border"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}