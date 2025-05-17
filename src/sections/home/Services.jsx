import { motion } from "framer-motion";
import {
  PaintBrushIcon,
  PuzzlePieceIcon,
  ShoppingCartIcon,
  CodeBracketIcon,
  RocketLaunchIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

function Services() {
  const services = [
    {
      title: "Web Design",
      description:
        "Create visually stunning, user-centric websites that elevate your brand and engage audiences, crafted with precision by KOLG Web Agency.",
      icon: PaintBrushIcon,
    },
    {
      title: "UI/UX Design",
      description:
        "Design intuitive, user-friendly interfaces that enhance navigation and deliver seamless, engaging experiences for your visitors.",
      icon: PuzzlePieceIcon,
    },
    {
      title: "E-commerce Solutions",
      description:
        "Develop robust, scalable online stores with secure payments and optimized user journeys, driving conversions and business growth.",
      icon: ShoppingCartIcon,
    },
    {
      title: "Full-Stack Development",
      description:
        "Build end-to-end web solutions with React.js, Node.js, and Next.js, delivering stunning front-ends and powerful back-end functionality.",
      icon: CodeBracketIcon,
    },
    {
      title: "Performance Optimization",
      description:
        "Boost website speed and efficiency with advanced optimization, ensuring fast load times and exceptional user satisfaction.",
      icon: RocketLaunchIcon,
    },
    {
      title: "SEO",
      description:
        "Boost your website’s visibility with advanced SEO strategies, driving organic traffic and improving search engine rankings.",
      icon: MagnifyingGlassIcon,
    },
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  // Icon animation variants
  const iconVariants = {
    initial: { rotate: 0 },
    hover: { rotate: 10, transition: { duration: 0.3, yoyo: Infinity } },
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-br from-background to-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-textDark text-center mb-16"
        >
          Elevate Your Digital Success
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="group relative p-8 bg-background rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden border border-transparent hover:border-primary/20"
            >
              {/* Subtle Gradient Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10 text-center">
                <motion.div
                  variants={iconVariants}
                  initial="initial"
                  whileHover="hover"
                  className="mb-6 mx-auto"
                >
                  <service.icon className="h-20 w-20 text-primary" />
                </motion.div>
                <h3 className="text-2xl font-semibold text-textDark mb-4">
                  {service.title}
                </h3>
                <p className="text-textSecondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Services;