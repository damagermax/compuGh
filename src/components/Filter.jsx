import { useState } from "react";
import { Link } from "react-router-dom";

import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const Filter = () => {
  const [priceRange, setPriceRange] = useState([0, 0]);

  const handleSliderChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div>
      {" "}
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
    </div>
  );
};

export default Filter;
