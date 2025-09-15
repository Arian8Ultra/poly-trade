import GlassIcon from "@/components/layout/GlassIcon";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

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
            iconName='coins'
            className='size-10 p-2'
            colorClass='bg-accent text-black'
          />
          <h2 className='text-2xl md:text-3xl font-bold leading-9 text-center'>
            قیمت اشتراک
          </h2>
        </div>

        <p className='text-justify leading-8  mx-auto'>
          با اشتراک ۳ ماهه‌ی PolyTrade، دسترسی نامحدود و کامل به تمامی دوره‌ها،
          کارگاه‌ها و مطالب ویژهٔ هوش مالی خواهید داشت. از مبانی بودجه‌بندی و
          پس‌انداز گرفته تا اصول سرمایه‌گذاری هوشمند و استراتژی‌های پیشرفته
          بازار، هر درس و هر فایل کمکی برای شما آزاد است. در طول این ۳ ماه:
        </p>
        <div className='bg-accent p-5 w-full rounded-lg'>
          <ul className='list-disc list-inside text-justify leading-8 text-primary-foreground md:text-lg'>
            <li>دسترسی ۲۴/۷ به فیلم‌های آموزشی و اسلایدها</li>
            <li>شرکت در وبینارها و جلسات زنده با اساتید</li>
            <li>پشتیبانی و رفع اشکال اختصاصی</li>
            <li>دسترسی به چالش‌ها و تمرین‌های تعاملی</li>
            <li>به‌روزرسانی دائمی محتوا و منابع کمکی</li>
          </ul>
        </div>

        <div className='border border-accent p-3 rounded-lg flex flex-col w-full gap-8'>
          <p className='text-justify leading-8'>
            هزینه اشتراک ۳ ماهه:{" "}
            <span className='line-through text-muted-foreground mx-1'>
              ۵,۰۰۰,۰۰۰ تومان {" "}
            </span>
            <span className='text-accent font-bold text-lg'>۲,۵۰۰,۰۰۰ تومان </span>
          </p>
          <p className='text-justify leading-8'>
            با انتخاب این اشتراک، سرمایه‌گذاری هوشمندانه‌ای در آینده مالی خود
            انجام می‌دهید. همین امروز به جمع هزاران دانشجوی موفق PolyTrade
            بپیوندید و مسیر رشد و پیشرفت مالی خود را هموار کنید!
          </p>
          <Button variant='accent' className='ms-auto px-10 mt-5'>
            خرید اشتراک
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
