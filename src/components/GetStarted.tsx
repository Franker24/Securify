/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { ShieldCheck, UserPlus, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GetStarted() {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const industries = [
    'fintech', 'healthcare', 'government', 'e-commerce', 'saas', 'other',
  ];

  return (
    <section className="flex min-h-screen flex-col items-center bg-black px-4 pb-20 pt-28 sm:px-6 md:px-10 md:pt-40">
      <div className="w-full max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 text-center sm:mb-12"
        >
          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
            <UserPlus className="h-6 w-6 text-white" />
          </div>
          <p className="section-label mb-4">onboarding</p>
          <h2 className="hero-title mb-4 text-4xl font-medium sm:text-5xl">
            initialize <br />
            your account.
          </h2>
          <p className="text-sm text-white/40">
            step {step} of 3 — security profile setup
          </p>
        </motion.div>

        <motion.div
          className="card-surface relative overflow-hidden p-6 sm:p-8 md:p-12"
          layout
        >
          <div
            className="absolute left-0 top-0 h-0.5 bg-gradient-to-r from-white/80 to-white/20 transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h3 className="text-lg font-medium text-white">select your industry segment</h3>
              <div className="grid grid-cols-2 gap-3">
                {industries.map((ind) => (
                  <button
                    key={ind}
                    type="button"
                    onClick={() => setStep(2)}
                    className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-left text-sm text-white/70 transition-all hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
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
              <h3 className="text-lg font-medium text-white">create your credentials</h3>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="admin email"
                  className="input-field lowercase"
                />
                <input
                  type="password"
                  placeholder="secure passphrase"
                  className="input-field lowercase"
                />
              </div>
              <button
                type="button"
                onClick={() => setStep(3)}
                className="btn-primary flex w-full items-center justify-center gap-2 rounded-xl py-4"
              >
                continue <ArrowRight className="h-4 w-4" />
              </button>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="py-6 text-center sm:py-8"
            >
              <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/10">
                <ShieldCheck className="h-10 w-10 text-emerald-500" />
              </div>
              <h3 className="mb-4 text-2xl font-medium text-white">protocol initialized.</h3>
              <p className="mb-10 text-sm leading-relaxed text-white/50">
                your secure environment is being provisioned. we&apos;ve sent a verification link to
                your secure inbox.
              </p>
              <button
                type="button"
                onClick={() => navigate('/portal')}
                className="btn-primary w-full rounded-xl py-4"
              >
                go to portal
              </button>
            </motion.div>
          )}
        </motion.div>

        <p className="mt-8 text-center text-[10px] uppercase leading-relaxed tracking-[0.2em] text-white/20">
          encryption provided by securify quantum core v2.4.0 <br />
          authorized access only
        </p>
      </div>
    </section>
  );
}
