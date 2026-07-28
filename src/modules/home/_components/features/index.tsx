import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState, useEffect, useRef, useCallback } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import AndroidFrame from "../../../../components/iphoneFrame";

const APP_CAROUSEL_FEATURES = [
  {
    title: "Claim Game Giveaways",
    description: "Claim game giveaways as soon as stores make them available.",
    image: "/screenshots/6.webp",
  },
  {
    title: "Track Game Deals",
    description: "Claim game deals instantly when stores update their prices.",
    image: "/screenshots/7.webp",
  },
  {
    title: "Favorites & Price Tracking",
    description: "Favorite game deals and giveaways to keep an eye on prices and availability.",
    image: "/screenshots/10.webp",
  },
  {
    title: "Filter by Store & Platform",
    description: "Easily filter your games by your favorite stores or gaming platforms.",
    image: "/screenshots/7.webp",
  },
  {
    title: "Modern UI & Dark Mode",
    description: "A sleek, modern UI with seamless Dark and Light Mode support.",
    image: "/screenshots/4.webp",
  },
  {
    title: "Multilingual Support",
    description: "Support for 8 languages. Check the Contribution Guide to add more!",
    image: "/screenshots/9.webp",
  },
];

const AUTO_SCROLL_INTERVAL = 3000; // Time in ms (4 seconds)

function Features() {
  const { home: { features } } = useContext(ConfigContext)!;

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isPaused, setIsPaused] = useState(false);

  const totalFeatures = APP_CAROUSEL_FEATURES.length;

  const handleNext = useCallback(() => {
    setDirection("next");
    setCurrentIndex((prev) => (prev + 1) % totalFeatures);
  }, [totalFeatures]);

  const handlePrev = useCallback(() => {
    setDirection("prev");
    setCurrentIndex((prev) => (prev - 1 + totalFeatures) % totalFeatures);
  }, [totalFeatures]);

  const handleSelectIndex = (index: number) => {
    setDirection(index > currentIndex ? "next" : "prev");
    setCurrentIndex(index);
  };

  // --- Auto-scroll Effect ---
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, AUTO_SCROLL_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, handleNext]);

  if (!features) return null;

  const prevIndex = (currentIndex - 1 + totalFeatures) % totalFeatures;
  const nextIndex = (currentIndex + 1) % totalFeatures;
  const currentFeature = APP_CAROUSEL_FEATURES[currentIndex];

  // Animation variants for dynamic sliding direction
  const slideVariants = {
    enter: (dir: "next" | "prev") => ({
      x: dir === "next" ? 80 : -80,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: "next" | "prev") => ({
      x: dir === "next" ? -80 : 80,
      opacity: 0,
      scale: 0.95,
    }),
  };

  return (
    <section id={features.id} className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 overflow-hidden">
      {/* --- Existing Features Section --- */}

      {/* --- Carousel Subsection --- */}
      <div className="mt-20 pt-10 border-t border-primary/10 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">App Showcase</h2>
          <p className="text-sm opacity-70 mt-1">See Frapp in action on mobile</p>
        </div>

        {/* Carousel Container (Pauses Auto-scroll on Hover/Touch) */}
        <div
          className="relative w-full max-w-5xl flex flex-col items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Viewport for Frames */}
          <div className="relative w-full flex items-center justify-center min-h-[480px] sm:min-h-[580px] lg:min-h-[640px] px-4">
            
            {/* Left Side Frame (Desktop) */}
            <motion.div
              key={`prev-${prevIndex}`}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 0.35, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handlePrev}
              className="hidden lg:block absolute left-8 xl:left-12 z-10 cursor-pointer transform -translate-x-1/2 scale-75 xl:scale-85 blur-[1px] hover:blur-0 hover:opacity-75 transition-all select-none"
            >
              <AndroidFrame
                src={APP_CAROUSEL_FEATURES[prevIndex].image}
                alt={APP_CAROUSEL_FEATURES[prevIndex].title}
              />
            </motion.div>

            {/* Main Center Frame */}
            <div className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm flex justify-center z-20">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={currentIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="w-full shadow-2xl rounded-[2.5rem]"
                >
                  <AndroidFrame
                    src={currentFeature.image}
                    alt={currentFeature.title}
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Right Side Frame (Desktop) */}
            <motion.div
              key={`next-${nextIndex}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 0.35, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleNext}
              className="hidden lg:block absolute right-8 xl:right-12 z-10 cursor-pointer transform translate-x-1/2 scale-75 xl:scale-85 blur-[1px] hover:blur-0 hover:opacity-75 transition-all select-none"
            >
              <AndroidFrame
                src={APP_CAROUSEL_FEATURES[nextIndex].image}
                alt={APP_CAROUSEL_FEATURES[nextIndex].title}
              />
            </motion.div>
          </div>

          {/* Active Feature Text Container */}
          <div className="mt-6 text-center max-w-md min-h-[5rem] px-4">
            <h3 className="text-xl font-bold text-primary transition-colors">
              {currentFeature.title}
            </h3>
            <p className="text-sm opacity-75 mt-1.5 leading-relaxed">
              {currentFeature.description}
            </p>
          </div>

          {/* Controls & Pagination Indicators */}
          <div className="flex items-center gap-4 mt-4">
            <button
              onClick={handlePrev}
              className="btn btn-circle btn-outline btn-sm hover:btn-primary"
              aria-label="Previous feature"
            >
              ❮
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2 py-2">
              {APP_CAROUSEL_FEATURES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSelectIndex(idx)}
                  className={clsx(
                    "h-2.5 rounded-full transition-all duration-300",
                    currentIndex === idx
                      ? "w-7 bg-primary"
                      : "w-2.5 bg-primary/20 hover:bg-primary/50"
                  )}
                  aria-label={`Go to feature ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="btn btn-circle btn-outline btn-sm hover:btn-primary"
              aria-label="Next feature"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;