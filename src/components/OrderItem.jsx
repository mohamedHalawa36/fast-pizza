function OrderItem({ pizza }) {
  const { name, quantity, unitPrice, ingredients } = pizza;
  const totalItemPrice = quantity * unitPrice;

  return (
    <div className="text-sm flex justify-between items-center py-3">
      <div>
        <span className=" font-semibold">
          <span className=" font-bold text-base">{quantity}× </span>
          {name}
        </span>

        {ingredients && (
          <p className="italic text-stone-500 text-xs ">
            {ingredients.join(", ")}
          </p>
        )}
      </div>
      <div className="flex gap-5 items-center ">
        <span className="font-semibold">€{totalItemPrice}</span>
      </div>
    </div>
  );
}

export default OrderItem;
