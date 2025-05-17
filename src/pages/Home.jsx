import { motion } from "framer-motion";
import Hero from "../sections/home/Hero";
import VideoSection from "../sections/home/VideoSection";
import AboutMe from "../sections/home/AboutMe";
import Services from "../sections/home/Services";
import CTA from "../sections/home/CTA";
import ContactForm from "../sections/home/ContactForm";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="bg-background"
    >
      <Hero />
      <VideoSection />
      <AboutMe />
      <Services />
      <CTA />
      <ContactForm />
    </motion.div>
  );
}

export default Home;