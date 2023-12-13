import { useState } from "react";
import { FiShoppingBag } from "react-icons/fi";

import CartCard from "./CartCard";
import Drawer from "../Drawer";

const CheckOut = () => {
  return (
    <div className="p-6  absolute bottom-0  right-0 left-0 bg-white  ">
      <div className=" flex justify-between my-1 font-semibold">
        <h6 className=" text-base">Grand total: </h6>
        <h2 className=" text-lg ">$200</h2>
      </div>

      <p className=" text-gray-400 text-xs  mt-2  mb-4  font-medium">Delivery fee not added yet.</p>

      <button className="w-full bg-[#0088cc]  text-white py-[10px] rounded-sm hover:opacity-95">
        Checkout
      </button>
    </div>
  );
};

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <li className=" flex gap-2 items-center cursor-pointer" onClick={toggleDrawer}>
        <FiShoppingBag size={20} />
        <p className="hidden lg:block font-medium">Cart</p>
      </li>

      <Drawer
        title={"Cart"}
        isOpen={isOpen}
        onToggle={toggleDrawer}
        content={
          <div>
            <div className="  overflow-auto   h-[60vh] sm:h-[70vh]  grid gap-4 px-6 pb-4">
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
        }
      />
    </>
  );
};

export default CartDrawer;
