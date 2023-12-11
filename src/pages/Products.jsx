import { ProductCard } from "../components/ProductCard";
import Footer from "../components/Footer";
import NewsLetters from "../components/NewsLetters";

import { TfiMenuAlt, TfiLayoutGrid3Alt } from "react-icons/tfi";
import Filter from "../components/Filter";

const Products = () => {
  return (
    <>
      <div className="  max-w-[1170px] px-[15px] py-[60px] mx-auto  flex ">
        {/* FILTER */}

        <aside className=" hidden  md:block md:w-[31%] lg:w-[25%] pr-[35px] lg:pr-[80px]">
          <Filter />
        </aside>

        {/* PRODUCT LIST */}

        <div className="  md:w-[69%]  lg:w-[75%]">
          <div className=" hidden md:block mb-[30px]">
            <h2 className=" text-[20px] mb-[20px]  font-semibold">All Products</h2>

            <ul className="mb-[10px] text-[#323131] text-sm flex">
              <li className="pr-4 border-r">
                <p>Showing 1–12 of 756 results</p>
              </li>
              <li className="px-4 border-r">
                <p>Show 12 </p>
              </li>
              <li className="px-4 border-r">
                <p>Sort by Default</p>
              </li>
              <li className="px-4  flex gap-4 items-center">
                <TfiMenuAlt size={19} />
                <TfiLayoutGrid3Alt size={16} className=" text-[#0088cc]" />
              </li>
            </ul>
          </div>

          <div className=" grid grid-cols-2  lg:grid-cols-4  gap-2  md:gap-4 lg:gap-6 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
