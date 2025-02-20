import React, { useState } from 'react';
import { Maximize2, Minimize2, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MoviePlayerProps {
  imageId: string;
}

export const MoviePlayer = ({ imageId }: MoviePlayerProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const navigate = useNavigate();

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black z-50">
      <div className="relative w-full h-full">
        <img
          src={`https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=1920&q=80`}
          alt="Movie"
          className="w-full h-full object-cover"
        />
        
        {/* Controls overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
          <div className="flex items-center justify-between">
            {/* Back button */}
            <button
              onClick={() => navigate(-1)}
              className="text-white hover:text-gray-300 transition"
            >
              Back
            </button>
            
            {/* Right controls */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="p-2 text-white hover:bg-white/10 rounded-full transition"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6" />
                ) : (
                  <Volume2 className="w-6 h-6" />
                )}
              </button>
              
              <button
                onClick={toggleFullscreen}
                className="p-2 text-white hover:bg-white/10 rounded-full transition"
              >
                {isFullscreen ? (
                  <Minimize2 className="w-6 h-6" />
                ) : (
                  <Maximize2 className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};