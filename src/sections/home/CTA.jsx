import { motion } from "framer-motion";
import { ArrowRightIcon, BriefcaseIcon } from "@heroicons/react/24/solid";

function CTA() {
  // Background pulse animation
  const backgroundVariants = {
    initial: { opacity: 0.7 },
    animate: {
      opacity: 1,
      transition: { duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
    },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-24 bg-gradient-to-br from-primary to-accent via-primary/80 overflow-hidden"
    >
      {/* Wave Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23ffffff' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Animated Gradient Overlay */}
      <motion.div
        variants={backgroundVariants}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-primary/20"
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <BriefcaseIcon className="h-16 w-16 text-background mx-auto" />
        </motion.div>
        <motion.h2
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-6xl font-extrabold text-background mb-6"
        >
          Launch Your Vision Today
        </motion.h2>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-2xl text-textSecondary mb-10 max-w-3xl mx-auto"
        >
          Partner with me to create a website that stands out and delivers results. From E-commerce to full-stack solutions, we’ve got you covered.
        </motion.p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="/contact"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 20px rgba(51, 153, 137, 0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-8 py-4 bg-primary text-background rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300"
          >
            Let’s Build Together
            <ArrowRightIcon className="ml-3 h-6 w-6" />
          </motion.a>
          <motion.a
            href="/portfolio"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            whileHover={{ scale: 1.05, borderColor: "#7de2d1" }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-background text-background rounded-lg font-semibold text-lg hover:bg-accent/10 transition-all duration-300"
          >
            View Portfolio
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

export default CTA;