import React from "react";

import { BiCart } from "react-icons/bi";

const ProductCard = () => {
  return (
    <div className=" bg-white">
      <article className=" p-[9px]  border border-[#e6e6e6] relative  w-full">
        <img
          className=" w-full max-w-full"
          src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-1.jpg"
          alt=""
        />
        <span className=" bg-[#0088cc] rounded-sm text-[0.8125rem] text-white font-normal absolute top-[9px] px-[10px] py-[5px] left-[9px]">
          New
        </span>
        <span className=" text-[0.8125rem] text-[#aaaaaa] inline-block my-[7px]">Accessories</span>
        <p className=" text-sm text-[#555555]">Teclado Inalambrico Bluetooth Con Air Mouse</p>
        <p className=" text-[12px] text-[#f73232] mt-[5px] mb-[10px]">
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i>
          <i class="fa fa-star"></i> <i class="fa fa-star-o"></i>{" "}
          <span class="margin-left-10">5 Review(s)</span>
        </p>
        <div className=" flex justify-between items-center">
          <p className=" text-[#333333]  text-[14px] font-semibold">$350.00</p>
          <p className=" w-[42px] h-[42px] bg-[#eeeeee] text-[#888888] rounded-full hover:bg-[#0088cc] hover:text-white flex items-center justify-center cursor-pointer">
            <BiCart />
          </p>
        </div>
      </article>
    </div>
  );
};
// text-[#0168b8]

const ProductCard2 = () => {
  return (
    <div className=" bg-white">
      <article className=" p-[9px]  border border-[#e6e6e6] relative  w-full">
        <img
          className=" w-full max-w-full"
          src="https://jthemes.net/themes/f-html/smarttech/html/images/item-img-1-1.jpg"
          alt=""
        />
        <span className=" bg-[#0088cc] rounded-sm text-[0.8125rem] text-white font-normal absolute top-[9px] px-[10px] py-[5px] left-[9px]">
          New
        </span>
        <p className=" text-sm text-[#555555] my-[7px]">
          Teclado Inalambrico Bluetooth Con Air Mouse
        </p>
        <p className=" text-[#333333]  text-[14px] font-semibold">$350.00</p>
      </article>
    </div>
  );
};
export { ProductCard, ProductCard2 };
