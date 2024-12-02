import React from 'react';
import { ThemeProvider } from './components/context/ThemeContext';
import { Header } from './components/layout/Header';
import { ServerDescription } from './components/layout/ServerDescription';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 w-full">
        <Header />
        <main className="flex-grow w-full">
          <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <ServerDescription />
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}


export default App;
