import { Button } from "@/components/ui/button";
import { Instagram, Phone, Send, Youtube } from "lucide-react";
import Image from "next/image";
import TextLogo from "@/assets/SVG/logo-text.svg";
import Link from "next/link";
import React from "react";
// import FooterBg from "@/public/FooterBg.svg";

const Footer = () => {
  return (
    <div className='relative w-full min-h-[200px] rounded-t-xl overflow-hidden p-20 flex items-center justify-center pb-32 max-w-dvw'>
      <Image
        src={"/FooterBg.svg"}
        fill
        alt='footer-bg'
        className='absolute inset-0 w-full h-full object-cover -z-10 brightness-100 contrast-[1.25]'
      />
      <div className='flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-5  my-auto w-full items-center justify-center'>
        <div className='rounded-full border  flex items-center justify-center gap-5 backdrop-blur-md w-fit p-5 h-fit my-auto md:me-auto'>
          {/* a link for tel */}
          <Link href={"tel:+989307063665"}>
            <Button variant='ghostGlass' size={"icon"} className='p-1'>
              <Phone className='size-6 text-primary fill-white stroke-0' />
            </Button>
          </Link>
          <Link href={"#"}>
            <Button variant='ghostGlass' size={"icon"} className='p-1'>
              <Send className='size-6 text-primary' />
            </Button>
          </Link>
          <Link href={"#"}>
            <Button variant='ghostGlass' size={"icon"} className='p-1'>
              <Instagram className='size-6 text-primary' />
            </Button>
          </Link>
          <Link href={"#"}>
            <Button variant='ghostGlass' size={"icon"} className='p-1'>
              <Youtube className='size-6 text-primary' />
            </Button>
          </Link>
        </div>

        <div className='flex flex-col gap-2 mx-auto items-center justify-center w-full'>
          <TextLogo className='md:w-8/12 w-9/12' />
          <sub className='text-xs text-center text-muted-foreground'>
            تمام حقوق این وب‌سایت متعلق به شرکت نکسینو می‌باشد.
          </sub>
        </div>

        <div className='flex md:flex-row flex-col gap-4 items-center md:ms-auto'>
          <div className='rounded-full border flex items-center justify-center gap-5 backdrop-blur-md w-fit p-3 h-fit my-auto '>
            <p className='text-sm text-center'>
              دانشگاه صنعتی امیرکبیر، مرکز رشد پارک علم و فناوری، مجموعه
              پلی‌ترید
            </p>
          </div>
          <Link href={"tel:+989307063665"}>
            <Button variant='accent' className='flex gap-2 '>
              <Phone className='size-6 text-primary fill-black stroke-0' />
              <p className='text-sm'>
                با ما تماس بگیرید: <br /> 09307063665
              </p>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
