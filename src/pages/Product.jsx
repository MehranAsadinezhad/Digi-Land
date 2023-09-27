import { useQuery } from "@tanstack/react-query";
import React from "react";
import { separate } from "../utils/helpers";
import { useParams } from "react-router-dom";
import { getSpeakers } from "../services/apiSpeakers";
import { getMobiles } from "../services/apiMobiles";
import { getTablets } from "../services/apiTablets";
import { getHandsfree } from "../services/apiHandsfree";
import { getSmartWatches } from "../services/apiSmartWatches";
import {
  FaCamera,
  FaBatteryFull,
  FaWeightHanging,
  FaBluetooth,
  FaStore,
} from "react-icons/fa6";
import {
  BsCpu,
  BsFullscreenExit,
  BsSpeaker,
  BsDiagram3,
  BsFillTelephoneForwardFill,
  BsSpeakerFill,
} from "react-icons/bs";
import {
  MdSdStorage,
  MdTimer,
  MdLocalFireDepartment,
  MdPriceChange,
} from "react-icons/md";
import CartButton from "../ui/CartButton";

export default function Product() {
  const { productId } = useParams();
  const { data: speakers } = useQuery({
    queryKey: ["speakers"],
    queryFn: getSpeakers,
  });
  const { data: mobiles } = useQuery({
    queryKey: ["mobiles"],
    queryFn: getMobiles,
  });
  const { data: tablets } = useQuery({
    queryKey: ["tablets"],
    queryFn: getTablets,
  });
  const { data: handsfrees } = useQuery({
    queryKey: ["handsfrees"],
    queryFn: getHandsfree,
  });
  const { data: smartWatches } = useQuery({
    queryKey: ["smartWatches"],
    queryFn: getSmartWatches,
  });
  const products = [mobiles, tablets, handsfrees, speakers, smartWatches];
  const product = products.map((all) =>
    all.filter((product) => product.id === Number(productId)),
  );
  const theProduct = product.filter((product) => product.length > 0)[0][0];

  return (
    <div className="my-5 px-3">
      <h1 className="my-10 font-shabnamBold text-3xl text-dark">
        {theProduct?.name}
      </h1>
      <div className="grid grid-cols-3 place-items-center">
        <img
          className="w-[300px]"
          src={theProduct?.image}
          alt={theProduct?.id}
        ></img>
        <div className="flex flex-col gap-4">
          <p className="border-b-2 border-dashed border-primary py-2 font-shabnamBold text-xl text-grey">
            ویژگی های اصلی
          </p>
          <ul className="flex flex-col gap-2 text-lg text-grey">
            {theProduct?.cpu && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <BsCpu />
                <span>پردازنده / {theProduct.cpu}</span>
              </li>
            )}
            {theProduct?.screen && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <BsFullscreenExit />
                <span>صفحه نمایش / {theProduct?.screen} اینچ</span>
              </li>
            )}
            {theProduct?.speaker && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <BsSpeaker />
                <span>{theProduct?.speaker}</span>
              </li>
            )}
            {theProduct?.ram && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey"></li>
            )}
            {theProduct?.mainCamera && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <BsDiagram3 />
                <span>رم / {theProduct?.ram} گیگابایت رم</span>
              </li>
            )}
            {theProduct?.selfieCamera && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <FaCamera />
                <span>دوربین اصلی / {theProduct?.mainCamera} مگا پیکسل</span>
              </li>
            )}
            {theProduct?.battery && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <FaBatteryFull />
                <span>باتری / {theProduct?.battery} میلی آمپر ساعت</span>
              </li>
            )}
            {theProduct?.resistance && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <BsFullscreenExit />
                <span>مقاومت / {theProduct?.resistance}</span>
              </li>
            )}
            {theProduct?.storage && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <MdSdStorage />
                <span>حافظه ی داخلی / {theProduct?.storage} گیگابایت</span>
              </li>
            )}
            {theProduct?.weight && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <FaWeightHanging />
                <span>وزن / {theProduct?.weight}</span>
              </li>
            )}
            {theProduct?.call && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <BsFillTelephoneForwardFill />
                <span>قابلیت تماس / {theProduct?.call ? "دارد" : "ندارد"}</span>
              </li>
            )}
            {theProduct?.bluetooth && (
              <li className="flex items-center pb-2 gap-x-3 border-b-2 border-lightGrey">
                <FaBluetooth />
                <span>بلوتوث / {theProduct?.bluetooth} ورژن</span>
              </li>
            )}
          </ul>
        </div>
        <div className="flex flex-col">
          <h1 className="mb-5 flex items-center gap-x-3 border-b-2 border-dashed border-grey py-2 text-3xl text-grey">
            <MdTimer className="text-6xl text-primary" /> ارسال سریع
          </h1>
          <span></span>
          <h1 className="my-3 flex items-center gap-x-3 text-lg text-grey">
            <FaStore className="text-xl text-dark" /> فروشنده: مهران اسدی نژاد
          </h1>
          <h1 className="my-3 flex items-center gap-x-3 text-lg text-grey">
            <MdLocalFireDepartment className="text-2xl text-orange-500" /> 18
            ماه گارانتی شرکتی
          </h1>
          <h1 className="mb-5 mt-3 flex items-center gap-x-3 text-lg text-grey">
            <MdPriceChange className="text-2xl text-green-500" /> قیمت:{" "}
            {separate(theProduct.price)}
          </h1>
          <CartButton />
        </div>
      </div>
      <div className="my-10">
        <h1 className="border-b-2 border-primary pb-3 font-shabnamBold text-2xl text-primary">
          بررسی فنی
        </h1>
        <p className="my-3 text-lg text-grey">{theProduct.description}</p>
      </div>
    </div>
  );
}
