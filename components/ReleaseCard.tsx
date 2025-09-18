import React from 'react';
import { Release } from '../types';

interface ReleaseDetailProps {
  release: Release;
  onBack: () => void;
}

const ReleaseDetail: React.FC<ReleaseDetailProps> = ({ release, onBack }) => {
  return (
    <div className="w-full">
      <button
        onClick={onBack}
        className="md:hidden flex items-center mb-6 text-neutral-400 hover:text-green-400 uppercase tracking-widest text-sm"
        aria-label="Back to catalog"
      >
        <i className="fas fa-arrow-left mr-2"></i>
        Back to Catalog
      </button>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <img src={release.imageUrl} alt={release.title} className="w-full h-auto aspect-square object-cover" />
        <div>
          <p className="text-neutral-500 text-sm">// {release.releaseDate}</p>
          <h3 className="text-3xl font-bold uppercase text-neutral-200 mt-1">{release.title}</h3>
          <p className="text-lg text-neutral-400 mb-4">{release.artist}</p>
          <p className="text-neutral-300 text-sm leading-relaxed mb-6">{release.description}</p>
           <a 
            href={release.bandcampUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-block w-full text-center py-3 px-6 border-2 border-neutral-700 text-neutral-400 uppercase font-bold hover:bg-green-400 hover:text-black"
          >
            Buy
          </a>
        </div>
      </div>
      <div className="mt-6 border-t-2 border-neutral-800 pt-6" dangerouslySetInnerHTML={{ __html: release.soundcloudEmbed }} />
    </div>
  );
};

export default ReleaseDetail;