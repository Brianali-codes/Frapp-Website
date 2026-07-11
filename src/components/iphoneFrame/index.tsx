interface Props {
  src: string;
}

function IphoneFrame({ src }: Props) {
  return (
    // We relative position the container to act as a anchor for the absolute image
    <div className="relative h-full overflow-hidden">
      {/* 
         Fixed Inner Screen Container:
         - Using inset-0 makes the div cover the entire area of the container.
         - object-fit: fill forces the content to stretch to the frame's specific aspect ratio.
      */}
      <img
        src={src}
        alt="screenshot"
        className="absolute inset-1 z-10 h-full w-full object-fill"
      />

      {/* Frame (Should have a transparent background/screen cutout for this approach to work) */}
      <img
        src="/misc/iphone-frame.png"
        alt="iphone-frame"
        className="relative z-20 h-full w-full"
      />
    </div>
  );
}

export default IphoneFrame;