import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Hero() {
  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Animation variants for image
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="relative py-16 bg-gradient-to-br from-background to-accent/10 overflow-hidden"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Text */}
          <div className="space-y-6 text-center lg:text-left">
            <motion.h1
              custom={0}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="text-5xl md:text-7xl font-extrabold text-textDark leading-tight"
            >
              Build Your Digital Future
            </motion.h1>
            <motion.p
              custom={1}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              className="text-xl text-textSecondary max-w-lg mx-auto lg:mx-0"
            >
              Expert Web Design, E-commerce, and SEO Solutions
            </motion.p>
            <motion.a
              href="/contact"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={contentVariants}
              whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(51, 153, 137, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-primary text-background rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300"
            >
              Start Your Project
              <ArrowRightIcon className="ml-3 h-6 w-6" />
            </motion.a>
          </div>
          {/* Right Side: Single Image */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={imageVariants}
            className="group"
          >
            <img
              src="./Mockup.jpg"
              alt="Showcase Image"
              className="w-full h-[300px] lg:h-[400px] object-cover rounded-xl shadow-md group-hover:shadow-xl group-hover:scale-105 transition-all duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;