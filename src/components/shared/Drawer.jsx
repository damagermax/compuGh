import React, { useEffect } from "react";
import { IoMdClose } from "react-icons/io";

const Drawer = ({ isOpen, content, title, onToggle }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className=" fixed top-0 bottom-0  ease-in-out  inset-0  z-[999]">
          <div className=" bg-slate-900 opacity-70 absolute inset-0 h-full "></div>
          <div className=" bg-white fixed right-0 top-0  overflow-auto bottom-0  sm:h-screen w-full sm:w-[55%] lg:w-[32%]">
            <div className=" p-6 flex text-[20px] items-center justify-between">
              <h2 className=" font-semibold  ">{title}</h2>
              <button
                className=" opacity-50  hover:opacity-75 focus:opacity-100 hover:border-gray-500 border  ease-in-out border-white hover:rounded-full p-1 "
                onClick={onToggle}
              >
                <IoMdClose />
              </button>
            </div>
            {content}
          </div>
        </div>
      )}
    </>
  );
};

export default Drawer;
