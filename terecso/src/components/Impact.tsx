import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

const stats = [
  { v: '1,000+',  k: 'Cooperative members' },
  { v: '600+',    k: 'Active collection points' },
  { v: '20+',     k: 'Tanzanian factories connected' },
  { v: '8,400 t', k: 'Material recovered (lifetime)' },
  { v: '5',       k: 'Dar es Salaam districts' },
  { v: '2011',    k: 'Cooperative founded' },
];

const Impact: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="impact" className="relative bg-[#1f4d12] text-white py-20 sm:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.2px 1.2px, rgba(215,255,184,0.4) 1.2px, transparent 1.4px)',
          backgroundSize: '26px 26px',
        }}
      />
      {/* Blobs */}
      <div
        className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(88,204,2,0.35), transparent 60%)', filter: 'blur(50px)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full float-1"
        style={{ background: 'radial-gradient(circle, rgba(215,255,184,0.25), transparent 60%)', filter: 'blur(50px)' }}
      />

      <div ref={ref} className="reveal relative max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div
            className="chip green mx-auto mb-5"
            style={{ background: 'rgba(215,255,184,0.15)', borderColor: 'rgba(215,255,184,0.3)', color: '#D7FFB8' }}
          >
            <Icon name="Sparkles" className="w-3 h-3" /> Impact &amp; reach
          </div>
          <h2
            className="text-white text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Numbers that <span className="text-[#D7FFB8]">tell our story</span>.
          </h2>
          <p className="mt-5 text-white/75 font-medium text-lg max-w-xl mx-auto">
            Every figure below is reconciled to member contributions, collection
            manifests and processing logs.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {stats.map((s, i) => (
            <div
              key={i}
              className="bg-white/[0.06] backdrop-blur-sm border-2 border-white/15 rounded-2xl p-6 sm:p-7"
              style={{ boxShadow: 'inset 0 -3px 0 rgba(255,255,255,0.06)' }}
            >
              <div className="text-[#D7FFB8] text-xs font-extrabold uppercase tracking-widest mb-3">
                0{i + 1}
              </div>
              <div
                className="text-white text-4xl sm:text-5xl font-black"
                style={{ letterSpacing: '-0.025em' }}
              >
                {s.v}
              </div>
              <div className="text-white/85 text-sm font-bold mt-3 leading-snug">{s.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;
