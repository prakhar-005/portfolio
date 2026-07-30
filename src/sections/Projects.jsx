import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { SiGithub } from "react-icons/si";
import { PROJECTS } from "../constants";

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6">
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
            04 — Projects
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
          Things I have <span className="gradient-text">built</span>
        </motion.h2>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map(({ title, description, tags, github, live, status }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut", delay: i * 0.1 }}
              className="glass rounded-2xl p-6 hover:border-accent-blue/40 transition-all duration-300 group flex flex-col"
            >
              {/* Top row */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className={`text-xs font-mono px-2 py-1 rounded-md border ${
                    status === "In Progress"
                      ? "text-accent-purple border-accent-purple/30 bg-accent-purple/10"
                      : "text-green-400 border-green-400/30 bg-green-400/10"
                  }`}
                >
                  {status}
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="text-text-muted hover:text-text-primary transition-colors duration-200"
                  >
                    <SiGithub size={18} />
                  </a>
                  <a
                    href={live}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Live demo"
                    className="text-text-muted hover:text-accent-blue transition-colors duration-200"
                  >
                    <HiArrowUpRight size={18} />
                  </a>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-display font-semibold text-xl text-text-primary mb-3 group-hover:text-accent-blue transition-colors duration-200">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm text-text-muted leading-relaxed mb-6 flex-1">
                {description}
              </p>

              {/* Tags */}
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
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}