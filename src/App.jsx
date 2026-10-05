import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';

// Lazy-load heavier secondary and admin pages so they do not block initial landing load
const Dashboard = lazy(() => import('./pages/Dashboard.jsx'));
const AdminLogin = lazy(() => import('./pages/AdminLogin.jsx'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));

// Lightweight fallback loader
function PageFallback() {
  return (
    <div className="flex-1 min-h-[60vh] flex items-center justify-center bg-[#260212]">
      <div className="w-8 h-8 border-2 border-[#e10600] border-t-transparent rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-[#260212] text-white font-body antialiased selection:bg-[#e10600] selection:text-white">
      {/* Persistent Sticky Butcher Black Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            {/* Unified 5-Section Single Page */}
            <Route path="/" element={<Home />} />

            {/* Deep link redirects into single page sections */}
            <Route path="/feedback" element={<Navigate to="/#feedback" replace />} />
            <Route path="/about" element={<Navigate to="/#about" replace />} />
            <Route path="/faq" element={<Navigate to="/#faq" replace />} />
            <Route path="/contact" element={<Navigate to="/#contact" replace />} />

            {/* Dedicated Committee Portals */}
            <Route path="/committee/login" element={<AdminLogin />} />
            <Route path="/committee/dashboard" element={<Dashboard />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>

      {/* Only show global footer on non-home pages (Home embeds its own footer) */}
      {!isHome && <Footer />}
    </div>
  );
}
