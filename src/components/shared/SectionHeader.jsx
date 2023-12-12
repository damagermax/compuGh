import { Link } from "react-router-dom";
import { TbMathGreater } from "react-icons/tb";

const SectionHeader = ({ title, seeAll }) => {
  return (
    <div className="mb-[20px] lg:mb-[40px]">
      <div className=" text-[20px] mb-[10px] lg:mb-[20px] text-[#222222] font-semibold flex justify-between items-center">
        <h2>{title}</h2>

        {seeAll && (
          <Link
            to={"/products"}
            className=" text-sm flex items-center gap-1 cursor-pointer font-medium"
          >
            See all{" "}
            <span>
              <TbMathGreater />
            </span>
          </Link>
        )}
      </div>
      <div className=" flex items-center">
        <hr className=" bg-[#0088cc] inline-block h-[2px] w-[90px]" />
        <hr className=" w-full" />
      </div>
    </div>
  );
};

export default SectionHeader;
