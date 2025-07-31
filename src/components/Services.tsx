"use client";
import { Button } from "@/components/ui/button";
import { Hammer, Building, Truck, Settings } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Supply of Hardware & Petroleum",
      description:
        "Comprehensive supply of quality construction materials, hardware products, and petroleum products for all your project needs.",
      features: ["Quality Materials", "Timely Delivery", "Competitive Pricing"],
      backgroundImage:
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "3 min read",
    },
    {
      icon: Building,
      title: "Building Construction",
      description:
        "Complete construction services for residential, commercial, and institutional buildings with modern techniques and quality assurance.",
      features: [
        "Residential Buildings",
        "Commercial Structures",
        "Quality Assurance",
      ],
      backgroundImage:
        "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "4 min read",
    },
    {
      icon: Settings,
      title: "Infrastructure & Civil Works",
      description:
        "Specialized in infrastructure development and civil engineering projects including roads, bridges, and public utilities.",
      features: ["Road Construction", "Bridge Building", "Public Utilities"],
      backgroundImage:
        "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "5 min read",
    },
    {
      icon: Hammer,
      title: "Fast-Track Projects",
      description:
        "Quick project completion without compromising quality, utilizing effective management and accurate planning for time-sensitive projects.",
      features: ["Quick Delivery", "Quality Standards", "Efficient Planning"],
      backgroundImage:
        "https://images.unsplash.com/photo-1590736969955-71cc94901144?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
      readTime: "2 min read",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: {
      scale: 1.1,
      rotate: 5,
    },
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 via-transparent to-yellow-500/5"></div>

      <div className=" mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Services Tailored to You
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We provide customized construction solutions designed to meet your
            unique needs, ensuring every project reflects your vision and
            exceeds expectations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="group/card max-w-sm w-full mx-auto"
            >
              <div
                className={cn(
                  "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl flex flex-col justify-between p-4 bg-cover bg-center"
                )}
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              >
                <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60 bg-black/40"></div>

                <div className="flex flex-row items-center space-x-4 z-10">
                  <motion.div
                    className="w-12 h-12 bg-orange-500/90 rounded-full flex items-center justify-center border-2 border-white/20"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex flex-col">
                    <p className="font-normal text-base text-gray-50 relative z-10">
                      Construction Service
                    </p>
                    <p className="text-sm text-gray-300">{service.readTime}</p>
                  </div>
                </div>

                <div className="text-content z-10">
                  <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10 mb-3">
                    {service.title}
                  </h1>
                  <p className="font-normal text-sm text-gray-50 relative z-10 mb-4 line-clamp-3">
                    {service.description}
                  </p>

                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 2).map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-2 text-xs text-gray-200"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      >
                        <div className="w-1 h-1 bg-orange-400 rounded-full"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      size="sm"
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white border-0"
                    >
                      Learn More
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
