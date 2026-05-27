import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

const cards = [
  { i: 'Recycle' as const, t: 'PET Flake',     g: '1,240 kg', p: 'TSh 850/kg',   c: 'from-[#58CC02] to-[#46a302]',        tone: 'text-white' },
  { i: 'Leaf' as const,    t: 'OCC Bales',     g: '3,100 kg', p: 'TSh 320/kg',   c: 'from-[#1CB0F6] to-[#0F8FCB]',        tone: 'text-white' },
  { i: 'Factory' as const, t: 'HDPE Pellets',  g: '620 kg',   p: 'TSh 1,100/kg', c: 'from-[#FFC800] to-[#D9A800]',        tone: 'text-[#3C3C3C]' },
  { i: 'Trash' as const,   t: 'Mixed Metals',  g: '880 kg',   p: 'TSh 1,650/kg', c: 'from-[#3C3C3C] to-[#1f1f1f]',       tone: 'text-white' },
];

const Marketplace: React.FC = () => {
  const ref = useReveal();
  return (
    <section className="relative bg-[#FFFCEF] py-20 sm:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-40 pointer-events-none" />
      <div ref={ref} className="reveal relative max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 items-center">

        {/* Material cards */}
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div className="grid grid-cols-2 gap-4">
            {cards.map((card, i) => (
              <div
                key={i}
                className={`rounded-2xl bg-gradient-to-br ${card.c} ${card.tone} p-5 relative overflow-hidden border-2 border-white/20`}
                style={{ boxShadow: '0 4px 0 0 rgba(0,0,0,0.18)' }}
              >
                <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-white/15" />
                <Icon name={card.i} className="w-6 h-6 mb-4 relative" />
                <div className="text-[10px] font-extrabold uppercase tracking-widest opacity-80 relative">In stock</div>
                <div className="font-black text-lg mt-1 relative">{card.t}</div>
                <div className="text-xs opacity-90 font-bold mt-1 relative">{card.g}</div>
                <div className="mt-3 inline-flex items-center gap-1 bg-white/20 rounded-full px-2 py-0.5 text-[11px] font-extrabold relative">
                  {card.p}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Text column */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <div className="chip yellow mb-5">
            <Icon name="Store" className="w-3 h-3" /> Green Marketplace
          </div>
          <h2
            className="text-[#1f4d12] text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02]"
            style={{ letterSpacing: '-0.03em' }}
          >
            Recycled material <span className="text-[#58CC02]">on demand</span>, traceable to source.
          </h2>
          <p className="mt-6 text-[#3C3C3C] text-base sm:text-lg font-medium max-w-xl">
            A live inventory of cooperative-supplied feedstock &mdash; PET, OCC,
            HDPE, paper and metals. Every batch is tagged to the members and
            collection points that produced it.
          </p>
          <div className="mt-8 grid sm:grid-cols-3 gap-3">
            {[
              { v: '20+',    k: 'Off-takers' },
              { v: '100%',   k: 'Traceable' },
              { v: '< 48h',  k: 'Avg fulfillment' },
            ].map((s) => (
              <div key={s.k} className="duo-card tinted p-4 text-center">
                <div className="text-[#1f4d12] font-black text-2xl">{s.v}</div>
                <div className="text-[#777777] text-[11px] font-extrabold uppercase tracking-widest mt-1">{s.k}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="duo-btn">
              Request material <Icon name="ArrowRight" className="w-4 h-4" />
            </a>
            <a href="#contact" className="duo-btn ghost">Become an off-taker</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
