/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Shield, Zap, Lock, Cpu, Globe, Server, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export default function Platform() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  const features = [
    {
      title: "quantum encryption",
      desc: "military-grade protection for every byte of your enterprise data.",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "real-time monitoring",
      desc: "detect anomalies before they become threats with ai-driven insights.",
      icon: <Zap className="w-6 h-6" />
    },
    {
      title: "zero trust architecture",
      desc: "never trust, always verify. the foundation of modern security.",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "automated recovery",
      desc: "instant restoration systems to keep your business running 24/7.",
      icon: <Cpu className="w-6 h-6" />
    }
  ];

  const coreModules = [
    {
      title: "global data mesh",
      desc: "securely distribute and sync data across 60+ regions with millisecond latency.",
      icon: <Globe className="w-5 h-5" />
    },
    {
      title: "sovereign cloud",
      desc: "localized data residency and compliance for strict government requirements.",
      icon: <Server className="w-5 h-5" />
    },
    {
      title: "verified identity",
      desc: "blockchain-backed identity verification for absolute access control.",
      icon: <CheckCircle2 className="w-5 h-5" />
    }
  ];

  return (
    <section id="platform" className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-20 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260322_013248_a74099a8-be2b-4164-a823-eddd5e149fa1.mp4"
      />
      
      {/* Scanline Effect */}
      <div className="scanline" />

      <div className="relative z-10 pt-40 pb-32 px-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 
            className="hero-title text-6xl md:text-9xl font-medium mb-24 max-w-4xl tracking-tighter"
            variants={itemVariants}
          >
            the platform <br /><span className="text-white/40">built for speed.</span>
          </motion.h2>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32"
            variants={containerVariants}
          >
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                className="group p-8 rounded-[2.5rem] bg-neutral-900/40 border border-white/5 hover:border-white/20 transition-all backdrop-blur-sm relative overflow-hidden"
                variants={itemVariants}
                whileHover={{ y: -10, backgroundColor: "rgba(38, 38, 38, 0.6)" }}
              >
                <div className="mb-8 w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-white/60 group-hover:text-white transition-colors relative z-10">
                  {f.icon}
                </div>
                <h3 className="text-xl font-medium mb-3 lowercase relative z-10">{f.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed lowercase relative z-10">{f.desc}</p>
                
                {/* Futuristic grid pattern on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="h-px w-full bg-white/10 mb-32" variants={itemVariants} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={itemVariants}>
              <p className="text-xs uppercase tracking-[0.3em] font-bold text-white/30 mb-8">[ core infrastructure ]</p>
              <h3 className="hero-title text-5xl font-medium mb-10">redefining <br />modern architecture.</h3>
              <p className="text-white/60 text-lg leading-relaxed lowercase max-w-md">
                our infrastructure is built on a distributed network of secure nodes, providing unparalleled resilience and cryptographic proof of integrity for every operation.
              </p>
            </motion.div>
            <motion.div className="space-y-12" variants={containerVariants}>
              {coreModules.map((m, i) => (
                <motion.div key={i} className="flex gap-8 group" variants={itemVariants}>
                  <div className="pt-1 text-white/40 group-hover:text-white transition-colors">
                    {m.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-medium mb-3 lowercase">{m.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed lowercase">{m.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

