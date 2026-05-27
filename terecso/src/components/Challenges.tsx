import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

const pairs = [
  {
    c: 'Informal recyclers earn unfair, unstable prices',
    s: 'Cooperative pricing & bulk negotiation with off-takers',
  },
  {
    c: 'Most plastic in Dar leaks into the environment',
    s: '600+ collection points across 5 districts',
  },
  {
    c: 'Pickers lack PPE, healthcare and training',
    s: 'Member benefits package & weekly training',
  },
  {
    c: 'Local factories rely on imported feedstock',
    s: 'Verified Tanzanian recycled material at scale',
  },
];

const Challenges: React.FC = () => {
  const ref = useReveal();
  return (
    <section className="relative bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-8">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="chip green mx-auto mb-5">
            <Icon name="LightBulb" className="w-3 h-3" /> Challenges &amp; solutions
          </div>
          <h2
            className="text-[#1f4d12] text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Tackling Tanzania&rsquo;s waste reality &mdash;{' '}
            <span className="text-[#58CC02]">head on</span>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {pairs.map((p, i) => (
            <div key={i} className="duo-card p-6 sm:p-7 grid sm:grid-cols-2 gap-5">
              {/* Challenge */}
              <div
                className="border-2 border-[#FFD8D8] bg-[#FFF0F0] rounded-2xl p-4"
                style={{ boxShadow: '0 3px 0 0 #FFC4C4' }}
              >
                <div className="flex items-center gap-2 text-[#C73838] text-[11px] font-extrabold uppercase tracking-widest mb-2">
                  <Icon name="AlertTriangle" className="w-3.5 h-3.5" />
                  The challenge
                </div>
                <p className="text-[#7c1f1f] font-bold text-sm leading-relaxed">{p.c}</p>
              </div>
              {/* Solution */}
              <div
                className="border-2 border-[#D7FFB8] bg-[#E8FFD2] rounded-2xl p-4"
                style={{ boxShadow: '0 3px 0 0 #B7E893' }}
              >
                <div className="flex items-center gap-2 text-[#2f6b00] text-[11px] font-extrabold uppercase tracking-widest mb-2">
                  <Icon name="Check" className="w-3.5 h-3.5" strokeWidth={3} />
                  Our solution
                </div>
                <p className="text-[#1f4d12] font-bold text-sm leading-relaxed">{p.s}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
