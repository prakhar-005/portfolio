import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut", delay },
});

const ROLES = ["AI Engineer", "Full Stack Developer", "ML Practitioner"];

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-blue/5 blur-[120px]" />
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] rounded-full bg-accent-purple/5 blur-[100px]" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
          </span>
          <span className="text-xs font-mono text-text-muted tracking-wider uppercase">Open to opportunities</span>
        </motion.div>
        <motion.h1 {...fadeUp(0.2)} className="font-display font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight mb-4">
          Prakhar <span className="gradient-text">Malviya</span>
        </motion.h1>
        <motion.p {...fadeUp(0.35)} className="font-display text-xl md:text-2xl text-text-muted mb-6 font-medium">
          {ROLES.join(" · ")}
        </motion.p>
        <motion.p {...fadeUp(0.45)} className="font-body text-base md:text-lg text-text-muted max-w-2xl mx-auto leading-relaxed mb-10">
          Integrated M.Tech CS student passionate about building intelligent systems from deep learning models to production-ready full-stack applications.
        </motion.p>
        <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
          <a href="#projects" className="px-6 py-3 rounded-xl bg-accent-blue text-white font-medium text-sm hover:bg-blue-500 transition-colors duration-200 glow-blue">View My Work</a>
          <a href="#contact" className="px-6 py-3 rounded-xl border border-border text-text-muted hover:border-accent-blue hover:text-text-primary transition-all duration-200 text-sm font-medium">Get in Touch</a>
        </motion.div>
        <motion.div {...fadeUp(0.65)} className="flex items-center justify-center gap-5">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-text-muted hover:text-text-primary transition-colors duration-200"><SiGithub size={20} /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-text-muted hover:text-text-primary transition-colors duration-200"><FaLinkedinIn size={20} /></a>
        </motion.div>
      </div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }} className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted">
        <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
          <HiArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}