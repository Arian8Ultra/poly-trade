import GlassIcon from "@/components/layout/GlassIcon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Brain,
  Calendar,
  Code2,
  Coins,
  Presentation,
  Sparkles,
  ToolCase,
} from "lucide-react";
import * as motion from "motion/react-client";
import Link from "next/link";
const HomeDescription = () => {
  return (
    <motion.div
    // add a blur for the before element
      className='bg-gradient-to-b from-black/0 via-black to-black relative'
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className='flex flex-col gap-6 md:gap-10 items-start justify-center w-full min-h-dvh  snap-center p-10 md:p-20'>
        <div className='flex gap-5'>
          <GlassIcon
            iconName='circle-question-mark'
            className='size-10 p-2'
            colorClass='bg-accent text-black'
          />
          <h2 className='text-2xl md:text-3xl font-bold text-accent'>
            پلی ترید چیست؟
          </h2>
        </div>
        <div className='grid md:grid-cols-2 w-full gap-6'>
          <motion.div
            className='w-full h-full'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className='border border-accent h-full'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-lg'>
                  <Sparkles className='size-6 text-accent fill-accent stroke-1' />
                  آموزش هوش مالی و ترید با رقابت و بازی
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-justify leading-8'>
                  گام اول برای موفقیت مالی در مسیر زندگی، کسب دانش و مهارت های
                  مرتبط است. پلی ترید یک پلتفرم هوشمند است که صفر تا صد هوش مالی
                  را با بازی و سرگرمی به شما می آموزد. تمام امتیازاتی که بدست می
                  آورید، در یک شبکه بلاک چینی ثبت می شود . هوش مالی خود را
                  افزایش دهید، امتیاز بگیرید و کسب درآمد کنید.
                </p>
              </CardContent>
              <CardFooter>
                <Link href={"https://app.polytrade.ir/signup"}>
                  <Button variant='outline' className='w-full md:w-auto'>
                    ورود به دوره
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            className='w-full h-full'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className='h-full'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-lg'>
                  <Coins className='size-6 text-accent fill-accent stroke-1' />
                  دورهٔ جامع هوش مالی
                </CardTitle>
              </CardHeader>
              <CardContent className='my-auto'>
                <p className='text-justify leading-8'>
                  از مفاهیم پایهٔ بودجه‌بندی و مدیریت هزینه تا اصول سرمایه‌گذاری
                  و تنوع‌بخشی پرتفوی را در یک دورهٔ جامع بیاموزید.
                </p>
              </CardContent>
              {/* <CardFooter className="mt-auto">
              <Button variant='outline' className='w-full md:w-auto'>
                شروع یادگیری
              </Button>
            </CardFooter> */}
            </Card>
          </motion.div>

          <motion.div
            className='w-full h-full'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className='h-full'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-lg'>
                  <Code2 className='size-6 text-accent' />
                  آموزش مرحله به مرحله برنامه نویسی پایتون و هوش مصنوعی
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className='text-justify leading-8'>
                  شما در پلی ترید به صورت گام به گام و درس به درس از سطح
                  مقدماتی، تا پیشرفته ، با تمرین های متنوع و عملی برنامه نویسی و
                  هوش مصنوعی را می آموزید و در پایان دوره مدرک معتبر دانشگاه
                  صنعتی امیرکبیر دریافت میکنید.
                </p>
              </CardContent>
              <CardFooter>
                <div className='grid grid-cols-3 gap-3 w-full p-5'>
                  <p className='bg-accent/20 text-accent rounded-lg p-2 text-center text-sm'>
                    هوش مصنوعی
                  </p>
                  <p className='bg-accent/20 text-accent rounded-lg p-2 text-center text-sm'>
                    برنامه نویسی
                  </p>
                  <p className='bg-accent/20 text-accent rounded-lg p-2 text-center text-sm'>
                    مدرک دانشگاه امیرکبیر
                  </p>
                </div>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            className='w-full h-full'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className='border border-accent h-full'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-lg'>
                  <Brain className='size-6 text-accent ' />
                  تمرین‌ها و مینی‌چالش‌های واقعی
                </CardTitle>
              </CardHeader>
              <CardContent className='my-auto'>
                <p className='text-justify leading-8'>
                  هر درس با چالش‌های عملی همراه است تا آموخته‌هایتان در بازار
                  واقعی محک بخورد. با انجام مینی‌تمرین‌ها و پروژه‌های کوچک،
                  مهارت‌های خود را تثبیت کنید.
                </p>
              </CardContent>
              <CardFooter>
                <Link href={"https://app.polytrade.ir/signup"}>
                  <Button variant='outline' className='w-full md:w-auto'>
                    ورود به دوره
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          </motion.div>

          <motion.div
            className='w-full h-full'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className='border border-accent h-full'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-lg'>
                  <ToolCase className='size-6 text-accent' />
                  ارائه ابزارهای ترید همگام با آموزش
                </CardTitle>
              </CardHeader>
              <CardContent className='my-auto'>
                <p className='text-justify leading-8'>
                  دوره هوش مالی پلی ترید، به شما کمک میکند تا بتوانید مسیر شغلی
                  خود را بهتر بشناسید و در آینده آگاهانه تر وارد تحصیلات عالی
                  شوید. به علاوه پلتفرم هوشمند پلی ترید ابزارهایی فراهم کرده است
                  تا با پول غیر واقعی به تمرین آنچه یادگرفته اید بپردازید و از
                  ضررهای احتمالی جلوگیری کنید.
                </p>
              </CardContent>
              {/* <CardFooter className="mt-auto">
              <Button variant='outline' className='w-full md:w-auto'>
                شروع یادگیری
              </Button>
            </CardFooter> */}
            </Card>
          </motion.div>

          <motion.div
            className='w-full h-full'
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card className='h-full'>
              <CardHeader>
                <CardTitle className='flex items-center gap-2 text-lg'>
                  <Presentation className='size-6 text-accent ' />
                  وبینارهای هفتگی PolyTrade
                </CardTitle>
              </CardHeader>
              <CardContent className='h-full'>
                <div className='flex gap-3 my-5'>
                  <div className='flex gap-2 items-center p-2 rounded-lg bg-accent/20 '>
                    <Calendar className='size-4' />
                    <p className='text-sm'>
                      پنجشنبه هر هفته، ساعت 20:00 الی 21:30
                    </p>
                  </div>
                </div>
                <p className='text-justify leading-8 my-auto'>
                  جلسات زندهٔ هفتگی با اساتید برجسته بازارهای مالی؛ فرصت پرسش و
                  پاسخ و تعامل مستقیم را از دست ندهید.
                </p>
              </CardContent>
              {/* <CardFooter className="mt-auto">
              <Button variant='outline' className='w-full md:w-auto'>
                شروع یادگیری
              </Button>
            </CardFooter> */}
            </Card>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeDescription;
