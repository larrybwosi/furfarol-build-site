"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Clock,
  Calendar,
  FolderCheck,
  Users,
  Headphones,
} from "lucide-react";
import heroImage from "@/assets/hero-construction.png";
import { motion, Variants } from "framer-motion";

const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.43, 0.13, 0.23, 0.96] as any,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: [0.6, 0.04, 0.98, 0.335] as any,
      },
    },
  };

  const pulseVariants: Variants = {
    animate: {
      scale: [1, 1.05, 1],
      opacity: [0.7, 1, 0.7],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: [0.6, 0.04, 0.98, 0.335] as any,
      },
    },
  };

  // Updated stats data from the provided Stats component
  const stats = [
    {
      icon: Calendar,
      number: "4+",
      label: "Years Active",
      description: "Since 2020",
    },
    {
      icon: FolderCheck,
      number: "50+",
      label: "Completed Projects",
      description: "Diverse Portfolio",
    },
    {
      icon: Users,
      number: "100+",
      label: "Satisfied Clients",
      description: "Public & Private",
    },
    {
      icon: Headphones,
      number: "24/7",
      label: "Support Available",
      description: "Always Ready",
    },
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Background with Overlay Patterns */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction excellence"
          className="w-full h-full object-cover"
        />
        {/* Multi-layered gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-construction-dark/90 via-construction-dark/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-construction-dark/60 via-transparent to-construction-dark/30"></div>

        {/* Animated geometric patterns */}
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 border border-construction-yellow/20 rotate-45"
          animate={{
            rotate: [45, 90, 45],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: [0.6, 0.04, 0.98, 0.335] as any,
          }}
        />
        <motion.div
          className="absolute bottom-32 left-16 w-24 h-24 border border-construction-orange/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: [0.6, 0.04, 0.98, 0.335] as any,
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <motion.div
          className="grid lg:grid-cols-2 gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <div className="text-white space-y-8">
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  <motion.div
                    className="w-2 h-2 bg-construction-yellow rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="w-2 h-2 bg-construction-orange rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  />
                </div>
                <span className="text-construction-yellow font-semibold tracking-wide text-sm uppercase">
                  Home / About
                </span>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
                <span className="block">Crafting</span>
                <motion.span
                  className="block bg-gradient-to-r from-construction-yellow via-construction-orange to-construction-yellow bg-clip-text text-transparent"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                >
                  Excellence
                </motion.span>
                <span className="block">Together</span>
              </h1>
            </motion.div>

            <motion.div variants={itemVariants}>
              <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-xl">
                At Furfarol, we believe in the power of collaboration to achieve
                outstanding results. With a team of skilled professionals and a
                commitment to quality construction, we transform visions into
                reality.
              </p>
            </motion.div>

            {/* Enhanced Stats Section */}
            <motion.div variants={itemVariants} className="py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center group cursor-pointer"
                    whileHover={{
                      scale: 1.05,
                      y: -5,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                  >
                    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 hover:bg-white/20 hover:border-construction-yellow/50 transition-all duration-300">
                      <motion.div
                        className="flex justify-center mb-3"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <stat.icon className="w-6 h-6 text-construction-yellow" />
                      </motion.div>
                      <div className="text-2xl lg:text-3xl font-bold text-white mb-1">
                        {stat.number}
                      </div>
                      <div className="text-sm font-semibold text-construction-yellow mb-1">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-300">
                        {stat.description}
                      </div>
                    </div>

                    {/* Subtle glow effect */}
                    <motion.div
                      className="absolute inset-0 bg-construction-yellow/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="construction"
                  size="lg"
                  className="group relative overflow-hidden bg-gradient-to-r from-construction-yellow to-construction-orange hover:from-construction-orange hover:to-construction-yellow transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="relative z-10">Get Started</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6 }}
                  />
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="constructionOutline"
                  size="lg"
                  className="border-2 hover:bg-construction-yellow/10 transition-all duration-300"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Content - Enhanced Decorative Element */}
          <motion.div
            className="hidden lg:flex justify-center items-center"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Main circular element */}
              <motion.div
                className="relative w-80 h-80"
                variants={floatingVariants}
                animate="animate"
              >
                {/* Outer ring */}
                <motion.div
                  className="absolute inset-0 rounded-full border-4 border-construction-yellow/30"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Middle ring */}
                <motion.div
                  className="absolute inset-8 rounded-full border-2 border-construction-yellow/50"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />

                {/* Inner circle */}
                <motion.div
                  className="absolute inset-16 rounded-full bg-gradient-to-br from-construction-yellow/20 to-construction-orange/20 backdrop-blur-sm flex items-center justify-center"
                  variants={pulseVariants}
                  animate="animate"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Clock className="w-16 h-16 text-construction-yellow drop-shadow-lg" />
                  </motion.div>
                </motion.div>

                {/* Floating decorative elements */}
                {[
                  {
                    size: "w-4 h-4",
                    color: "bg-construction-yellow",
                    position: "top-0 left-1/2 -translate-x-1/2 -translate-y-2",
                  },
                  {
                    size: "w-3 h-3",
                    color: "bg-construction-orange",
                    position: "top-1/4 -right-2",
                  },
                  {
                    size: "w-3 h-3",
                    color: "bg-construction-yellow",
                    position: "bottom-1/4 -left-2",
                  },
                  {
                    size: "w-2 h-2",
                    color: "bg-construction-orange",
                    position:
                      "bottom-0 left-1/2 -translate-x-1/2 translate-y-2",
                  },
                ].map((dot, index) => (
                  <motion.div
                    key={index}
                    className={`absolute ${dot.size} ${dot.color} rounded-full ${dot.position} shadow-lg`}
                    animate={{
                      y: [-5, 5, -5],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2 + index * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                  />
                ))}
              </motion.div>

              {/* Background glow effect */}
              <motion.div
                className="absolute inset-0 bg-construction-yellow/10 rounded-full blur-3xl"
                animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.6 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-construction-yellow/50 rounded-full flex justify-center"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-construction-yellow rounded-full mt-2"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <div className="text-xs text-construction-yellow/70 mt-2 text-center">
            Scroll
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
