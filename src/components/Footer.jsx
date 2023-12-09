import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-[40px] ">
      <div className="  w-[1170px] px-[15px] mx-auto  text-xs  text-slate-400">
        <div className="grid grid-cols-3 gap-8 mb-[80px]">
          <div>
            <img
              className=" w-[70%]"
              src="https://compughana.com/media/logo/stores/2/CG_Logo_w.png"
              alt=""
            />
            <p className="my-[20px]  text-xs">
              Compu-Ghana is Ghana's premier retail outlet for I.T. products, services and
              accessories along-with audio-visual equipment and home appliances,{" "}
              <span>all under one roof.</span>
            </p>

            <ul className=" grid gap-4">
              <li>
                <div className=" flex items-center gap-2 text-xs">
                  <MdOutlineMail />
                  <p>Email: Contact@compughanaltd.com</p>
                </div>
              </li>
              <li>
                <div className=" flex items-center gap-2 text-xs">
                  <MdOutlinePhone />
                  <p>Phone Number: (800) 123 456 789</p>
                </div>
              </li>
            </ul>
          </div>

          <div className=" col-span-2 grid grid-cols-3 gap-8">
            <div className=" px-8">
              <span className=" text-sm font-medium text-white">USEFUL LINKS</span>
              <ul className="pt-6 grid gap-4">
                <li>
                  <a href="">About Us</a>
                </li>
                <li>
                  <a href="">Returns Policy</a>
                </li>
                <li>
                  <a href="">Terms & Condition</a>
                </li>
                <li>
                  <a href="">Delivery Information</a>
                </li>
              </ul>
            </div>

            <div className="px-8">
              <span className=" text-sm  font-medium text-white">ACCOUNT</span>
              <ul className="pt-6 grid gap-4">
                <li>
                  <a href=""> Cart</a>
                </li>
                <li>
                  <a href="">Login </a>
                </li>
                <li>
                  <a href="">Order history</a>
                </li>
                <li>
                  <a href="">Create Account</a>
                </li>
              </ul>
            </div>

            <div className=" px-8">
              <span className="  text-sm font-medium text-white">PAYMENT METHODS</span>
              <ul className="pt-6 grid  grid-cols-3   text-2xl">
                <li>
                  <GiReceiveMoney />
                </li>
                <li>
                  <FaCcVisa />
                </li>
                <li>
                  <FaCcMastercard />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className=" border-t border-t-slate-600 pt-[40px]  flex justify-center items-center ">
          <p>© CompuGhana LTD. 2023. All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
