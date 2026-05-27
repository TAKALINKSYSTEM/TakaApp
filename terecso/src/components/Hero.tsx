import React from 'react';
import BoomerangVideoBg from './BoomerangVideoBg';
import Navbar from './Navbar';
import Icon from './Icon';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      <BoomerangVideoBg className="absolute inset-0 w-full h-full" />
      <Navbar />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 pt-32 sm:pt-36 md:pt-40 pb-32 sm:pb-40">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/85 backdrop-blur-md border-2 border-white shadow-[0_3px_0_0_rgba(255,255,255,0.4)] mb-7"
          >
            <span className="w-2 h-2 rounded-full bg-[#58CC02] pulse-glow" />
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1f4d12]">
              A cooperative since 2011 &middot; Dar es Salaam
            </span>
          </div>

          <h1
            className="font-black text-white leading-[0.95] text-[2.5rem] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            style={{ letterSpacing: '-0.035em', textShadow: '0 4px 30px rgba(0,0,0,0.25)' }}
          >
            We close the loop on{' '}
            <span className="text-[#D7FFB8]">Tanzania&rsquo;s</span> waste.
          </h1>

          <p
            className="mt-7 text-white/90 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl font-semibold"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.25)' }}
          >
            Pickers, collectors, recyclers, NGOs &mdash;{' '}
            <span className="text-[#D7FFB8]">1,000+ members strong</span>,
            organising a circular economy that works for everyone.
          </p>

          <div className="mt-9 flex items-center gap-3 sm:gap-4 flex-wrap justify-center">
            <a href="#join" className="duo-btn lg">
              Join the cooperative <Icon name="ArrowRight" className="w-4 h-4" />
            </a>
            <a href="#how" className="duo-btn lg ghost">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-[#58CC02] text-white">
                <Icon name="Play" className="w-3 h-3" strokeWidth={2.5} />
              </span>
              Watch How It Works
            </a>
          </div>

          {/* Hero stat strip */}
          <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-5 w-full max-w-3xl">
            {[
              { v: '1,000+', k: 'Members' },
              { v: '600+', k: 'Collection points' },
              { v: '20+', k: 'Factories connected' },
            ].map((s) => (
              <div
                key={s.k}
                className="bg-white/90 backdrop-blur-md rounded-2xl border-2 border-white px-3 py-4 sm:py-5"
                style={{ boxShadow: '0 4px 0 0 rgba(255,255,255,0.45)' }}
              >
                <div
                  className="text-[#1f4d12] text-2xl sm:text-3xl md:text-4xl font-black"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {s.v}
                </div>
                <div className="text-[#777777] text-[11px] sm:text-xs font-extrabold uppercase tracking-widest mt-1">
                  {s.k}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating circular badge */}
      <div className="hidden md:block absolute right-6 lg:right-12 top-32 z-10 float-1">
        <div className="relative w-44 h-44">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/40 spin-slow" />
          <div
            className="absolute inset-3 rounded-full bg-[#58CC02] border-4 border-white flex flex-col items-center justify-center text-white"
            style={{ boxShadow: '0 4px 0 0 #46a302' }}
          >
            <Icon name="Recycle" className="w-9 h-9" strokeWidth={2.5} />
            <div className="text-[10px] font-black uppercase tracking-widest mt-2">100% Circular</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
