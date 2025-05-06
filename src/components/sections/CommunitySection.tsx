import React from 'react';
import { Container } from '../ui/Container';
import { Heart, Users, Star } from 'lucide-react';

const StoryCard: React.FC<{ image: string; name: string; story: string }> = ({ image, name, story }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center mb-4">
        <img src={image} alt={name} className="w-16 h-16 rounded-full object-cover mr-4" />
        <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      </div>
      <p className="text-gray-600 italic">"{story}"</p>
    </div>
  );
};

const ImpactStat: React.FC<{ icon: React.ReactNode; stat: string; description: string }> = ({ 
  icon, stat, description 
}) => {
  return (
    <div className="text-center p-6">
      <div className="text-yellow-500 mb-2 flex justify-center">{icon}</div>
      <div className="text-3xl font-bold mb-2 text-gray-800">{stat}</div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const CommunitySection: React.FC = () => {
  return (
    <section id="community" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Supporting Our Community</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            JamRoc is committed to strengthening the Jamaican culinary community and 
            supporting local businesses across the island.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <ImpactStat 
            icon={<Users size={32} />}
            stat="250+"
            description="Local restaurants partnered with our platform"
          />
          <ImpactStat 
            icon={<Heart size={32} />}
            stat="$125,000+"
            description="Invested in local community initiatives"
          />
          <ImpactStat 
            icon={<Star size={32} />}
            stat="35%"
            description="Lower commission rates than major competitors"
          />
        </div>

        <div className="mb-16">
          <div className="bg-green-700 rounded-2xl p-8 md:p-12 text-white text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-6">Our Community Impact</h3>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              When you order from JamRoc, you're directly supporting:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-green-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">Local Farmers</h4>
                <p>We source ingredients directly from Jamaican farmers, ensuring fresh produce and fair prices.</p>
              </div>
              <div className="bg-green-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">Family Restaurants</h4>
                <p>Our platform highlights family-owned eateries that serve authentic Jamaican recipes.</p>
              </div>
              <div className="bg-green-800 p-6 rounded-xl">
                <h4 className="text-xl font-semibold mb-2">Culinary Education</h4>
                <p>We fund scholarships for aspiring chefs to preserve traditional Jamaican cuisine.</p>
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800">Stories from Our Community</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StoryCard 
            image="https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=800" 
            name="Marcia Johnson"
            story="My small jerk chicken spot was struggling until I joined JamRoc. Now I've hired two more staff and we're busier than ever!"
          />
          <StoryCard 
            image="https://images.pexels.com/photos/3771838/pexels-photo-3771838.jpeg?auto=compress&cs=tinysrgb&w=800" 
            name="Devon Williams"
            story="As a farmer, I love that JamRoc connects me directly with restaurants. My produce goes from farm to table in under 24 hours."
          />
          <StoryCard 
            image="https://images.pexels.com/photos/7595177/pexels-photo-7595177.jpeg?auto=compress&cs=tinysrgb&w=800" 
            name="Tanya Reid"
            story="Thanks to the JamRoc culinary scholarship, I'm finally able to pursue my dream of becoming a chef specializing in Jamaican fusion cuisine."
          />
        </div>
      </Container>
    </section>
  );
};

export default CommunitySection;