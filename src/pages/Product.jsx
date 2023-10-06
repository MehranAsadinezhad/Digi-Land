import React from "react";
import { separate } from "../utils/helpers";
import { useLoaderData, useParams } from "react-router-dom";
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
import { useDispatch, useSelector } from "react-redux";
import UpdateItemQuantity from "../ui/UpdateItemQuantity";
import { addItem } from "../features/cart/cartSlice";
import toast from "react-hot-toast";
import { getAllProducts } from "../services/apiAllProducst";

export default function Product() {
  const allProducts = useLoaderData();
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = allProducts.filter(
    (product) => product.id === Number(productId),
  );
  const theProduct = product[0];
  const { price } = theProduct;
  const cart = useSelector((state) => state.cart.cart);
  const currentQuantity =
    cart.find((item) => item.id === theProduct.id)?.quantity ?? 0;
  const isInCart = currentQuantity > 0;

  return (
    <div className="my-5 px-3">
      <h1 className="text-start font-shabnamBold text-xl text-dark sm:my-10 sm:text-3xl">
        {theProduct?.name}
      </h1>
      <div className="flex flex-col items-center lg:grid lg:grid-cols-3 lg:place-items-center">
        <img
          className="my-5 w-[250px] lg:w-[300px]"
          src={theProduct?.image}
          alt={theProduct?.id}
        ></img>
        <div className="flex flex-col gap-5">
          <p className="border-b-2 border-dashed border-primary py-2 font-shabnamBold text-lg tracking-wide text-grey sm:text-2xl">
            ویژگی های اصلی
          </p>
          <ul className="flex flex-col gap-2 text-grey">
            {theProduct?.cpu && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <BsCpu />
                <span>پردازنده / {theProduct.cpu}</span>
              </li>
            )}
            {theProduct?.screen && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <BsFullscreenExit />
                <span>صفحه نمایش / {theProduct?.screen} اینچ</span>
              </li>
            )}
            {theProduct?.speaker && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <BsSpeaker />
                <span>{theProduct?.speaker}</span>
              </li>
            )}
            {theProduct?.ram && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <BsDiagram3 />
                <span>رم / {theProduct?.ram} گیگابایت رم</span>
              </li>
            )}
            {theProduct?.mainCamera && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <FaCamera />
                <span>دوربین اصلی / {theProduct?.mainCamera} مگا پیکسل</span>
              </li>
            )}
            {theProduct?.selfieCamera && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <FaCamera />
                <span>دوربین سلفی / {theProduct?.selfieCamera} مگا پیکسل</span>
              </li>
            )}
            {theProduct?.battery && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <FaBatteryFull />
                <span>باتری / {theProduct?.battery} میلی آمپر ساعت</span>
              </li>
            )}
            {theProduct?.resistance && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <BsFullscreenExit />
                <span>مقاومت / {theProduct?.resistance}</span>
              </li>
            )}
            {theProduct?.storage && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <MdSdStorage />
                <span>حافظه ی داخلی / {theProduct?.storage} گیگابایت</span>
              </li>
            )}
            {theProduct?.weight && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <FaWeightHanging />
                <span>وزن / {theProduct?.weight}</span>
              </li>
            )}
            {theProduct?.call && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <BsFillTelephoneForwardFill />
                <span>قابلیت تماس / {theProduct?.call ? "دارد" : "ندارد"}</span>
              </li>
            )}
            {theProduct?.bluetooth && (
              <li className="flex items-center gap-x-3 border-b-2 border-lightGrey pb-2 text-sm sm:text-lg">
                <FaBluetooth />
                <span>بلوتوث / {theProduct?.bluetooth} ورژن</span>
              </li>
            )}
          </ul>
        </div>
        <div className="my-5 flex flex-col items-center">
          <h1 className="mb-5 flex items-center gap-x-3 border-b-2 border-dashed border-grey py-2 text-2xl text-grey sm:text-3xl">
            <MdTimer className="text-4xl text-primary sm:text-6xl" /> ارسال سریع
          </h1>
          <span></span>
          <h1 className="my-3 flex items-center gap-x-3 text-xl text-grey">
            <FaStore className="text-xl text-dark" /> فروشنده: مهران اسدی نژاد
          </h1>
          <h1 className="my-3 flex items-center gap-x-3 text-xl text-grey">
            <MdLocalFireDepartment className="text-2xl text-orange-500" /> 18
            ماه گارانتی شرکتی
          </h1>
          <h1 className="mb-5 mt-3 flex items-center gap-x-3 text-xl text-grey">
            <MdPriceChange className="text-2xl text-green-500" /> قیمت:{" "}
            {separate(theProduct.price)}
          </h1>
          {!isInCart ? (
            <button
              onClick={() => {
                const newItem = {
                  ...theProduct,
                  quantity: 1,
                  totalPrice: price * 1,
                };
                dispatch(addItem(newItem));
                toast.success("محصول به سبد خرید اضافه شد");
              }}
              className="rounded-xl bg-primary px-3 py-2 text-lg text-medium transition-all duration-200 hover:bg-indigo-600"
            >
              افزودن به سبد خرید
            </button>
          ) : (
            <button
              disabled
              className="rounded-xl bg-gray-400 px-3 py-2 text-lg text-medium transition-all duration-200 "
            >
              در سبد خرید وجود دارد
            </button>
          )}
        </div>
      </div>
      <div className="sm:my-10">
        <h1 className="border-b-2 border-primary pb-3 font-shabnamBold text-xl text-primary sm:text-2xl">
          بررسی فنی
        </h1>
        <p className="my-3 text-grey sm:text-lg">{theProduct.description}</p>
      </div>
    </div>
  );
}

export async function loader() {
  const allProducts = await getAllProducts();
  return allProducts;
}
