import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import constructionMaterials from "@/assets/materials.jpg";
import missionImage from "@/assets/construction-site.jpg";
import visionImage from "@/assets/land-surveyour.jpg";

const About = () => {
  const highlights = [
    "Fostering Sustainable Growth and Green Development",
    "Innovating for a Sustainable Future", 
    "Customer-Centric Approach",
    "Building Stronger Communities"
  ];

  return (
    <section className="py-20 bg-construction-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src={constructionMaterials}
              alt="Construction materials and equipment"
              className="rounded-2xl shadow-construction w-full h-96 object-cover"
            />
          </div>
          
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-construction-dark mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-construction-gray mb-6 leading-relaxed">
              Furfarol Suppliers & Contractors Ltd was officially registered on 12th February, 2020 
              as a limited company. We are a supplies, building and civil works company incorporated 
              under the Companies Act, 2015 with Kenyan directors.
            </p>
            <p className="text-lg text-construction-gray mb-8 leading-relaxed">
              Our operations span Western Kenya and the North Rift, with plans to extend services 
              across the country and beyond. We work across both public and private sectors, 
              delivering excellence in every project.
            </p>
            
            <div className="space-y-3 mb-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-construction-orange shrink-0" />
                  <span className="text-construction-gray">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="construction" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Mission and Vision - Alternating Layout */}
        <div className="space-y-20">
          {/* Mission Section */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image on Left */}
            <motion.div 
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src={missionImage}
                alt="Our mission - construction team working"
                className="rounded-2xl shadow-construction w-full h-80 object-cover"
              />
            </motion.div>
            
            {/* Content on Right */}
            <motion.div 
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Card className="border-0 shadow-soft hover:shadow-construction transition-all duration-300 bg-white/80 backdrop-blur-xs">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-linear-to-br from-construction-orange/10 to-construction-orange/20 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Target className="w-8 h-8 text-construction-orange" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-construction-dark">Our Mission</h3>
                  </div>
                  <p className="text-construction-gray leading-relaxed mb-6 text-lg">
                    To offer long-term shareholder value through unmatched construction and service 
                    skills to our customers, where quality, efficiency and reliability of infrastructure 
                    is a must. We aim to employ a locally based skilled and experienced workforce.
                  </p>
                  <div className="flex items-center gap-3 text-construction-gray bg-construction-light/50 p-4 rounded-lg">
                    <MapPin className="w-5 h-5 text-construction-orange" />
                    <span className="font-medium">Furfarol Market, Eldoret-Kitale Highway</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>

          {/* Vision Section */}
          <motion.div 
            className="grid lg:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Content on Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="border-0 shadow-soft hover:shadow-construction transition-all duration-300 bg-white/80 backdrop-blur-xs">
                <CardContent className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <motion.div 
                      className="w-16 h-16 bg-linear-to-br from-construction-yellow/20 to-construction-orange/20 rounded-xl flex items-center justify-center"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Eye className="w-8 h-8 text-construction-orange" />
                    </motion.div>
                    <h3 className="text-3xl font-bold text-construction-dark">Our Vision</h3>
                  </div>
                  <p className="text-construction-gray leading-relaxed text-lg">
                    To venture into large scale residential construction segment and expand to 
                    higher margin office and commercial construction segments. We are committed 
                    to executing projects with high technical quality, working within budget, 
                    while adhering to safety and environmental concerns.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            
            {/* Image on Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <img
                src={visionImage}
                alt="Our vision - modern construction office"
                className="rounded-2xl shadow-construction w-full h-80 object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;