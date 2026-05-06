/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Github, Twitter, Linkedin } from 'lucide-react';

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Mail, MessageSquare, Phone, MapPin } from 'lucide-react';

export default function Support() {
  return (
    <section id="support" className="pt-40 pb-24 px-10 bg-black min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="hero-title text-6xl md:text-8xl font-medium mb-8">
              get in <br /><span className="text-white/40">touch.</span>
            </h2>
            <p className="text-white/60 text-lg mb-12 max-w-md lowercase">
              our specialized security team is available 24/7 to help you navigate the complexities of data protection. reach out today.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold">email</p>
                  <p className="text-white text-sm">hello@securify.io</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold">live chat</p>
                  <p className="text-white text-sm">available in dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white/60" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold">phone</p>
                  <p className="text-white text-sm">+1 (888) SECURE-DATA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900/50 border border-white/10 rounded-[2rem] p-10 backdrop-blur-xl">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">name</label>
                  <input 
                    type="text" 
                    placeholder="john doe"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">email</label>
                  <input 
                    type="email" 
                    placeholder="john@company.com"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/20 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">subject</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white/60 focus:outline-none focus:border-white/20 transition-colors appearance-none lowercase">
                  <option>technical support</option>
                  <option>enterprise sales</option>
                  <option>partnership inquiry</option>
                  <option>billing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 font-bold ml-1">message</label>
                <textarea 
                  rows={4}
                  placeholder="how can we help you?"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/20 transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full bg-white text-black font-medium rounded-2xl py-5 hover:bg-neutral-200 transition-colors mt-4 lowercase"
              >
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

