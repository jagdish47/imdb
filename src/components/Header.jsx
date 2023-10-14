import React from "react";
import MenuItem from "./MenuItem";
import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex justify-between mx-2 max-2-6xl sm:auto items-center">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome} />
        <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className="">
        <Link href="/">
          <h2 className="text-2xl">
            <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">
              IMDB
            </span>
            <span className="text-xl hidden sm:inline ">Clone</span>
          </h2>
        </Link>
      </div>
    </div>
  );
};

export default Header;