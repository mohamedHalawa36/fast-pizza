import { useLoaderData } from "react-router-dom";
import OrderItem from "../components/OrderItem";
import { getOrder } from "../functions/apiResturant";

function OrderDetails() {
  const order = useLoaderData();
  const {
    cart,
    id,
    orderPrice,
    priorityPrice,
    priority,
    status,
    estimatedDelivery,
  } = order;
  const date = new Date(estimatedDelivery);
  const timeLeftPerMin = Math.ceil( (date - new Date()) / (1000*60))
  const options = {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };
  const deliveryDate = date.toLocaleString("en-US", options);
  const totalPrice = priority ? orderPrice + priorityPrice : orderPrice;
  return (
    <div className="py-3 flex-1 px-5 md:w-2/3 md:mx-auto ">
      <div
        id="order-id-status"
        className=" flex flex-col lg:flex-row justify-between py-5"
      >
        <h1 className=" tracking-wide font-bold  text-xl p-2 text-stone-800">
          Order #{id} status{" "}
        </h1>
        <div className="flex gap-3 font-semibold text-stone-100">
          {priority && (
            <span className=" h-fit py-1 px-3 items-center rounded-full uppercase  bg-red-600">
              priority
            </span>
          )}
          <span className={` h-fit py-1 px-3 items-center text-stone-100 rounded-full uppercase ${timeLeftPerMin<0?"bg-green-600":"bg-yellow-500"}`}>
            {timeLeftPerMin<0?"delivered":"preparing..."}
          </span>
        </div>
      </div>
      <div
        id="order-delivery-time"
        className=" p-6 flex flex-col lg:flex-row justify-between bg-stone-200"
      >
        <h2 className=" font-semibold text-lg text-stone-800">
          {
            timeLeftPerMin>0?`Only ${timeLeftPerMin} minutes left`:"Order should have arrived"
          
          }
        </h2>
        <span className=" text-sm text-stone-500">
          (Estimated delivery: {deliveryDate})
        </span>
      </div>
      <div id="order-items" className="py-3 divide-y-2">
        {cart.map((pizza) => (
          <OrderItem pizza={pizza} key={pizza.pizzaId} />
        ))}
      </div>
      <div
        id="price-details"
        className=" bg-stone-200 p-5 text-lg tracking-wide "
      >
        {priority && (
          <div className="mb-5">
            <p className=" text-stone-600 capitalize text-[16px]">
              pizzas price: {orderPrice.toFixed(2)}€
            </p>
            <p className=" text-stone-600 capitalize text-[16px]">
              priority price: {priorityPrice.toFixed(2)}€
            </p>
          </div>
        )}

        <h4 className=" text-stone-800 font-semibold">
          Total price: {totalPrice.toFixed(2)}€
        </h4>
      </div>
    </div>
  );
}

export async function loader({ params }) {

  const id = params.id;
  const order = await getOrder(id);
  return order;
}

export default OrderDetails;
