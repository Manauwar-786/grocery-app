import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { LuUserRound } from "react-icons/lu";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const menuBtnHandler = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className=" space-x-6 md:block hidden">
        <div className="flex justify-between items-center pt-8">
          <img
            className="h-30 "
            src="/Images/supermarketlogo.png"
            alt="logo"
          ></img>
          {/* <h1 className='text-4xl font-medium px-10'>Logo</h1>  */}
          <div className="relative w-fill max-w[500px]">
            <input
              className="bg-[#f2f3f5] border-none outline-none px-6 py-3 mr-5 rounded-[30px] w-full"
              type="text"
              placeholder="search product..."
            />
            <IoIosSearch
              className="absolute top-0 right-0 mt-4 mr-5 text-gray-500"
              size={20}
            />
          </div>
          <div className="flex justify-between rounded">
            <div className="flex gap-8">
              <Link
                className="underline  hover:bg-emerald-200 rounded-full px-3 font-semibold"
                to="/"
              >
                Home
              </Link>
              <Link
                className="underline  hover:bg-emerald-200 rounded-full px-3 font-semibold"
                to="/about"
              >
                About
              </Link>
              <Link
                className="underline  hover:bg-emerald-200 rounded-full px-3 font-semibold"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="underline  hover:bg-emerald-200 rounded-full px-3 font-semibold"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="underline mr-10  hover:bg-emerald-200 rounded-full px-3 font-semibold"
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
          <div className="flex gap-4 mr-5">
            <div className="icon_wrapper">
              <LuUserRound />
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-3 pr-5 pl-8 md:hidden block">
        {/* <HiOutlineShoppingCart /> */}
        <button className="" onClick={menuBtnHandler}>
          <GiHamburgerMenu />
          {setShowMenu ? (
            <div className="md:hidden flex flex-col items-start pl-8 ">
              <Link
                className="py-2 underline  hover:bg-emerald-200 rounded-full font-semibold"
                to="/"
              >
                Home
              </Link>
              <Link
                className="py-2 underline  hover:bg-emerald-200 rounded-full font-semibold"
                to="/about"
              >
                About
              </Link>
              <Link
                className="py-2 underline  hover:bg-emerald-200 rounded-full font-semibold"
                to="/blog"
              >
                Blog
              </Link>
              <Link
                className="py-2 underline  hover:bg-emerald-200 rounded-full font-semibold"
                to="/contact"
              >
                Contact
              </Link>
              <Link
                className="py-2 underline  hover:bg-emerald-200 rounded-full font-semibold"
                to="/login"
              >
                Login
              </Link>
            </div>
          ) : (
            "hidden"
          )}
        </button>
      </div>
    </>
  );
};

export default Navbar;
