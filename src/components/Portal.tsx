/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Shield, Activity, Lock, Bell, Settings, LogOut } from 'lucide-react';
import { Link } from 'react-router-dom';

const stats = [
  { label: 'threats blocked', value: '12,847', icon: Shield },
  { label: 'uptime', value: '99.99%', icon: Activity },
  { label: 'encrypted assets', value: '2.4 TB', icon: Lock },
];

const recentActivity = [
  { event: 'access granted — admin@corp.io', time: '2 min ago', status: 'success' },
  { event: 'anomaly scan completed — region us-east', time: '14 min ago', status: 'info' },
  { event: 'policy update deployed — zero trust v3', time: '1 hr ago', status: 'success' },
];

export default function Portal() {
  return (
    <section className="min-h-screen bg-black px-4 pb-16 pt-28 sm:px-6 md:px-10 md:pt-36">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div>
            <p className="section-label mb-3">secure dashboard</p>
            <h1 className="hero-title text-4xl font-medium sm:text-5xl md:text-6xl">
              your portal
            </h1>
            <p className="mt-3 max-w-md text-sm text-white/50">
              environment provisioned and active. monitor security metrics in real time.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-white/20 hover:text-white"
              aria-label="Notifications"
            >
              <Bell className="h-5 w-5" />
            </button>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-white/20 hover:text-white"
              aria-label="Settings"
            >
              <Settings className="h-5 w-5" />
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2.5 text-sm text-white/60 transition-colors hover:border-white/20 hover:text-white"
            >
              <LogOut className="h-4 w-4" />
              exit
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3"
        >
          {stats.map(({ label, value, icon: Icon }) => (
            <div key={label} className="card-surface p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-white/70">
                <Icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-semibold tracking-tight text-white">{value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-white/40">{label}</p>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="card-surface overflow-hidden"
        >
          <div className="border-b border-white/10 px-6 py-5">
            <h2 className="text-lg font-medium text-white">recent activity</h2>
            <p className="text-sm text-white/40">live security event stream</p>
          </div>
          <ul className="divide-y divide-white/5">
            {recentActivity.map((item) => (
              <li
                key={item.event}
                className="flex flex-col gap-2 px-6 py-5 transition-colors hover:bg-white/[0.02] sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex items-start gap-3">
                  <span
                    className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${
                      item.status === 'success' ? 'bg-emerald-500' : 'bg-sky-500'
                    }`}
                  />
                  <span className="text-sm text-white/80">{item.event}</span>
                </div>
                <span className="text-xs text-white/30 sm:pl-5">{item.time}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <p className="mt-8 text-center text-[10px] uppercase tracking-[0.2em] text-white/20">
          securify quantum core v2.4.0 — session encrypted
        </p>
      </div>
    </section>
  );
}
