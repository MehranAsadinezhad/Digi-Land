import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  getCard,
  increaseItem,
} from "../features/cart/cartSlice";

export default function UpdateItemQuantity({ data }) {
  const cart = useSelector(getCard);
  const dispatch = useDispatch();
  const product = cart.find((a) => a.id === data.id);
  return (
    <div className="flex items-center gap-x-2">
      <button
        className="hover:bg-indigo-600 h-7 w-7 rounded-full bg-primary text-sm font-bold text-medium transition-all duration-200 lg:text-lg"
        onClick={() => {
          dispatch(increaseItem(product.id));
          toast.success("محصول به سبد خرید اضافه شد");
        }}
      >
        +
      </button>
      <span className="hover:bg-lightRed h-7 w-7 rounded-full bg-grey text-center font-sans text-lg font-bold text-medium">
        {product.quantity}
      </span>
      <button
        className="hover:bg-indigo-600 h-7 w-7 rounded-full bg-primary text-sm font-bold text-medium transition-all duration-200 lg:text-lg"
        onClick={() => {
          if (product.quantity < 1) return;
          dispatch(decreaseItem(product.id));
          toast.error("محصول از سبد خرید حذف شد");
        }}
      >
        -
      </button>
    </div>
  );
}
