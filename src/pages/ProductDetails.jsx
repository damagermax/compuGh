import Footer from "../components/shared/Footer";
import NewsLetters from "../components/home/NewsLetters";

import YouMayAlsoLike from "../components/productDetails/YouMayAlsoLike";
import RecentlyViewed from "../components/productDetails/RecentlyViewed";

import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

import ProductInfo from "../components/productDetails/ProductInfo";

const ProductDetails = () => {
  return (
    <>
      <section className="pb-[20px] md:py-[20px] lg:py-[40px]">
        <div className="  max-w-[1170px] px-[15px] mx-auto lg:flex ">
          <div className="w-full lg:w-[75%]">
            <ProductInfo />
          </div>
          <div className="w-full lg:w-[25%] lg:pl-[15px] mt-10 lg:mt-0 flex flex-col gap-4  text-sm">
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

      <YouMayAlsoLike />
      <RecentlyViewed />
    </>
  );
};

export default ProductDetails;
