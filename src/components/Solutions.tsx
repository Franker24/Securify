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

      <div className="relative z-10 px-4 pb-24 pt-28 sm:px-6 md:px-10 md:pb-32 md:pt-40">
        <motion.div 
          className="mx-auto max-w-7xl"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div className="mb-16 flex flex-col items-start justify-between gap-8 md:mb-24 lg:flex-row lg:items-end lg:gap-12" variants={itemVariants}>
            <div>
              <p className="section-label mb-4">industry</p>
              <h2 className="hero-title text-5xl font-medium tracking-tighter md:text-7xl lg:text-8xl">
                tailored <br /><span className="text-white/40">solutions.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-white/50 lg:text-right md:text-lg">
              we understand every industry has unique risks. our solutions are engineered to meet the highest standards of your specific niche.
            </p>
          </motion.div>

          <motion.div className="mb-20 grid grid-cols-1 gap-5 md:mb-32 md:grid-cols-3 md:gap-6" variants={containerVariants}>
            {solutions.map((s, i) => (
              <motion.div 
                key={i} 
                className="card-surface group relative p-8 transition-all hover:border-white/20 md:p-10"
                variants={itemVariants}
                whileHover={{ y: -6 }}
              >
                <span className="section-label mb-5 block">{s.tag}</span>
                <h3 className="mb-5 text-2xl font-medium transition-colors group-hover:text-white md:text-3xl">{s.name}</h3>
                <p className="mb-8 text-sm leading-relaxed text-white/50">{s.desc}</p>
                <div className="h-px w-full bg-white/10 transition-colors group-hover:bg-white/25" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6" variants={containerVariants}>
            {testimonials.map((t, i) => (
              <motion.div 
                key={i} 
                className="card-surface flex min-h-[280px] flex-col justify-between p-8 transition-colors hover:border-white/20 md:p-10"
                variants={itemVariants}
              >
                <p className="text-xl font-medium leading-snug text-white/90 md:text-2xl">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <p className="font-medium text-white">{t.author}</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{t.role}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

