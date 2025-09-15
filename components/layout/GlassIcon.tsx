import { cn } from "@/lib/utils";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import React from "react";

interface Props {
  iconName: IconName;
  colorClass?: string;
  className?: string;
}
const GlassIcon = ({ iconName, colorClass, className }: Props) => {
  return (
    // <div className=''>
    <DynamicIcon
      name={iconName}
      strokeWidth={1.5}
      className={cn(
        `size-18 p-4 rounded-full bg-accent text-white bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] to-accent/50 via-transparent from-transparent bg-gradient-to-br shadow-[inset_0px_-5px_10px_1px_rgba(255,_255,_255,_0.7)]`,
        colorClass,
        className,
      )}
    />
    // </div>
  );
};

export default GlassIcon;
