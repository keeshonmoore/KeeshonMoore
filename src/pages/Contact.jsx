import { motion } from "framer-motion";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setIsSubmitting(true);
    // Placeholder for backend submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", projectType: "", message: "" });
    }, 1500);
  };

  // Animation variants for sections
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  // Animation variants for cards
  const cardVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  // Animation variants for form fields
  const fieldVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: i * 0.2, ease: "easeOut" },
    }),
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
            Contact Me
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-textSecondary max-w-3xl mx-auto"
          >
            Let’s bring your vision to life with our expertise in web design, E-commerce, and SEO.
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Details Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-24 bg-background"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-textDark text-center mb-12">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: EnvelopeIcon,
                title: "Email",
                value: "contact@kolgweb.com",
                href: "mailto:contact@kolgweb.com",
              },
              {
                icon: PhoneIcon,
                title: "Phone",
                value: "+1 (234) 567-890",
                href: "tel:+1234567890",
              },
              {
                icon: MapPinIcon,
                title: "Location",
                value: "Yuma, AZ",
                href: "#",
              },
            ].map((detail, index) => (
              <motion.div
                key={detail.title}
                custom={index}
                initial="hidden"
                whileInView="visible"
                variants={cardVariants}
                viewport={{ once: true }}
                className="group p-6 bg-background rounded-xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 text-center"
              >
                <detail.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-textDark mb-2">{detail.title}</h3>
                <a
                  href={detail.href}
                  className="text-textSecondary hover:text-primary transition-colors duration-300"
                >
                  {detail.value}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="relative py-24 bg-gradient-to-br from-background to-accent/10"
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%23339989' fill-opacity='1' d='M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,138.7C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-textDark text-center mb-12">
            Send Us a Message
          </h2>
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center text-xl text-primary font-semibold"
            >
              Thank you for your submission! We’ll be in touch soon.
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  label: "Name",
                  name: "name",
                  type: "text",
                  placeholder: "Your Name",
                  required: true,
                },
                {
                  label: "Email",
                  name: "email",
                  type: "email",
                  placeholder: "Your Email",
                  required: true,
                },
                {
                  label: "Phone",
                  name: "phone",
                  type: "tel",
                  placeholder: "Your Phone (Optional)",
                  required: false,
                },
                {
                  label: "Project Type",
                  name: "projectType",
                  type: "select",
                  options: [
                    { value: "", label: "Select Project Type" },
                    { value: "website", label: "Website Design" },
                    { value: "ecommerce", label: "E-commerce" },
                    { value: "seo", label: "SEO" },
                    { value: "fullstack", label: "Full-Stack Development" },
                  ],
                },
                {
                  label: "Message",
                  name: "message",
                  type: "textarea",
                  placeholder: "Your Message",
                  required: true,
                },
              ].map((field, index) => (
                <motion.div
                  key={field.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  variants={fieldVariants}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <label
                    htmlFor={field.name}
                    className="block text-sm font-medium text-textSecondary"
                  >
                    {field.label}
                  </label>
                  {field.type === "select" ? (
                    <select
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-textSecondary/20 rounded-lg focus:ring-primary focus:border-primary bg-background text-textDark"
                    >
                      {field.options.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  ) : field.type === "textarea" ? (
                    <textarea
                      id={field.name}
                      name={field.name}
                      rows="4"
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-textSecondary/20 rounded-lg focus:ring-primary focus:border-primary bg-background text-textDark"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  ) : (
                    <input
                      type={field.type}
                      id={field.name}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-textSecondary/20 rounded-lg focus:ring-primary focus:border-primary bg-background text-textDark"
                      placeholder={field.placeholder}
                      required={field.required}
                    />
                  )}
                  {errors[field.name] && (
                    <p className="text-sm text-red-500">{errors[field.name]}</p>
                  )}
                </motion.div>
              ))}
              <div className="text-center">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(51, 153, 137, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting
                      ? "bg-primary/50 text-background cursor-not-allowed"
                      : "bg-primary text-background hover:bg-accent"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-background"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRightIcon className="ml-3 h-6 w-6" />
                    </>
                  )}
                </motion.button>
              </div>
            </motion.form>
          )}
        </div>
      </motion.section>

      {/* Call-to-Action Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true }}
        className="py-24 bg-background text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-textDark mb-6">
            See Our Work in Action
          </h2>
          <p className="text-xl text-textSecondary mb-8 max-w-3xl mx-auto">
            Discover the diverse projects we’ve crafted for clients worldwide. Explore our portfolio to see how we can elevate your digital presence.
          </p>
          <motion.a
            href="/portfolio"
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
            View Our Work
            <ArrowRightIcon className="ml-3 h-6 w-6" />
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
}

export default Contact;