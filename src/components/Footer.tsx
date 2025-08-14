import { Instagram, Youtube, Phone, Mail, MapPin, Heart } from "lucide-react";
import React from "react";
// import GalaxiesLogo from "@/assets/GalaxiesLogo.png";
import GalaxiesLogo from "@/assets/GALAXIES GREY 2[1].png";

const Footer: React.FC = () => {
  return (
    <>
      {/* Horizontal Separator */}
      <div className="w-full">
        <div className="h-px bg-gradient-to-r from-transparent via-zinc-300 to-transparent"></div>
      </div>

      <footer className="w-full bg-gradient-to-b from-zinc-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="py-16 grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-2 flex flex-col items-center lg:items-start space-y-6">
              <div className="flex flex-col items-center lg:items-start space-y-4">
                <img
                  src={GalaxiesLogo}
                  alt="Galaxies Logo"
                  className="w-48 h-auto object-contain rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                />
                <div className="text-center lg:text-left">
                  <p className="text-lg text-zinc-700 font-light tracking-wide leading-relaxed">
                    Capturing timeless love stories
                  </p>
                  <p className="text-sm text-zinc-500 italic mt-1">
                    Wedding Photography & Film Productions
                  </p>
                </div>
              </div>
              
              {/* Location */}
              {/* <div className="flex items-center space-x-2 text-zinc-600">
                <MapPin className="w-4 h-4 text-pink-500" />
                <span className="text-sm font-medium">Jaipur, Rajasthan, India</span>
              </div> */}

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                <a
                  href="https://www.instagram.com/galaxiesphotography"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Follow us on Instagram"
                  className="group flex items-center justify-center w-11 h-11 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-zinc-200"
                >
                  <Instagram className="w-5 h-5 text-zinc-600 group-hover:text-pink-500 transition-colors" />
                </a>
                <a
                  href="https://youtube.com/@galaxiesphotography?si=ZjK0CKEiO5f9kz0j"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Subscribe to our YouTube channel"
                  className="group flex items-center justify-center w-11 h-11 bg-white rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-zinc-200"
                >
                  <Youtube className="w-5 h-5 text-zinc-600 group-hover:text-red-500 transition-colors" />
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-zinc-800 text-center lg:text-left pt-5">
                Get In Touch
              </h3>
              <div className="space-y-4 ">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Call us</p>
                    <a
                      href="tel:+919352960101"
                      className="text-zinc-700 hover:text-pink-500 transition-colors font-medium"
                    >
                      +91 93529 60101
                    </a>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-pink-500 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-zinc-500 mb-1">Email us</p>
                    <a
                      href="mailto:iamapoorv23@gmail.com"
                      className="text-zinc-700 hover:text-pink-500 transition-colors font-medium break-all"
                    >
                      iamapoorv23@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-zinc-800 text-center lg:text-left pt-5">
                Quick Links
              </h3>
              <div className="space-y-3">
                <a
                  href="/portfolio"
                  className="block text-zinc-600 hover:text-pink-500 transition-colors text-center lg:text-left"
                >
                  Portfolio
                </a>
                <a
                  href="/services"
                  className="block text-zinc-600 hover:text-pink-500 transition-colors text-center lg:text-left"
                >
                  Services
                </a>
                <a
                  href="/about"
                  className="block text-zinc-600 hover:text-pink-500 transition-colors text-center lg:text-left"
                >
                  About Us
                </a>
                <a
                  href="/contact"
                  className="block text-zinc-600 hover:text-pink-500 transition-colors text-center lg:text-left"
                >
                  Contact
                </a>
                <a
                  href="/terms-conditions"
                  className="block text-zinc-600 hover:text-pink-500 transition-colors text-center lg:text-left"
                >
                  Terms & Conditions
                </a>
              </div>
            </div>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center py-8">
            <div className="h-px w-20 bg-gradient-to-r from-transparent to-pink-200"></div>
            <Heart className="mx-4 w-5 h-5 text-pink-400 fill-pink-100" />
            <div className="h-px w-20 bg-gradient-to-l from-transparent to-pink-200"></div>
          </div>

          {/* Bottom Copyright */}
          <div className="py-6 text-center border-t border-zinc-200">
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Galaxies Photography & Film Productions. 
              <span className="hidden sm:inline"> All Rights Reserved.</span>
            </p>
            <p className="text-xs text-zinc-400 mt-2">
              Made with <Heart className="inline w-3 h-3 text-pink-400 fill-pink-200 mx-1" /> for couples in love
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;