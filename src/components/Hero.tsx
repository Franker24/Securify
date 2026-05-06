/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black" id="hero">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_063509_7d167302-4fd4-480b-8260-18ab572333d4.mp4"
      />

      {/* Foreground Content Wrapper */}
      <div className="relative z-10 h-full w-full" id="content-wrapper">
        {/* Headlines */}
        <h1 className="hero-title absolute top-[18%] left-10 text-[13vw] font-medium text-white" id="title-protect">
          protect
        </h1>
        <h1 className="hero-title absolute top-[38%] right-10 text-[13vw] font-medium text-white" id="title-your">
          your
        </h1>
        <h1 className="hero-title absolute top-[58%] left-[28%] text-[13vw] font-medium text-white" id="title-data">
          data
        </h1>

        {/* Description & CTA */}
        <div className="absolute top-[46%] left-10 max-w-[240px] flex flex-col gap-8" id="description-group">
          <p className="text-[15px] leading-snug text-white/90" id="description">
            we can guarding your data with utmost care, empowering you with privacy everywhere
          </p>
          
        </div>

        {/* Stat Block: Top Right */}
        <div className="absolute top-[14%] right-6 flex flex-col items-end md:right-24" id="stat-top-right">
          <div className="flex items-center justify-end gap-3">
            <div className="hidden h-px w-24 rotate-[20deg] bg-white/40 md:block" />
            <span className="text-4xl font-medium tracking-tight md:text-5xl">+65k</span>
          </div>
          <span className="mt-1 text-right text-xs text-white/70 md:text-sm">startups use</span>
        </div>

        {/* Stat Block: Bottom Left */}
        <div className="absolute bottom-24 left-20" id="stat-bottom-left">
          <div className="flex items-center gap-3">
            <span className="text-5xl font-medium tracking-tight">+1.5b</span>
            <div className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
          </div>
          <span className="mt-1 block text-sm text-white/70">gb data was protected</span>
        </div>

        {/* Stat Block: Bottom Right */}
        <div className="absolute right-20 bottom-20 flex flex-col items-end" id="stat-bottom-right">
          <div className="flex items-center justify-end gap-3">
            <div className="hidden h-px w-24 rotate-[-20deg] bg-white/40 md:block" />
            <span className="text-5xl font-medium tracking-tight">+300k</span>
          </div>
          <span className="mt-1 text-right text-sm text-white/70">downloads</span>
        </div>

        {/* Bottom Gradient Overlay */}
        <div className="pointer-events-none absolute bottom-0 right-0 left-0 h-48 bg-gradient-to-b from-transparent to-black" />
      </div>
    </section>
  );
}
