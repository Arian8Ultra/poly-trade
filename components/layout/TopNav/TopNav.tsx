import { DynamicIcon, IconName } from "lucide-react/dynamic";
import Image from "next/image";
import React from "react";
import TopNavItem from "./TopNavItem";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const TopNav = () => {
  return (
    <nav className='absolute backdrop-blur-lg top-0 w-full z-50 bg-transparent h-16 flex items-center px-4 py-2'>
      <div className='grid grid-cols-2 md:grid-cols-3 w-full items-center'>
        <div className='flex gap-2 items-center'>
          <Image
            src={"/logo.svg"}
            width={200}
            height={200}
            alt='Nexiino Logo'
            className='h-fit w-fit '
          />
          <p className='text-accent font-sans font-bold text-lg neuropolitical select-none'>
            Poly Trade
          </p>
        </div>

        <div className='hidden md:flex justify-center gap-5'>
          {Pages.map((page) => (
            <TopNavItem
              key={page.name}
              href={page.href}
              name={page.name}
              iconName={page.iconName}
            />
          ))}
        </div>

        <Link
          href={"https://app.polytrade.ir/signin"}
          className='justify-self-end'
        >
          <Button variant='accent' className='hidden md:inline-flex'>
            ورود / ثبت نام
          </Button>
        </Link>
      </div>
    </nav>
  );
};

const Pages = [
  { name: "خانه", href: "/", iconName: "home" },
  { name: "قیمت گذاری", href: "/pricing", iconName: "dollar-sign" },
  { name: "بلاگ", href: "/blog", iconName: "book" },
  { name: "تماس با ما", href: "/contact", iconName: "phone" },
] as { name: string; href: string; iconName: IconName }[];

export default TopNav;
