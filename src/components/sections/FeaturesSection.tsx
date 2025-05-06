import React from 'react';
import { Container } from '../ui/Container';
import { CheckCircle2, Map, UtensilsCrossed, ShoppingCart, Clock, Wallet } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-green-600 mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ComparisonItem: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className="flex items-start gap-3 mb-3">
      <div className="mt-1 text-green-600 flex-shrink-0">
        <CheckCircle2 size={20} />
      </div>
      <p className="text-gray-700">{text}</p>
    </div>
  );
};

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose LocalEats?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just another food delivery app - we're bringing authentic Jamaican flavor to your doorstep
            with benefits you won't find anywhere else.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <FeatureCard
            icon={<UtensilsCrossed size={32} />}
            title="Authentic Local Cuisine"
            description="Access to more local restaurants than any other platform, featuring traditional Jamaican dishes prepared by local chefs."
          />
          <FeatureCard
            icon={<Map size={32} />}
            title="Island-Wide Coverage"
            description="Delivery to all major tourist areas and local neighborhoods across Jamaica, even where other services don't reach."
          />
          <FeatureCard
            icon={<ShoppingCart size={32} />}
            title="Grocery Delivery"
            description="Beyond prepared meals, we deliver fresh local ingredients, spices, and groceries right to your door."
          />
          <FeatureCard
            icon={<Clock size={32} />}
            title="Fast Delivery Times"
            description="Our local knowledge means we can navigate Jamaican roads efficiently for faster delivery times."
          />
          <FeatureCard
            icon={<Wallet size={32} />}
            title="Better Pricing"
            description="Lower delivery fees and restaurant commission rates mean better prices for customers and fair pay for restaurants."
          />
          <FeatureCard
            icon={<CheckCircle2 size={32} />}
            title="Quality Guarantee"
            description="We personally vet all restaurants in our network to ensure authentic, high-quality Jamaican cuisine."
          />
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">
                How We Compare to UberEats
              </h3>
              
              <div className="space-y-4">
                <ComparisonItem text="50% more local restaurants in our network across Jamaica" />
                <ComparisonItem text="Delivery to remote areas and resorts that other services don't cover" />
                <ComparisonItem text="Lower delivery fees (up to 30% less than major competitors)" />
                <ComparisonItem text="Grocery shopping and delivery option for locals" />
                <ComparisonItem text="Special menu items exclusive to our platform" />
                <ComparisonItem text="Cultural food experiences and catering options" />
              </div>
            </div>
            
            <div className="bg-green-700 p-8 lg:p-12 flex items-center justify-center">
              <div className="max-w-md mx-auto text-center">
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Community Support
                </h3>
                <p className="text-white/90 mb-8">
                  We invest back into the local food scene, with 2% of every order going directly 
                  to support local farming initiatives and culinary education programs across Jamaica.
                </p>
                <div className="inline-flex items-center justify-center bg-yellow-500 text-black font-bold px-6 py-3 rounded-full">
                  $125,000+ invested in local communities
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FeaturesSection;