import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CartFooter() {
  const cart = useSelector((state) => state.user.cart);
  const numOfPizzas = cart.reduce((curr, acc) => {
    return curr + acc.quantity;
  }, 0);
  const totalPrice = cart.reduce((curr, acc) => {
    return curr + acc.unitPrice * acc.quantity;
  }, 0);
  return (
    <div className="flex justify-between text-lg bg-stone-800 text-stone-300 py-4 px-4 lg:px-10 sticky w-full top-0 left-0">
      <div className=" ">
        {numOfPizzas} pizzas{" "}
        <span className="ml-6 font-thin"> €{totalPrice}</span>
      </div>
      <Link className=" capitalize hover:underline" to={`/cart`}>
        open cart &rarr;
      </Link>
    </div>
  );
}

export default CartFooter;
