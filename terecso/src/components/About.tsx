import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

const About: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="about" className="relative bg-[#FFFCEF] py-20 sm:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div ref={ref} className="reveal relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left column */}
          <div className="lg:col-span-7">
            <div className="chip green mb-5">
              <Icon name="Leaf" className="w-3 h-3" /> About TERECSO
            </div>
            <h2
              className="text-[#1f4d12] text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02]"
              style={{ letterSpacing: '-0.03em' }}
            >
              A Tanzanian <span className="text-[#58CC02]">cooperative</span>, turning waste into{' '}
              <span className="text-[#58CC02]">livelihoods</span>.
            </h2>
            <p className="mt-7 text-[#3C3C3C] text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              TERECSO &mdash; The Environmental Conservation and Recycling Cooperative
              Society Organization &mdash; was founded in 2011 to bring structure,
              dignity and shared profit to recycling in Tanzania. Today we unite{' '}
              <strong className="text-[#1f4d12]">
                pickers, collectors, recyclers, NGOs and environmental associations
              </strong>{' '}
              under one cooperative umbrella.
            </p>
            <p className="mt-5 text-[#3C3C3C] text-base sm:text-lg leading-relaxed max-w-2xl font-medium">
              From a small base in Ubungo, we now operate across Dar es Salaam &mdash;
              and through partnerships, across Tanzania. Every kilogram we
              collect feeds back into a circular system that pays members fairly
              and supplies recycled material to local industry.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#join" className="duo-btn">
                Become a member <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
              <a href="#impact" className="duo-btn ghost">See our impact</a>
            </div>
          </div>

          {/* Right column */}
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="duo-card p-6 sm:p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="w-12 h-12 rounded-2xl bg-[#E8FFD2] border-2 border-[#D7FFB8] flex items-center justify-center text-[#1f4d12]"
                    style={{ boxShadow: '0 3px 0 0 #B7E893' }}
                  >
                    <Icon name="Sparkles" className="w-5 h-5" />
                  </span>
                  <div>
                    <div className="text-[#777777] text-xs font-extrabold uppercase tracking-widest">Our mission</div>
                    <div className="text-[#1f4d12] font-black">Cooperative circular economy</div>
                  </div>
                </div>
                <p className="text-[#3C3C3C] text-sm leading-relaxed font-medium">
                  To organise informal recyclers into a profitable, professional
                  cooperative &mdash; while building the infrastructure Tanzania needs
                  to keep materials in use and out of landfill.
                </p>
                <div className="mt-5 grid grid-cols-3 gap-2 text-center">
                  {[
                    { v: '2011', k: 'Founded' },
                    { v: '1k+', k: 'Members' },
                    { v: '5', k: 'Districts' },
                  ].map((s) => (
                    <div key={s.k} className="bg-[#E8FFD2] border-2 border-[#D7FFB8] rounded-xl py-2.5">
                      <div className="text-[#1f4d12] font-black text-lg">{s.v}</div>
                      <div className="text-[#777777] text-[10px] font-extrabold uppercase tracking-widest">{s.k}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating award badge */}
              <div
                className="absolute -top-5 -right-3 sm:-right-6 duo-card p-3 px-4 flex items-center gap-3 bg-white wiggle float-1"
              >
                <span
                  className="w-9 h-9 rounded-xl bg-[#FFC800] flex items-center justify-center"
                  style={{ boxShadow: '0 3px 0 0 #D5A500' }}
                >
                  <Icon name="Star" className="w-4 h-4 text-white" strokeWidth={2.5} />
                </span>
                <div>
                  <div className="text-[#1f4d12] font-black text-sm">Cooperative of the Year</div>
                  <div className="text-[#777777] text-[10px] font-extrabold uppercase tracking-widest">
                    TZ Sustainability Awards &middot; 2024
                  </div>
                </div>
              </div>

              {/* Floating members badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-6 duo-card p-3 px-4 flex items-center gap-3 bg-white float-2">
                <span
                  className="w-9 h-9 rounded-xl bg-[#1CB0F6] flex items-center justify-center"
                  style={{ boxShadow: '0 3px 0 0 #0B81C2' }}
                >
                  <Icon name="Users" className="w-4 h-4 text-white" strokeWidth={2.5} />
                </span>
                <div>
                  <div className="text-[#1f4d12] font-black text-sm">+38 members this month</div>
                  <div className="text-[#777777] text-[10px] font-extrabold uppercase tracking-widest">Live registry</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
