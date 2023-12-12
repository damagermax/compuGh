import { ProductCard2 } from "../shared/ProductCard";

const YouMayAlsoLike = () => {
  return (
    <section className="py-[30px] md:py-[50px] lg:py-[60px] ">
      <div className="  max-w-[1170px] px-[15px] mx-auto ">
        <div className="mb-[20px] lg:mb-[40px]">
          <h2 className=" text-[20px] mb-[10px] lg:mb-[20px] text-[#222222] font-semibold">
            You May Also Like
          </h2>
          <div className=" flex items-center">
            <hr className=" bg-[#0088cc] inline-block h-[2px] w-[90px]" />
            <hr className=" w-full" />
          </div>
        </div>
        <div className="grid   grid-cols-2 md:grid-cols-3 lg:grid-cols-5  md:gap-4 lg:gap-6  gap-2">
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
          <ProductCard2 />
        </div>
      </div>
    </section>
  );
};

export default YouMayAlsoLike;
