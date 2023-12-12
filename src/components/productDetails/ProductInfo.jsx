import { IoMdHeart, IoMdShare } from "react-icons/io";

const ProductInfo = () => {
  return (
    <div className=" md:flex">
      <div className=" md:w-[36%] md:px-[15px]">
        <div>
          <img
            src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-2.jpg"
            alt=""
          />
        </div>

        <div className=" grid  grid-cols-3 gap-4 mt-[20px]">
          <img
            className=" border border-blue-400/80"
            src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-2.jpg"
            alt=""
          />{" "}
          <img
            src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-1.jpg"
            alt=""
          />{" "}
          <img
            src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-3.jpg"
            alt=""
          />
        </div>
      </div>
      <div className=" md:w-[64%] lg:w-[54%] md:pl-[15px] lg:px-[15px] mt-6 md:mt-0">
        <span className=" text-[0.8125rem] text-[#aaaaaa] inline-block">Accessories</span>

        <h5 className="mt-[5px] mb-[10px] text-[20px] line-clamp-2">
          Power Smartphone 7s Silver 128GB/ Camera 7.5”
        </h5>

        <div className=" flex justify-between">
          <p className="text-[22px] text-[#d8263c]  font-semibold">$400.00</p>
          <p className=" text-[#323131] text-sm">
            Availability: <span className=" text-[#71a403]"> In Stock</span>
          </p>
        </div>

        <p className=" mt-[10px] mb-[20px] text-sm text-[#333] leading-loose line-clamp-5">
          Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei. Mei an
          consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error epicurei mea
          et. Qui purto zril laoreet. Ex error omnium interpretaris pro. BGA 1400 Spin Washing
          Machine
        </p>

        <div className="my-[20px] text-[#aaaaaa] text-sm flex gap-6">
          <div className=" flex items-center gap-2 cursor-pointer">
            <IoMdHeart />
            <p> Add to Wishlist</p>
          </div>

          <div className=" flex items-center gap-2  cursor-pointer">
            <IoMdShare />
            <p> Share This Product</p>
          </div>
        </div>

        <button className=" w-full bg-[#0088cc] text-white py-[10px] rounded-sm">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
