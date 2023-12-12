import { TbTruckDelivery } from "react-icons/tb";
import { GiReturnArrow } from "react-icons/gi";

const DeliveryAndReturnInfo = () => {
  return (
    <>
      <div className=" bg-[#f3f6fb] p-[15px] flex gap-2 rounded-lg h-fit ">
        <div>
          <TbTruckDelivery size={20} />
        </div>
        <div>
          <p className="  font-medium">Door Delivery </p>
          <span className=" text-xs font-normal text-gray-500  leading-snug">
            Ready for delivery between 12 December & 13 December
          </span>
        </div>
      </div>
      <div className=" bg-[#f3f6fb] p-[15px] flex gap-2 rounded-lg  h-fit">
        <div>
          <GiReturnArrow size={20} />
        </div>
        <div>
          <p className="  font-medium">Return Policy </p>
          <span className=" text-xs font-normal text-gray-500  leading-snug">
            Free return within 15 days for all eligible items.
          </span>
        </div>
      </div>
    </>
  );
};

export default DeliveryAndReturnInfo;
