import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Building, Truck, Settings } from "lucide-react";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Supply of Hardware & Petroleum",
      description: "Comprehensive supply of quality construction materials, hardware products, and petroleum products for all your project needs.",
      features: ["Quality Materials", "Timely Delivery", "Competitive Pricing"]
    },
    {
      icon: Building,
      title: "Building Construction",
      description: "Complete construction services for residential, commercial, and institutional buildings with modern techniques and quality assurance.",
      features: ["Residential Buildings", "Commercial Structures", "Quality Assurance"]
    },
    {
      icon: Settings,
      title: "Infrastructure & Civil Works",
      description: "Specialized in infrastructure development and civil engineering projects including roads, bridges, and public utilities.",
      features: ["Road Construction", "Bridge Building", "Public Utilities"]
    },
    {
      icon: Hammer,
      title: "Fast-Track Projects",
      description: "Quick project completion without compromising quality, utilizing effective management and accurate planning for time-sensitive projects.",
      features: ["Quick Delivery", "Quality Standards", "Efficient Planning"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1
    }
  };

  const iconVariants = {
    rest: { scale: 1, rotate: 0 },
    hover: { 
      scale: 1.1, 
      rotate: 5
    }
  };

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-construction-orange/5 via-transparent to-construction-yellow/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-construction-dark mb-4">
            Services Tailored to You
          </h2>
          <p className="text-xl text-construction-gray max-w-3xl mx-auto leading-relaxed">
            We provide customized construction solutions designed to meet your unique 
            needs, ensuring every project reflects your vision and exceeds expectations.
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
              className="group"
            >
              <Card className="h-full border-0 shadow-soft bg-white/80 backdrop-blur-sm hover:shadow-construction transition-all duration-500 hover:bg-white">
                <CardHeader className="text-center pb-4">
                  <motion.div 
                    className="mx-auto w-20 h-20 bg-gradient-to-br from-construction-orange/10 to-construction-yellow/10 rounded-2xl flex items-center justify-center mb-6 group-hover:from-construction-orange group-hover:to-construction-yellow transition-all duration-500"
                    variants={iconVariants}
                    initial="rest"
                    whileHover="hover"
                    transition={{ duration: 0.3 }}
                  >
                    <service.icon className="w-10 h-10 text-construction-orange group-hover:text-white transition-colors duration-500" />
                  </motion.div>
                  <CardTitle className="text-xl font-bold text-construction-dark group-hover:text-construction-orange transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <CardDescription className="text-construction-gray leading-relaxed text-base">
                    {service.description}
                  </CardDescription>
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        key={idx} 
                        className="flex items-center justify-center gap-2 text-sm text-construction-gray"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 * idx, duration: 0.3 }}
                      >
                        <div className="w-1.5 h-1.5 bg-construction-orange rounded-full"></div>
                        {feature}
                      </motion.div>
                    ))}
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="construction" size="sm" className="w-full mt-4">
                      Learn More
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;