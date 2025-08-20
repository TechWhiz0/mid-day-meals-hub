import React from 'react';
import { ChefHat, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-footer text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            
            {/* Brand & Mission */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <ChefHat className="w-8 h-8 text-golden" />
                <h3 className="text-xl font-display font-bold">Mid Day Meal Planner</h3>
              </div>
              <p className="text-white/80 mb-6 leading-relaxed">
                Nourishing minds, building futures through culturally appropriate and nutritionally balanced meal planning for Indian schools.
              </p>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-6 h-6 bg-golden rounded flex items-center justify-center text-xs font-bold text-black">
                  ✓
                </div>
                <span className="text-sm text-white/90">Government Certified</span>
              </div>
              <p className="text-xs text-white/70">
                Ministry of Education, Government of India
              </p>
            </div>

            {/* Quick Navigation */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6 text-golden">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link to="/" className="text-white/80 hover:text-golden transition-colors duration-200 flex items-center gap-2">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/generate" className="text-white/80 hover:text-golden transition-colors duration-200 flex items-center gap-2">
                    Generate Meal Plan
                  </Link>
                </li>
                <li>
                  <a href="#about" className="text-white/80 hover:text-golden transition-colors duration-200 flex items-center gap-2">
                    About the Program
                  </a>
                </li>
                <li>
                  <a href="#help" className="text-white/80 hover:text-golden transition-colors duration-200 flex items-center gap-2">
                    Help & Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources & Compliance */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6 text-golden">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#guidelines" className="text-white/80 hover:text-golden transition-colors duration-200 flex items-center gap-2">
                    Nutritional Guidelines
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </li>
                <li>
                  <a href="#privacy" className="text-white/80 hover:text-golden transition-colors duration-200">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#terms" className="text-white/80 hover:text-golden transition-colors duration-200">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#accessibility" className="text-white/80 hover:text-golden transition-colors duration-200">
                    Accessibility
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div>
              <h4 className="text-lg font-display font-semibold mb-6 text-golden">Connect & Support</h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-golden mt-0.5" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">Support Email</p>
                    <a href="mailto:support@middaymeals.gov.in" className="text-white/70 text-sm hover:text-golden transition-colors">
                      support@middaymeals.gov.in
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-golden mt-0.5" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">Helpline</p>
                    <a href="tel:1800-xxx-xxxx" className="text-white/70 text-sm hover:text-golden transition-colors">
                      1800-XXX-XXXX
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-golden mt-0.5" />
                  <div>
                    <p className="text-white/90 text-sm font-medium">Regional Offices</p>
                    <a href="#offices" className="text-white/70 text-sm hover:text-golden transition-colors">
                      Find Your Regional Office
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="border-t border-white/20 mb-8"></div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-white/70 text-sm mb-1">
                © 2025 Mid Day Meal Planner. All rights reserved.
              </p>
              <p className="text-white/60 text-xs">
                Built for India's Mid Day Meal Scheme | Version 1.0
              </p>
            </div>
            
            <div className="flex items-center gap-6">
              <div className="text-center">
                <div className="text-golden font-bold text-lg">8+</div>
                <div className="text-white/60 text-xs">States</div>
              </div>
              <div className="text-center">
                <div className="text-golden font-bold text-lg">100+</div>
                <div className="text-white/60 text-xs">Recipes</div>
              </div>
              <div className="text-center">
                <div className="text-golden font-bold text-lg">95%</div>
                <div className="text-white/60 text-xs">Compliance</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;