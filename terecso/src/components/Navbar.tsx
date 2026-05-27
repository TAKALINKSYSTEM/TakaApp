import React, { useState, useEffect } from 'react';
import Icon from './Icon';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#members', label: 'Members' },
  { href: '#how', label: 'How It Works' },
  { href: '#services', label: 'Services' },
  { href: '#impact', label: 'Impact' },
  { href: '#contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${scrolled ? 'bg-white/85 backdrop-blur-xl border-b border-[#E5E5E5] shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8 py-3.5 sm:py-4">
          <a href="#" className="flex items-center gap-2.5">
            <span
              className={`relative flex items-center justify-center w-11 h-11 rounded-2xl ${scrolled ? 'bg-[#58CC02] text-white' : 'bg-white text-[#58CC02]'}`}
              style={{ boxShadow: scrolled ? '0 3px 0 0 #46a302' : '0 3px 0 0 rgba(0,0,0,0.18)' }}
            >
              <Icon name="Recycle" className="w-5 h-5" strokeWidth={2.4} />
            </span>
            <div className="leading-tight">
              <div className={`text-lg sm:text-xl font-black tracking-tight ${scrolled ? 'text-[#1f4d12]' : 'text-white'}`}>TERECSO</div>
              <div className={`text-[10px] uppercase tracking-[0.18em] font-bold ${scrolled ? 'text-[#777777]' : 'text-white/80'}`}>
                Tanzania &middot; Since 2011
              </div>
            </div>
          </a>

          <div className={`hidden lg:flex items-center gap-1 rounded-full pl-5 pr-1 py-1 border ${scrolled ? 'bg-white border-[#E5E5E5]' : 'bg-white/85 backdrop-blur-md border-white/60'}`}>
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm px-3 py-2 rounded-full font-bold transition-colors ${i === 0 ? 'text-[#1f4d12]' : 'text-[#3C3C3C] hover:text-[#1f4d12]'}`}
              >
                {link.label}
              </a>
            ))}
            <a href="#join" className="duo-btn sm ml-2">Join now</a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a href="#donate" className="hidden md:inline-flex duo-btn sm yellow">Donate</a>
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className={`lg:hidden relative flex items-center justify-center w-11 h-11 rounded-2xl border ${scrolled ? 'bg-white border-[#E5E5E5] text-[#1f4d12]' : 'bg-white/85 backdrop-blur border-white/60 text-[#1f4d12]'} transition-all duration-300`}
              style={{ boxShadow: '0 3px 0 0 rgba(0,0,0,0.12)' }}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            >
              <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-0 rotate-90 scale-50' : 'opacity-100 rotate-0 scale-100'}`}>
                <Icon name="Menu" className="w-5 h-5" />
              </span>
              <span className={`absolute transition-all duration-300 ${menuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'}`}>
                <Icon name="X" className="w-5 h-5" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`lg:hidden fixed inset-0 z-20 transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        <div className="absolute inset-0 bg-[#1f4d12]/45 backdrop-blur-sm" />
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed top-0 right-0 bottom-0 z-20 w-[85%] max-w-sm bg-white shadow-2xl transition-transform duration-500 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.22,1,0.36,1)' }}
      >
        <div className="flex flex-col h-full pt-24 px-7 pb-8">
          <div className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-2xl font-extrabold text-[#1f4d12] py-4 border-b border-[#E5E5E5] transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
                style={{ transitionDelay: menuOpen ? `${150 + i * 60}ms` : '0ms' }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div
            className={`mt-8 flex flex-col gap-3 transition-all duration-500 ${menuOpen ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'}`}
            style={{ transitionDelay: menuOpen ? '400ms' : '0ms' }}
          >
            <a href="#join" className="duo-btn">Join the cooperative</a>
            <a href="#donate" className="duo-btn yellow">Donate</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
