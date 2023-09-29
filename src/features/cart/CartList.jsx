import React from "react";
import { FaXmark } from "react-icons/fa6";
import { separate } from "../../utils/helpers";
import {
  BsFillXDiamondFill,
  BsFire,
  BsFillBookmarkCheckFill,
} from "react-icons/bs";
import UpdateItemQuantity from "../../ui/UpdateItemQuantity";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

export default function CartList({ data, newQuantity, setNewQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex w-9/12 items-center justify-between border-b-2">
      <div className="flex items-center gap-x-10 py-2">
        <button
          onClick={() =>
            dispatch(deleteItem(data.id))
          }
        >
          <FaXmark className="text-2xl text-red-600 transition-all duration-200 hover:scale-125 hover:text-red-500" />
        </button>
        <img className="w-32" src={data.image} alt={data.id}></img>
        <div className="flex flex-col gap-3 text-lg">
          <h1>{data.name}</h1>
          <h1>قیمت: {separate(data.price)}</h1>
          <UpdateItemQuantity data={data}/>
        </div>
      </div>
      <div className="mr-20 flex flex-col gap-2 text-lg">
        <h1 className="flex items-center gap-x-3">
          <BsFillXDiamondFill className="text-primary" />
          <span>ضمانت هفت روزه کالا</span>
        </h1>
        <h1 className="flex items-center gap-x-3">
          <BsFire className="text-orange-500" />
          <span>18 ماه گارانتی</span>
        </h1>
        <h1 className="flex items-center gap-x-3">
          <BsFillBookmarkCheckFill className="text-green-500" />
          <span>ارسال سریع</span>
        </h1>

      </div>
    </div>
  );
}
