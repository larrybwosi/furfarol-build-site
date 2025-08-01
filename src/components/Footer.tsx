import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-construction-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-construction-orange">Furfarol</span>
              <span className="text-white"> Suppliers & Contractors Ltd</span>
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              A supplies, building and civil works company incorporated under
              the Companies Act, 2015. We operate across Western Kenya and the
              North Rift, working with both public and private sectors.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-construction-orange" />
                <span className="text-gray-300 text-sm">
                  Furfarol Market, Off Eldoret-Kitale Highway
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-construction-orange" />
                <span className="text-gray-300 text-sm">
                  Likuyani Sub-county, Kakamega County, Kenya
                </span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-construction-yellow">
              Our Services
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Hardware Supply
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Petroleum Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Building Construction
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Infrastructure Works
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-construction-orange transition-colors"
                >
                  Civil Engineering
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-construction-yellow">
              Contact Info
            </h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-construction-orange mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">+254 720275634</p>
                  <p className="text-gray-400 text-xs">24/7 Support</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-construction-orange mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">
                    furfarolcontractors@gmail.com
                  </p>
                  <p className="text-gray-400 text-xs">General Inquiries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-construction-orange mt-1" />
                <div>
                  <p className="text-gray-300 text-sm">Mon - Fri: 8AM - 6PM</p>
                  <p className="text-gray-400 text-xs">Saturday: 8AM - 4PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm">
              © 2025 Furfarol Suppliers & Contractors Ltd. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Registered February 12th, 2020 | Companies Act, 2015
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;