import React from "react";
import CartList from "../features/cart/CartList";
import CartBox from "../features/cart/CartBox";
import Footer from "../features/footer/Footer";
import { useSelector } from "react-redux";
import { getCard } from "../features/cart/cartSlice";

export default function Cart() {
  const userCart = useSelector(getCard);
  return (
    <>
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
      <Footer />
    </>
  );
}
