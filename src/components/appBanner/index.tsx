import { useContext } from "react";
import { ConfigContext } from "../../utils/configContext";
import Spill from "./svgs/spill";
import IphoneFrame from "../../components/iphoneFrame";
import { motion } from "framer-motion";
import clsx from "clsx";

function AppBanner() {
  const { githubLink, downloadLink, appBanner } =
    useContext(ConfigContext)!;

  // Shared button animation configurations
  const buttonVariants = {
    hover: { 
      scale: 1.03,
      transition: { type: "spring", stiffness: 400, damping: 10 }
    },
    tap: { 
      scale: 0.97 
    }
  };

  if (!appBanner) return null;
  return (
    <motion.section
      id={appBanner.id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className="relative max-w-screen-lg mx-auto px-4 -mb-6 z-10 md:-mb-10 lg:-mb-14"
    >
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            scale: 0.9,
          },
          visible: {
            opacity: 1,
            scale: 1,
          },
        }}
        transition={{
          mass: 0.4,
          type: "spring",
          duration: 0.2,
        }}
      >
        <div className="p-4 bg-primary text-primary-content rounded-t-[var(--rounded-box)] flex flex-col items-center md:flex-row">
          <div className="flex-1 flex flex-col items-center justify-center min-h-full">
            <motion.h2
              initial={{ opacity: 0, y: "-100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-0 mb-4 text-4xl md:text-6xl w-full text-left"
            >
              {appBanner.title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-primary-content/70 whitespace-pre-wrap text-left m-0 mt-1 md:text-lg w-full"
            >
              {appBanner.subtitle}
            </motion.p>
            
            {/* Animated Button Group Container */}
            <motion.div
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 my-6 w-full justify-start"
            >
              {/* Download Now Button */}
              <motion.a 
                href={downloadLink || "https://github.com/Brianali-codes/Frapp/releases/download/Frappv1.1.1/Frappv1.1.1.apk"} 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-6 h-12 flex items-center justify-center font-medium bg-primary-content text-primary rounded-btn shadow-md cursor-pointer select-none"
              >
                Download Now
              </motion.a>

              {/* Open GitHub Button */}
              <motion.a 
                href={githubLink || "https://github.com/Brianali-codes/Frapp"} 
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                className="px-6 h-12 flex items-center justify-center font-medium border border-primary-content/30 hover:bg-primary-content/10 rounded-btn transition-colors cursor-pointer select-none"
              >
                Open GitHub
              </motion.a>
            </motion.div>
          </div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            className="relative flex-1 flex justify-center"
          >
            {appBanner.screenshots.map((src, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: {
                    scale: index > 0 ? 0.9 : 1,
                    opacity: 0,
                    rotate: 0,
                  },
                  visible: {
                    scale: index > 0 ? 0.9 : 1,
                    opacity: 1,
                    rotate: index === 0 ? 0 : index === 1 ? "-30deg" : "30deg",
                  },
                }}
                transition={{
                  stiffness: 150,
                  mass: 0.5,
                  type: "spring",
                  delay: index > 0 ? 0.8 : 0.5,
                }}
                className={clsx(
                  "h-[30rem]",
                  index === 0 && "relative z-20 block",
                  index === 1 && "absolute origin-bottom-left hidden xl:block",
                  index === 2 && "absolute origin-bottom-right hidden xl:block"
                )}
              >
                <IphoneFrame src={src} />
              </motion.div>
            ))}
          </motion.div>
        </div>
        <Spill className="-translate-y-1"/>
      </motion.div>
    </motion.section>
  );
}

export default AppBanner;