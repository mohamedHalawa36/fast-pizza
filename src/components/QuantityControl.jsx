import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import { decQuantity, incQuantity } from "../slices/userSlice";
function QuantityControl({ itemId }) {
  const pizza = useSelector((state) => state.user.cart).find(
    (element) => element.pizzaId === itemId,
  );
  
  const dispatch = useDispatch();
  function increaseQuantityHandler() {
    dispatch(incQuantity(itemId));
  }
  function decreaseQuantityHandler() {
    dispatch(decQuantity(itemId));
  }
  return (
    <div>
      {pizza.quantity > 1 && (
        <Button type={`primary`} onClick={decreaseQuantityHandler} classes={`px-3 py-1`}>
          -
        </Button>
      )}
      <span className=" mx-2">{pizza.quantity}</span>
      <Button type={`primary`} onClick={increaseQuantityHandler} classes={`px-3 py-1`}>
        +
      </Button>
    </div>
  );
}

export default QuantityControl;
