import React from "react";
import { separate } from "../utils/helpers";
import { useParams } from "react-router-dom";
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
} from "react-icons/bs";
import {
  MdSdStorage,
  MdTimer,
  MdLocalFireDepartment,
  MdPriceChange,
} from "react-icons/md";
import CartButton from "../ui/CartButton";
import { getMobiles } from "../services/apiMobiles";
import { getTablets } from "../services/apiTablets";
import { getHandsfree } from "../services/apiHandsfree";
import { getSpeakers } from "../services/apiSpeakers";
import { getSmartWatches } from "../services/apiSmartWatches";
import { useDispatch, useSelector } from "react-redux";
import UpdateItemQuantity from "../ui/UpdateItemQuantity";
import { addItem } from "../features/cart/cartSlice";
import toast from "react-hot-toast";

const mobiles = await getMobiles();
const tablets = await getTablets();
const handsfrees = await getHandsfree();
const speakers = await getSpeakers();
const smartWatches = await getSmartWatches();

export default function Product() {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const products = [mobiles, tablets, handsfrees, speakers, smartWatches];
  const product = products.map((all) =>
    all.filter((product) => product.id === Number(productId)),
  );
  const theProduct = product.filter((product) => product.length > 0)[0][0];
  const { price } = theProduct;
  const cart = useSelector((state) => state.cart.cart);
  const currentQuantity =
    cart.find((item) => item.id === theProduct.id)?.quantity ?? 0;
  const isInCart = currentQuantity > 0;

  return (
    <div className="my-5 px-3">
      <h1 className="font-shabnamBold text-xl text-center text-dark sm:my-10 sm:text-3xl">
        {theProduct?.name}
      </h1>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:place-items-center">
        <img
          className="my-5 w-[300px]"
          src={theProduct?.image}
          alt={theProduct?.id}
        ></img>
        <div className="flex flex-col gap-4">
          <p className="border-b-2 border-dashed border-primary py-2 font-shabnamBold text-xl text-grey">
            ویژگی های اصلی
          </p>
          <ul className="flex flex-col gap-2 text-lg text-grey">
            {theProduct?.cpu && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <BsCpu />
                <span>پردازنده / {theProduct.cpu}</span>
              </li>
            )}
            {theProduct?.screen && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <BsFullscreenExit />
                <span>صفحه نمایش / {theProduct?.screen} اینچ</span>
              </li>
            )}
            {theProduct?.speaker && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <BsSpeaker />
                <span>{theProduct?.speaker}</span>
              </li>
            )}
            {theProduct?.ram && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2"></li>
            )}
            {theProduct?.mainCamera && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <BsDiagram3 />
                <span>رم / {theProduct?.ram} گیگابایت رم</span>
              </li>
            )}
            {theProduct?.selfieCamera && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <FaCamera />
                <span>دوربین اصلی / {theProduct?.mainCamera} مگا پیکسل</span>
              </li>
            )}
            {theProduct?.battery && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <FaBatteryFull />
                <span>باتری / {theProduct?.battery} میلی آمپر ساعت</span>
              </li>
            )}
            {theProduct?.resistance && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <BsFullscreenExit />
                <span>مقاومت / {theProduct?.resistance}</span>
              </li>
            )}
            {theProduct?.storage && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <MdSdStorage />
                <span>حافظه ی داخلی / {theProduct?.storage} گیگابایت</span>
              </li>
            )}
            {theProduct?.weight && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <FaWeightHanging />
                <span>وزن / {theProduct?.weight}</span>
              </li>
            )}
            {theProduct?.call && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <BsFillTelephoneForwardFill />
                <span>قابلیت تماس / {theProduct?.call ? "دارد" : "ندارد"}</span>
              </li>
            )}
            {theProduct?.bluetooth && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2">
                <FaBluetooth />
                <span>بلوتوث / {theProduct?.bluetooth} ورژن</span>
              </li>
            )}
          </ul>
        </div>
        <div className="my-5 hidden lg:flex lg:flex-col items-center sm:my-0">
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
          {!isInCart ? (
            <CartButton
              onClick={() => {
                const newItem = {
                  ...theProduct,
                  quantity: 1,
                  totalPrice: price * 1,
                };
                dispatch(addItem(newItem));
                toast.success("محصول به سبد خرید اضافه شد");
              }}
              className="rounded-xl bg-primary px-3 py-1.5 text-medium transition-all duration-200 hover:bg-sky-600"
            >
              افزودن به سبد خرید
            </CartButton>
          ) : (
            <UpdateItemQuantity data={theProduct} />
          )}
        </div>
      </div>
      <div className="sm:my-10">
        <h1 className="border-b-2 border-primary pb-3 font-shabnamBold text-2xl text-primary">
          بررسی فنی
        </h1>
        <p className="my-3 text-lg text-grey">{theProduct.description}</p>
      </div>
    </div>
  );
}
