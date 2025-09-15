import GlassIcon from "@/components/layout/GlassIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import * as motion from "motion/react-client";
import Link from "next/link";

export default function Page() {
  return (
    <motion.div
      className='relative w-dvw'
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className='flex flex-col gap-6 md:gap-10 items-start justify-center max-w-4xl min-h-dvh  snap-center p-10 md:p-20 mx-auto'>
        <div className='flex flex-col gap-8 w-full justify-center items-center'>
          <GlassIcon
            iconName='circle-question-mark'
            className='size-10 p-2'
            colorClass='bg-accent text-black'
          />
          <h2 className='text-2xl md:text-3xl font-bold leading-9 text-center'>
            تماس با ما
          </h2>
        </div>

        <p className='text-justify leading-8  mx-auto'>
          ما در «پلی‌ترید» مشتاق شنیدن شما هستیم! هر سوال، پیشنهاد یا نیاز به
          راهنمایی دارید، تیم ما آماده است در کوتاه‌ترین زمان پاسخگو باشد.
          کافی‌ست پیغام‌تان را برایمان ارسال کنید تا تجربهٔ شما از هوش مالی را
          به بهترین شکل همراهی کنیم.
        </p>
        <div className='bg-accent p-5 w-full rounded-lg'>
          <p className='text-justify leading-8 text-primary-foreground'>
            <span className='text-primary-foreground font-bold text-lg'>آدرس: </span>
            تهران، دانشگاه صنعتی امیرکبیر، مرکز رشد پارک علم و فناوری دانشگاه
            صنعتی امیرکبیر، مجموعه پلی‌ترید
          </p>
          <div className='text-justify '>
            <span className='text-primary-foreground font-bold text-lg'> ایمیل: </span>
            <Link href={"mailto:contact@polytrade.ir"} className='underline text-primary-foreground'>
              contact@polytrade.ir
            </Link>
          </div>
        </div>

        <form className='flex flex-col gap-4 w-full p-3 border border-accent rounded-lg'>
          <Input
            type='text'
            placeholder='نام و نام خانوادگی'
            className='w-full'
            required
          />
          <Input type='email' placeholder='ایمیل' className='w-full' required />
          <Textarea
            placeholder='پیغام شما'
            className='w-full min-h-[150px]'
            required
          />
          <Button type='submit' variant='accent' className='ms-auto px-10'>
            ارسال
          </Button>
        </form>
      </div>
    </motion.div>
  );
}
