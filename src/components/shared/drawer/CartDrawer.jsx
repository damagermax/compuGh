import React from "react";
import { FiShoppingBag } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import { MdOutlineDeleteOutline } from "react-icons/md";

import { Link } from "react-router-dom";

const Counter = () => {
  return (
    <div className=" text-[#555555] rounded-[4px] flex items-center  border w-fit">
      <p className="py-[2px] px-2 cursor-pointer bg-slate-100 border-r">{"-"}</p>
      <p className="py-[2px] px-4">10</p>
      <p className="py-[2px] px-2  cursor-pointer  bg-slate-100 border-l">{"+"}</p>
    </div>
  );
};

const CartCard = ({ toggleDrawer }) => {
  return (
    <div className=" flex ">
      <div className="p-1 shadow-sm">
        <img
          className="w-[80px] h-[80px] object-cover"
          src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-4.jpg"
          alt=""
        />
      </div>

      <div className="pl-[15px] ">
        <Link className=" text-sm text-[#555555] cursor-pointer inline-block " to="/phone">
          <p className=" line-clamp-1" onClick={toggleDrawer}>
            Teclado Inalambrico Bluetooth Con Air Mouse
          </p>
        </Link>
        <p className=" text-[#333333]  text-[14px] font-semibold">$350.00</p>

        <div className=" flex justify-between mt-4 items-center">
          <Counter />
          <MdOutlineDeleteOutline className=" text-lg text-red-400 cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

const CheckOut = () => {
  return (
    <div className="p-6  absolute bottom-0  right-0 left-0 bg-white  ">
      <div className=" flex justify-between mb-4 font-semibold">
        <h6>Grand total: </h6>
        <h2 className=" text-base ">$200</h2>
      </div>
      <button className="w-full bg-[#0088cc]  text-white py-[10px] rounded-sm">Checkout</button>
    </div>
  );
};

const CartDrawer = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <li className=" flex gap-2 items-center cursor-pointer" onClick={toggleDrawer}>
        <FiShoppingBag size={20} />
        <p className="hidden lg:block font-medium">Cart</p>
      </li>

      {isOpen && (
        <div className=" fixed top-0 bottom-0  ease-in-out  inset-0  z-[999]">
          <div className=" bg-slate-800 opacity-50 absolute inset-0 h-full "></div>
          <div className=" bg-white fixed right-0 top-0 bottom-0 h-screen w-full sm:w-[55%] lg:w-[32%]">
            <div className=" p-6 flex text-[20px] items-center justify-between">
              <h2 className=" font-semibold  ">Cart</h2>
              <button
                className=" opacity-50  hover:opacity-75 focus:opacity-100 hover:border-gray-500 border  ease-in-out border-white hover:rounded-full p-1 "
                onClick={toggleDrawer}
              >
                <IoMdClose />
              </button>
            </div>

            <div>
              <div className="  overflow-auto  h-[70vh]  grid gap-4 px-6 pb-4">
                {Array.from({ length: 10 }, (_, key) => (
                  <>
                    <CartCard toggleDrawer={toggleDrawer} key={key} />
                    {key < 9 && <hr />}
                  </>
                ))}
              </div>

              <hr />
              <CheckOut />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartDrawer;
