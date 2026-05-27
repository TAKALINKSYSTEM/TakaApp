import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

const DonateCTA: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="join" className="relative bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-8">
      <div ref={ref} className="reveal max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Donate block */}
        <div
          id="donate"
          className="relative rounded-3xl bg-[#FFC800] border-2 border-[#FFC800] p-8 sm:p-10 overflow-hidden"
          style={{ boxShadow: '0 6px 0 0 #D5A500' }}
        >
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/30 blur-2xl" />
          <div className="relative">
            <div
              className="chip mb-5"
              style={{ background: '#fff', borderColor: '#fff', color: '#8a6900', boxShadow: '0 2px 0 0 rgba(0,0,0,0.1)' }}
            >
              <Icon name="HeartHandshake" className="w-3 h-3" /> Donate
            </div>
            <h3
              className="text-[#3C3C3C] text-3xl sm:text-4xl font-black leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Fund a picker&rsquo;s first month of PPE.
            </h3>
            <p className="mt-4 text-[#3C3C3C]/85 font-semibold max-w-md">
              A single donation covers gloves, boots, a vest and a health
              check-up for one new member &mdash; about $40 USD.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#" className="duo-btn dark">
                Donate now <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
              <a href="#" className="duo-btn ghost" style={{ background: '#fff' }}>
                Sponsor a branch
              </a>
            </div>
          </div>
        </div>

        {/* Join block */}
        <div
          className="relative rounded-3xl bg-[#58CC02] border-2 border-[#58CC02] p-8 sm:p-10 overflow-hidden"
          style={{ boxShadow: '0 6px 0 0 #46a302' }}
        >
          <div className="absolute -right-10 -top-10 w-48 h-48 rounded-full bg-white/20 blur-2xl" />
          <div className="absolute -left-6 -bottom-6 w-40 h-40 rounded-full border-4 border-dashed border-white/30 spin-slow" />
          <div className="relative">
            <div
              className="chip mb-5"
              style={{ background: 'rgba(255,255,255,0.2)', borderColor: 'rgba(255,255,255,0.3)', color: '#fff', boxShadow: '0 2px 0 0 rgba(0,0,0,0.15)' }}
            >
              <Icon name="Sparkles" className="w-3 h-3" /> Become a member
            </div>
            <h3
              className="text-white text-3xl sm:text-4xl font-black leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Join 1,000+ Tanzanians building the circular economy.
            </h3>
            <p className="mt-4 text-white/85 font-semibold max-w-md">
              Whether you&rsquo;re a picker, a collector, an NGO or a recycler &mdash;
              there&rsquo;s a membership tier for you. Sign up takes under 5 minutes.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="duo-btn"
                style={{ background: '#fff', color: '#2f6b00', borderColor: '#fff', boxShadow: '0 4px 0 0 rgba(255,255,255,0.4)' }}
              >
                Apply to join <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
              <a href="#contact" className="duo-btn dark">Talk to us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateCTA;
