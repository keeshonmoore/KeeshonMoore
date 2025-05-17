import { motion } from "framer-motion";
import { CheckCircleIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import {
  PaintBrushIcon,
  PuzzlePieceIcon,
  DevicePhoneMobileIcon,
  RocketLaunchIcon,
  CodeBracketIcon,
  SwatchIcon,
  DocumentTextIcon,
  ServerIcon,
  ArrowPathIcon,
  CubeIcon,
  ShoppingCartIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/solid";

function About() {
  const achievements = [
    "Over 50+ Websites Created in 2025",
    "Owner of KOLG Web Agency",
    "Over 30+ Current Clients",
  ];

  const skills = [
    { name: "Web Design", icon: PaintBrushIcon },
    { name: "UI/UX", icon: PuzzlePieceIcon },
    { name: "Responsive Design", icon: DevicePhoneMobileIcon },
    { name: "Performance Optimization", icon: RocketLaunchIcon },
    { name: "React.js", icon: CodeBracketIcon },
    { name: "Tailwind CSS", icon: SwatchIcon },
    { name: "JavaScript", icon: DocumentTextIcon },
    { name: "Node.js", icon: ServerIcon },
    { name: "Express.js", icon: ArrowPathIcon },
    { name: "Next.js", icon: CubeIcon },
    { name: "E-commerce", icon: ShoppingCartIcon },
    { name: "SEO", icon: MagnifyingGlassIcon },
  ];

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for achievements
  const achievementVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Animation variants for skills
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  // Animation variants for icons
  const iconVariants = {
    initial: { scale: 1, rotate: 0 },
    hover: { scale: 1.2, rotate: 10, transition: { duration: 0.3 } },
  };

  // Image parallax effect
  const imageVariants = {
    initial: { y: 0 },
    animate: {
      y: 20,
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" },
    },
  };

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="relative py-24 bg-gradient-to-br from-background to-accent/10 text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-5xl font-extrabold text-textDark mb-6"
          >
            About Me
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-textSecondary max-w-3xl mx-auto"
          >
            Transforming visions into digital masterpieces with over a decade of expertise in full-stack development, E-commerce, and SEO.
          </motion.p>
        </div>
      </motion.section>

      {/* Our Story Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-textDark">Our Story</h2>
              <p className="text-xl text-textSecondary leading-relaxed">
                Founded by a passionate UI designer with over 10 years of experience, KOLG Web Agency was born from a vision to redefine digital experiences. From crafting over 50 websites in 2025 to serving 30+ active clients, we specialize in full-stack development, E-commerce solutions, and SEO, delivering results that captivate and convert. Our journey is driven by creativity, innovation, and a commitment to excellence.
              </p>
            </div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={imageVariants}
              viewport={{ once: true }}
              className="relative group"
            >
              <img
                src="./AMG.jpg"
                alt="Our Story"
                className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-background to-accent/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-textDark text-center mb-12">
            Our Achievements
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={achievementVariants}
                viewport={{ once: true }}
                className="flex items-start space-x-3 group"
              >
                <CheckCircleIcon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-lg text-textSecondary group-hover:bg-primary/5 group-hover:px-2 group-hover:py-1 group-hover:rounded-md transition-all duration-300">
                  {achievement}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-textDark text-center mb-12">
            Our Expertise
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={skillVariants}
                viewport={{ once: true }}
                className="group relative p-8 bg-background rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10 text-center">
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                    className="mb-4 mx-auto"
                  >
                    <skill.icon className="h-16 w-16 text-primary" />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-textDark">{skill.name}</h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Vision Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-24 bg-gradient-to-br from-background to-accent/10 text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-textDark">Our Vision</h2>
              <p className="text-xl text-textSecondary max-w-3xl mx-auto leading-relaxed">
                At KOLG Web Agency, our mission is to empower businesses with cutting-edge digital solutions. We value creativity, collaboration, and client success, delivering websites that not only look stunning but also drive results. Let’s build your future together.
              </p>
              <motion.a
                href="/contact"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(51, 153, 137, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center px-8 py-4 bg-primary text-background rounded-lg font-semibold text-lg hover:bg-accent transition-all duration-300"
              >
                Contact Us
                <ArrowRightIcon className="ml-3 h-6 w-6" />
              </motion.a>
            </div>
            <motion.div
              initial="initial"
              whileInView="animate"
              variants={imageVariants}
              viewport={{ once: true }}
              className="relative group"
            >
              <img
                src="./1.jpg"
                alt="Team Vision"
                className="w-full h-[300px] object-cover rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
}

export default About;