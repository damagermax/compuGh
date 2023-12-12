import TopSellingOfTheMonth from "../components/home/TopSelingOfTheMonth";
import BrandSlider from "../components/home/BrandSlider";
import Billboard from "../components/home/Billboard";
import FeaturedProducts from "../components/home/FeaturedProducts";

import ProductList from "../components/ProductList";

import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Billboard />
      <hr className="h-[6px] sm:hidden bg-gray-300 w-full" />
      <FeaturedProducts />
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
