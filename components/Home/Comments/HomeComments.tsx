import ThreeDCarousel, {
  ThreeDCarouselItem,
} from "@/components/lightswind/lightswind/ThreeDCarousel";
import * as motion from "motion/react-client";

const HomeComments = () => {
  const items: ThreeDCarouselItem[] = [
    {
      id: 1,
      brand: "مینا رضایی",
      description:
        "با دوره‌های PolyTrade توانستم مفاهیم مالی را به زبان ساده یاد بگیرم و اعتماد به نفس من در مدیریت پولم افزایش یافت.",
    },
    {
      id: 2,
      brand: "علی موسوی",
      description:
        "تمرین‌های عملی و مثال‌های زندگی واقعی باعث شد کاربرد درس‌ها را بهتر درک کنم و خودم دست به کار شوم.",
    },
    {
      id: 3,
      brand: "سارا احمدی",
      description:
        "پلی‌ترید نه تنها دانش مالی من را افزایش داد، بلکه به من کمک کرد تا اهداف مالی‌ام را مشخص کنم و برای آینده برنامه‌ریزی کنم.",
      tags: ["هوش مالی", "ترید", "پلی‌ترید"],
    },
  ];

  return (
    <motion.div
      // add a blur for the before element
      className='bg-gradient-to-b from-black/10 via-black to-black relative'
      exit={{ opacity: 0, y: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className='flex flex-col gap-6 md:gap-10 items-start justify-center w-full p-10 md:p-20'>
        <div className='flex flex-col gap-8 w-full'>
          <h2 className='text-2xl md:text-3xl font-bold leading-9'>
            نظر تعدادی از اعضای{" "}
            <span className='text-accent mx-2'>پلی‌ترید</span>
          </h2>
        </div>
        <ThreeDCarousel
          items={items}
          autoRotate={true}
          rotateInterval={4000}
          cardHeight={500}
        />
      </div>
    </motion.div>
  );
};

export default HomeComments;
