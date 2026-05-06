/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef } from 'react';
import Hls from 'hls.js';
import { motion } from 'motion/react';

export default function Solutions() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const m3u8Url = "https://customer-cbeadsgr09pnsezs.cloudflarestream.com/12a9780eeb1ea015801a5f55cf2e9d3d/manifest/video.m3u8";

  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Native support (Safari)
        video.src = m3u8Url;
      } else if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(m3u8Url);
        hls.attachMedia(video);
      }
    }
  }, []);

  const solutions = [
    {
      name: "enterprise core",
      tag: "for scale",
      desc: "complete infrastructure protection for global organizations handling petabytes of sensitive intel."
    },
    {
      name: "fintech shield",
      tag: "compliance",
      desc: "security designed for pci-dss and banking regulations, keeping financial flows secure."
    },
    {
      name: "health grid",
      tag: "privacy",
      desc: "hipaa-ready data silos for healthcare providers and biotech research labs."
    }
  ];

  const testimonials = [
    {
      quote: "securify reduced our breach risk by 94% within the first quarter.",
      author: "alex rivers",
      role: "cto at neobank"
    },
    {
      quote: "the most intuitive security orchestration we've ever implemented.",
      author: "sarah chen",
      role: "head of infra at cloudscale"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  };

  return (
    <section id="solutions" className="relative bg-black border-t border-white/5 overflow-hidden">
      {/* Background Video (HLS) */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-30 pointer-events-none"
      />
      
      {/* Subtle overlay to reduce "whiteness" */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

      <div className="relative z-10 pt-40 pb-32 px-10">
        <motion.div 
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12" variants={itemVariants}>
            <h2 className="hero-title text-6xl md:text-9xl font-medium tracking-tighter">
              tailored <br /><span className="text-white/40">solutions.</span>
            </h2>
            <p className="max-w-md text-white/50 text-lg leading-relaxed lowercase lg:text-right">
              we understand every industry has unique risks. our solutions are engineered to meet the highest standards of your specific niche.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-40" variants={containerVariants}>
            {solutions.map((s, i) => (
              <motion.div 
                key={i} 
                className="relative group p-10 rounded-[3rem] bg-white/5 hover:bg-white/[0.08] border border-white/10 hover:border-white/20 transition-all duration-500 backdrop-blur-md"
                variants={itemVariants}
                whileHover={{ y: -10 }}
              >
                <span className="text-[10px] tracking-widest uppercase text-white/30 font-bold mb-6 block">
                  [{s.tag}]
                </span>
                <h3 className="text-4xl font-medium mb-8 lowercase group-hover:text-white transition-colors">{s.name}</h3>
                <p className="text-white/50 text-sm leading-relaxed lowercase mb-10">{s.desc}</p>
                <div className="h-px w-full bg-white/10 group-hover:bg-white/30 transition-colors" />
                
                {/* Visual accent */}
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-1 bg-white group-hover:w-1/2 transition-all duration-500 rounded-full blur-[2px]" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-12" variants={containerVariants}>
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                className="p-12 rounded-[3.5rem] bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 flex flex-col justify-between h-80 backdrop-blur-lg group hover:border-white/20 transition-colors"
                variants={itemVariants}
              >
                <p className="text-2xl font-medium italic lowercase leading-tight group-hover:text-white transition-colors">"{t.quote}"</p>
                <div>
                  <p className="text-white font-medium lowercase">{t.author}</p>
                  <p className="text-white/40 text-xs uppercase tracking-widest mt-1">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

