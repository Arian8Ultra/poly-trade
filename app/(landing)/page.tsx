// "use client";
import HomeComments from "@/components/Home/Comments/HomeComments";
import HomeDescription from "@/components/Home/Description/HomeDescription";
import HomeFAQ from "@/components/Home/FAQ/HomeFAQ";
import HomeHero from "@/components/Home/Hero/HomeHero";
import HomeReason from "@/components/Home/Reason/HomeReason";
import Footer from "@/components/layout/Footer/Footer";

export default async function Page() {
  return (
    <div
      className='flex flex-col h-dvh w-screen overflow-scroll snap-y  relative snap-proximity scroll-smooth select-none shadow-[inset_0px_0px_210px_10px_rgba(0,_0,_0,_0.6)]'
      id='home-container'
      // ref={parentRef}
    >
      {/* <div className='fixed inset-0' /> */}
      <video
        src={"/video/Trading.mp4"}
        autoPlay
        loop
        muted
        className='fixed inset-0 w-full h-full object-cover brightness-90  mask-radial-from-0% mask-radial-to-75% mask-radial-at-center -z-10'
      />


      <HomeHero />
      <HomeDescription />
      <HomeReason />
      <HomeComments />
      <HomeFAQ />

      <Footer />
    </div>
  );
}
