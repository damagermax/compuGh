import Footer from "../components/Footer";
import NewsLetters from "../components/NewsLetters";
import { ProductCard2 } from "../components/ProductCard";

import { IoMdHeart, IoMdShare } from "react-icons/io";
import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

const AllProduct = () => {
  return (
    <>
      <section className=" py-[60px]">
        <div className="  w-[1170px] px-[15px] mx-auto flex ">
          <div className=" w-[75%]">
            <div className=" flex">
              <div className=" w-[36%] px-[15px]">
                <img
                  src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-2.jpg"
                  alt=""
                />
              </div>
              <div className=" w-[54%] px-[15px]">
                <span className=" text-[0.8125rem] text-[#aaaaaa] inline-block">Accessories</span>

                <h5 className="mt-[5px] mb-[10px] text-[20px]">
                  Power Smartphone 7s Silver 128GB/ Camera 7.5”
                </h5>

                <div className=" flex justify-between">
                  <p className="text-[22px] text-[#d8263c]  font-semibold">$400.00</p>
                  <p className=" text-[#323131] text-sm">
                    Availability: <span className=" text-[#71a403]"> In Stock</span>
                  </p>
                </div>

                <p className=" mt-[10px] mb-[20px] text-sm text-[#333] leading-loose">
                  Alienum phaedrum torquatos nec eu, vis detraxit periculis ex, nihil expete mei.
                  Mei an consequat an. Eius lorem tincidunt vix at, vel pertinax sensibus id, error
                  epicurei mea et. Qui purto zril laoreet. Ex error omnium interpretaris pro. BGA
                  1400 Spin Washing Machine
                </p>

                <div className="my-[20px] text-[#aaaaaa] text-sm flex gap-4">
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
          </div>
          <div className=" w-[25%] pl-[15px] flex flex-col gap-4  text-sm">
            <div className=" bg-[#f3f6fb] p-[15px] flex gap-2 rounded-lg h-fit ">
              <div>
                <TbTruckDelivery size={20} />
              </div>
              <div>
                <p className="  font-medium">Door Delivery </p>
                <span className=" text-xs font-normal text-gray-500  leading-snug">
                  Ready for delivery between 12 December & 13 December
                </span>
              </div>
            </div>

            <div className=" bg-[#f3f6fb] p-[15px] flex gap-2 rounded-lg  h-fit">
              <div>
                <GiReturnArrow size={20} />
              </div>
              <div>
                <p className="  font-medium">Return Policy </p>
                <span className=" text-xs font-normal text-gray-500  leading-snug">
                  Free return within 15 days for all eligible items.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className=" py-[60px] ">
        <div className="  w-[1170px] px-[15px] mx-auto ">
          <div className="mb-[40px]">
            <h2 className=" text-[20px] mb-[20px] text-[#222222] font-semibold">
              You May Also Like
            </h2>
            <div className=" flex items-center">
              <hr className=" bg-[#0088cc] inline-block h-[2px] w-[90px]" />
              <hr className=" w-full" />
            </div>
          </div>
          <div className=" grid grid-cols-5  gap-6">
            <ProductCard2 />
            <ProductCard2 />
            <ProductCard2 />
            <ProductCard2 />
            <ProductCard2 />
          </div>
        </div>
      </section>

      <section className=" py-[60px] ">
        <div className="  w-[1170px] px-[15px] mx-auto ">
          <div className="mb-[40px]">
            <h2 className=" text-[20px] mb-[20px] text-[#222222] font-semibold">Recently Viewed</h2>
            <div className=" flex items-center">
              <hr className=" bg-[#0088cc] inline-block h-[2px] w-[90px]" />
              <hr className=" w-full" />
            </div>
          </div>
          <div className=" grid grid-cols-5  gap-6">
            <ProductCard2 />
            <ProductCard2 />
            <ProductCard2 />
            <ProductCard2 />
            <ProductCard2 />
          </div>
        </div>
      </section>

      <NewsLetters />
      <Footer />
    </>
  );
};

export default AllProduct;
