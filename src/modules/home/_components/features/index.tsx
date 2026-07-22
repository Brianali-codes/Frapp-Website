import AnimatedText from "../../../../components/animatedText";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";
import { useContext, useState } from "react";
import { ConfigContext } from "../../../../utils/configContext";
import AndroidFrame from "../../../../components/iphoneFrame";

// Features configuration array for the phone carousel
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

function Features() {
  const {
    home: { features },
  } = useContext(ConfigContext)!;

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!features) return null;

  const totalFeatures = APP_CAROUSEL_FEATURES.length;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalFeatures);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + totalFeatures) % totalFeatures);
  };

  // Indices for side phones on large screens
  const prevIndex = (currentIndex - 1 + totalFeatures) % totalFeatures;
  const nextIndex = (currentIndex + 1) % totalFeatures;

  const currentFeature = APP_CAROUSEL_FEATURES[currentIndex];

  return (
    <section id={features.id} className="max-w-screen-lg mx-auto px-4 py-12 overflow-hidden">
      {/* --- Existing Features Section --- */}
      <div className="mb-12 max-w-none flex flex-col items-center prose prose-lg text-center">
        <h1 className="mb-3">
          <AnimatedText text={features.title} />
        </h1>
        <motion.div
          className="h-2 bg-gradient-to-r from-primary to-secondary rounded-full overflow-hidden [--w:200px] md:[--w:350px]"
          whileInView={{ width: "var(--w)" }}
          viewport={{ amount: 1, once: true, margin: "0px 0px -100px 0px" }}
        />
        {features.subtitle && (
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: "0%", opacity: 0.7 }}
            viewport={{ once: true }}
            className="text-md max-w-lg"
          >
            {features.subtitle}
          </motion.p>
        )}
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6"
      >
        {features.cards.map((feat, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { x: "-100%", opacity: 0 },
              visible: { x: 0, opacity: 1 },
            }}
            transition={{ delay: 0.25 + index * 0.25 }}
            className={clsx(
              "shadow-md border-primary/10 border-2 card relative overflow-hidden group px-12",
              {
                "col-span-2":
                  index === features!.cards.length - 1 &&
                  features!.cards.length % 2 === 1,
              }
            )}
          >
            <div className="relative mb-4 mt-4">
              <div
                className={clsx(
                  "absolute left-0 right-0 top-0 bottom-0 bg-secondary/50 -z-10 rounded-lg"
                )}
              />
              <figure className="py-4">
                <img
                  src={feat.icon}
                  alt="feature icon"
                  className="w-40 transition-transform group-hover:scale-90"
                />
              </figure>
            </div>
            <div className="w-full pt-0 px-0 card-body items-center text-center transition-transform max-w-none group-hover:scale-95">
              <h2 className="card-title text-2xl font-bold">{feat.title}</h2>
              <div className="h-0.5 w-full bg-primary/10" />
              <p className="opacity-[.7]">{feat.subtitle}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* --- Carousel Subsection Right Below Existing Features --- */}
      <div className="mt-20 pt-10 border-t border-primary/10 flex flex-col items-center">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">App Showcase</h2>
          <p className="text-sm opacity-70 mt-1">
            See Frapp in action on mobile
          </p>
        </div>

        {/* Carousel Outer Container */}
        <div className="relative w-full flex flex-col items-center">
          {/* Phones Viewport */}
          <div className="relative w-full flex items-center justify-center min-h-[620px]">
            {/* Left Preview Phone (Large Screens Only) */}
            <motion.div
              key={`prev-${prevIndex}`}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handlePrev}
              className="hidden lg:block absolute left-4 xl:left-8 z-10 cursor-pointer transition-transform hover:scale-95 scale-90 blur-[1px] select-none"
            >
              <AndroidFrame
                src={APP_CAROUSEL_FEATURES[prevIndex].image}
                alt={APP_CAROUSEL_FEATURES[prevIndex].title}
              />
            </motion.div>

            {/* Main Center Phone (All Screen Sizes) */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="z-20 shadow-2xl"
              >
                <AndroidFrame
                  src={currentFeature.image}
                  alt={currentFeature.title}
                />
              </motion.div>
            </AnimatePresence>

            {/* Right Preview Phone (Large Screens Only) */}
            <motion.div
              key={`next-${nextIndex}`}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.4, x: 0 }}
              transition={{ duration: 0.3 }}
              onClick={handleNext}
              className="hidden lg:block absolute right-4 xl:right-8 z-10 cursor-pointer transition-transform hover:scale-95 scale-90 blur-[1px] select-none"
            >
              <AndroidFrame
                src={APP_CAROUSEL_FEATURES[nextIndex].image}
                alt={APP_CAROUSEL_FEATURES[nextIndex].title}
              />
            </motion.div>
          </div>

          {/* Active Feature Title & Description */}
          <div className="mt-8 text-center max-w-md h-20 px-4">
            <h3 className="text-xl font-bold text-primary">
              {currentFeature.title}
            </h3>
            <p className="text-sm opacity-75 mt-1">
              {currentFeature.description}
            </p>
          </div>

          {/* Controls & Pagination Indicators */}
          <div className="flex items-center gap-4 mt-2">
            <button
              onClick={handlePrev}
              className="btn btn-circle btn-outline btn-sm"
              aria-label="Previous feature"
            >
              ❮
            </button>

            {/* Indicator Dots */}
            <div className="flex gap-1.5 overflow-x-auto max-w-[160px] py-1">
              {APP_CAROUSEL_FEATURES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={clsx(
                    "h-2 rounded-full transition-all duration-300 flex-shrink-0",
                    currentIndex === idx
                      ? "w-6 bg-primary"
                      : "w-2 bg-primary/20 hover:bg-primary/40"
                  )}
                  aria-label={`Go to feature ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="btn btn-circle btn-outline btn-sm"
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