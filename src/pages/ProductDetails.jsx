import ProductCard from "./components/ProductCard";

const ProductDetails = () => {
  return (
    <>
      <section className=" py-[60px] ">
        <div className="  w-[1170px] px-[15px] mx-auto ">
          <div className="mb-[40px]">
            <h2 className=" text-[20px] mb-[20px] text-[#222222] font-semibold">
              Top Selling of the Week
            </h2>
            <div className=" flex items-center">
              <hr className=" bg-[#0088cc] inline-block h-[2px] w-[90px]" />
              <hr className=" w-full" />
            </div>
          </div>
          <div className=" grid grid-cols-5  gap-6">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetails;
