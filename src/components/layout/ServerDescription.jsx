import React, { useState } from 'react';
import { 
  Sparkles, 
  Users, 
  ArrowRight 
} from 'lucide-react';

export const ServerDescription = () => {
  const [activeTab, setActiveTab] = useState('about');

  const serverStats = [
    { value: '20+', label: 'Players Online', color: 'emerald' },
    { value: '10+', label: 'Active Factions & Sidejobs', color: 'blue' },
    { value: '100+', label: 'Unique Roles', color: 'purple' },
    { value: '200+', label: 'Daily Events', color: 'orange' }
  ];

  return (
    <div className="w-full px-4 py-8">
      {/* Tab Buttons */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setActiveTab('about')}
          className={`
            px-4 py-2 rounded-full transition-all
            ${activeTab === 'about' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}
          `}
        >
          About Server
        </button>
        <button
          onClick={() => setActiveTab('stats')}
          className={`
            px-4 py-2 rounded-full transition-all
            ${activeTab === 'stats' 
              ? 'bg-indigo-600 text-white' 
              : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300'}
          `}
        >
          Server Stats
        </button>
      </div>

      {/* Content Sections */}
      {activeTab === 'about' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-4">
            <Sparkles className="h-8 w-8 text-purple-600 dark:text-purple-400" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Neoland Roleplay
            </h2>
          </div>
          
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            Transform your SA-MP experience with our unique roleplay server. 
            Create your story, build your character, and explore endless possibilities!
          </p>
          
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full flex items-center justify-center hover:bg-indigo-700 transition-colors">
              Join Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-6 py-3 rounded-full hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      )}

      {activeTab === 'stats' && (
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <div className="flex items-center space-x-4 mb-6">
            <Users className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
            <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100">
              Community at a Glance
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {serverStats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="bg-gray-100 dark:bg-gray-700 rounded-xl p-4 text-center"
              >
                <p className={`text-2xl font-bold text-${stat.color}-600 dark:text-${stat.color}-400`}>
                  {stat.value}
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};