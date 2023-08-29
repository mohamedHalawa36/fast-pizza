import { Outlet, useNavigation } from "react-router-dom";
import CartFooter from "../components/CartFooter";
import Nav from "../components/Nav";
import { useSelector } from "react-redux";
import Loader from "../components/Loader";

function Applayout() {
  const cart = useSelector((state) => state.user.cart);
  const isLoading = useNavigation().state === "loading";
  return (
    <div className="flex flex-col h-screen bg-stone-100">
      {isLoading && <Loader />}
      <Nav />

      <Outlet />
      {cart.length > 0 && <CartFooter />}
    </div>
  );
}

export default Applayout;
