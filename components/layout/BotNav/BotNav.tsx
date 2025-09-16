"use client";

import { motion } from "framer-motion";
import { IconName } from "lucide-react/dynamic";
import { useMotionValue, useSpring, useTransform } from "motion/react";
import { useMemo } from "react";
import BotnavItem from "./BotnavItem";

export type NavItem = {
  label: string;
  href: string;
  iconName?: IconName;
};

type BotNavProps = {
  items: NavItem[];
  className?: string;
  spring?: { mass: number; stiffness: number; damping: number };
  magnification?: number;
  distance?: number;
  panelHeight?: number;
  dockHeight?: number;
  baseItemSize?: number;
  position?: "bottom" | "top";
};

export default function BotNav({
  items,
  className = "",
  spring = { mass: 0.1, stiffness: 150, damping: 12 },
  magnification = 70,
  distance = 200,
  panelHeight = 64,
  dockHeight = 256,
  baseItemSize = 50,
}: BotNavProps) {
  const mouseX = useMotionValue(Infinity);
  const isHovered = useMotionValue(0);

  const maxHeight = useMemo(
    () => Math.max(dockHeight, magnification + magnification / 2 + 4),
    [magnification, dockHeight],
  );

  const animatedHeight = useSpring(
    useTransform(isHovered, [0, 1], [panelHeight, maxHeight]),
    spring,
  );

  return (
    <motion.nav
      aria-label='Bottom navigation'
      className={`fixed bottom-2 end-1/2 -translate-x-1/2 flex items-end gap-4 w-fit rounded-2xl border-2 px-4 pb-2 md:pb-1 backdrop-blur-2xl z-50 md:hidden ${className}`}
      initial={false}
      style={{ height: animatedHeight.get() }}
      onMouseMove={({ pageX }) => {
        isHovered.set(1);
        mouseX.set(pageX);
      }}
      onMouseLeave={() => {
        isHovered.set(0);
        mouseX.set(Infinity);
      }}
      role='toolbar'
    >
      {items.map((item) => {
        return (
          <BotnavItem
            key={item.href}
            item={item}
            baseItemSize={baseItemSize}
            distance={distance}
            magnification={magnification}
            mouseX={mouseX}
            spring={spring}
          />
        );
      })}
    </motion.nav>
  );
}
