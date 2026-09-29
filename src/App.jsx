import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import FeedbackForm from './pages/FeedbackForm.jsx';
import Dashboard from './pages/Dashboard.jsx';
import AdminLogin from './pages/AdminLogin.jsx';
import About from './pages/About.jsx';
import FAQ from './pages/FAQ.jsx';
import Contact from './pages/Contact.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import NotFound from './pages/NotFound.jsx';

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-cream-100 text-maroon-950 font-body antialiased">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feedback" element={<FeedbackForm />} />
          <Route path="/committee/login" element={<AdminLogin />} />
          <Route path="/committee/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
