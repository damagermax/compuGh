import { Link } from "react-router-dom";

import { MdOutlineDeleteOutline } from "react-icons/md";
import { BiCart } from "react-icons/bi";
const WishlistCard = () => {
  return (
    <div className=" h-fit">
      <article className=" p-[9px]      w-full ">
        <div className="flex gap-4  h-fit ">
          <img
            className=" w-[25%] sm:w-[20%] h-fit object-contain "
            src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-1.jpg"
            alt=""
          />

          <div>
            <span className=" text-[0.8125rem] text-[#aaaaaa] inline-block ">Accessories</span>
            <Link className=" text-sm text-[#555555] cursor-pointer inline-block " to="/phone">
              <p className=" line-clamp-2">Teclado Inalambrico Bluetooth Con Air Mouse</p>
            </Link>
            <div className=" flex items-center gap-2">
              <p className=" text-[#333333]   font-semibold">$350.00</p>
              <span className=" bg-[#0088cc]/10 rounded-sm text-[12px] text-[#0088cc] font-normal px-[10px]  h-fit py-[2px] left-[9px]">
                10%
              </span>
            </div>
          </div>
        </div>

        <div className=" flex  justify-between items-center">
          <p className="flex  text-red-500  items-center gap-1 cursor-pointer">
            <MdOutlineDeleteOutline size={16} />
            <span>Remove</span>
          </p>
          <p className=" w-[42px] h-[42px] bg-[#eeeeee] text-[#888888] rounded-full hover:bg-[#0088cc] hover:text-white flex items-center justify-center cursor-pointer">
            <BiCart />
          </p>
        </div>
      </article>
    </div>
  );
};

export default WishlistCard;
