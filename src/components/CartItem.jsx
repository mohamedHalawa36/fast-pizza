import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import QuantityControl from "./QuantityControl";
import { deleteFromCart } from "../slices/userSlice";
function CartItem({ itemId }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.user.cart);
  const { name, quantity, unitPrice } = cart.find((item) => item.pizzaId === itemId);
  const totalItemPrice = quantity * unitPrice;

  return (
    <div className="flex justify-between items-center py-5">
      <span>
        {quantity}× {name}
      </span>
      <div className="flex gap-5 items-center">
        <span>€{totalItemPrice}</span>
        <QuantityControl itemId={itemId} />
        <Button type={`primary`}
          onClick={() => dispatch(deleteFromCart(itemId))}
          classes={`text-xs p-2 px-3`}
        >
          delete
        </Button>
      </div>
    </div>
  );
}

export default CartItem;
