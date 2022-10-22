import React from "react";
import { AiFillHeart } from "react-icons/ai";

const TableList = (props) => {
  // const checkColor = (props.data.changeIn24) => {
  //   if()
  // }
  return (
    <div className=" bg-white border py-3 grid grid-cols-12 items-center font-semibold">
      <div className="col-span-1 pl-7">
        <AiFillHeart />
      </div>
      <div className="col-span-1">{props.data.rank}</div>
      <div className="col-span-4">
        <div className="flex items-center gap-5">
          <img
            src={props.data.image}
            alt=""
            className="w-14 h-14 rounded-full"
          />
          <div className="flex-col">
            <div className="text-xl">{props.data.name}</div>
            <div className="text-md">{props.data.code}</div>
          </div>
        </div>
      </div>
      <div className="col-span-2">{props.data.price}</div>
      <div className="col-span-2">{props.data.market_cap}</div>
      <div
        className={`col-span-2 ${
          parseFloat(props.data.changeIn24) > 0
            ? "text-green-500"
            : "text-red-700"
        }`}
      >
        {props.data.changeIn24}
      </div>
    </div>
  );
};

export default TableList;
