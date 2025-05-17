import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Placeholder for backend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setEmail("");
      alert("Thank you for subscribing!");
    }, 1500);
  };

  // Animation variants for columns
  const columnVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Animation variants for social icons
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-16 bg-gradient-to-br from-background to-accent/10"
    >
      {/* Wave Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23339989' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            variants={columnVariants}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex justify-center md:justify-start"
            >
              <NavLink to="/">
                <img
                  src="./logo.png"
                  alt="KOLG Web Agency Logo"
                  className="h-16 w-auto"
                />
              </NavLink>
            </motion.div>
            <p className="text-textSecondary">
              Crafting Digital Excellence
            </p>
            <div className="space-y-2">
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-primary" />
                <a
                  href="mailto:contact@kolgweb.com"
                  className="text-textSecondary hover:text-primary transition-colors duration-300"
                >
                  contact@kolgweb.com
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-2">
                <PhoneIcon className="h-5 w-5 text-primary" />
                <a
                  href="tel:+1234567890"
                  className="text-textSecondary hover:text-primary transition-colors duration-300"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>
          </motion.div>
          {/* Navigation Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            variants={columnVariants}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-textDark">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-textSecondary hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          {/* Social Links */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            variants={columnVariants}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-textDark">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              {[
                {
                  name: "Twitter",
                  href: "#",
                  icon: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z",
                },
                {
                  name: "LinkedIn",
                  href: "#",
                  icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z",
                },
                {
                  name: "GitHub",
                  href: "#",
                  icon: "M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.49 2.28 1.06 2.84.81.09-.63.35-1.06.63-1.3-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.53.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.94.68 1.9v2.82c0 .27.16.59.67.5A10 10 0 0022 12 10 10 0 0012 2z",
                },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="text-textSecondary hover:text-primary"
                >
                  <svg
                    className="h-8 w-8"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d={social.icon} />
                  </svg>
                </motion.a>
              ))}
            </div>
          </motion.div>
          {/* Newsletter Signup */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            variants={columnVariants}
            viewport={{ once: true }}
            className="space-y-4 text-center md:text-left"
          >
            <h3 className="text-xl font-semibold text-textDark">Stay Updated</h3>
            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-textSecondary/20 rounded-lg focus:ring-primary focus:border-primary bg-background text-textDark"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(51, 153, 137, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className={`w-full px-4 py-3 rounded-lg font-semibold text-background transition-all duration-300 ${
                  isSubmitting
                    ? "bg-primary/50 cursor-not-allowed"
                    : "bg-primary hover:bg-accent"
                }`}
              >
                {isSubmitting ? "Subscribing..." : "Subscribe"}
                {!isSubmitting && <ArrowRightIcon className="inline ml-2 h-5 w-5" />}
              </motion.button>
            </form>
          </motion.div>
        </div>
        <div className="mt-12 text-center">
          <p className="text-sm text-textSecondary">
            © 2025 Keeshon Moore. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;