import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import infrastructureWork from "@/assets/infrastructure-work.jpg";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      details: [
        "Furfarol Market",
        "Off Eldoret-Kitale Highway",
        "Likuyani Sub-county, Kakamega County",
      ],
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+254 726589494", "Available 24/7"],
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["furfarolcontractors@gmail.com", "projects@furfarol.co.ke"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat: 8:00 AM - 4:00 PM"],
    },
  ];

  return (
    <section className="py-20 bg-construction-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your
              <span className="block text-construction-yellow">Construction Project?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              It's our hope that you'll choose our company for both supplies of construction 
              materials and civil engineering works. Contact us today to discuss your project needs.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-xs">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-construction-orange/20 rounded-lg flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-construction-yellow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white mb-2">{info.title}</h4>
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-300 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="construction" size="lg">
                Get Free Quote
              </Button>
              <Button variant="constructionOutline" size="lg" className="border-white text-white hover:bg-white hover:text-construction-dark">
                Call Now
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={infrastructureWork}
              alt="Infrastructure construction work"
              className="rounded-2xl shadow-construction w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-construction-dark/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/90 backdrop-blur-xs rounded-xl p-6">
                <h4 className="font-bold text-construction-dark mb-2">Quality Assurance</h4>
                <p className="text-sm text-construction-gray">
                  Our highly effective management, accurate planning and resource deployment 
                  ensure consistently high standards within record time frames.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;