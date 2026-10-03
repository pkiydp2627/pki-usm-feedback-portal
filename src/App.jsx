import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="flex flex-col min-h-screen bg-[#260212] text-white font-body antialiased selection:bg-[#e10600] selection:text-white">
      {/* Persistent Sticky Butcher Black Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
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
      </main>

      {/* Only show global footer on non-home pages (Home embeds its own footer) */}
      {!isHome && <Footer />}
    </div>
  );
}
