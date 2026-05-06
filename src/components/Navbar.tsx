/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navLinks = ["platform", "solutions", "company", "support"];
  const navigate = useNavigate();

  return (
    <nav className="absolute top-0 right-0 left-0 z-20 flex items-center justify-between px-10 pt-6" id="navbar">
      {/* Left Pill: Logo & Brand */}
      <Link to="/" className="flex items-center gap-2 rounded-full bg-neutral-900/90 py-3 pl-4 pr-6 backdrop-blur" id="brand-pill">
        <svg
          viewBox="0 0 256 256"
          className="h-5 w-5 fill-white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" />
        </svg>
        <span className="text-sm font-normal tracking-tight text-white">securify</span>
      </Link>

      {/* Center Pill: Links */}
      <div className="hidden items-center gap-1 rounded-full bg-neutral-900/90 px-3 py-2 backdrop-blur md:flex" id="nav-links">
        {navLinks.map((link) => (
          <Link
            key={link}
            to={`/${link}`}
            className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:text-white"
          >
            {link}
          </Link>
        ))}
      </div>

      {/* Right Button */}
      <button
        onClick={() => navigate('/get-started')}
        className="rounded-full bg-white px-6 py-3 text-sm font-normal text-black transition-colors hover:bg-neutral-200"
        id="cta-button"
      >
        get started
      </button>
    </nav>
  );
}
