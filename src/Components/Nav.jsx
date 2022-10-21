import React from "react";
import { IoMdNotifications } from "react-icons/io";
import { AiFillHeart } from "react-icons/ai";
function Nav() {
  return (
    <div className="w-screen text-xl flex-col space-y-4">
      <hr />
      {/* main nav starts here */}
      <div className="flex justify-between items-center mx-32">
        <div className="text-green-400 font-bold text-2xl cursor-pointer">
          Crypto Notifier
        </div>
        <div className="flex gap-8 items-center">
          <div className="flex gap-3">
            <div>
              <div className="bg-green-500 w-12 h-12 rounded-md flex items-center justify-center relative text-white cursor-pointer">
                <IoMdNotifications />
                <div className="absolute -top-2 -right-2 w-5 h-5 bg-red-600 flex items-center justify-center rounded-full text-sm text-white">
                  21
                </div>
              </div>
            </div>
            <div className="group border flex items-center justify-center rounded-md border-green-500 hover:border-none hover:bg-green-500  px-3 py-2 cursor-pointer">
              <div className="flex items-center gap-2">
                <div className={``}>
                  <AiFillHeart />
                </div>
                <div className="text-green-400 group-hover:text-white">
                  Watch List
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-2 cursor-pointer">
            <span className="font-bold">AK</span>
            <span className="">|</span>
            <span className="">Logout</span>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Nav;
