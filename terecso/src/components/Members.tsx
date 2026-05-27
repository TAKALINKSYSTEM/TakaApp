import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

const cats = [
  { i: 'Trash' as const,         t: 'Pickers',              n: '620+', c: 'from-[#58CC02] to-[#46a302]',   desc: 'Frontline collectors recovering recyclables from streets, markets and households.' },
  { i: 'Truck' as const,         t: 'Collectors',           n: '210+', c: 'from-[#1CB0F6] to-[#0F8FCB]',   desc: 'Logistics partners moving sorted material to MRFs and off-takers.' },
  { i: 'Factory' as const,       t: 'Recyclers',            n: '120+', c: 'from-[#FFC800] to-[#D9A800]',   desc: 'Material processors turning recovered streams into new feedstock.' },
  { i: 'HeartHandshake' as const, t: 'NGOs & Associations', n: '50+',  c: 'from-[#FF4B4B] to-[#D33636]',  desc: 'Civic partners running education, advocacy and field programs alongside us.' },
];

const benefits = [
  'Fair, transparent prices',
  'Investment dividends',
  'Free skills training',
  'Protective equipment',
  'Group health cover',
  'Legal representation',
];

const Members: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="members" className="relative bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-8">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="chip green mb-5">
              <Icon name="Users" className="w-3 h-3" /> Membership
            </div>
            <h2
              className="text-[#1f4d12] text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02] max-w-3xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Four kinds of members. <span className="text-[#58CC02]">One cooperative.</span>
            </h2>
          </div>
          <p className="text-[#3C3C3C] text-base max-w-md font-medium">
            Whatever your role in Tanzania&rsquo;s recycling chain, there is a
            place for you at TERECSO &mdash; with shared income, training and
            collective bargaining built in.
          </p>
        </div>

        {/* Category cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cats.map((c, i) => (
            <div key={i} className="duo-card p-6 hover:-translate-y-1 transition-transform group">
              <div
                className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.c} flex items-center justify-center text-white mb-5`}
                style={{ boxShadow: '0 4px 0 0 rgba(0,0,0,0.18)' }}
              >
                <Icon name={c.i} className="w-6 h-6" strokeWidth={2.4} />
              </div>
              <div className="text-[#777777] text-xs font-extrabold uppercase tracking-widest mb-2">{c.n} members</div>
              <h3 className="text-[#1f4d12] text-2xl font-black mb-2" style={{ letterSpacing: '-0.01em' }}>{c.t}</h3>
              <p className="text-[#3C3C3C] text-sm leading-relaxed font-medium">{c.desc}</p>
              <div className="mt-5 flex items-center gap-2 text-[#58CC02] font-extrabold text-sm group-hover:gap-3 transition-all">
                Learn more <Icon name="ArrowRight" className="w-4 h-4" />
              </div>
            </div>
          ))}
        </div>

        {/* Benefits block */}
        <div
          className="mt-12 duo-card bg-[#E8FFD2] border-[#D7FFB8] p-7 sm:p-10"
          style={{ boxShadow: '0 4px 0 0 #B7E893' }}
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="chip yellow mb-4">
                <Icon name="Sparkles" className="w-3 h-3" /> Why join
              </div>
              <h3
                className="text-[#1f4d12] text-3xl sm:text-4xl font-black leading-tight"
                style={{ letterSpacing: '-0.02em' }}
              >
                Membership pays &mdash; literally.
              </h3>
              <p className="mt-4 text-[#3C3C3C] font-medium">
                Members earn from collection sales, the cooperative investment
                fund, and shared services. Plus access to training, equipment
                and healthcare.
              </p>
              <a href="#join" className="mt-6 inline-flex duo-btn">
                Join now <Icon name="ArrowRight" className="w-4 h-4" />
              </a>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {benefits.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3 bg-white rounded-xl border-2 border-[#D7FFB8] px-3 py-3 font-bold text-[#1f4d12] text-sm"
                  style={{ boxShadow: '0 3px 0 0 #B7E893' }}
                >
                  <span className="w-6 h-6 rounded-full bg-[#58CC02] flex items-center justify-center text-white">
                    <Icon name="Check" className="w-3.5 h-3.5" strokeWidth={3} />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Members;
