import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

function Portfolio() {
  const projects = [
    {
      title: "YMPO",
      description: "A modern website showcasing innovative solutions with a focus on user experience and performance.",
      image: "./YMPO.jpg",
      link: "https://ympo.vercel.app/",
    },
    {
      title: "Personal Touch Landscaping",
      description: "A vibrant landscaping website designed to highlight services and drive client engagement.",
      image: "./personal_touch.jpg",
      link: "https://personal-touch-landscaping.vercel.app/",
    },
    {
      title: "IMAC Rock",
      description: "A dynamic website for a rock and materials business, emphasizing quality and accessibility.",
      image: "./imac.jpg",
      link: "https://imac-rock.vercel.app/",
    },
    {
      title: "A&A Platinum Turf and Landscaping",
      description: "A professional landscaping site with a focus on turf solutions and client satisfaction.",
      image: "./aa.jpg",
      link: "https://a-a-platinum-turf-and-landscaping.vercel.app/",
    },
    {
      title: "Shooters",
      description: "An engaging website for a sports or entertainment brand, designed for high user interaction.",
      image: "./shooters-cover.jpg",
      link: "https://shooters.vercel.app/",
    },
    {
      title: "Keller Williams La Jolla",
      description: "A sleek real estate website showcasing properties with a focus on elegance and functionality.",
      image: "./kw-cover.png",
      link: "https://keller-williams-la-jolla.vercel.app/",
    },
    {
      title: "Zakhour Law",
      description: "A professional law firm website designed for trust, clarity, and client accessibility.",
      image: "./ZakhourLaw-cover.jpg",
      link: "https://zakhour-law.vercel.app/",
    },
    {
      title: "David Pomeranz",
      description: "A creative portfolio site for an artist or professional, highlighting talent and personality.",
      image: "./DAVID POMERANZ-cover.jpg",
      link: "https://david-pomeranz.vercel.app/",
    },
    {
      title: "All Nabulsi Law",
      description: "A modern law firm website with a focus on legal expertise and client engagement.",
      image: "./Mike Allnabulsi-cover.jpg",
      link: "https://allnabulsi-law.vercel.app/",
    },
    {
      title: "0 Mastery",
      description: "An innovative website for a tech or education platform, emphasizing learning and growth.",
      image: "./0PercentMastery-cover.jpg",
      link: "https://0-mastery.vercel.app/",
    },
    {
      title: "Nahrin",
      description: "A culturally rich website showcasing unique services with a focus on user experience.",
      image: "./nahrin-cover.jpg",
      link: "https://nahrin.vercel.app/",
    },
    {
      title: "Next Level Tree Care",
      description: "A professional tree care website designed to highlight expertise and client trust.",
      image: "./nextlevel.jpg",
      link: "https://next-level-tree-care.vercel.app/",
    },
  ];

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" },
    }),
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative py-24 bg-gradient-to-br from-background to-accent/10"
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
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-5xl font-extrabold text-textDark text-center mb-6"
        >
          Portfolio of Excellence
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-textSecondary text-center mb-16 max-w-3xl mx-auto"
        >
          Explore the diverse range of websites crafted by Me, showcasing my expertise in full-stack development, E-commerce, and SEO.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              custom={index}
              initial="hidden"
              whileInView="visible"
              variants={cardVariants}
              viewport={{ once: true }}
              className="group relative bg-background rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-textDark mb-2">
                    {project.title}
                  </h2>
                  <p className="text-lg text-textSecondary mb-4">
                    {project.description}
                  </p>
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 0 15px rgba(51, 153, 137, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-6 py-3 bg-primary text-background rounded-lg font-semibold hover:bg-accent transition-all duration-300"
                  >
                    Visit Site
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default Portfolio;