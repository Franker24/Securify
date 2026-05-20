/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'platform', path: '/platform' },
  { label: 'solutions', path: '/solutions' },
  { label: 'company', path: '/company' },
  { label: 'support', path: '/support' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav
        className="absolute top-0 right-0 left-0 z-30 flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-5 md:px-10 md:pt-6"
        id="navbar"
      >
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-neutral-900/90 py-2.5 pl-3.5 pr-5 backdrop-blur-md sm:py-3 sm:pl-4 sm:pr-6"
          id="brand-pill"
        >
          <svg
            viewBox="0 0 256 256"
            className="h-4 w-4 fill-white sm:h-5 sm:w-5"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M 128 192 L 128 256 L 64.5 256 L 32 223 L 0 192 L 0 128 L 64 128 Z M 256 192 L 256 256 L 192.5 256 L 160 223 L 128 192 L 128 128 L 192 128 Z M 128 64 L 128 128 L 64.5 128 L 32 95 L 0 64 L 0 0 L 64 0 Z M 256 64 L 256 128 L 192.5 128 L 160 95 L 128 64 L 128 0 L 192 0 Z" />
          </svg>
          <span className="text-sm font-medium tracking-tight text-white">securify</span>
        </Link>

        <div
          className="hidden items-center gap-1 rounded-full border border-white/10 bg-neutral-900/90 px-3 py-2 backdrop-blur-md md:flex"
          id="nav-links"
        >
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="rounded-full px-5 py-2 text-sm text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => navigate('/get-started')}
            className="btn-primary hidden rounded-full px-5 py-2.5 text-sm sm:block sm:px-6 sm:py-3"
            id="cta-button"
          >
            get started
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-neutral-900/90 text-white backdrop-blur-md transition-colors hover:bg-neutral-800 md:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-20 bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden={!menuOpen}
      />

      <div
        className={`fixed top-0 right-0 z-40 flex h-full w-[min(100%,320px)] flex-col border-l border-white/10 bg-neutral-950/98 backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">menu</span>
          <button
            type="button"
            onClick={closeMenu}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              onClick={closeMenu}
              className="rounded-2xl px-4 py-4 text-lg font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="border-t border-white/10 p-4">
          <button
            onClick={() => {
              closeMenu();
              navigate('/get-started');
            }}
            className="btn-primary w-full rounded-2xl py-4 text-sm"
          >
            get started
          </button>
        </div>
      </div>
    </>
  );
}
