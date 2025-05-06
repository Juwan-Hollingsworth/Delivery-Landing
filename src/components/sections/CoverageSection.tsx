import React from 'react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { MapPin, Search } from 'lucide-react';
import coverageImage from "../../assets/images/hero-landing.png"

interface LocationProps {
  name: string;
  isPopular?: boolean;
}

const Location: React.FC<LocationProps> = ({ name, isPopular = false }) => {
  return (
    <div className={`flex items-center gap-2 ${isPopular ? 'font-semibold' : ''}`}>
      <MapPin size={isPopular ? 20 : 16} className={isPopular ? 'text-green-600' : 'text-gray-500'} />
      <span>{name}</span>
      {isPopular && <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-0.5 rounded-full">Popular</span>}
    </div>
  );
};

const CoverageSection: React.FC = () => {
  return (
    <section id="coverage" className="py-20 bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Island-Wide Coverage</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver to all major tourist destinations and local communities across Jamaica,
            even in areas where other delivery services don't reach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">
              <div className="flex items-center gap-2 p-3 bg-gray-100 rounded-lg mb-6">
                <Search size={20} className="text-gray-500" />
                <input 
                  type="text" 
                  placeholder="Search for your location..." 
                  className="bg-transparent border-none outline-none w-full text-gray-700"
                />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Popular Tourist Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <Location name="Montego Bay" isPopular />
                <Location name="Negril" isPopular />
                <Location name="Ocho Rios" isPopular />
                <Location name="Kingston" isPopular />
                <Location name="Port Antonio" isPopular />
                <Location name="Treasure Beach" isPopular />
                <Location name="Runaway Bay" isPopular />
                <Location name="Falmouth" isPopular />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Local Communities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Location name="Spanish Town" />
                <Location name="May Pen" />
                <Location name="Mandeville" />
                <Location name="Portmore" />
                <Location name="Savanna-la-Mar" />
                <Location name="Lucea" />
                <Location name="Discovery Bay" />
                <Location name="Morant Bay" />
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg">Check Your Coverage</Button>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src={coverageImage}
              alt="Jamaican beach" 
              className="rounded-2xl shadow-xl w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl flex items-end">
              <div className="p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Resort Delivery Available</h3>
                <p className="text-lg">
                  We partner with top resorts across Jamaica to bring authentic local cuisine right to your room.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gray-800">Restaurant Partnership</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Are you a restaurant owner? Join our network of local restaurants and reach more customers!
          </p>
          <Button variant="outline" size="lg">Apply to Join</Button>
        </div>
      </Container>
    </section>
  );
};

export default CoverageSection;