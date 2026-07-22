interface Props {
  src: string;
  alt?: string;
}

function AndroidFrame({ src, alt = "App screenshot" }: Props) {
  return (
    /* Outer Frame Container - Samsung S25 Ultra boxy squircle styling */
    <div className="relative mx-auto h-[598px] w-[290px] rounded-[24px] bg-slate-900 p-2 shadow-2xl ring-1 ring-slate-800/80">
      
      {/* Inner Screen Container */}
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-[18px] bg-black">
        
        {/* Punch-hole Camera */}
        <div className="absolute top-2.5 left-1/2 z-30 h-3 w-3 -translate-x-1/2 rounded-full bg-slate-950 ring-1 ring-slate-800" />

        {/* Screenshot Image - object-contain ensures full image visibility */}
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-contain"
        />

        {/* Android Navigation Bar (Bottom Gesture Bar) */}
        <div className="absolute bottom-1.5 left-1/2 z-30 h-1 w-24 -translate-x-1/2 rounded-full bg-white/40 backdrop-blur-sm" />
      </div>
    </div>
  );
}

export default AndroidFrame;