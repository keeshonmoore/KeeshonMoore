import { motion } from "framer-motion";
import { CheckCircleIcon, PaintBrushIcon, PuzzlePieceIcon, DevicePhoneMobileIcon, RocketLaunchIcon, CodeBracketIcon, SwatchIcon, DocumentTextIcon, ServerIcon, ArrowPathIcon, CubeIcon, ShoppingCartIcon } from "@heroicons/react/24/solid";

function AboutMe() {
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
  ];

  const achievements = [
    "Over 50+ Websites Created in 2025",
    "Owner of KOLG Web Agency",
    "Over 30+ Current Clients",
  ];

  // Animation variants for skills
  const skillVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.15, ease: "easeOut" },
    }),
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

  // Animation variants for icons
  const iconVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.2, transition: { duration: 0.3 } },
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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="py-24 bg-gradient-to-br from-background to-accent/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <motion.h2
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-5xl font-extrabold text-textDark"
            >
              Designing the Future of the Web
            </motion.h2>
            <motion.p
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-textSecondary leading-relaxed"
            >
              As the owner of KOLG Web Agency, I bring over a decade of experience in full-stack web development, specializing in both front-end and back-end solutions. My expertise spans creating visually stunning, user-centric websites and robust E-commerce platforms using React.js, Tailwind CSS, Node.js, and more, delivering seamless digital experiences for clients worldwide.
            </motion.p>
            {/* Achievements List */}
            <div className="space-y-4">
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
            {/* Skills List */}
            <div className="flex flex-wrap gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={skillVariants}
                  viewport={{ once: true }}
                  className="flex items-center space-x-2 px-4 py-2 bg-primary/10 rounded-full text-textDark"
                >
                  <motion.div
                    variants={iconVariants}
                    initial="initial"
                    whileHover="hover"
                  >
                    <skill.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <span className="text-sm font-semibold">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          {/* Image */}
          <motion.div
            initial="initial"
            whileInView="animate"
            variants={imageVariants}
            viewport={{ once: true }}
            className="relative group"
          >
            <img
              src="./bizzypays.jpg"
              alt="About Me"
              className="w-full h-[400px] object-cover rounded-xl shadow-lg group-hover:shadow-xl group-hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

export default AboutMe;