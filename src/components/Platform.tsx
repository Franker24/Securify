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

      <div className="relative z-10 px-4 pb-24 pt-28 sm:px-6 md:px-10 md:pb-32 md:pt-40">
        <motion.div 
          className="mx-auto max-w-7xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.p className="section-label mb-4" variants={itemVariants}>infrastructure</motion.p>
          <motion.h2 
            className="hero-title mb-16 max-w-4xl text-5xl font-medium tracking-tighter md:mb-24 md:text-7xl lg:text-8xl"
            variants={itemVariants}
          >
            the platform <br /><span className="text-white/40">built for speed.</span>
          </motion.h2>
          
          <motion.div 
            className="mb-20 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mb-32 lg:grid-cols-4 lg:gap-5"
            variants={containerVariants}
          >
            {features.map((f, i) => (
              <motion.div 
                key={i} 
                className="card-surface group relative overflow-hidden p-6 transition-all hover:border-white/20 md:p-8"
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <div className="relative z-10 mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-colors group-hover:text-white">
                  {f.icon}
                </div>
                <h3 className="relative z-10 mb-2 text-lg font-medium">{f.title}</h3>
                <p className="relative z-10 text-sm leading-relaxed text-white/55">{f.desc}</p>
                
                {/* Futuristic grid pattern on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-700 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="h-px w-full bg-white/10 mb-32" variants={itemVariants} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
            <motion.div variants={itemVariants}>
              <p className="section-label mb-6">core infrastructure</p>
              <h3 className="hero-title mb-8 text-4xl font-medium md:text-5xl">redefining <br />modern architecture.</h3>
              <p className="max-w-md text-base leading-relaxed text-white/55 md:text-lg">
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

