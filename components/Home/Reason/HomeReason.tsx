import {
  Card,
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import * as motion from "motion/react-client";
const HomeReason = () => {
  return (
    <motion.div
      // add a blur for the before element
      className='bg-gradient-to-b from-black via-black to-black/10 relative'
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className='flex flex-col gap-6 md:gap-10 items-start justify-center w-full min-h-dvh  snap-center p-10 md:p-20'>
        <div className='flex flex-col gap-8'>
          <h2 className='text-2xl md:text-3xl font-bold leading-9'>
            چرا
            <span className='text-accent mx-2'>پلی‌ترید</span>
            بهترین منبع یادگیری هوش مالی و ترید است؟
          </h2>
          <div className='grid md:grid-cols-2 gap-5'>
            <p className='text-justify leading-9 w-full my-auto text-lg'>
              پلی ترید یک پلتفرم جامع آموزش هوش مالی و ترید است که با بهره گیری
              از تکنولوژی ، بلاک چین، هوش مصنوعی و المان های بازی یادگیری هوش
              مالی را ساده و هیجان انگیز می کند. یادگیری در پلی ترید مانند یک
              بازی رقابتی و چالش برانگیز است. شما علاوه بر مهارت هایی نظیر
              برنامه نویسی و هوش مصنوعی، مهارت هایی نرم کاربردی را یاد میگیرید.
              امتیازهایی که در طول مدت آموزش تان کسب می کنید، روی شبکه بلاک چینی
              پلی ترید ذخیره می شود. در پایان دوره علاوه بر اعطای مدرک معتبر
              دانشگاه صنعتی امیرکبیر تهران، جوایز نقدی متنوعی در انتظار شماست.
            </p>
            <div className='grid grid-cols-2 gap-5 md:p-5'>
              <Card className='border border-accent h-fit'>
                <CardHeader>
                  <CardTitle className='text-lg text-center'>
                    ساعت محتوای آموزشی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-3xl leading-8'>+ 40</p>
                </CardContent>
              </Card>
              <Card className='border border-accent h-fit'>
                <CardHeader>
                  <CardTitle className='text-lg text-center'>
                    نرخ رضایت دانشجویان
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-3xl leading-8'>98%</p>
                </CardContent>
              </Card>
              <Card className='border border-accent h-fit'>
                <CardHeader>
                  <CardTitle className='text-lg text-center'>
                    دانش‌آموختهٔ موفق
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-3xl leading-8'>+100</p>
                </CardContent>
              </Card>
              <Card className='border border-accent h-fit'>
                <CardHeader>
                  <CardTitle className='text-lg text-center'>
                    پروژه و تمرین عملی
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className='text-center text-3xl leading-8'>+100</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeReason;
