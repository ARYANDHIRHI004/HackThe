import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircleArrowLeft, CircleArrowRight } from "lucide-react";
import useAuthStore from "../stores/useAuthStore";

const SideBar = () => {
 const {openMenu} = useAuthStore()

  return (
    <div
      className={` ${
        openMenu ? "w-0" : "w-[4.5vw]"
      } h-screen flex flex-col justify-between px-4 py-8 transition-width duration-500 border-r border-border relative `}
    >
      <div>
        <h1 className="text-2xl font-semibold  mb-8">
          
        </h1>
        {open && (
          <div className="flex flex-col gap-5">
            <Link to={"/"}>
              <p className="text-[14px]">Dashboard</p>
            </Link>
            <Link to={"/my-bus"}>
              <p className="text-[14px]">My Bus</p>
            </Link>
            
          </div>
        )}
      </div>
     
    </div>
  );
};

export default SideBar;
