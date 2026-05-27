import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

const leaders = [
  { n: 'Asha Mwakasege', r: 'Founder & Chairperson',  init: 'AM', tone: 'bg-[#58CC02]',  sh: '0 3px 0 0 #46a302',   txt: 'text-white' },
  { n: 'Daudi Mbwana',   r: 'Secretary General',       init: 'DM', tone: 'bg-[#1CB0F6]',  sh: '0 3px 0 0 #0B81C2',   txt: 'text-white' },
  { n: 'Neema Lekule',   r: 'Director, Operations',    init: 'NL', tone: 'bg-[#FFC800]',  sh: '0 3px 0 0 #D5A500',   txt: 'text-[#3C3C3C]' },
  { n: 'Ibrahim Salim',  r: 'Director, Members',       init: 'IS', tone: 'bg-[#FF4B4B]',  sh: '0 3px 0 0 #C73838',   txt: 'text-white' },
];

const branches = [
  { c: 'Ubungo',    d: 'Headquarters · Machinga Complex' },
  { c: 'Kinondoni', d: 'MRF & logistics hub' },
  { c: 'Ilala',     d: 'Education & community centre' },
  { c: 'Temeke',    d: 'Coastal collection routes' },
  { c: 'Kigamboni', d: 'Field training base' },
];

const Branches: React.FC = () => {
  const ref = useReveal();
  return (
    <section className="relative bg-[#FFFCEF] py-20 sm:py-28 px-4 sm:px-6 md:px-8">
      <div ref={ref} className="reveal max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Leadership */}
          <div className="lg:col-span-7">
            <div className="chip blue mb-5">
              <Icon name="Users" className="w-3 h-3" /> Leadership
            </div>
            <h2
              className="text-[#1f4d12] text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02]"
              style={{ letterSpacing: '-0.03em' }}
            >
              Member-elected. <span className="text-[#58CC02]">Member-led.</span>
            </h2>
            <p className="mt-5 text-[#3C3C3C] font-medium max-w-xl">
              TERECSO is governed by an executive committee elected from the
              membership every three years. Decisions are made together &mdash;
              and the books are always open.
            </p>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {leaders.map((l) => (
                <div key={l.n} className="duo-card p-4 flex items-center gap-4">
                  <div
                    className={`w-14 h-14 rounded-2xl ${l.tone} ${l.txt} font-black flex items-center justify-center text-lg`}
                    style={{ boxShadow: l.sh }}
                  >
                    {l.init}
                  </div>
                  <div>
                    <div className="text-[#1f4d12] font-black">{l.n}</div>
                    <div className="text-[#777777] text-xs font-bold">{l.r}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Branches */}
          <div className="lg:col-span-5">
            <div className="chip green mb-5">
              <Icon name="MapPin" className="w-3 h-3" /> Branches
            </div>
            <h3
              className="text-[#1f4d12] text-3xl sm:text-4xl font-black leading-tight"
              style={{ letterSpacing: '-0.02em' }}
            >
              Across Dar es Salaam &mdash; and growing.
            </h3>
            <div className="mt-6 duo-card p-3">
              {branches.map((b, i) => (
                <div
                  key={b.c}
                  className={`flex items-start gap-3 p-3 rounded-xl ${i % 2 === 0 ? 'bg-[#E8FFD2]' : 'bg-white'}`}
                >
                  <span
                    className="mt-0.5 w-9 h-9 rounded-xl bg-[#58CC02] text-white flex items-center justify-center flex-none"
                    style={{ boxShadow: '0 3px 0 0 #46a302' }}
                  >
                    <Icon name="MapPin" className="w-4 h-4" />
                  </span>
                  <div>
                    <div className="text-[#1f4d12] font-black">{b.c}</div>
                    <div className="text-[#777777] text-xs font-bold">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Branches;
