import { motion } from "framer-motion";
import { STATS } from "../constants";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const fadeLeft = (delay = 0) => ({
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const fadeRight = (delay = 0) => ({
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

export default function About() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Section label */}
        <motion.div
          {...fadeUp(0.1)}
          viewport={{ once: true }}
          whileInView="animate"
          initial="initial"
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-accent-blue tracking-widest uppercase">
            01 — About
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — Bio */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: -30 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut" } },
            }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
              Building at the intersection of{" "}
              <span className="gradient-text">AI and Engineering</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-4">
              I am an Integrated M.Tech Computer Science student with a deep interest in
              Artificial Intelligence, Machine Learning, and Full Stack Development. I enjoy
              turning complex problems into elegant, production-ready solutions.
            </p>
            <p className="text-text-muted leading-relaxed mb-8">
              Whether it is training a deep learning model, designing a REST API, or crafting
              a responsive UI, I bring the same attention to detail and engineering mindset
              to every layer of the stack.
            </p>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent-blue hover:text-blue-400 transition-colors duration-200 group"
            >
              Let's work together
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
          </motion.div>

          {/* Right — Stats */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0, x: 30 },
              animate: { opacity: 1, x: 0, transition: { duration: 0.7, ease: "easeOut", delay: 0.2 } },
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              {STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="glass rounded-2xl p-6 hover:border-accent-blue/40 transition-colors duration-300"
                >
                  <div className="font-display font-bold text-4xl gradient-text mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-text-muted">{label}</div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
    </div>
    </section>
  );
}