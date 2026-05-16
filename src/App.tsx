import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FairSection } from "./components/FairSection";
import { AboutUs } from "./components/AboutUs";
import { Features } from "./components/Features";
import { Prices } from "./components/Prices";
import { MobileApp } from "./components/MobileApp";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { TermsModal } from "./components/TermsModal";
import { CookieConsent } from "./components/CookieConsent";
import { BlockedOverlay } from "./components/BlockedOverlay";
import { getConsent, isAccepted, isRejected, setConsent } from "./utils/consent";

// Componente para redirigir a tu app web
function RedirectToApp({ path }: { path: string }) {
  useEffect(() => {
    const appWebUrl = "https://muusmart.netlify.app";
    window.location.href = `${appWebUrl}${path}`;
  }, [path]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f5f2eb] to-[#eef3e6] flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-forest-green mx-auto"></div>
        <p className="mt-4 text-forest-green font-mulish">Redirigiendo a Muusmart...</p>
      </div>
    </div>
  );
}
// Componente para la página principal
function HomePage() {
  return (
    <>
      <Hero />
      <FairSection />
      <AboutUs />
      <Features />
      <Prices />
      <MobileApp />
      <CallToAction />
    </>
  );
}

function App() {
  const [consent, setConsentState] = useState(() => getConsent());
  const [showTerms, setShowTerms] = useState(false);

  useEffect(() => {
    // Initial mount: if no consent stored, show cookie banner
    const c = getConsent();
    if (!c) {
      setShowTerms(false);
    } else {
      setConsentState(c);
    }
  }, []);

  useEffect(() => {
    const locked = !isAccepted(consent) && (isRejected(consent) || !consent);
    document.body.style.overflow = locked ? "hidden" : "auto";
  }, [consent]);

  const acceptAll = () => {
    const next = setConsent({ cookiesAccepted: true, termsAccepted: true });
    setConsentState(next);
    setShowTerms(false);
  };

  const rejectAll = () => {
    const next = setConsent({ cookiesAccepted: false, termsAccepted: false });
    setConsentState(next);
  };

  const acceptTermsOnly = () => {
    const next = setConsent({ termsAccepted: true });
    setConsentState(next);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-[#f5f2eb] to-[#eef3e6]">
        <Routes>
          <Route path="/" element={
            <>
              <Navbar />
              <HomePage />
              <Footer />
              {/* Cookie banner shown when no consent or partial */}
              {!consent || consent.status === 'partial' ? (
                <CookieConsent
                  onAcceptAll={acceptAll}
                  onReject={rejectAll}
                  onViewTerms={() => setShowTerms(true)}
                />
              ) : null}

              {/* Terms modal to view and accept terms specifically */}
              {showTerms && (
                <TermsModal
                  onAccept={() => {
                    acceptTermsOnly();
                    setShowTerms(false);
                  }}
                  onReject={() => {
                    rejectAll();
                    setShowTerms(false);
                  }}
                />
              )}

              {/* Blocked overlay if user explicitly rejected */}
              {isRejected(consent) && (
                <BlockedOverlay
                  onAccept={acceptAll}
                  onViewTerms={() => setShowTerms(true)}
                />
              )}
            </>
          } />
          <Route path="/login" element={
            <RedirectToApp path="/login" />
          } />
          <Route path="/register" element={
            <RedirectToApp path="/register" />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
