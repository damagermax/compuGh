import { ProductCard } from "../components/ProductCard";
import TopSellingOfTheMonth from "../components/TopSelingOfTheMonth";
import ProductList from "../components/ProductList";
import BrandSlider from "../components/BrandSlider";
import Billboard from "../components/Billboard";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Billboard />

      <hr className="h-[6px] sm:hidden bg-gray-300 w-full" />
      <section className="py-[40px] md:py-[50px] lg:py-[60px]">
        <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-5 max-w-[1170px] px-[15px] mx-auto gap-2 md:gap-4 lg:gap-6">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </section>

      <TopSellingOfTheMonth />

      <section className="py-[30px] md:py-[50px] lg:py-[60px]">
        <div className="  max-w-[1170px] px-[15px] mx-auto ">
          <ProductList />

          <div className=" flex items-center justify-center mt-8">
            <Link
              to={"/products"}
              className="py-1 px-6 rounded-[4px]  text-[#555555]   border-blue-200/60 text-sm cursor-pointer  font-medium border"
            >
              See All
            </Link>
          </div>
        </div>
      </section>

      <BrandSlider />
    </>
  );
};

export default Home;
