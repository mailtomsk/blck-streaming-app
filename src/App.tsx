import React from 'react';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { TVShows } from './pages/TVShows';
import { Movies } from './pages/Movies';
import { NewAndPopular } from './pages/NewAndPopular';
import { MyList } from './pages/MyList';
import { Watch } from './pages/Watch';
import { Navbar } from './components/Navbar';

const Footer = () => (
  <footer className="bg-[#1a0f0f] text-gray-400 py-8 sm:py-16 px-4 sm:px-16">
    <div className="max-w-7xl mx-auto">
      <div className="flex gap-4 sm:gap-6 mb-8 justify-center sm:justify-start">
        <Facebook className="w-6 h-6 cursor-pointer hover:text-white transition" />
        <Twitter className="w-6 h-6 cursor-pointer hover:text-white transition" />
        <Instagram className="w-6 h-6 cursor-pointer hover:text-white transition" />
        <Youtube className="w-6 h-6 cursor-pointer hover:text-white transition" />
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mb-8 text-xs sm:text-sm">
        <div className="space-y-4">
          <p className="hover:text-white cursor-pointer">Audio Description</p>
          <p className="hover:text-white cursor-pointer">Investor Relations</p>
          <p className="hover:text-white cursor-pointer">Legal Notices</p>
        </div>
        <div className="space-y-4">
          <p className="hover:text-white cursor-pointer">Help Center</p>
          <p className="hover:text-white cursor-pointer">Jobs</p>
          <p className="hover:text-white cursor-pointer">Cookie Preferences</p>
        </div>
        <div className="space-y-4">
          <p className="hover:text-white cursor-pointer">Gift Cards</p>
          <p className="hover:text-white cursor-pointer">Terms of Use</p>
          <p className="hover:text-white cursor-pointer">Corporate Information</p>
        </div>
        <div className="space-y-4">
          <p className="hover:text-white cursor-pointer">Media Center</p>
          <p className="hover:text-white cursor-pointer">Privacy</p>
          <p className="hover:text-white cursor-pointer">Contact Us</p>
        </div>
      </div>
      <div className="text-xs sm:text-sm text-center sm:text-left">
        <p className="mb-4">© 2025 BLCK. All rights reserved.</p>
        <p>BLCK is a streaming service offering a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tv-shows" element={<TVShows />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/new-and-popular" element={<NewAndPopular />} />
          <Route path="/my-list" element={<MyList />} />
          <Route path="/watch/:id" element={<Watch />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
