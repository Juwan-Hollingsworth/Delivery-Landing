import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { NavLink } from '../ui/NavLink';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-green-700 flex items-center">
              <span className="text-yellow-500">Jam</span>
              <span className="text-green-700">Roc</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#community">Community</NavLink>
            <NavLink href="#coverage">Coverage</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <Button 
              variant="primary"
              className="flex items-center gap-2"
            >
              <Download size={16} />
              Get the App
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-green-700 p-2"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <nav className="flex flex-col space-y-4 px-4">
              <NavLink href="#features" onClick={() => setIsMenuOpen(false)}>Features</NavLink>
              <NavLink href="#community" onClick={() => setIsMenuOpen(false)}>Community</NavLink>
              <NavLink href="#coverage" onClick={() => setIsMenuOpen(false)}>Coverage</NavLink>
              <NavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Testimonials</NavLink>
              <Button 
                variant="primary"
                className="flex items-center justify-center gap-2 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download size={16} />
                Get the App
              </Button>
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;