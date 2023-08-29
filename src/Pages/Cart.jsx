import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import Button from "../components/Button";
import { clearCart } from "../slices/userSlice";

function Cart() {
  const { name, cart } = useSelector((state) => state.user);
const dispatch = useDispatch();
const clearCartHandler = ()=>dispatch(clearCart())
  if (cart.length > 0) {
    return (
      <div className=" p-4 lg:p-8 md:w-3/4 md:mx-auto flex-1">
        <Link className=" text-blue-700 hover:underline" to={`/menu`}>
          &larr; back to menu
        </Link>
        <h2 className=" mt-5 text-2xl tracking-wide font-semibold text-stone-700">
          Your cart, {name}
        </h2>
        <div className=" py-3 divide-y divide-stone-300">
          {cart.map((pizza) => (
            <CartItem itemId={pizza.pizzaId} key={pizza.pizzaId} />
          ))}
        </div>
        <div>
          <Button classes={`px-4 py-3 me-4`} type={`link`} to={`/order/new`} >order pizzas</Button>
          <Button onClick={clearCartHandler} classes={`px-4 py-3 me-4`}>clear cart</Button>
        </div>
      </div>
    );
  } else {
    return (
      <div className=" p-8 flex-1">
        <Link className=" text-blue-700 hover:underline" to={`/menu`}>
          &larr; back to menu
        </Link>
        <h1 className="font-semibold text-stone-700 text-xl tracking-wide mt-8">
          Your cart is empty. Start adding some pizzas :&#41;
        </h1>
        
      </div>
    );
  }
}

export default Cart;
