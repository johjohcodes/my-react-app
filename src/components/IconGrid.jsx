import React from 'react';

const IconGrid = () => {
  return (
    <div
      className="flex items-center justify-center w-screen min-h-[400px] bg-cover bg-center bg-no-repeat rounded-md"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1688223954626-084a6a6c7266?w=800&auto=format&fit=crop&q=90')",
      }}
    >
      <div className="flex flex-col gap-4 max-w-md bg-black/20 backdrop-blur-sm border border-white/50 rounded-xl shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] p-4 text-white relative before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none">
        
        {/* Row 1 */}
        <div className="flex gap-2">
          {[
            { label: 'Mail', icon: MailIcon },
            { label: 'Music', icon: MusicIcon },
            { label: 'Apps', icon: AppsIcon },
          ].map((item, index) => (
            <IconButton key={index} label={item.label} Icon={item.icon} />
          ))}
        </div>

        {/* Row 2 */}
        <div className="flex gap-2 mt-2">
          {[
            { label: 'Shop', icon: ShopIcon },
            { label: 'Call', icon: CallIcon },
            { label: 'Map', icon: MapIcon },
          ].map((item, index) => (
            <IconButton key={index} label={item.label} Icon={item.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

const IconButton = ({ label, Icon }) => (
  <div className="flex flex-col items-center gap-1">
    <button className="relative h-12 w-12 inline-flex items-center justify-center border align-middle select-none font-sans font-medium text-center p-2 text-white text-sm font-medium rounded-full bg-white/2.5 border border-white/50 backdrop-blur-sm shadow-[inset_0_1px_0px_rgba(255,255,255,0.75),0_0_9px_rgba(0,0,0,0.2),0_3px_8px_rgba(0,0,0,0.15)] hover:bg-white/30 transition-all duration-300 before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-br before:from-white/60 before:via-transparent before:to-transparent before:opacity-70 before:pointer-events-none after:absolute after:inset-0 after:rounded-full after:bg-gradient-to-tl after:from-white/30 after:via-transparent after:to-transparent after:opacity-50 after:pointer-events-none">
      <Icon />
    </button>
    <span className="text-xs">{label}</span>
  </div>
);

// ICON COMPONENTS
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
  </svg>
);

const MusicIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
    <path fillRule="evenodd" d="M19.952 1.651a.75.75 0 0 1 .298.599V16.303a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.403-4.909l2.311-.66a1.5 1.5 0 0 0 1.088-1.442V6.994l-9 2.572v9.737a3 3 0 0 1-2.176 2.884l-1.32.377a2.553 2.553 0 1 1-1.402-4.909l2.31-.66a1.5 1.5 0 0 0 1.088-1.442V5.25a.75.75 0 0 1 .544-.721l10.5-3a.75.75 0 0 1 .658.122Z" clipRule="evenodd" />
  </svg>
);

const AppsIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
    <path fillRule="evenodd" d="M3 6a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3v2.25a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3V6ZM3 15.75a3 3 0 0 1 3-3h2.25a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2.25Zm9.75 0a3 3 0 0 1 3-3H18a3 3 0 0 1 3 3V18a3 3 0 0 1-3 3h-2.25a3 3 0 0 1-3-3v-2.25Z" clipRule="evenodd" />
  </svg>
);

const ShopIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
    <path d="M7.5 0a.75.75 0 0 1 .75.75v1.5h8.25V.75a.75.75 0 0 1 1.5 0v1.5h1.5a.75.75 0 0 1 0 1.5h-1.5v8.25h1.5a.75.75 0 0 1 0 1.5h-1.5v1.5a.75.75 0 0 1-1.5 0v-1.5H9v1.5a.75.75 0 0 1-1.5 0v-1.5H5.25A4.5 4.5 0 0 1 0 12.75v-1.5a.75.75 0 0 1 1.5 0v1.5c0 .69.56 1.25 1.25 1.25H4.5v-8.25H3a.75.75 0 0 1 0-1.5h1.5V.75A.75.75 0 0 1 7.5 0ZM3 15.75a.75.75 0 0 1 .75-.75h1.5v-1.5H3a4.5 4.5 0 0 0 0 9h1.5v-1.5H3a.75.75 0 0 1-.75-.75v-1.5Zm15.75.75a.75.75 0 0 1-.75.75h-1.5v1.5h1.5a4.5 4.5 0 0 0 0-9h-1.5v1.5h1.5a.75.75 0 0 1 .75.75v1.5ZM12 3v18" stroke="#000" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const CallIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
    <path fillRule="evenodd" d="M3 2.25a.75.75 0 0 1 .75-.75h15.5a.75.75 0 0 1 .75.75v19.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V2.25ZM12 0a3 3 0 0 1 3 3v1.5h-6V3a3 3 0 0 1 3-3Zm6 6H6v15h12V6Zm-6 9a3 3 0 0 1 3 3v1.5h-6V18a3 3 0 0 1 3-3Zm6-9h-6V3h6v3Z" clipRule="evenodd" />
  </svg>
);

const MapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="h-5 w-5">
    <path fillRule="evenodd" d="M12 2.25a.75.75 0 0 1 .75.75v18.5a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM3 6.75A9.75 9.75 0 0 1 12 3v18a9.75 9.75 0 0 1-9-9.75ZM21 6.75A9.75 9.75 0 0 0 12 3v18a9.75 9.75 0 0 0 9-9.75ZM12 0a.75.75 0 0 1 .75.75v1.5A10.5 10.5 0 0 0 3 12a10.5 10.5 0 0 0 10.5 10.5v1.5a.75.75 0 0 1-1.5 0v-1.5A10.5 10.5 0 0 0 12 3V.75a.75.75 0 0 1 .75-.75ZM3 12a.75.75 0 0 1 .75-.75h1.5v1.5H3v-1.5Zm15.75 0a.75.75 0 0 1 .75.75v1.5h-1.5v-1.5h1.5Zm-3.75 0a.75.75 0 0 1 .75-.75h1.5v1.5h-1.5v-1.5Zm-6 0a.75.75 0 0 1 .75-.75h1.5v1.5h-1.5v-1.5Zm-3.75 0a.75.75 0 0 1 .75-.75h1.5v1.5h-1.5v-1.5Z" clipRule="evenodd" />
  </svg>
);

export default IconGrid;