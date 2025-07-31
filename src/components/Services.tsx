import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hammer, Building, Truck, Settings } from "lucide-react";

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

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-construction-dark mb-4">
            Services Tailored to You
          </h2>
          <p className="text-xl text-construction-gray max-w-3xl mx-auto">
            We provide customized construction solutions designed to meet your unique 
            needs, ensuring every project reflects your vision and exceeds expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-construction transition-all duration-300 hover:-translate-y-2 border-0 shadow-soft">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 bg-construction-orange/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-construction-orange group-hover:text-white transition-colors">
                  <service.icon className="w-8 h-8 text-construction-orange group-hover:text-white transition-colors" />
                </div>
                <CardTitle className="text-lg font-bold text-construction-dark">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-construction-gray mb-4 leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="text-sm text-construction-gray">
                      ✓ {feature}
                    </div>
                  ))}
                </div>
                <Button variant="construction" size="sm" className="w-full">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;