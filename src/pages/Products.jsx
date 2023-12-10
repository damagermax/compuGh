import { useState } from "react";

import { ProductCard } from "../components/ProductCard";
import Footer from "../components/Footer";
import NewsLetters from "../components/NewsLetters";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

import { Link } from "react-router-dom";

import { TfiMenuAlt, TfiLayoutGrid3Alt } from "react-icons/tfi";

const Products = () => {
  const [priceRange, setPriceRange] = useState([0, 0]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <>
      <div className="  w-[1170px] px-[15px] py-[60px] mx-auto flex ">
        {/* FILTER */}

        <aside className="w-[25%] pr-[80px]">
          <div className=" mb-[30px]">
            <h6 className="mb-[20px] text-[#222222] font-semibold">Categories</h6>
            <ul className=" text-[#333] grid gap-3 py-[5px] text-sm">
              <li>
                <Link to={"/product"}>Home Audio & Theater</Link>
              </li>
              <li>
                <Link to={"/product"}>TV & Video</Link>{" "}
              </li>
              <li>
                <Link to={"/product"}>Camera, Photo & Video</Link>
              </li>
              <li>
                <Link to={"/product"}>Cell Phones & Accessories</Link>{" "}
              </li>
              <li>
                <Link to={"/product"}>Headphones</Link>{" "}
              </li>
              <li>
                <Link to={"/product"}>Gaming Console</Link>{" "}
              </li>
              <li>
                <Link to={"/product"}>Computers & Tablets</Link>{" "}
              </li>
              <li>
                <Link to={"/product"}>Home Appliances</Link>{" "}
              </li>
            </ul>
          </div>

          <div className="mb-[30px] ">
            <h6 className=" text-[#222222] mb-[20px] font-semibold ">Brands</h6>
            <ul className=" text-[#333] grid gap-3 py-[5px] text-sm">
              <li className=" flex gap-3 items-center">
                <input type="checkbox" name="brand" id="brand" />
                <label htmlFor="brand" className=" cursor-pointer">
                  Samsung
                </label>
              </li>
              <li className=" flex gap-3 items-center">
                <input type="checkbox" name="brand" id="brand" />
                <label htmlFor="brand" className=" cursor-pointer">
                  Apple
                </label>
              </li>
              <li className=" flex gap-3 items-center">
                <input type="checkbox" name="brand" id="brand" />
                <label htmlFor="brand" className=" cursor-pointer">
                  Infinex
                </label>
              </li>
              <li className=" flex gap-3 items-center">
                <input type="checkbox" name="brand" id="brand" />
                <label htmlFor="brand" className=" cursor-pointer">
                  LG
                </label>
              </li>
            </ul>
          </div>

          <div className="mb-[50px]">
            <div className="mb-[20px] flex justify-between font-semibold">
              <h6 className=" text-[#222222] ">Price</h6>
              <button className="  text-[#0088cc] hover:bg-[#0088cc]/20  cursor-pointer  py-1 px-2 rounded-sm">
                Apply
              </button>
            </div>
            <Slider
              range
              min={0}
              max={1000}
              value={priceRange}
              onChange={handleSliderChange}
              className=" mb-[10px]"
            />
            <div className=" grid  grid-cols-2 gap-6">
              <p className=" border border-[#e6e6e6] py-[6px] px-3 rounded-md  text-sm">
                {priceRange[0]}
              </p>
              <p className=" border border-[#e6e6e6] py-[6px] px-3 rounded-md  text-sm">
                {priceRange[1]}
              </p>
            </div>
          </div>
        </aside>

        {/* PRODUCT LIST */}

        <div className="  w-[75%]">
          <div className=" mb-[30px]">
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

          <div className=" grid grid-cols-4  gap-6 ">
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

      <NewsLetters />
      <Footer />
    </>
  );
};

export default Products;
