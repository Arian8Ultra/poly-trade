// "use client";
import Logo from "@/public/logo.svg";
import HomeHero from "@/components/Home/Hero/HomeHero";
import SmokeyCursor from "@/components/lightswind/lightswind/smokey-cursor";
import Image from "next/image";
import HomeDescription from "@/components/Home/Description/HomeDescription";

export default async function Page() {
  return (
    <div
      className='flex flex-col h-dvh w-screen overflow-scroll snap-y  relative snap-proximity scroll-smooth select-none shadow-[inset_0px_0px_210px_10px_rgba(0,_0,_0,_0.6)]'
      id='home-container'
      // ref={parentRef}
    >
      <div className='fixed inset-0' />
      <video
        src={"/video/Trading.mp4"}
        autoPlay
        loop
        muted
        className='absolute inset-0 w-full h-full object-cover brightness-90  mask-radial-from-0% mask-radial-to-75% mask-radial-at-center'
      />

      <div className='flex gap-2 fixed md:start-5 start-5 top-5 items-center'>
        <Image
          src={"/logo.svg"}
          width={200}
          height={200}
          alt='Nexiino Logo'
          className='h-fit w-fit '
        />
        <p className='text-accent font-sans font-bold text-lg neuropolitical'>Poly Trade</p>
      </div>

      <HomeHero />
      <HomeDescription />

      {/* <Home3rd tools={tools} /> */}
      {/* <Home2nd /> */}
    </div>
  );
}
