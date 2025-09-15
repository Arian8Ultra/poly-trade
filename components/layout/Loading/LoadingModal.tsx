import React from "react";
import Loading from "./Loading";

const LoadingModal = () => {
  return (
    <div className='flex flex-col h-dvh w-screen backdrop-blur-md bg-background/50 z-50 items-center justify-center fixed'>
      <Loading />
    </div>
  );
};

export default LoadingModal;
