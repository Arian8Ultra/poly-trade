import React from "react";
import * as motion from "motion/react-client";
import GlassIcon from "@/components/layout/GlassIcon";

const HomeDescription = () => {
  return (
    <motion.div
      className='snap-always snap-center bg-gradient-to-t from-accent/20 to-transparent '
      exit={{ opacity: 0, y: 0, height: 0 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 60 }}
      whileInView={{ opacity: 1, y: 0, height: "100dvh" }}
      viewport={{ once: false, amount: "all", margin: "0px 0px -50% 0px" }}
    >
      <div className='flex flex-col gap-6 md:gap-10 items-start justify-center w-full h-dvh md:h-[100dvh] snap-center p-10 md:p-20'>
        <GlassIcon iconName="circle-question-mark" />
        <h2 className='text-3xl md:text-5xl font-bold text-primary-foreground'>
          پلی ترید چیست؟
        </h2>
      </div>
    </motion.div>
  );
};

export default HomeDescription;
