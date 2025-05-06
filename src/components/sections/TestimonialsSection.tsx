import React, { useState, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  location: string;
  image: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Montego Bay",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "JamRoc was a lifesaver during our vacation! We got authentic Jamaican food delivered right to our resort room. The jerk chicken was incredible!"
  },
  {
    id: 2,
    name: "Michael Thompson",
    location: "Kingston",
    image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "As a local, I use their grocery delivery service weekly. It's convenient and they always bring the freshest produce from the market."
  },
  {
    id: 3,
    name: "Emma Wilson",
    location: "Negril",
    image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 4,
    text: "We were staying at a resort with limited food options. JamRoc introduced us to amazing local dishes we would have never discovered otherwise!"
  },
  {
    id: 4,
    name: "David Brown",
    location: "Ocho Rios",
    image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "The variety of restaurants is impressive. I've tried so many different Jamaican specialties through this app that I never knew existed!"
  },
  {
    id: 5,
    name: "Lisa Chen",
    location: "Port Antonio",
    image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    rating: 5,
    text: "The delivery is always on time, and the food arrives hot. Their customer service is exceptional too!"
  }
];

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-center mb-4">
        <img 
          src={testimonial.image} 
          alt={testimonial.name} 
          className="w-14 h-14 rounded-full object-cover mr-4"
        />
        <div>
          <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
          <p className="text-gray-500 text-sm">{testimonial.location}</p>
        </div>
      </div>
      
      <div className="flex mb-3">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < testimonial.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"} 
          />
        ))}
      </div>
      
      <p className="text-gray-600 italic">"{testimonial.text}"</p>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  // For mobile, show one at a time
  // For desktop, show 3 at a time in a carousel
  const visibleTestimonials = isMobile 
    ? [testimonials[activeIndex]]
    : [
        testimonials[activeIndex],
        testimonials[(activeIndex + 1) % testimonials.length],
        testimonials[(activeIndex + 2) % testimonials.length]
      ];
  
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of satisfied customers enjoying authentic Jamaican cuisine through JamRoc.
          </p>
        </div>
        
        <div className="relative">
          <div className="flex gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex-1 min-w-0">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8 gap-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-green-50 text-green-700 hover:bg-green-100 transition-colors duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
        
        <div className="mt-16 p-8 bg-green-700 rounded-2xl text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Experience Authentic Jamaican Flavors?</h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Download the app today and get 25% off your first order with code: <span className="font-bold">TASTEJAMAICA</span>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5227 7.39069C17.2909 7.62983 16.8227 7.5955 16.2545 7.39069C15.6864 7.18588 15.1523 7.02541 14.6523 6.9113C14.1523 6.79719 13.6523 6.72741 13.1864 6.72741C12.7205 6.72741 12.1864 6.86297 11.5841 7.13407C10.9818 7.40518 10.4477 7.81911 9.97727 8.32193C9.50682 8.82474 9.11818 9.40519 8.87727 10.0684C8.63636 10.7316 8.53409 11.4061 8.56818 12.0752C8.60227 12.7443 8.75 13.3588 9.01136 13.9147C9.27273 14.4706 9.61364 14.9506 10.0341 15.3645C10.4545 15.7784 10.9432 16.0838 11.5 16.2684C12.0568 16.453 12.6136 16.5114 13.1705 16.4301C13.7273 16.3488 14.2386 16.1983 14.7045 15.9842C15.1705 15.7702 15.5682 15.5219 15.8977 15.2245C16.2273 14.9272 16.4886 14.6071 16.6818 14.2643C16.875 13.9214 16.9886 13.5899 17.0227 13.2698L13.8523 11.9148V11.8564H17.1477C17.1477 11.8564 17.1591 11.9722 17.1818 12.2039C17.2045 12.4356 17.1932 12.7329 17.1477 13.0872C17.1023 13.4414 16.9886 13.8841 16.8068 14.4151C16.625 14.946 16.3182 15.4652 15.8864 15.9842C15.4545 16.5033 14.8523 16.9522 14.0795 17.3387C13.3068 17.7251 12.3182 17.9183 11.1136 17.9183C10.2273 17.9183 9.41818 17.7652 8.6875 17.4588C7.95682 17.1525 7.32954 16.7328 6.80682 16.1983C6.28409 15.6638 5.86364 15.0393 5.54545 14.3244C5.22727 13.6096 5.06818 12.8414 5.06818 12.0172C5.06818 11.0842 5.25 10.2368 5.61364 9.47521C5.97727 8.71362 6.47727 8.0625 7.11364 7.52183C7.75 6.98116 8.47727 6.56723 9.29545 6.28002C10.1136 5.99282 10.9773 5.85726 11.8864 5.87336C12.6591 5.88947 13.375 5.97534 14.0341 6.12701C14.6932 6.27867 15.2841 6.46737 15.8068 6.69313C16.3295 6.91889 16.7841 7.16074 17.1705 7.41575C17.5568 7.67076 17.8636 7.89652 18.0909 8.09131L17.5227 7.39069Z" />
              </svg>
              Download for Android
            </button>
            <button className="bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-colors duration-200">
              <svg width="20" height="24" viewBox="0 0 20 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.8046 12.6847C16.8232 11.7348 17.1452 10.809 17.7365 10.0492C18.3279 9.28949 19.1594 8.73269 20.0988 8.4598C19.6477 7.76606 19.0426 7.17977 18.328 6.74867C17.6135 6.31757 16.8084 6.05206 15.9767 5.97263C14.2247 5.79004 12.5214 7.05056 11.6235 7.05056C10.7071 7.05056 9.28273 5.99165 7.8025 6.0286C6.9266 6.06613 6.07237 6.31799 5.31257 6.75946C4.55278 7.20094 3.91 7.81776 3.44193 8.55324C1.53142 11.7715 2.91395 16.4804 4.7538 19.1253C5.66558 20.4195 6.72837 21.856 8.10602 21.7972C9.4465 21.7347 9.95616 20.9114 11.5846 20.9114C13.1941 20.9114 13.6659 21.7972 15.0626 21.7614C16.5032 21.7347 17.419 20.4765 18.2993 19.1715C18.9749 18.2079 19.4832 17.1391 19.8036 16.0102C18.6704 15.5122 17.7329 14.6611 17.1366 13.5801C16.5404 12.4991 16.3182 11.2501 16.5032 10.0349" />
                <path d="M13.6105 3.81645C14.4193 2.82329 14.7792 1.5495 14.6094 0.28125C13.3789 0.484759 12.2548 1.09583 11.4382 2.01123C11.0379 2.45695 10.7291 2.97887 10.5296 3.54633C10.3301 4.11379 10.244 4.71628 10.2764 5.31894C10.8901 5.32749 11.4986 5.2065 12.0592 4.96628C12.6198 4.72606 13.1186 4.37261 13.5206 3.92559" />
              </svg>
              Download for iOS
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TestimonialsSection;