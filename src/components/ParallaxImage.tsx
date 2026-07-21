"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { type ImageProps } from "next/image";

type ParallaxImageProps = Omit<ImageProps, "fill" | "className"> & {
  /** How far the image travels vs. scroll, in %. Higher = more movement. */
  strength?: number;
  containerClassName?: string;
  imageClassName?: string;
};

export default function ParallaxImage({
  strength = 20,
  containerClassName,
  imageClassName,
  ...imageProps
}: ParallaxImageProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <div ref={containerRef} className={containerClassName ?? "absolute inset-0 overflow-hidden"}>
      <motion.div
        className="absolute left-0 right-0"
        style={{ y, top: `-${strength}%`, bottom: `-${strength}%` }}
      >
        <Image {...imageProps} fill className={imageClassName ?? "object-cover"} />
      </motion.div>
    </div>
  );
}
