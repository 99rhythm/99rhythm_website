import React from 'react';
import { Artist } from '../types';

interface ArtistDetailProps {
  artist: Artist;
  onBack: () => void;
}

const ArtistDetail: React.FC<ArtistDetailProps> = ({ artist, onBack }) => {
  return (
    <div className="w-full">
        <button
            onClick={onBack}
            className="md:hidden flex items-center mb-6 text-neutral-400 hover:text-green-400 uppercase tracking-widest text-sm"
            aria-label="Back to Artists"
        >
            <i className="fas fa-arrow-left mr-2"></i>
            Back to Artists
        </button>
        <h3 className="text-3xl font-bold uppercase text-neutral-200 mb-6">{artist.name}</h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <img 
                src={artist.imageUrl} 
                alt={artist.name} 
                className="w-full aspect-square object-cover" 
            />
            <div className="lg:col-span-2">
              {artist.subtitle && (
                <p className="text-neutral-400 italic mb-4 text-base">
                  {artist.subtitle}
                </p>
              )}
              <p className="text-neutral-300 leading-relaxed text-base">
                {artist.bio}
              </p>
            </div>
      </div>
    </div>
  );
};

export default ArtistDetail;