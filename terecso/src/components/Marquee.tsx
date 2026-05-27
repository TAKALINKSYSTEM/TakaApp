import React from 'react';
import Icon from './Icon';

const items = [
  { i: 'Recycle' as const, t: 'Plastic & PET' },
  { i: 'Factory' as const, t: '20+ Off-takers' },
  { i: 'Leaf' as const, t: 'ISO-14001 Aligned' },
  { i: 'Users' as const, t: '1,000+ Members' },
  { i: 'Shield' as const, t: 'NEMC Compliant' },
  { i: 'Globe' as const, t: 'UN SDG Aligned' },
];

const MarqueeSection: React.FC = () => {
  const row = [...items, ...items];
  return (
    <div className="relative bg-[#FFFCEF] border-y-2 border-[#E5E5E5] overflow-hidden">
      <div className="flex marquee-track whitespace-nowrap py-5">
        {row.map((t, i) => (
          <div
            key={i}
            className="flex items-center gap-3 pr-10 text-[#1f4d12] text-sm font-extrabold uppercase tracking-[0.15em]"
          >
            <span className="flex items-center justify-center w-9 h-9 rounded-xl bg-white border-2 border-[#E5E5E5] shadow-[0_2px_0_0_#E5E5E5]">
              <Icon name={t.i} className="w-4 h-4 text-[#58CC02]" />
            </span>
            <span>{t.t}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarqueeSection;
