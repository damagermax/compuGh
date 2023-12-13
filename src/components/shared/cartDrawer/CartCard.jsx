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
    <div className=" flex  h-fit">
      <div className="p-1 shadow-sm h-fit">
        <img
          className="w-[80px]   object-cover"
          src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-4.jpg"
          alt=""
        />
      </div>

      <div className="pl-[15px] ">
        <Link className=" text-sm text-[#555555] cursor-pointer inline-block " to="/phone">
          <p className=" line-clamp-2  sm:line-clamp-1" onClick={toggleDrawer}>
            Teclado Inalambrico Bluetooth Con Air Mouse
          </p>
        </Link>
        <p className=" text-[#333333]  text-sm font-semibold">$350.00</p>

        <div className=" flex justify-between mt-2 items-center">
          <p className="flex  text-red-500  items-center gap-1 cursor-pointer">
            <MdOutlineDeleteOutline size={16} />
            <span>Remove</span>
          </p>
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default CartCard;
