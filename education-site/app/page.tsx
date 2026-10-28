import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedLogos from "./components/TrustedLogos";
import AudienceCards from "./components/AudienceCards";
import FeatureAccordion from "./components/FeatureAccordion";
import NewsCards from "./components/NewsCards";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main">
        <Hero />
        <TrustedLogos />
        <div id="for-institutions"><AudienceCards /></div>
        <div id="solutions"><div id="platform"><FeatureAccordion /></div></div>
        <NewsCards />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
