import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as motion from "motion/react-client";

const HomeFAQ = () => {
  const faqs = [
    {
      id: 1,
      question: "بعد از خرید اشتراک ۴ ماهه به چه محتواهایی دسترسی خواهم داشت؟",
      answer:
        "تمام ویدئوهای آموزشی پایه و پیشرفته هوش مالی، کارگاه‌های زنده، چالش‌ها و تمرین‌های عملی، وبینارهای هفتگی و فایل‌های کمکی (اسلاید، جزوه) به‌صورت نامحدود برای شما فعال خواهند شد.",
    },
    {
      id: 2,
      question: "وبینارهای هفتگی چطور برگزار می‌شوند و چطور می‌توانم شرکت کنم؟",
      answer:
        "هر هفته لینک ورود به وبینار به ایمیل شما ارسال می‌شود. کافی است روی لینک کلیک کنید تا در جلسهٔ زنده حضور پیدا کنید، سوالات خود را مطرح کنید و پاسخ‌گویی به‌صورت زنده انجام می‌شود.",
    },
    {
      id: 3,
      question: "اگر در دوره‌ها سوال یا مشکلی داشتم چگونه پشتیبانی می‌شوم؟",
      answer:
        "تیم پشتیبانی PolyTrade از طریق پنل کاربران به‌صورت چت آنلاین و ایمیل آمادهٔ پاسخگویی است. همچنین هر هفته جلسهٔ پرسش و پاسخ برگزار می‌کنیم تا همهٔ ابهامات شما رفع شود.",
    },
    {
      id: 4,
      question: "آیا در صورت انصراف امکان بازگشت وجه وجود دارد؟",
      answer:
        "در صورت درخواست انصراف حداکثر تا ۷ روز پس از خرید و با استفاده از بیش از ۲۰٪ محتوا، هزینه تان برگشت داده می‌شود. بعد از این مدت امکان بازگشت وجه وجود ندارد.",
    },
  ];
  return (
    <motion.div
      // add a blur for the before element
      className='bg-gradient-to-b from-black via-black to-black/10 relative'
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className='flex flex-col gap-6 md:gap-10 items-start justify-center w-full p-10 md:p-20'>
        <div className='flex flex-col gap-8 w-full'>
          <h2 className='text-2xl md:text-3xl font-bold leading-9'>
            سوالات متداول <span className='text-accent mx-2'>پلی‌ترید</span>
          </h2>
        </div>
        <Accordion
          type='single'
          collapsible
          className='rounded-md w-full border border-border bg-popover/80 backdrop-blur-md p-2'
        >
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={`item-${faq.id}`}>
              <AccordionTrigger dir='rtl'>
                <div className='flex gap-2 items-center'>
                  <div className='w-8 h-8 rounded-full flex items-center justify-center bg-accent text-primary-foreground font-bold shrink-0'>
                    {faq.id}
                  </div>
                  <p className='text-base text-start' dir='rtl'>
                    {faq.question}
                  </p>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <p className='text-justify p-3' dir='rtl'>
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </motion.div>
  );
};

export default HomeFAQ;
