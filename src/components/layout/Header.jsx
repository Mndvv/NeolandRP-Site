import React, { useContext, useState } from 'react';
import { 
  Gamepad2, 
  Users, 
  MessageCircle, 
  Rocket,
  Moon,
  Sun,
  Menu,
  X
} from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';

export const Header = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (e, href) => {
    e.preventDefault(); // Prevent default page refresh
    setIsMenuOpen(false); // Close mobile menu
    window.history.pushState({}, '', href); // Update URL without page reload
    
    // Optional: If you're using React Router, replace the above with:
    // navigate(href);
  };

  const menuItems = [
    { 
      icon: <Rocket className="h-5 w-5" />, 
      label: 'Home', 
      href: '/' 
    },
    { 
      icon: <Users className="h-5 w-5" />, 
      label: 'Accounts', 
      href: '/accounts' 
    },
    { 
      icon: <MessageCircle className="h-5 w-5" />, 
      label: 'Forum', 
      href: '/forum' 
    }
  ];

  return (
    <header className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white w-full">
  <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <Gamepad2 className="h-10 w-10 text-yellow-300 dark:text-yellow-500" />
          <h1 className="text-xl md:text-2xl font-bold">Neoland Roleplay</h1>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu} 
            className="focus:outline-none"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Navigation */}
        <nav className={`
          fixed inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 
          z-50 flex flex-col items-center justify-center space-y-6
          md:static md:flex md:flex-row md:space-x-4 md:bg-transparent md:space-y-0
          ${isMenuOpen ? 'block' : 'hidden'}
        `}>
          {menuItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="flex items-center space-x-2 text-white hover:text-yellow-300 transition-colors"
              onClick={(e) => handleNavigation(e, item.href)}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}

          {/* Theme Toggle */}
          <button 
            onClick={() => {
              toggleTheme();
              setIsMenuOpen(false); // Close mobile menu after theme toggle
            }}
            className="text-white hover:text-yellow-300 transition-colors"
          >
            {isDarkMode ? <Sun className="h-6 w-6" /> : <Moon className="h-6 w-6" />}
          </button>
        </nav>
      </div>
    </header>
  );
};