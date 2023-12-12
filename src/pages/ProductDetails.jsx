import ProductInfo from "../components/productDetails/ProductInfo";
import DeliveryAndReturnInfo from "../components/productDetails/DeliveryAndReturnInfo";

import YouMayAlsoLike from "../components/productDetails/YouMayAlsoLike";
import RecentlyViewed from "../components/productDetails/RecentlyViewed";

const ProductDetails = () => {
  return (
    <>
      <section className="pb-[20px] md:py-[20px] lg:py-[40px]">
        <div className="  max-w-[1170px] px-[15px] mx-auto lg:flex ">
          <div className="w-full lg:w-[75%]">
            <ProductInfo />
          </div>
          <div className="w-full lg:w-[25%] lg:pl-[15px] mt-10 lg:mt-0 flex flex-col gap-4  text-sm">
            <DeliveryAndReturnInfo />
          </div>
        </div>
      </section>
      <YouMayAlsoLike />
      <RecentlyViewed />
    </>
  );
};

export default ProductDetails;
