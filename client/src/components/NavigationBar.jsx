import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Custombuttom from "./Custom_Buttom.jsx";
import { logo, menu, search, thirdweb } from "../assets";
import { useStateContext } from "../context/index.jsx";
import { navlinks } from "../contants";

const NavigationBar = () => {
  const navigate = useNavigate();
  const [isActive, setisActive] = useState("dashboard");
  const [toggleDrawer, settoggleDrawer] = useState(false);
  const { connect, address } = useStateContext();

  return (
    <div className="flex md:flex-row flex-col-reverse justify-between mb-[35px] gap-6 ">
      <div className="lg:flex-1 flex flex-row max-w-[458px] py-2 pl-4 pr-2 h-[52px] bg-[#ffffff] rounded-[100px] ">
        <input
          type="text"
          placeholder="Search for Campaign"
          className="flex w-full font-epilogue font-normal text-[14px] placeholder:text-[#4b5264] text-black bg-transparent outline-none "
        />
        <div className="w-[72px] h-full rounded-[20px] bg-[#498fa7] flex justify-center items-center cursor-pointer ">
          <img
            src={search}
            alt="search"
            className=" w-[15px] h-[15px] object-contain "
          />
        </div>
      </div>
      <div className="sm:flex hidden flex-row justify-end gap-4">
        <Custombuttom
          btntype="button"
          title={address ? "create a campaign" : "connect"}
          styles={address ? "bg-[#1ac073]" : "bg-[#1c6rfd]"}
          handleClick={() => {
            if (address) navigate("CreateCampaign");
            else connect();
          }}
        />
        <Link to="/profile">
          <div className="w-[52px] h-[52px] rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer ">
            <img
              src={thirdweb}
              alt="user"
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        </Link>
      </div>

      {/* smallscreen*/}
      <div className="sm:hidden flex flex-row justify-between items-center relative">
        <div className="w-[40px] h-[40px] rounded-[10px] bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img
            src={logo}
            alt="user"
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
        <img
          src={menu}
          alt="menu"
          className="w-[34px] h-[34px] object-contain cursor-pointer"
          onClick={() => settoggleDrawer(!toggleDrawer)}
        />
        <div
          className={`absolute top-[60px] right-0 left-0 bg-[#1c1c24] z-10 shadow-secondary py-4 ${
            !toggleDrawer ? "-translate-y-[100vh]" : "translate-y-0"
          } transition-all duration-700`}
        >
          <ul className="mb-4">
            {navlinks.map((link) => (
              <li
                key={link.name}
                className={`flex flex-row p-4 ${
                  isActive === link.name && "bg-[#3a3a43]"
                }`}
                onClick={() => {
                  setisActive(link.name);
                  settoggleDrawer(false);
                  navigate(link.link);
                }}
              >
                <img
                  src={link.imgUrl}
                  alt={link.name}
                  className={`w-[24px] h-[24px] object-contain ${
                    isActive === link.name ? "grayscale-0" : "grayscale"
                  }`}
                />
                <p
                  className={`ml-[20px] font-epilogue font-semibold text-[14px] ${
                    isActive === link.name ? "text-[#1dc071]" : "text-[#808191]"
                  } `}
                >
                  {link.name}
                </p>
              </li>
            ))}
          </ul>
          <div className="flex mx-4">
            <Custombuttom
              btntype="button"
              title={address ? "create a campaign" : "connect"}
              handleClick={() => {
                if (address) navigate("create-campaign");
                else connect();
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
