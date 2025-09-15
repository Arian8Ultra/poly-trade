/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import SmokeyCursor from "@/components/lightswind/lightswind/smokey-cursor";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
interface Props {
  parentRef?: React.RefObject<HTMLDivElement | null>;
}
const HomeHero = ({ parentRef }: Props) => {
  const mainRef = React.useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);

  return (
    <>
      <motion.div
        className='rounded-md snap-center snap-always bg-gradient-to-t from-black/20 via-black to-black' // keep snap on wrapper
        // initial={{ opacity: 0, y: 0, height: 0 }}
        exit={{ opacity: 0, y: 0, height: 0 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 60,delay:0.2 }}
        whileInView={{ opacity: 1, y: 0, height: "100dvh" }}
        viewport={{ once: false, amount: "all", margin: "0px 0px -50% 0px" }}
        onHoverStart={() => setHover(true)}
        onHoverEnd={() => setHover(false)}
      >
        <SmokeyCursor
          autoColors={false}
          className='-z-10 opacity-50'
          // transparent={true}
          enableShading={true}

          // densityDissipation={10}
          // intensity={0.1}
        />
        <div
          ref={mainRef}
          // onWheel={handleWheel}
          className='md:max-h-[100dvh] h-dvh overflow-y-auto my-auto z-10 rounded-md gap-10 relative'
          // ⬆️ removed: snap-y snap-mandatory (only parent should snap)
        >
          <motion.div
            className='flex flex-col gap-10 flex-1 items-start justify-center w-full h-dvh md:h-[100dvh] snap-center p-10 md:p-20 relative '
            style={{
              // add a radial gradient background
              background:
                "radial-gradient(circle at center, rgba(0, 0, 0, 0.7), transparent 70%)",
            }}
            exit={{ opacity: 0, y: 0 }}
            initial={{ opacity: 0, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              type: "tween",
            }}
          >
            <Image
              src={"/hero-bg.webp"}
              width={800}
              height={600}
              alt='Nexiino Logo'
              className='md:w-1/2 w-full h-auto md:mt-0 -z-10 absolute end-0 md:mask-r-from-50% md:mask-r-to-100% duration-500 bottom-0 md:bottom-auto '
            />
            <h1 className='text-2xl md:text-5xl text-start'>
              <span className='text-accent text-4xl md:text-6xl font-bold'>
                پلی ترید;
              </span>{" "}
              پلی بسوی موفقیت مالی
            </h1>

            <h2 className='text-lg md:text-xl text-start'>
              اولین پلتفرم آموزش جامع از هوش مالی تا الگوریتمیک تریدینگ
            </h2>
            <p className='text-start text-base my-10'>
              با بازی های باحال و رقابت با دوستات، هوش مالی رو یاد بگیر.
              <br />
              پلی‌ترید بهت کمک می‌کنه وارد دنیای هیجان‌انگیز مالی بشی و مثل یک
              حرفه‌ای توی بازار مالی کار کنی.
            </p>
            <Link href={"https://app.polytrade.ir/signup"}>
              <Button variant={"accentGlass"}>شروع و ثبت نام</Button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default HomeHero;
