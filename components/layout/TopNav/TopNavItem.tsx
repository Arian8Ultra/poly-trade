"use client";
import { DynamicIcon, IconName } from "lucide-react/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface Props {
  href: string;
  name: string;
  iconName: IconName;
}
const TopNavItem = ({ href, name, iconName }: Props) => {
  const path = usePathname();
  return (
    <Link
      href={href}
      className={`flex items-center gap-2 ${
        path === href
          ? "text-accent font-bold"
          : "text-white hover:text-accent duration-300"
      } `}
    >
      <DynamicIcon
        name={iconName}
        className={`size-5 ${
          path === href ? "text-accent scale-100" : "scale-0"
        } duration-300`}
      />
      {path === href && <div className='h-full w-[2px] bg-accent rounded-md'></div>}
      <span>{name}</span>
    </Link>
  );
};

export default TopNavItem;
