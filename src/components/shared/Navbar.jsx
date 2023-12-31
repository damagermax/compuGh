import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";

import { Link } from "react-router-dom";

import CartDrawer from "./cartDrawer/CartDrawer";
import WishlistDrawer from "./wishlistDrawer/WishlistDrawer";

const Navbar = () => {
  return (
    <nav>
      <div className=" max-w-[1170px] px-[15px] mx-auto  py-6 flex items-center justify-between">
        <Link to={"/"} className=" w-[40%] md:w-[30%] lg:w-[20%] ">
          <img src="https://compughana.com/media/logo/stores/2/COMPU_G-01.png" alt="" />
        </Link>

        <div className=" hidden lg:block w-[40%] ">
          <form action="" className=" flex relative text-[15px]">
            <input
              className="py-3  px-6  w-full h-[40px] border rounded-[4px] focus:outline-none"
              type="text"
              placeholder="Search for products,brands and categories..."
            />
            <button className="  px-3 rounded-r-[4px] bg-[#eeeeee] text-gray-600   font-semibold  h-[40px] cursor-pointer absolute top-0 right-0">
              <FiSearch size={20} />
            </button>
          </form>
        </div>

        <ul className=" flex items-center gap-6 text-sm">
          <li className=" flex gap-2 items-center cursor-pointer">
            <BsPerson size={22} />
            <p className="hidden lg:block font-medium">Account</p>
          </li>
          <WishlistDrawer />
          <CartDrawer />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
