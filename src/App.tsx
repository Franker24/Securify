/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Platform from './components/Platform';
import Solutions from './components/Solutions';
import Company from './components/Company';
import Support from './components/Support';
import GetStarted from './components/GetStarted';
import Portal from './components/Portal';
import Footer from './components/Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Home() {
  return <Hero />;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <main className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<Platform />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/company" element={<Company />} />
          <Route path="/support" element={<Support />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </div>
      {!isHome && <Footer />}
    </main>
  );
}

