import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

  // Animation variants for the underline effect
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 0.3, ease: "easeInOut" } },
  };

  // Animation variants for mobile menu
  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: "auto", transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center"
          >
            <NavLink to="/">
              <img
                src="./logo.png"
                alt="KOLG Web Agency Logo"
                className="h-12 w-auto"
              />
            </NavLink>
          </motion.div>
          {/* Desktop Menu - Centered */}
          <div className="hidden md:flex justify-center flex-1 space-x-12">
            {navItems.map((item, index) => (
              <motion.div
                key={item.name}
                custom={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-lg font-semibold px-3 py-1 rounded-md transition-all duration-300 ${
                      isActive
                        ? "text-primary bg-primary/10"
                        : "text-textDark hover:text-primary hover:bg-primary/5 hover:shadow-[0_0_10px_rgba(51,153,137,0.2)]"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div
                          className="absolute -bottom-1 left-0 h-0.5 bg-primary"
                          variants={underlineVariants}
                          initial="hidden"
                          animate="visible"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-textDark focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-7 w-7" />
              ) : (
                <Bars3Icon className="h-7 w-7" />
              )}
            </motion.button>
          </div>
        </div>
      </div>
      {/* Mobile Menu - Centered */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-background px-4 pb-6"
          >
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  custom={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-lg font-medium px-4 py-2 rounded-md transition-all duration-300 ${
                        isActive
                          ? "text-primary bg-primary/10"
                          : "text-textDark hover:text-primary hover:bg-primary/5"
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </NavLink>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;