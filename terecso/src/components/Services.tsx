import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

type Tone = 'green' | 'blue' | 'yellow' | 'red';

const items: { i: Parameters<typeof Icon>[0]['name']; t: string; d: string; c: Tone }[] = [
  { i: 'Recycle', t: 'Waste Recycling',         d: 'End-to-end collection, sorting and processing of plastics, paper, metals and e-waste.', c: 'green' },
  { i: 'Book',    t: 'Environmental Education',  d: 'School programs, community workshops and field labs across Dar es Salaam.',              c: 'blue' },
  { i: 'Coins',   t: 'Cooperative Investment',   d: 'Pooled member savings funding recycling equipment, transport and new business lines.',    c: 'yellow' },
  { i: 'Store',   t: 'Green Marketplace',        d: 'Verified recycled-material marketplace — connecting our MRF to off-takers.',             c: 'green' },
  { i: 'Users',   t: 'Member Empowerment',       d: 'Healthcare, PPE, financial literacy and legal support for cooperative members.',          c: 'red' },
  { i: 'Shield',  t: 'Material Assurance',       d: 'Chain-of-custody documentation and certification for industrial buyers.',                 c: 'blue' },
];

const tones: Record<Tone, { bg: string; sh: string }> = {
  green:  { bg: 'bg-[#58CC02]', sh: '0 4px 0 0 #46a302' },
  blue:   { bg: 'bg-[#1CB0F6]', sh: '0 4px 0 0 #0B81C2' },
  yellow: { bg: 'bg-[#FFC800]', sh: '0 4px 0 0 #D5A500' },
  red:    { bg: 'bg-[#FF4B4B]', sh: '0 4px 0 0 #C73838' },
};

const Services: React.FC = () => {
  const ref = useReveal();
  return (
    <section id="services" className="relative bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-8">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <div className="chip green mb-5">
              <Icon name="Sparkles" className="w-3 h-3" /> Services &amp; programs
            </div>
            <h2
              className="text-[#1f4d12] text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02] max-w-3xl"
              style={{ letterSpacing: '-0.03em' }}
            >
              Everything a circular cooperative{' '}
              <span className="text-[#58CC02]">needs</span>.
            </h2>
          </div>
          <p className="text-[#3C3C3C] text-base max-w-md font-medium">
            We don&rsquo;t just collect &mdash; we educate, finance, certify, and
            create markets, so the loop keeps spinning.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => {
            const t = tones[it.c];
            return (
              <div key={i} className="duo-card p-7 hover:-translate-y-1 transition-transform group flex flex-col">
                <div
                  className={`w-14 h-14 rounded-2xl ${t.bg} ${it.c === 'yellow' ? 'text-[#3C3C3C]' : 'text-white'} flex items-center justify-center mb-6`}
                  style={{ boxShadow: t.sh }}
                >
                  <Icon name={it.i} className="w-6 h-6" strokeWidth={2.4} />
                </div>
                <h3 className="text-[#1f4d12] text-xl font-black mb-2" style={{ letterSpacing: '-0.01em' }}>
                  {it.t}
                </h3>
                <p className="text-[#3C3C3C] text-sm leading-relaxed font-medium flex-1">{it.d}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-[#58CC02] font-extrabold text-sm group-hover:gap-3 transition-all"
                >
                  Learn more <Icon name="ArrowRight" className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
