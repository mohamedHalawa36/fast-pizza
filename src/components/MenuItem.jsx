import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import QuantityControl from "./QuantityControl";
import { addToCart, deleteFromCart } from "../slices/userSlice";
function MenuItem({ item }) {
 
  const { id, name, imageUrl, ingredients, unitPrice, soldOut } = item;
  const dispatch = useDispatch();
  const inCart = useSelector((state) => state.user.cart).find(
    (pizza) => pizza.pizzaId === id,
  );
  function addToCartHandler() {
    if (inCart) dispatch(deleteFromCart(id));
    else {
      const pizza = {
        pizzaId:id,
        name,
        unitPrice,
        quantity: 1,
        ingredients,
      };
      dispatch(addToCart(pizza));
    }
  }

  return (
    <div className="flex p-4 lg:p-2 ">
      <img
        className={`w-[100px] h-[100px] ${
          soldOut && "grayscale"
        } z-0 relative `}
        src={imageUrl}
        alt={name}
      />
      <div
        id="pizza-controls"
        className="flex grow flex-col justify-between ml-4"
      >
        <div className="text-content">
          <h4 className=" font-bold text-stone-700 ">{name}</h4>
          <p className="italic text-stone-500">{ingredients.join(", ")}</p>
        </div>
        <div id="purchase" className="mt-3 flex justify-between">
          <span
            id="price"
            className={`capitalize font-semibold text-stone-600 }`}
          >
            {soldOut ? "sold out" : `€${unitPrice}`}
          </span>
          <div id="item-btns" className=" flex gap-5">
            {inCart && <QuantityControl itemId={id} />}

            {!soldOut && (
              <Button type={`primary`} onClick={addToCartHandler} classes={`p-2 px-3 text-xs lg:text-sm`}>
                {inCart ? "delete" : "add to cart"}
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuItem;
