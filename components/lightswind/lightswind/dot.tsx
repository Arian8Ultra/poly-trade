"use client";

import React, { useRef, useEffect, useState } from "react";
import { cn } from "../lib/utils";

export interface DotBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  dotSize?: number;          // radius of each dot in px
  dotColor?: string;
  darkDotColor?: string;
  spacing?: number;          // distance between dot centers
  brightnessRadius?: number; // how far mouse effect reaches (in px)
  baseOpacity?: number;      // opacity of dots when mouse is far
  showFade?: boolean;
  fadeIntensity?: number;
  children?: React.ReactNode;
}

export const DotBackground = ({
  className,
  children,
  dotSize = 2,
  dotColor = "#000",
  darkDotColor = "#fff",
  spacing = 20,
  brightnessRadius = 180,
  baseOpacity = 0.2,
  showFade = true,
  fadeIntensity = 20,
  ...props
}: DotBackgroundProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentDotColor, setCurrentDotColor] = useState(dotColor);

  // handle light/dark mode switching
  useEffect(() => {
    const updateColor = () => {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      const classDark = document.documentElement.classList.contains("dark");
      setCurrentDotColor(classDark || prefersDark ? darkDotColor : dotColor);
    };
    updateColor();

    const obs = new MutationObserver(updateColor);
    obs.observe(document.documentElement, { attributes: true });
    return () => void obs.disconnect();
  }, [dotColor, darkDotColor]);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    let width: number, height: number;
    let mouseX = -9999, mouseY = -9999;

    // resize canvas to fill container
    const resize = () => {
      const rect = canvas.parentElement!.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      draw();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      for (let y = spacing / 2; y < height; y += spacing) {
        for (let x = spacing / 2; x < width; x += spacing) {
          const dx = x - mouseX;
          const dy = y - mouseY;
          const dist = Math.hypot(dx, dy);
          // compute extra alpha based on proximity
          let extra = 0;
          if (dist < brightnessRadius) {
            extra = 1 - dist / brightnessRadius;
          }
          const alpha = Math.min(1, baseOpacity + extra * (1 - baseOpacity));
          ctx.beginPath();
          ctx.arc(x, y, dotSize, 0, Math.PI * 2);
          ctx.fillStyle = currentDotColor;
          ctx.globalAlpha = alpha;
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1; // reset
    };

    // mouse handlers
    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
      draw();
    };
    const onLeave = () => {
      mouseX = -9999;
      mouseY = -9999;
      draw();
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [
    spacing,
    dotSize,
    currentDotColor,
    brightnessRadius,
    baseOpacity,
  ]);

  return (
    <div
      className={cn(
        "absolute flex h-[50rem] w-full items-center justify-center bg-white dark:bg-black",
        className
      )}
      {...props}
    >
      {/* our interactive canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 block"
        style={{ display: "block" }}
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white dark:bg-black"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}

      <div className="relative z-20">{children}</div>
    </div>
  );
};

