import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Eye, MapPin } from "lucide-react";
import constructionMaterials from "@/assets/construction-materials.jpg";

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
                  <CheckCircle className="w-5 h-5 text-construction-orange flex-shrink-0" />
                  <span className="text-construction-gray">{highlight}</span>
                </div>
              ))}
            </div>

            <Button variant="construction" size="lg">
              Learn More About Us
            </Button>
          </div>
        </div>

        {/* Mission and Vision */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="border-0 shadow-soft hover:shadow-construction transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-construction-orange/10 rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-construction-orange" />
                </div>
                <h3 className="text-2xl font-bold text-construction-dark">Our Mission</h3>
              </div>
              <p className="text-construction-gray leading-relaxed mb-6">
                To offer long-term shareholder value through unmatched construction and service 
                skills to our customers, where quality, efficiency and reliability of infrastructure 
                is a must. We aim to employ a locally based skilled and experienced workforce.
              </p>
              <div className="flex items-center gap-2 text-construction-gray">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">Furfarol Market, Eldoret-Kitale Highway</span>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-soft hover:shadow-construction transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-construction-yellow/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-construction-orange" />
                </div>
                <h3 className="text-2xl font-bold text-construction-dark">Our Vision</h3>
              </div>
              <p className="text-construction-gray leading-relaxed">
                To venture into large scale residential construction segment and expand to 
                higher margin office and commercial construction segments. We are committed 
                to executing projects with high technical quality, working within budget, 
                while adhering to safety and environmental concerns.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;