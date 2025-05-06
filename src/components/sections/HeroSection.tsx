import React from 'react';
import { ArrowDown, Apple, PlayCircle } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import heroImage from "../../assets/images/hero-landing.png";

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroImage}
        >
          <source src="https://player.vimeo.com/progressive_redirect/playback/748784149/rendition/720p/file.mp4?loc=external" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Authentic <span className="text-yellow-500">Jamaican</span> Flavors <br />
            Delivered to Your Door
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Experience the true taste of Jamaica with our island-wide delivery service.
            From jerk chicken to ackee and saltfish, we bring local delicacies straight to your plate.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="secondary" 
              size="lg"
              className="flex items-center justify-center gap-2"
            >
              <Apple size={20} />
              Download for iOS
            </Button>
            <Button 
              variant="secondary"
              size="lg"
              className="flex items-center justify-center gap-2"
            >
              <PlayCircle size={20} />
              Download for Android
            </Button>
          </div>
          
          <div className="bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg">
            <p className="text-gray-800 mb-4">Not ready to download? Join our waitlist:</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                required
              />
              <Button type="submit">Join Waitlist</Button>
            </form>
          </div>
        </div>
      </Container>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#features" className="text-white">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;