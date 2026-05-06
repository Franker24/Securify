/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from 'framer-motion';
import { Zap, Shield, Fingerprint, Eye, Globe } from 'lucide-react';
import { useRef } from 'react';

export default function Company() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yText = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const rotateGrid = useTransform(scrollYProgress, [0, 1], [2, -2]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section
      ref={containerRef}
      id="company"
      className="relative py-40 px-6 md:px-20 bg-[#050505] text-white min-h-screen overflow-hidden"
    >
      {/* Background Decor - Estética de Radar */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] border-[1px] border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100vw] h-[100vw] border-[1px] border-white/5 rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] border-[1px] border-white/10 rounded-full" />
      </div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-32">
          <motion.div className="lg:col-span-8" style={{ y: yText }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="h-px w-12 bg-indigo-500" />
              <span className="text-indigo-400 font-mono text-xs uppercase tracking-[0.4em]">03 / global entity</span>
            </div>
            <h2 className="text-[14vw] lg:text-[10rem] font-black leading-[0.8] tracking-tighter uppercase mb-12">
              we are <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white/50 to-white/10">securify</span>
            </h2>
          </motion.div>

          <motion.div className="lg:col-span-4 pb-4" variants={fadeInUp}>
            <p className="text-xl text-neutral-400 font-light leading-relaxed mb-8">
              our mission is simple: to make the internet a safer place for innovation. we believe privacy is a fundamental human right.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <Globe size={16} />
              </div>
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-colors cursor-pointer">
                <Fingerprint size={16} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bento Grid - Estilo Brutalista */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-40"
          style={{ rotate: rotateGrid }}
        >
          {/* Card 1: Fundada */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-2 h-[400px] bg-[#0a0a0a] border border-white/5 rounded-2xl p-10 flex flex-col justify-between group hover:border-indigo-500/50 transition-all duration-500 overflow-hidden relative"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-100 group-hover:text-indigo-500 transition-all duration-700">
              <Shield size={120} strokeWidth={0.5} />
            </div>
            <span className="text-xs font-mono text-white/30 uppercase tracking-[0.3em]">origin</span>
            <div>
              <h3 className="text-7xl font-bold mb-2">2018</h3>
              <p className="text-indigo-400 font-mono text-xs uppercase">headquarters in san francisco</p>
            </div>
          </motion.div>

          {/* Card 2: Uptime */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-1 h-[400px] bg-indigo-600 rounded-2xl p-10 flex flex-col justify-between items-center text-center group transition-transform hover:scale-[0.98]"
          >
            <Eye className="text-white/20" size={40} />
            <div className="space-y-2">
              <h3 className="text-6xl font-black">100%</h3>
              <p className="text-[10px] font-bold uppercase tracking-widest text-indigo-200">uptime stability</p>
            </div>
            <div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                whileInView={{ x: "0%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="w-full h-full bg-white"
              />
            </div>
          </motion.div>

          {/* Card 3: Team */}
          <motion.div
            variants={fadeInUp}
            className="md:col-span-1 h-[400px] bg-[#111] border border-white/5 rounded-2xl p-10 flex flex-col justify-between group relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20 grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700">
              <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800" alt="tech" className="w-full h-full object-cover" />
            </div>
            <div className="relative z-10">
              <h3 className="text-5xl font-bold">240+</h3>
              <p className="text-xs text-white/50 uppercase tracking-tighter mt-2">specialized engineers</p>
            </div>
            <Zap size={24} className="text-indigo-400 relative z-10" />
          </motion.div>
        </motion.div>

        {/* Values - Estética Minimalista Suave */}
        <div className="pt-20 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between mb-20 gap-8">
            <h3 className="text-4xl font-light italic">core_principles.</h3>
            <p className="max-w-xs text-white/30 text-xs uppercase tracking-widest leading-loose">
              we operate under a strictly non-negotiable set of rules that govern our data processing and human interaction.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {[
              { t: "transparency", d: "total openness with audit trails for every operation performed." },
              { t: "innovation", d: "40% of annual revenue dedicated to offensive security R&D." },
              { t: "privacy", d: "data silos designed to be unreachable even by our own root admins." }
            ].map((val, i) => (
              <div key={i} className="bg-[#050505] p-12 hover:bg-neutral-900 transition-colors duration-500 group">
                <span className="text-indigo-500 font-mono text-xs mb-8 block">0{i + 1}.</span>
                <h4 className="text-2xl font-bold mb-4 uppercase tracking-tighter group-hover:translate-x-2 transition-transform duration-300">{val.t}</h4>
                <p className="text-neutral-500 text-sm leading-relaxed">{val.d}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}