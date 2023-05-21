import React from "react";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="mx-5 py-1">
      <hr className=" !border-slate-300"></hr>
      <h4 className="">Order</h4>
      <div className="text-sm mb-3 text-gray-500">You have {0} orders</div>
      <div className="w-11/12 mx-auto mb-3 bg-white text-sm rounded-xl drop-shadow-lg">
        <div className="grid grid-cols-8 place-items-center py-3 px-2 ">
          <div className="grid place-items-center">
            <img
              className="h-24 w-24"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            ></img>
          </div>
          <div className="grid grid-rows-3 items-center ml-3 gap-2 cursor-pointer">
            <div>zzzzzzzzzzzzzzzzzzzzzz</div>
            <div>zzzzzzzzzz</div>
            <div>x6</div>
          </div>

          <div className="col-start-6 col-span-2 text-[#ee4d2d]">$555</div>
          <Link
            className="text-base text-gray-700 grid place-items-end"
            to="{LOGIN_PAGE}"
            replace={true}
          >
            Detail
          </Link>
          <hr className=" !border-slate-400 mx-auto my-3 w-11/12 col-span-8"></hr>
          <div className="text-[#ee4d2d] text-base">COMPLETED</div>
          <div className="col-start-6 col-span-2">
            <div className="mb-2">
              Total price: <span className="text-[#ee4d2d] text-lg">$555</span>
            </div>
            <button className="bg-[#ee4d2d] my-2 p-2 text-sm font-medium text-white rounded-lg items-right w-48 h-12 hover:bg-[#ff3700] hover:drop-shadow-xl transition-all">
              Buy again
            </button>
          </div>
        </div>
      </div>

      <div className="w-11/12 mx-auto mb-3 bg-white text-sm rounded-xl drop-shadow-lg">
        <div className="grid grid-cols-8 place-items-center py-3 px-2 ">
          <div className="grid place-items-center">
            <img
              className="h-24 w-24"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
              alt=""
            ></img>
          </div>
          <div className="grid grid-rows-3 items-center ml-3 gap-2 cursor-pointer">
            <div>zzzzzzzzzzzzzzzzzzzzzz</div>
            <div>zzzzzzzzzz</div>
            <div>x6</div>
          </div>

          <div className="col-start-6 col-span-2 text-[#ee4d2d]">$555</div>
          <Link
            className="text-base text-gray-700 grid place-items-end"
            to="{LOGIN_PAGE}"
            replace={true}
          >
            Detail
          </Link>
          <hr className=" !border-slate-400 mx-auto my-3 w-11/12 col-span-8"></hr>
          <div className="text-[#ee4d2d] text-base">COMPLETED</div>
          <div className="col-start-6 col-span-2">
            <div className="mb-2">
              Total price: <span className="text-[#ee4d2d] text-lg">$555</span>
            </div>
            <button className="bg-[#ee4d2d] my-2 p-2 text-sm font-medium text-white rounded-lg items-right w-48 h-12 hover:bg-[#ff3700] hover:drop-shadow-xl transition-all">
              Buy again
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
