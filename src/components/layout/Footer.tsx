import React from 'react';
import { Container } from '../ui/Container';
import { Instagram, Twitter, Facebook, ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="text-2xl font-bold mb-6 flex items-center">
              <span className="text-yellow-500">Jam</span>
              <span className="text-white">Roc</span>
            </div>
            <p className="mb-6">
              Bringing authentic Jamaican cuisine to your doorstep, wherever you are on the island.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-yellow-500 transition-colors duration-200">
                <Instagram size={24} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-200">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-yellow-500 transition-colors duration-200">
                <Facebook size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#features" className="flex items-center hover:text-yellow-500 transition-colors duration-200">
                  <ChevronRight size={16} className="mr-2" />
                  Features
                </a>
              </li>
              <li>
                <a href="#community" className="flex items-center hover:text-yellow-500 transition-colors duration-200">
                  <ChevronRight size={16} className="mr-2" />
                  Community
                </a>
              </li>
              <li>
                <a href="#coverage" className="flex items-center hover:text-yellow-500 transition-colors duration-200">
                  <ChevronRight size={16} className="mr-2" />
                  Coverage
                </a>
              </li>
              <li>
                <a href="#testimonials" className="flex items-center hover:text-yellow-500 transition-colors duration-200">
                  <ChevronRight size={16} className="mr-2" />
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center hover:text-yellow-500 transition-colors duration-200">
                  <ChevronRight size={16} className="mr-2" />
                  Become a Partner
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>17 Oxford Road, Kingston, Jamaica</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 flex-shrink-0" />
                <span>+1 (876) 555-1234</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 flex-shrink-0" />
                <span>hello@jamroc.com</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
            <p className="mb-4">
              Subscribe to get special offers, free giveaways, and updates on our service.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-green-800 border border-green-700 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-md hover:bg-yellow-400 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="pt-8 border-t border-green-800 text-center md:flex md:justify-between md:items-center">
          <p className="text-green-300 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Jam Roc. All rights reserved.
          </p>
          <div className="flex justify-center md:justify-end space-x-6">
            <a href="#" className="text-green-300 hover:text-white transition-colors duration-200">Privacy Policy</a>
            <a href="#" className="text-green-300 hover:text-white transition-colors duration-200">Terms of Service</a>
            <a href="#" className="text-green-300 hover:text-white transition-colors duration-200">Cookies</a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;