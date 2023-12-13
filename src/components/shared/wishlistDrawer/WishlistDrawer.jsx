import { useState } from "react";
import { LuHeart } from "react-icons/lu";
import Drawer from "../Drawer";
import WishlistCard from "./WishlistCard";
const WishlistDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  return (
    <>
      <li className=" flex gap-2 items-center cursor-pointer" onClick={toggleDrawer}>
        <LuHeart size={20} />
        <p className=" hidden lg:block font-medium">Wishlist</p>
      </li>

      <Drawer
        title={"Wishlist"}
        isOpen={isOpen}
        onToggle={toggleDrawer}
        content={
          <div className="p-6  flex flex-col gap-2 h-[90vh] overflow-auto">
            {Array.from({ length: 6 }, (_, key) => (
              <>
                <WishlistCard key={key} />
                {key < 5 && <hr />}
              </>
            ))}
          </div>
        }
      />
    </>
  );
};

export default WishlistDrawer;
