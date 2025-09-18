import React, { useState } from 'react';
import Navigation from './components/Header';
import ReleaseDetail from './components/ReleaseCard';
import ArtistDetail from './components/ArtistCard';
import ContactView from './components/Footer';
import TypingAnimation from './components/TypingAnimation';
import { RELEASES, ARTISTS } from './constants';
import { Release, Artist } from './types';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('HOME');
  const [selectedRelease, setSelectedRelease] = useState<Release | null>(null);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(null);
  const [expandedArtist, setExpandedArtist] = useState<string | null>(null);

  const handleNavClick = (view: string) => {
    setActiveView(view);
    setSelectedRelease(null);
    setSelectedArtist(null);
    setExpandedArtist(null);
  };

  const handleSelectRelease = (release: Release) => {
    setSelectedRelease(release);
    if (!expandedArtist || expandedArtist !== release.artist) {
      setExpandedArtist(release.artist);
    }
  };


  const renderHome = () => (
    <div className="p-8 flex flex-col items-center justify-center h-full text-center">
      <img src="/images/logo.png" alt="99Rhythm" className="max-w-full max-h-96 w-full md:w-1/2 select-none" />
      <div className="mt-4 text-xl md:text-2xl text-neutral-400 h-8 flex items-center justify-center">
        <TypingAnimation 
          text="It’s all about the rhythm."
          speed={80}
          pauseDuration={3000}
          className="font-mono"
        />
      </div>
    </div>
  );

  const renderContent = () => {
    switch (activeView) {
      case 'RELEASES':
        const releasesByArtist = RELEASES.reduce<Record<string, Release[]>>((acc, release) => {
          (acc[release.artist] = acc[release.artist] || []).push(release);
          return acc;
        }, {});
        const artistsWithReleases = Object.keys(releasesByArtist);

        return (
          <div className="flex w-full h-full overflow-hidden">
            <div className={`w-full md:w-1/3 border-r-2 border-neutral-800 p-4 overflow-y-auto ${selectedRelease ? 'hidden md:block' : 'block'}`}>
              <h2 className="text-xl font-bold uppercase text-neutral-400 mb-4 tracking-widest">
                // CATALOG
              </h2>
              <ul>
                {artistsWithReleases.map(artistName => (
                  <li key={artistName}>
                    <button
                      onClick={() => setExpandedArtist(expandedArtist === artistName ? null : artistName)}
                      className="text-left w-full p-2 text-base font-bold hover:text-green-400 text-neutral-300 flex justify-between items-center"
                    >
                      <span>{artistName}</span>
                      <span className="text-neutral-500">{expandedArtist === artistName ? '[-]' : '[+]'}</span>
                    </button>
                    {expandedArtist === artistName && (
                      <ul className="pl-4 border-l-2 border-neutral-800 ml-2">
                        {releasesByArtist[artistName].map(release => (
                          <li key={release.id}>
                            <button
                              onClick={() => handleSelectRelease(release)}
                              className={`text-left w-full p-2 text-sm md:text-base hover:text-green-400 ${selectedRelease?.id === release.id ? 'text-green-400' : 'text-neutral-300'}`}
                            >
                              <span className="text-neutral-500 mr-2">{String(release.id).padStart(2, '0')}</span> {release.title}
                            </button>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className={`w-full md:w-2/3 p-4 md:p-6 overflow-y-auto ${selectedRelease ? 'block' : 'hidden md:block'}`}>
              {selectedRelease ? (
                <ReleaseDetail release={selectedRelease} onBack={() => setSelectedRelease(null)} />
              ) : (
                <div className="h-full flex items-center justify-center text-neutral-500">
                  <p className="blinking-cursor">// SELECT A FILE</p>
                </div>
              )}
            </div>
          </div>
        );
      case 'ARTISTS':
        return (
          <div className="flex w-full h-full overflow-hidden">
            <div className={`w-full md:w-1/3 border-r-2 border-neutral-800 p-4 overflow-y-auto ${selectedArtist ? 'hidden md:block' : 'block'}`}>
              <h2 className="text-xl font-bold uppercase text-neutral-400 mb-4 tracking-widest">
                // ARTISTS
              </h2>
              <ul>
                {ARTISTS.map(artist => (
                  <li key={artist.id}>
                    <button
                      onClick={() => setSelectedArtist(artist)}
                      className={`text-left w-full p-2 text-sm md:text-base hover:text-green-400 ${selectedArtist?.id === artist.id ? 'text-green-400' : 'text-neutral-300'}`}
                    >
                      {artist.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className={`w-full md:w-2/3 p-4 md:p-6 overflow-y-auto ${selectedArtist ? 'block' : 'hidden md:block'}`}>
              {selectedArtist ? (
                <ArtistDetail artist={selectedArtist} onBack={() => setSelectedArtist(null)} />
              ) : (
                <div className="h-full flex items-center justify-center text-neutral-500">
                  <p className="blinking-cursor">// SELECT AN ARTIST</p>
                </div>
              )}
            </div>
          </div>
        );
      case 'CONTACT':
        return <ContactView />;
      default:
        return renderHome();
    }
  };

  return (
    <div className="bg-black text-neutral-300 font-mono min-h-screen flex selection:bg-green-400 selection:text-black">
      <Navigation onNavClick={handleNavClick} activeView={activeView} />
      <main className="w-full h-screen p-1.5">
        <div className="border-2 border-neutral-800 w-full h-full">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;