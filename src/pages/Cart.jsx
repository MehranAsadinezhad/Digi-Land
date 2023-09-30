import React from "react";
import CartList from "../features/cart/CartList";
import CartBox from "../features/cart/CartBox";
import Footer from "../features/footer/Footer";
import { useSelector } from "react-redux";
import { getCard } from "../features/cart/cartSlice";
import cartImg from "../assets/images/cart.png";
import { Link } from "react-router-dom";

export default function Cart() {
  const userCart = useSelector(getCard);
  return (
    <>
      {userCart.length ? (
        <div className="my-5 flex w-full justify-between px-3">
          <div className="my-5 flex w-11/12 flex-col">
            {userCart.map((mobile) => (
              <CartList key={Math.random()} data={mobile} />
            ))}
          </div>
          <div className="fixed left-8 flex flex-col items-center gap-5 rounded-lg border-2 bg-lightGrey px-4 py-5 shadow-xl">
            <CartBox />
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-8 p-10">
          <img src={cartImg} className="w-72" alt="cart"></img>
          <h1 className="text-lg text-grey">سبد شما خالی است !</h1>
          <Link
            to="/"
            className="z-20 rounded-xl bg-primary px-4 py-3 text-medium transition-all duration-200 hover:bg-indigo-600"
          >
            برگشت به صفحه ی اصلی
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
}
