import React from 'react';
import Icon from './Icon';
import { useReveal } from '../hooks/useReveal';

const AppPreview: React.FC = () => {
  const ref = useReveal();
  return (
    <section className="relative bg-white py-20 sm:py-28 px-4 sm:px-6 md:px-8 overflow-hidden">
      <div ref={ref} className="reveal max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
        {/* Left: text */}
        <div className="lg:col-span-6">
          <div className="chip blue mb-5">
            <Icon name="Bolt" className="w-3 h-3" /> Coming soon
          </div>
          <h2
            className="text-[#1f4d12] text-4xl sm:text-5xl md:text-6xl font-black leading-[1.02]"
            style={{ letterSpacing: '-0.03em' }}
          >
            The TERECSO app,{' '}
            <span className="text-[#58CC02]">in your pocket</span>.
          </h2>
          <p className="mt-6 text-[#3C3C3C] text-base sm:text-lg font-medium max-w-lg">
            Every kilogram, every pickup, every payment &mdash; visible in real
            time. Members log collections, track earnings and book training,
            right from a phone.
          </p>
          <ul className="mt-8 space-y-3">
            {[
              'Log daily collections by category',
              'See live earnings & co-op dividends',
              'Book training, PPE and equipment loans',
              'Verified buyer marketplace, in-app',
            ].map((b) => (
              <li key={b} className="flex items-center gap-3 font-bold text-[#1f4d12]">
                <span className="w-7 h-7 rounded-full bg-[#58CC02] flex items-center justify-center text-white">
                  <Icon name="Check" className="w-4 h-4" strokeWidth={3} />
                </span>
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#" className="duo-btn dark">
              <span className="text-[10px] opacity-80 font-bold">Download on the</span>
              <span className="ml-1 font-black">App Store</span>
            </a>
            <a href="#" className="duo-btn">
              <span className="text-[10px] opacity-80 font-bold">Get it on</span>
              <span className="ml-1 font-black">Google Play</span>
            </a>
          </div>
        </div>

        {/* Right: phone mockup */}
        <div className="lg:col-span-6 flex items-center justify-center">
          <div className="relative">
            {/* Floating decorative badges */}
            <div
              className="absolute -left-6 -top-6 w-14 h-14 rounded-2xl bg-[#FFC800] flex items-center justify-center text-white float-1"
              style={{ boxShadow: '0 4px 0 0 #D5A500' }}
            >
              <Icon name="Coins" className="w-6 h-6" />
            </div>
            <div
              className="absolute -right-4 top-12 w-12 h-12 rounded-2xl bg-[#FF4B4B] flex items-center justify-center text-white float-2"
              style={{ boxShadow: '0 4px 0 0 #C73838' }}
            >
              <Icon name="Recycle" className="w-5 h-5" />
            </div>
            <div
              className="absolute -right-8 bottom-20 w-14 h-14 rounded-full bg-[#1CB0F6] flex items-center justify-center text-white pulse-glow"
              style={{ boxShadow: '0 4px 0 0 #0B81C2' }}
            >
              <Icon name="Bolt" className="w-6 h-6" />
            </div>

            {/* Phone shell */}
            <div className="phone">
              <div className="phone-screen">
                <div className="phone-notch" />
                <div className="absolute inset-0 flex flex-col">
                  {/* Status bar */}
                  <div className="pt-12 px-6 pb-2 flex items-center justify-between text-[10px] font-bold text-[#1f4d12]">
                    <span>9:41</span>
                    <span>5G</span>
                  </div>
                  {/* Greeting */}
                  <div className="px-5 pt-2 pb-4 flex items-center justify-between">
                    <div>
                      <div className="text-[#777777] text-[10px] font-bold uppercase tracking-widest">Habari, Asha</div>
                      <div className="text-[#1f4d12] font-black text-base">Today&rsquo;s pickup</div>
                    </div>
                    <span className="w-9 h-9 rounded-full bg-[#E8FFD2] border-2 border-[#D7FFB8] flex items-center justify-center text-[#1f4d12] font-black">
                      A
                    </span>
                  </div>

                  {/* Earnings card */}
                  <div className="mx-4 rounded-2xl bg-[#1f4d12] text-white p-4 relative overflow-hidden">
                    <div className="absolute -right-6 -top-6 w-24 h-24 rounded-full bg-[#58CC02]/40 blur-xl" />
                    <div className="text-[#D7FFB8] text-[10px] font-extrabold uppercase tracking-widest">This week</div>
                    <div className="text-3xl font-black mt-1">TSh 142,300</div>
                    <div className="text-white/70 text-[11px] mt-0.5 font-bold">+18% vs. last week</div>
                    <div className="mt-3 flex gap-1.5 items-end">
                      {[40, 65, 30, 80, 55, 70, 90].map((h, i) => (
                        <div key={i} className="flex-1 rounded bg-[#D7FFB8]/80" style={{ height: `${h * 0.4}px` }} />
                      ))}
                    </div>
                  </div>

                  {/* Collections log */}
                  <div className="px-4 mt-4">
                    <div className="text-[#1f4d12] font-black text-sm mb-2">Today&rsquo;s collections</div>
                    {[
                      { i: 'Recycle' as const, t: 'PET bottles',   w: '12.4 kg', tone: 'bg-[#E8FFD2] border-[#D7FFB8] text-[#1f4d12]' },
                      { i: 'Leaf' as const,    t: 'Cardboard',     w: '8.1 kg',  tone: 'bg-[#E1F3FF] border-[#A7D8F4] text-[#0b6ea0]' },
                      { i: 'Trash' as const,   t: 'Mixed plastic', w: '5.6 kg',  tone: 'bg-[#FFF6D6] border-[#FFE08A] text-[#8a6900]' },
                    ].map((row, i) => (
                      <div key={i} className={`mt-2 rounded-xl border-2 px-3 py-2.5 flex items-center gap-3 ${row.tone}`}>
                        <Icon name={row.i} className="w-4 h-4" />
                        <div className="text-xs font-extrabold flex-1">{row.t}</div>
                        <div className="text-xs font-black">{row.w}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA button */}
                  <div className="mt-auto p-4">
                    <button className="w-full duo-btn">+ Log new pickup</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppPreview;
