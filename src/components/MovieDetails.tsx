import React from 'react';
import { X, Play, Plus, ThumbsUp, Volume2, VolumeX } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface MovieDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  imageId: string;
}

export const MovieDetails = ({ isOpen, onClose, imageId }: MovieDetailsProps) => {
  if (!isOpen) return null;
  const navigate = useNavigate();

  const handlePlay = () => {
    onClose();
    navigate(`/watch/${imageId}`);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 overflow-y-auto">
      <div className="max-w-4xl mx-auto my-16 bg-zinc-900 rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={`https://images.unsplash.com/photo-${imageId}?auto=format&fit=crop&w=1600&q=80`}
            alt="Movie"
            className="w-full h-[400px] object-cover"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black rounded-full hover:bg-opacity-70 transition"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-zinc-900">
            <h2 className="text-4xl font-bold text-white mb-4">Interstellar</h2>
            <div className="flex gap-4">
              <button
                onClick={handlePlay}
                className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded hover:bg-opacity-90 transition"
              >
                <Play className="w-5 h-5" /> Play
              </button>
              <button className="p-3 bg-gray-500 bg-opacity-50 rounded-full hover:bg-opacity-70 transition">
                <Plus className="w-5 h-5 text-white" />
              </button>
              <button className="p-3 bg-gray-500 bg-opacity-50 rounded-full hover:bg-opacity-70 transition">
                <ThumbsUp className="w-5 h-5 text-white" />
              </button>
              <button className="p-3 bg-gray-500 bg-opacity-50 rounded-full hover:bg-opacity-70 transition ml-auto">
                <Volume2 className="w-5 h-5 text-white" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="p-8">
          <div className="flex items-center gap-4 text-white mb-6">
            <span className="text-green-500">98% Match</span>
            <span>2014</span>
            <span className="px-2 py-1 text-xs border border-gray-500 rounded">PG-13</span>
            <span>2h 49m</span>
            <span className="px-2 py-1 text-xs bg-gray-800 rounded">HD</span>
          </div>
          
          <p className="text-white mb-6">
            When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.
          </p>
          
          <div className="mb-6">
            <h3 className="text-gray-400 mb-2">Cast:</h3>
            <p className="text-white">Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine</p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-gray-400 mb-2">Genres:</h3>
            <p className="text-white">Sci-Fi • Adventure • Drama</p>
          </div>
          
          <div>
            <h3 className="text-gray-400 mb-2">Director:</h3>
            <p className="text-white">Christopher Nolan</p>
          </div>
        </div>
      </div>
    </div>
  );
};