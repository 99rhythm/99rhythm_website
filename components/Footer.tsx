import React from 'react';

const ContactView: React.FC = () => {
  return (
    <div className="p-4 md:p-8 h-full flex flex-col justify-between">
      <div>
        <h2 className="text-xl font-bold uppercase text-neutral-400 mb-8 tracking-widest">
          // CONTACT
        </h2>
        <div className="space-y-6">
          <div>
            <p className="text-neutral-500 text-sm">// Email</p>
            <a href="mailto:management@99rhythm.com" className="text-lg text-neutral-300 hover:bg-green-400 hover:text-black px-1">
              management@99rhythm.com
            </a>
          </div>
          <div>
            <p className="text-neutral-500 text-sm mb-2">// Network</p>
            <div className="flex items-center flex-wrap gap-4">
              <a href="https://www.instagram.com/michaelcruxell/" aria-label="Instagram" className="text-neutral-400 hover:bg-green-400 hover:text-black p-2">
                <i className="fa-brands fa-instagram text-xl"></i>
              </a>
              <a href="https://www.soundcloud.com/michaelcruxell" aria-label="SoundCloud" className="text-neutral-400 hover:bg-green-400 hover:text-black p-2">
                <i className="fa-brands fa-soundcloud text-xl"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCtDF90uiO2geXu189quTK9w" aria-label="YouTube" className="text-neutral-400 hover:bg-green-400 hover:text-black p-2">
                <i className="fa-brands fa-youtube text-xl"></i>
              </a>
              <a href="https://open.spotify.com/artist/1CFnHJDCLM9O6ep8zQuV8R" aria-label="Spotify" className="text-neutral-400 hover:bg-green-400 hover:text-black p-2">
                <i className="fa-brands fa-spotify text-xl"></i>
              </a>
              <a href="https://michaelcruxell.bandcamp.com" aria-label="Bandcamp" className="text-neutral-400 hover:bg-green-400 hover:text-black p-2">
                <i className="fa-brands fa-bandcamp text-xl"></i>
              </a>
              <a href="https://www.tiktok.com/@michaelcruxell" aria-label="TikTok" className="text-neutral-400 hover:bg-green-400 hover:text-black p-2">
                <i className="fa-brands fa-tiktok text-xl"></i>
              </a>
              <a href="https://linktr.ee/michaelcruxell" aria-label="Linktree" className="text-neutral-400 hover:bg-green-400 hover:text-black p-2">
                <i className="fa-solid fa-link text-xl"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-12 text-xs text-neutral-700">
        &copy; {new Date().getFullYear()} 99RHYTHM. ALL RIGHTS RESERVED. SYSTEM OPERATIONAL.
      </p>
    </div>
  );
};

export default ContactView;