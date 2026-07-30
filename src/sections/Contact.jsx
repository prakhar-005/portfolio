import { motion } from "framer-motion";
import { SiGithub, SiLinkedinIn } from "react-icons/si";
import { HiMail } from "react-icons/hi";

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex items-center gap-3 mb-16"
        >
          <span className="text-xs font-mono text-accent-blue tracking-widest uppercase">
            05 — Contact
          </span>
          <div className="h-px flex-1 bg-border" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h2 className="font-display font-bold text-4xl md:text-5xl text-text-primary mb-6 leading-tight">
              Let's build something <span className="gradient-text">great together</span>
            </h2>
            <p className="text-text-muted leading-relaxed mb-8">
              I am currently open to internships, research collaborations, and full-time opportunities.
              Whether you have a project in mind or just want to connect, my inbox is always open.
            </p>

            <div className="flex flex-col gap-4">
              
                href="mailto:your@email.com"
                className="inline-flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:border-accent-blue/40 transition-colors duration-200">
                  <HiMail size={18} className="text-accent-blue" />
                </div>
                <span className="text-sm font-mono">your@email.com</span>
              </a>

              
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:border-accent-blue/40 transition-colors duration-200">
                  <SiGithub size={18} className="text-accent-blue" />
                </div>
                <span className="text-sm font-mono">github.com/yourusername</span>
              </a>

              
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-text-muted hover:text-text-primary transition-colors duration-200 group"
              >
                <div className="w-10 h-10 rounded-xl glass flex items-center justify-center group-hover:border-accent-blue/40 transition-colors duration-200">
                  <SiLinkedinIn size={18} className="text-accent-blue" />
                </div>
                <span className="text-sm font-mono">linkedin.com/in/yourusername</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            className="glass rounded-2xl p-8"
          >
            <div className="flex flex-col gap-4">
              <div>
                <label className="text-xs font-mono text-text-muted tracking-wider uppercase mb-2 block">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-bg-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors duration-200 font-body"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-text-muted tracking-wider uppercase mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full bg-bg-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors duration-200 font-body"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-text-muted tracking-wider uppercase mb-2 block">
                  Message
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full bg-bg-primary border border-border rounded-xl px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-blue transition-colors duration-200 font-body resize-none"
                />
              </div>

              <button
                type="button"
                className="w-full py-3 rounded-xl bg-accent-blue text-white text-sm font-medium hover:bg-blue-500 transition-colors duration-200 glow-blue mt-2"
              >
                Send Message
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}