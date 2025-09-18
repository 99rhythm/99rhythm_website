import React from 'react';

interface NavigationProps {
  onNavClick: (view: string) => void;
  activeView: string;
}

const NavItem: React.FC<{ view: string; label: string; } & NavigationProps> = ({ view, label, activeView, onNavClick }) => {
  const isActive = activeView === view;
  return (
    <li>
      <button
        onClick={() => onNavClick(view)}
        className={`w-full text-left whitespace-nowrap px-4 py-2 text-sm md:text-base uppercase tracking-widest ${isActive ? 'text-green-400' : 'text-neutral-500 hover:text-green-400'}`}
      >
        {label}
      </button>
    </li>
  );
}

const Navigation: React.FC<NavigationProps> = (props) => {
  return (
    <header className="h-screen p-1.5">
      <div className="border-2 border-neutral-800 h-full flex flex-col justify-between">
        <div>
          <div className="px-4 py-2 border-b-2 border-neutral-800">
            <button onClick={() => props.onNavClick('HOME')} className="hover:opacity-75 transition-opacity">
              <img src="/images/logo-small.png" alt="99Rhythm" className="h-12 w-auto" />
            </button>
          </div>
          <nav className="mt-4">
            <ul>
              <NavItem {...props} view="RELEASES" label="// Releases" />
              <NavItem {...props} view="ARTISTS" label="// ARTISTS" />
              <NavItem {...props} view="CONTACT" label="// Contact" />
            </ul>
          </nav>
        </div>
        <div className="p-4 text-neutral-700 text-xs">
          <p>99RHYTHM_OS</p>
          <p>v1.0.0</p>
        </div>
      </div>
    </header>
  );
};

export default Navigation;