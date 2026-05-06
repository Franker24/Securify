/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, UserPlus, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function GetStarted() {
  const [step, setStep] = useState(1);

  const industries = [
    "fintech", "healthcare", "government", "e-commerce", "saas", "other"
  ];

  return (
    <section className="min-h-screen bg-black pt-40 pb-20 px-10 flex flex-col items-center">
      <div className="max-w-xl w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-white/10">
            <UserPlus className="w-6 h-6 text-white" />
          </div>
          <h2 className="hero-title text-5xl font-medium mb-4">initialize <br />your account.</h2>
          <p className="text-white/40 lowercase">step {step} of 3 — security profile setup</p>
        </motion.div>

        <motion.div 
          className="bg-neutral-900/50 border border-white/10 rounded-[2.5rem] p-8 md:p-12 backdrop-blur-xl relative overflow-hidden"
          layout
        >
          {/* Progress bar */}
          <div className="absolute top-0 left-0 h-1 bg-white transition-all duration-500" style={{ width: `${(step/3)*100}%` }} />

          {step === 1 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
              <h3 className="text-xl font-medium lowercase">select your industry segment</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <button 
                    key={ind}
                    onClick={() => setStep(2)}
                    className="p-4 rounded-2xl border border-white/5 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-sm text-white/70 hover:text-white lowercase text-left"
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-xl font-medium lowercase">create your credentials</h3>
              <div className="space-y-4">
                <input 
                  type="email" 
                  placeholder="admin email"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/20 transition-colors lowercase"
                />
                <input 
                  type="password" 
                  placeholder="secure passphrase"
                  className="w-full bg-white/5 border border-white/10 rounded-2xl p-4 text-white focus:outline-none focus:border-white/20 transition-colors lowercase"
                />
              </div>
              <button 
                onClick={() => setStep(3)}
                className="w-full bg-white text-black font-medium rounded-2xl py-5 flex items-center justify-center gap-2 hover:bg-neutral-200 transition-colors lowercase"
              >
                continue <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-center py-8"
            >
              <div className="w-20 h-20 bg-green-500/20 border border-green-500/30 rounded-full flex items-center justify-center mx-auto mb-8">
                <ShieldCheck className="w-10 h-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-medium mb-4 lowercase">protocol initialized.</h3>
              <p className="text-white/50 text-sm mb-10 lowercase leading-relaxed">
                your secure environment is being provisioned. we've sent a verification link to your secure inbox.
              </p>
              <button 
                className="w-full bg-neutral-800 text-white font-medium rounded-2xl py-5 hover:bg-neutral-700 transition-colors lowercase"
              >
                go to portal
              </button>
            </motion.div>
          )}
        </motion.div>
        
        <p className="mt-8 text-center text-xs text-white/20 uppercase tracking-widest leading-relaxed">
          encryption provided by securify quantum core v2.4.0 <br />
          authorized access only
        </p>
      </div>
    </section>
  );
}
