import React from 'react';
import { 
  MessageCircle, 
  Sparkles, 
  Users, 
  Play, 
  Youtube, 
  Github, 
  Twitch 
} from 'lucide-react';

export const Footer = () => {
  const socialLinks = [
    { 
      name: 'SA-MP', 
      icon: Play, 
      link: 'samp://neo.neverlandrp.fun:7777',
      color: 'text-indigo-500 hover:text-indigo-600' 
    },
    { 
      name: 'YouTube', 
      icon: Youtube, 
      link: 'https://youtube.com/yourchannel',
      color: 'text-red-500 hover:text-red-600' 
    },
    { 
      name: 'GitHub', 
      icon: Github, 
      link: 'https://github.com/Mndvv/NeolandRP-Site',
      color: 'text-gray-800 dark:text-gray-200 hover:text-gray-600' 
    },
    { 
      name: 'Twitch', 
      icon: Twitch, 
      link: 'https://twitch.tv/yourstream',
      color: 'text-purple-500 hover:text-purple-600' 
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-gray-900 dark:to-gray-800 text-white">
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Contact Section */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <MessageCircle className="h-6 w-6" />
              <span>Contact Us</span>
            </h3>
            <p className="mb-2">support@neverlandrp.fun</p>
            <p>Discord: Neoland Roleplay</p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <Sparkles className="h-6 w-6" />
              <span>Stay Updated</span>
            </h3>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-grow px-4 py-2 rounded-l-full bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-indigo-600 px-4 py-2 rounded-r-full hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 flex items-center space-x-2">
              <Users className="h-6 w-6" />
              <span>Community</span>
            </h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    ${social.color} 
                    hover:scale-110 
                    transition-all 
                    inline-block
                  `}
                >
                  <social.icon className="h-6 w-6" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-sm opacity-75">
              © 2024 RP Gaming Server. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};