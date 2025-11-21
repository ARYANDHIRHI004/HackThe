import React, { useState } from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import useAuthStore from "../stores/useAuthStore";
import { Input } from "./ui/input";
import { Menu, Search, Sparkles } from "lucide-react";
import { ModeToggle } from "./ThemeToggler";

const Navbar = () => {
  const { authUser, loginUser, logoutUser, openMenu, openMenuFun } =
    useAuthStore();
  // const [open, setOpen] = useState(false)

  return (
    <nav className="w-full z-1000 fixed p-5  backdrop-blur-2xl">
      <div>
        {!authUser ? (
          <div className="flex justify-between ">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Celestia</span>
            </div>
            <ul className="flex gap-10 text-xl font-semibold">
              <Link to={"/"}>
                <li>Home</li>
              </Link>
              <li>About</li>
              <li>Contact Us</li>
            </ul>
            <div className="flex gap-5 items-center">
              <Link
                to={"/login"}
                className="px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition"
                size={"lg"}
              >
                Login
              </Link>

              <Link
              to={"/signup"}
                className="px-5 py-2 rounded-full bg-white/10 backdrop-blur border border-white/20 text-white hover:bg-white/20 transition"
                size={"lg"}
                variant={"secondary"}
              >
                SIgn Up
              </Link>

              <ModeToggle />
            </div>
          </div>
        ) : (
          <div className="flex justify-between items-center ">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-blue-500 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Celestia</span>
            </div>
            <div className="flex gap-2 items-center">
              <ul className="flex gap-10 text-[15px] font-semibold">
                <Link className="hover:bg-[#3434342b] p-4 rounded-4xl transition-all hover:scale-106 shadow-blue-400 hover:shadow-xl" to={"/"}>
                  <li>Dashboard</li>
                </Link>
                <Link className="hover:bg-[#3434342b] p-4 rounded-4xl transition-all hover:scale-106 shadow-blue-400 hover:shadow-xl" to={"/sky-forcast"}>
                  <li>Sky Forecast</li>
                </Link>
                <Link className="hover:bg-[#3434342b] p-4 rounded-4xl transition-all hover:scale-106 shadow-blue-400 hover:shadow-xl" to={"/astronomy-events"}>
                  <li>Astronomy Events</li>
                </Link>
                <Link className="hover:bg-[#3434342b] p-4 rounded-4xl transition-all hover:scale-106 shadow-blue-400 hover:shadow-xl" to={"/community"}>
                  <li>Community</li>
                </Link>
                <Link className="hover:bg-[#3434342b] p-4 rounded-4xl transition-all hover:scale-106 shadow-blue-400 hover:shadow-xl" to={"/satellite-tracker"}>
                  <li>Satellite Tracker</li>
                </Link>
                <Link className="hover:bg-[#3434342b] p-4 rounded-4xl transition-all hover:scale-106 shadow-blue-400 hover:shadow-xl" to={"/light-pollution"}>
                  <li>Light Pollution</li>
                </Link>
              </ul>
            </div>
            <div className="flex gap-5 items-center">
              <Button className="cursor-pointer" size={"lg"}>
                Profile
              </Button>
              <Button
                className="cursor-pointer"
                size={"lg"}
                onClick={logoutUser}
              >
                Logout
              </Button>

              <ModeToggle />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
