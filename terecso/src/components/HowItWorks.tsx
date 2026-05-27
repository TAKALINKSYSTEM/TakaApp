import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

const steps = [
  { i: 'Trash' as const,   t: 'Collect',        d: 'Members source-separate waste from streets, households and businesses across Dar es Salaam.' },
  { i: 'Truck' as const,   t: 'Transport',       d: 'Collector teams aggregate materials to neighborhood drop points, then to our MRF.' },
  { i: 'Recycle' as const, t: 'Sort & Process',  d: 'PET, HDPE, paper, metal, glass and e-waste are sorted, baled or processed.' },
  { i: 'Factory' as const, t: 'Reintegrate',     d: 'Recycled feedstock returns to 20+ local Tanzanian factories — closing the loop.' },
  { i: 'Coins' as const,   t: 'Members Earn',    d: 'Revenue is shared transparently with members, plus a slice into the investment fund.' },
];

const HowItWorks: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="how" className="relative bg-[#FFFCEF] py-20 sm:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div ref={ref} className="reveal relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="chip green mx-auto mb-5">
            <Icon name="Recycle" className="w-3 h-3" /> The Circular Loop
          </div>
          <h2
            className="text-[#1f4d12] text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02]"
            style={{ letterSpacing: '-0.03em' }}
          >
            How TERECSO closes the loop,{' '}
            <span className="text-[#58CC02]">step by step</span>.
          </h2>
        </div>

        {/* Mobile: vertical list */}
        <div className="lg:hidden flex flex-col gap-4">
          {steps.map((s, i) => (
            <div key={i} className="duo-card p-5 flex items-start gap-4">
              <div
                className="flex-none w-12 h-12 rounded-2xl bg-[#58CC02] text-white flex items-center justify-center"
                style={{ boxShadow: '0 3px 0 0 #46a302' }}
              >
                <Icon name={s.i} className="w-5 h-5" strokeWidth={2.4} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-[#58CC02] text-xs font-extrabold uppercase tracking-widest">
                    Step 0{i + 1}
                  </span>
                </div>
                <h3 className="text-[#1f4d12] font-black text-xl">{s.t}</h3>
                <p className="text-[#3C3C3C] text-sm mt-1 font-medium">{s.d}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: circular layout */}
        <div className="hidden lg:block relative w-full max-w-3xl mx-auto aspect-square">
          <div
            className="absolute inset-12 rounded-full border-4 border-dashed border-[#D7FFB8] spin-slow"
            style={{ animationDuration: '100s' }}
          />
          <div
            className="absolute inset-28 rounded-full bg-white border-2 border-[#E5E5E5] flex flex-col items-center justify-center text-center px-10"
            style={{ boxShadow: '0 4px 0 0 #E5E5E5' }}
          >
            <Icon name="Recycle" className="w-12 h-12 text-[#58CC02] mb-3" strokeWidth={2.2} />
            <div className="text-[#1f4d12] font-black text-xl" style={{ letterSpacing: '-0.01em' }}>
              The TERECSO Loop
            </div>
            <div className="text-[#777777] text-sm font-medium mt-1">5 stages &middot; 1 cooperative</div>
          </div>

          {steps.map((s, i) => {
            const angle = (i / steps.length) * Math.PI * 2 - Math.PI / 2;
            const r = 46;
            const x = 50 + r * Math.cos(angle);
            const y = 50 + r * Math.sin(angle);
            return (
              <div
                key={i}
                className="absolute"
                style={{ left: `${x}%`, top: `${y}%`, transform: 'translate(-50%,-50%)' }}
              >
                <div className="duo-card p-4 w-56 hover:-translate-y-1 transition-transform">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className="w-10 h-10 rounded-xl bg-[#58CC02] text-white flex items-center justify-center"
                      style={{ boxShadow: '0 3px 0 0 #46a302' }}
                    >
                      <Icon name={s.i} className="w-4 h-4" strokeWidth={2.4} />
                    </span>
                    <span className="text-[#58CC02] text-[11px] font-extrabold uppercase tracking-widest">
                      Step 0{i + 1}
                    </span>
                  </div>
                  <div className="text-[#1f4d12] font-black text-lg leading-tight">{s.t}</div>
                  <div className="text-[#3C3C3C] text-xs mt-1 font-medium leading-relaxed">{s.d}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
