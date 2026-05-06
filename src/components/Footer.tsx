/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Twitter, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="pt-32 pb-12 px-10 bg-black text-white border-t border-white/5 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-12 mb-24">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <svg viewBox="0 0 256 256" className="h-6 w-6 fill-white">
                <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" />
              </svg>
              <span className="text-xl font-medium tracking-tight">securify</span>
            </div>
            <p className="max-w-xs text-white/50 text-sm leading-relaxed lowercase mb-8">
              guarding your data with utmost care, empowering you with privacy everywhere.
            </p>
            <div className="flex gap-4">
              <Twitter className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-white/40 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
          
          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/30 font-bold mb-6">resources</h4>
            <ul className="space-y-4 text-sm text-white/60 lowercase">
              <li><Link to="/platform" className="hover:text-white transition-colors">documentation</Link></li>
              <li><Link to="/solutions" className="hover:text-white transition-colors">api reference</Link></li>
              <li className="hover:text-white transition-colors cursor-pointer">status</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-widest text-white/30 font-bold mb-6">support</h4>
            <ul className="space-y-4 text-sm text-white/60 lowercase">
              <li><Link to="/support" className="hover:text-white transition-colors">help center</Link></li>
              <li className="hover:text-white transition-colors cursor-pointer">community</li>
              <li><Link to="/support" className="hover:text-white transition-colors">contact us</Link></li>
            </ul>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <h4 className="text-xs uppercase tracking-widest text-white/30 font-bold mb-6">legal</h4>
            <ul className="space-y-4 text-sm text-white/60 lowercase">
              <li className="hover:text-white transition-colors cursor-pointer">privacy policy</li>
              <li className="hover:text-white transition-colors cursor-pointer">terms of service</li>
              <li className="hover:text-white transition-colors cursor-pointer">cookie settings</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="text-[10px] text-white/20 uppercase tracking-[0.2em]">© 2026 securify technologies inc.</span>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-[0.2em]">
            <span>made for the dreamers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
