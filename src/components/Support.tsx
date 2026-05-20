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
    <section id="support" className="flex min-h-screen items-center bg-black px-4 pb-24 pt-28 sm:px-6 md:px-10 md:pt-40">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <p className="section-label mb-4">contact</p>
            <h2 className="hero-title mb-8 text-5xl font-medium md:text-7xl lg:text-8xl">
              get in <br /><span className="text-white/40">touch.</span>
            </h2>
            <p className="mb-12 max-w-md text-base leading-relaxed text-white/55">
              our specialized security team is available 24/7 to help you navigate the complexities of data protection. reach out today.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Mail className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold">email</p>
                  <p className="text-white text-sm">hello@securify.io</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <MessageSquare className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold">live chat</p>
                  <p className="text-white text-sm">available in dashboard</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                  <Phone className="h-5 w-5 text-white/60" />
                </div>
                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest font-bold">phone</p>
                  <p className="text-white text-sm">+1 (888) SECURE-DATA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-surface p-6 sm:p-8 md:p-10">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-semibold uppercase tracking-widest text-white/40">name</label>
                  <input type="text" placeholder="john doe" className="input-field" />
                </div>
                <div className="space-y-2">
                  <label className="ml-1 text-xs font-semibold uppercase tracking-widest text-white/40">email</label>
                  <input type="email" placeholder="john@company.com" className="input-field" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="ml-1 text-xs font-semibold uppercase tracking-widest text-white/40">subject</label>
                <select className="input-field appearance-none">
                  <option>technical support</option>
                  <option>enterprise sales</option>
                  <option>partnership inquiry</option>
                  <option>billing</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="ml-1 text-xs font-semibold uppercase tracking-widest text-white/40">message</label>
                <textarea
                  rows={4}
                  placeholder="how can we help you?"
                  className="input-field resize-none"
                />
              </div>
              <button type="submit" className="btn-primary mt-2 w-full rounded-xl py-4">
                send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

