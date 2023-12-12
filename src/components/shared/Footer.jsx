import { MdOutlineMail, MdOutlinePhone } from "react-icons/md";

import { FaCcMastercard, FaCcVisa } from "react-icons/fa";
import { GiReceiveMoney } from "react-icons/gi";

const FOOTER_LINKS = {
  textLinks: [
    {
      name: "USEFUL LINKS",
      links: ["About Us", "Returns Policy", "Terms & Condition", "Delivery Information"],
    },
    {
      name: "ACCOUNT",
      links: ["Cart", "Login ", "Order history", "Create Account"],
    },
  ],

  iconLink: {
    name: "PAYMENT METHODS",
    icons: [<GiReceiveMoney />, <FaCcVisa />, <FaCcMastercard />],
  },
};

const Footer = () => {
  return (
    <footer className="bg-slate-800 py-[30px] md:py-[40px] ">
      <div className="  max-w-[1170px] px-[15px] mx-auto  text-xs  text-slate-400">
        <div className="grid md:grid-cols-3 gap-8 mb-[80px]">
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

          <div className=" col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
            {FOOTER_LINKS.textLinks.map((link, key) => (
              <div className=" lg:px-8" key={key}>
                <span className=" text-sm font-medium text-white">{link.name}</span>
                <ul className="pt-6 grid gap-4">
                  {link.links.map((link, key) => (
                    <li key={key}>
                      <a href="">{link}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className=" lg:px-8">
              <span className="  text-sm font-medium text-white">{FOOTER_LINKS.iconLink.name}</span>
              <ul className="pt-6 grid  grid-cols-3   text-2xl">
                {FOOTER_LINKS.iconLink.icons.map((link, key) => (
                  <li key={key}>{link}</li>
                ))}
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
