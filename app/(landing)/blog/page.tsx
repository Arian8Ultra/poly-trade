import GlassIcon from "@/components/layout/GlassIcon";
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
            بلاگ
          </h2>
        </div>
      </div>
    </motion.div>
  );
}
