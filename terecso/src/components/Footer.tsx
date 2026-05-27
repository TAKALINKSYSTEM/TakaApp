import React from 'react';
import type { FormEvent } from 'react';
import Icon from './Icon';

type SocialName = 'Facebook' | 'Instagram' | 'Linkedin' | 'Twitter';

const Footer: React.FC = () => {
  const handleSubmit = (e: FormEvent) => e.preventDefault();

  return (
    <footer id="contact" className="relative bg-[#1f4d12] text-white pt-20 pb-10 px-4 sm:px-6 md:px-8 overflow-hidden">
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage: 'radial-gradient(circle at 1.2px 1.2px, rgba(215,255,184,0.4) 1.2px, transparent 1.4px)',
          backgroundSize: '26px 26px',
        }}
      />
      {/* Glow blob */}
      <div
        className="absolute -top-32 right-0 w-[400px] h-[400px] rounded-full pulse-glow"
        style={{ background: 'radial-gradient(circle, rgba(88,204,2,0.35), transparent 60%)', filter: 'blur(50px)' }}
      />

      <div className="relative max-w-7xl mx-auto">
        {/* Top: contact grid */}
        <div className="grid lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          {/* Brand + socials */}
          <div className="lg:col-span-5">
            <a href="#" className="flex items-center gap-2.5">
              <span
                className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#58CC02] text-white"
                style={{ boxShadow: '0 3px 0 0 #46a302' }}
              >
                <Icon name="Recycle" className="w-5 h-5" strokeWidth={2.4} />
              </span>
              <div>
                <div className="text-xl font-black">TERECSO</div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-bold text-[#D7FFB8]">
                  Cooperative Society &middot; Since 2011
                </div>
              </div>
            </a>
            <p className="mt-6 text-white/70 leading-relaxed font-medium max-w-md">
              The Environmental Conservation and Recycling Cooperative Society
              Organization &mdash; uniting Tanzania&rsquo;s recyclers, pickers and
              communities for a circular future.
            </p>
            <div className="mt-7 flex items-center gap-3">
              {(['Facebook', 'Instagram', 'Linkedin', 'Twitter'] as SocialName[]).map((s) => (
                <a
                  key={s}
                  href="#"
                  className="w-11 h-11 rounded-2xl bg-white/10 border-2 border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/15 transition-colors"
                  style={{ boxShadow: '0 3px 0 0 rgba(255,255,255,0.08)' }}
                >
                  <Icon name={s} className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Office info */}
            <div
              className="duo-card bg-white/[0.05] border-white/15 p-6"
              style={{ boxShadow: '0 4px 0 0 rgba(255,255,255,0.08)' }}
            >
              <div
                className="chip mb-4"
                style={{ background: 'rgba(215,255,184,0.15)', borderColor: 'rgba(215,255,184,0.3)', color: '#D7FFB8' }}
              >
                <Icon name="MapPin" className="w-3 h-3" /> Head office
              </div>
              <div className="text-white font-black text-xl mb-2">Machinga Complex, Ubungo</div>
              <div className="text-white/75 font-medium leading-relaxed">
                Morogoro Road, Ubungo District<br />
                Dar es Salaam, Tanzania
              </div>
              <div className="mt-5 space-y-2.5 text-sm">
                <div className="flex items-center gap-3 text-white/85 font-bold">
                  <Icon name="Phone" className="w-4 h-4 text-[#D7FFB8]" />
                  +255 22 246 1100
                </div>
                <div className="flex items-center gap-3 text-white/85 font-bold">
                  <Icon name="Mail" className="w-4 h-4 text-[#D7FFB8]" />
                  hello@terecso.or.tz
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div
              className="duo-card bg-white/[0.05] border-white/15 p-6"
              style={{ boxShadow: '0 4px 0 0 rgba(255,255,255,0.08)' }}
            >
              <div
                className="chip mb-4"
                style={{ background: 'rgba(215,255,184,0.15)', borderColor: 'rgba(215,255,184,0.3)', color: '#D7FFB8' }}
              >
                <Icon name="Mail" className="w-3 h-3" /> Stay in the loop
              </div>
              <div className="text-white font-black text-xl mb-2">Get monthly impact updates.</div>
              <p className="text-white/75 font-medium text-sm">
                No spam &mdash; just collection numbers, member stories and event invites.
              </p>
              <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="bg-white/10 border-2 border-white/15 rounded-xl px-4 py-3 text-sm font-bold placeholder-white/50 text-white focus:outline-none focus:border-[#D7FFB8]"
                />
                <button className="duo-btn">Subscribe</button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer nav */}
        <div className="pt-10 pb-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
          {[
            { h: 'About',    l: ['Our story', 'Leadership', 'Reports', 'Press'] },
            { h: 'Members',  l: ['Pickers', 'Collectors', 'Recyclers', 'NGOs'] },
            { h: 'Programs', l: ['Education', 'Marketplace', 'Investment fund', 'Training'] },
            { h: 'Support',  l: ['Donate', 'Partner with us', 'Careers', 'Contact'] },
          ].map((col) => (
            <div key={col.h}>
              <div className="text-[#D7FFB8] text-xs font-extrabold uppercase tracking-[0.18em] mb-4">{col.h}</div>
              <ul className="space-y-2.5">
                {col.l.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-white/75 font-bold hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-white/55 font-bold">
          <div>© 2026 TERECSO Cooperative Society Ltd. Registered in Tanzania, est. 2011.</div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
