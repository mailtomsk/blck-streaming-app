import React from 'react';
import { Play, ChevronLeft, ChevronRight, Info } from 'lucide-react';
import { MovieDetails } from './MovieDetails';

interface ContentRowProps {
  title: string;
  items: string[];
}

export const ContentRow = ({ title, items }: ContentRowProps) => {
  const [selectedMovie, setSelectedMovie] = React.useState<string | null>(null);

  return (
    <div className="mb-8">
      <div className="relative group">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
          <div className="flex gap-4 overflow-x-scroll scrollbar-hide pb-4 scroll-smooth justify-center">
          {items.map((item, index) => (
            <div key={index} className="flex-none w-[260px] relative first:ml-auto last:mr-auto">
              <img
                onClick={() => setSelectedMovie(item)}
                src={`https://images.unsplash.com/photo-${item}?auto=format&fit=crop&w=800&q=80`}
                alt={`Movie ${index + 1}`}
                className="w-full h-[146px] object-cover rounded-md transition transform hover:scale-105 cursor-pointer"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all rounded-md flex items-center justify-center opacity-0 hover:opacity-100">
                <div className="flex flex-col items-center gap-4">
                  <Play
                    onClick={() => setSelectedMovie(item)}
                    className="w-12 h-12 text-white cursor-pointer hover:scale-110 transition"
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => setSelectedMovie(item)}
                      className="p-2 bg-white bg-opacity-30 rounded-full hover:bg-opacity-50 transition"
                    >
                      <Info className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent">
                  <h3 className="text-white font-semibold">Movie Title {index + 1}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-300">
                    <span>98% Match</span>
                    <span className="px-1 border border-gray-500 text-xs">TV-MA</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
        <button className="absolute left-2 sm:left-4 top-1/2 -translate-y-8 bg-black bg-opacity-50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-75 disabled:opacity-0">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="absolute right-2 sm:right-4 top-1/2 -translate-y-8 bg-black bg-opacity-50 p-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-opacity-75 disabled:opacity-0">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      {selectedMovie && (
        <MovieDetails
          isOpen={!!selectedMovie}
          onClose={() => setSelectedMovie(null)}
          imageId={selectedMovie}
        />
      )}
    </div>
  );
};