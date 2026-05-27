import React from 'react';

type IconName =
  | 'Menu' | 'X' | 'Play' | 'ArrowRight' | 'ArrowUpRight'
  | 'Recycle' | 'Leaf' | 'Sparkles' | 'Users' | 'Trash'
  | 'Factory' | 'HeartHandshake' | 'Truck' | 'Store' | 'Book'
  | 'Coins' | 'Phone' | 'Mail' | 'MapPin' | 'Check' | 'Bolt'
  | 'Globe' | 'Tree' | 'Star' | 'Instagram' | 'Facebook'
  | 'Linkedin' | 'Twitter' | 'AlertTriangle' | 'Shield' | 'LightBulb';

interface IconProps {
  name: IconName;
  className?: string;
  strokeWidth?: number;
}

const Icon: React.FC<IconProps> = ({ name, className = 'w-4 h-4', strokeWidth = 2.2 }) => {
  const common = {
    xmlns: 'http://www.w3.org/2000/svg',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className,
  };

  const paths: Record<IconName, React.ReactNode> = {
    Menu: <><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></>,
    X: <><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></>,
    Play: <polygon points="6 4 20 12 6 20 6 4"/>,
    ArrowRight: <><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></>,
    ArrowUpRight: <><line x1="7" y1="17" x2="17" y2="7"/><polyline points="7 7 17 7 17 17"/></>,
    Recycle: <><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"/><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"/><path d="m14 16-3 3 3 3"/><path d="M8.293 13.596 4.196 9.5 9.5 4.196"/><path d="m13.378 9.633 4.096 4.097-4.096 4.096"/><path d="m9.5 4.196 1.227-2.122a1.785 1.785 0 0 1 3.092 0l2.13 3.696"/></>,
    Leaf: <><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4 19.4 2 20 8 19 13 13 17a8 8 0 0 1-2 3"/><path d="M2 22c0-3 4-7 9-7"/></>,
    Sparkles: <><path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8L12 3z"/><path d="M19 14l.9 2.1 2.1.9-2.1.9L19 20l-.9-2.1-2.1-.9 2.1-.9L19 14z"/></>,
    Users: <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
    Trash: <><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/></>,
    Factory: <><path d="M2 20h20"/><path d="M5 20V8l5 4V8l5 4V4h4v16"/><path d="M9 20v-4"/><path d="M14 20v-4"/></>,
    HeartHandshake: <><path d="M11 17l-5-5a3.5 3.5 0 1 1 5-5l1 1 1-1a3.5 3.5 0 1 1 5 5"/><path d="m11 17 2 2a1 1 0 0 0 1.41 0l5.59-5.59a2 2 0 0 0 0-2.82l-1.59-1.59"/></>,
    Truck: <><path d="M1 3h15v13H1z"/><path d="M16 8h4l3 3v5h-7z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></>,
    Store: <><path d="M3 9l1.5-6h15L21 9"/><path d="M3 9v11h18V9"/><path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0"/></>,
    Book: <><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></>,
    Coins: <><circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18"/><path d="M7 6h1v4"/><path d="m16.71 13.88.7.71-2.82 2.82"/></>,
    Phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>,
    Mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></>,
    MapPin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
    Check: <polyline points="20 6 9 17 4 12"/>,
    Bolt: <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>,
    Globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></>,
    Tree: <><path d="M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.7"/></>,
    Star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
    Instagram: <><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></>,
    Facebook: <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>,
    Linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></>,
    Twitter: <path d="M22 4.01a8.8 8.8 0 0 1-2.6.71 4.48 4.48 0 0 0 2-2.48 8.93 8.93 0 0 1-2.86 1.07 4.5 4.5 0 0 0-7.66 4.1A12.77 12.77 0 0 1 3 3.16a4.5 4.5 0 0 0 1.39 6 4.46 4.46 0 0 1-2-.55v.06a4.5 4.5 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2 .08 4.5 4.5 0 0 0 4.2 3.1A9 9 0 0 1 2 19a12.74 12.74 0 0 0 6.9 2c8.28 0 12.8-6.86 12.8-12.8v-.58A9 9 0 0 0 22 4.01z"/>,
    AlertTriangle: <><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></>,
    Shield: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>,
    LightBulb: <><path d="M9 18h6"/><path d="M10 22h4"/><path d="M12 2a7 7 0 0 0-4 12.74V17h8v-2.26A7 7 0 0 0 12 2z"/></>,
  };

  return <svg {...common}>{paths[name]}</svg>;
};

export default Icon;
