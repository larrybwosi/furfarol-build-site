import { Button } from "@/components/ui/button";
import { ArrowRight, Clock } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Construction excellence"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-construction-dark/80 to-construction-dark/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-construction-yellow font-medium">Home / About</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Crafting Excellence
              <span className="block text-construction-yellow">Together</span>
            </h1>
            
            <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-lg">
              At Furfarol, we believe in the power of collaboration to achieve 
              outstanding results. With a team of skilled professionals and a 
              commitment to quality construction, we transform visions into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="construction" size="lg" className="group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="constructionOutline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Decorative Circle Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-4 border-construction-yellow/30 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border-2 border-construction-yellow/50 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-construction-yellow/20 flex items-center justify-center">
                    <Clock className="w-12 h-12 text-construction-yellow" />
                  </div>
                </div>
              </div>
              {/* Decorative dots */}
              <div className="absolute -top-2 left-1/2 w-3 h-3 bg-construction-yellow rounded-full"></div>
              <div className="absolute top-1/4 -right-2 w-2 h-2 bg-construction-orange rounded-full"></div>
              <div className="absolute bottom-1/4 -left-2 w-2 h-2 bg-construction-yellow rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;