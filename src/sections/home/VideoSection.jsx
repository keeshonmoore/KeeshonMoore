import { motion } from "framer-motion";

function VideoSection() {
  // Animation variants for content
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="relative py-16 bg-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* <motion.h2
          custom={0}
          initial="hidden"
          whileInView="visible"
          variants={contentVariants}
          viewport={{ once: true }}
          className="text-4xl font-bold text-textDark mb-6"
        >
          See Our Work in Action
        </motion.h2>
        <motion.p
          custom={1}
          initial="hidden"
          whileInView="visible"
          variants={contentVariants}
          viewport={{ once: true }}
          className="text-xl text-textSecondary mb-12 max-w-3xl mx-auto"
        >
          Discover how KOLG Web Agency transforms visions into reality with cutting-edge web design and development.
        </motion.p> */}
        <motion.div
          custom={2}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="relative w-full h-[600px] overflow-hidden"
          style={{ aspectRatio: "16/9" }}
        >
          <iframe
            src="https://player.vimeo.com/video/1085142231?h=11ed3fce4f&autoplay=1&loop=1&muted=1&background=1"
            className="absolute top-0 left-0 w-full h-full object-cover"
            style={{
              transform: "scale(1.1)",
              objectFit: "cover",
              maxWidth: "none",
              maxHeight: "none",
              willChange: "transform, width, height",
              WebkitObjectFit: "cover",
            }}
            frameBorder="0"
            allow="autoplay; fullscreen"
            title="KOLG Showcase Video"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default VideoSection;