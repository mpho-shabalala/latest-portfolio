import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function ProjectCard({ title, url, imageUrl, index }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (inView) setIsActive(true);
    else setIsActive(false);
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      className="w-full h-[60vh] flex items-center justify-center sticky top-20"
      style={{
        zIndex: isActive ? 10 : 5 - index,
      }}
      animate={{
        scale: isActive ? 1 : 0.85,
        opacity: isActive ? 1 : 0.3,
        y: isActive ? 0 : 80,
      }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <a
        href={url}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        className="relative w-full h-full rounded-2xl shadow-xl flex items-center justify-center text-4xl font-bold text-white overflow-hidden"
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 rounded-2xl z-0" />

        {/* Title text */}
        <span className="z-10">{title}</span>
      </a>
    </motion.div>
  );
}
