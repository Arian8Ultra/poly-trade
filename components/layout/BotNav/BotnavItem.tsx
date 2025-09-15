"use client";
import { AnimatePresence } from "framer-motion";
import {
  motion,
  MotionValue,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { NavItem } from "./BotNav";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import { usePathname } from "next/navigation";
interface Props {
  item: NavItem;
  parentRef?: React.RefObject<HTMLDivElement | null>;
  mouseX: MotionValue<number>;
  baseItemSize: number;
  magnification: number;
  distance: number;
  spring: { mass: number; stiffness: number; damping: number };
  badgeCount?: number;
}
const BotnavItem = ({
  item,
  baseItemSize,
  distance,
  magnification,
  mouseX,
  spring,
  badgeCount,
}: Props) => {
  const path = usePathname();
  const isActive = path === item.href;
  const ref = useRef<HTMLDivElement | null>(null);
  const isHovered = useMotionValue(0);
  const size = useDockItemSize(
    mouseX,
    baseItemSize,
    magnification,
    distance,
    ref,
    spring,
  );
  const [showLabel, setShowLabel] = useState(false);

  useEffect(() => {
    const unsubscribe = isHovered.on("change", (value) =>
      setShowLabel(value === 1),
    );
    return () => unsubscribe();
  }, [isHovered]);
  return (
    <Link href={item.href}>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onHoverStart={() => isHovered.set(1)}
        onHoverEnd={() => isHovered.set(0)}
        onFocus={() => isHovered.set(1)}
        onBlur={() => isHovered.set(0)}
        className='relative inline-flex items-center justify-center rounded-full'
        tabIndex={0}
        role='button'
        aria-haspopup='true'
      >
        <div className='flex items-center justify-center'>
          <DynamicIcon
            name={item.iconName as IconName}
            className={`${isActive ? "text-accent" : ""
            } transition-colors`}
          />
          
        </div>
        {badgeCount !== undefined && badgeCount > 0 && (
          <span className='absolute -top-2 -right-2 flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 rounded-full'>
            {badgeCount > 99 ? "99+" : badgeCount}
          </span>
        )}
        <AnimatePresence>
          {showLabel && (
            <motion.div
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: 1, y: -10 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.2 }}
              className='absolute -top-6 left-1/2 w-fit whitespace-pre rounded-md border bg-[#060606] px-2 py-0.5 text-xs text-white'
              style={{ x: "-50%" }}
              role='tooltip'
            >
              {item.label}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Link>
  );
};

function useDockItemSize(
  mouseX: MotionValue<number>,
  baseItemSize: number,
  magnification: number,
  distance: number,
  ref: React.RefObject<HTMLDivElement | null>,
  spring: { mass: number; stiffness: number; damping: number },
) {
  const mouseDistance = useTransform(mouseX, (val) => {
    if (typeof val !== "number" || isNaN(val)) return 0;
    const rect = ref.current?.getBoundingClientRect() ?? {
      x: 0,
      width: baseItemSize,
    };
    return val - rect.x - baseItemSize / 2;
  });

  const targetSize = useTransform(
    mouseDistance,
    [-distance, 0, distance],
    [baseItemSize, magnification, baseItemSize],
  );

  return useSpring(targetSize, spring);
}

export default BotnavItem;
