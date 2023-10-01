import { NavLink, useOutletContext } from "react-router-dom";
import CardButton from "../ui/CartButton";
import { separate } from "../utils/helpers";
import toast from "react-hot-toast";
import UpdateItemQuantity from "./UpdateItemQuantity";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

export default function Card({ data }) {
  const dispatch = useDispatch();
  const { price } = data;
  const cart = useSelector((state) => state.cart.cart);
  const currentQuantity =
    cart.find((item) => item.id === data.id)?.quantity ?? 0;
  const isInCart = currentQuantity > 0;
  return (
    <div className="my-12 flex h-[340px] w-[200px] flex-col items-center justify-around gap-y-3 rounded-xl bg-medium px-3 text-center shadow-2xl transition-all duration-200 hover:bg-lightGrey">
      <NavLink to={`/product/${data.id}`}>
        <div className="relative bottom-4 flex h-[190px] w-[190px] items-center rounded-full bg-medium shadow-lg">
          <img src={data.image} alt={data.id} className="m-auto w-40"></img>
        </div>
      </NavLink>
      <NavLink to={`/product/${data.id}`} className="text-grey">
        {data.name}
      </NavLink>
      {!isInCart ? (
        <CardButton
          onClick={() => {
            const newItem = { ...data, quantity: 1, totalPrice: price * 1 };
            dispatch(addItem(newItem));
            toast.success("محصول به سبد خرید اضافه شد");
          }}
          className="rounded-xl bg-primary px-3 py-1.5 text-medium transition-all duration-200 hover:bg-sky-600"
        >
          افزودن به سبد خرید
        </CardButton>
      ) : (
        <UpdateItemQuantity data={data} />
      )}
      <h1 className="mb-5 text-grey">{separate(data.price)} تومان</h1>
    </div>
  );
}
