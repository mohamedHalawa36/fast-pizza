import Input from "../components/Input";
import Button from "../components/Button";
import Cart from "./Cart";
import store from "../Store/store";
import { Form, redirect, useNavigation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, fetchAddress } from "../slices/userSlice";
import { useState } from "react";
import { placeOrder } from "../functions/apiResturant";

function NewOrder() {
  const [priority, setPriority] = useState(false);
  const locateHandler = (e) => {
    e.preventDefault();
    dispatch(fetchAddress());
  };
  const isLoading = useNavigation().state === "loading";
  const { cart, address, addressStatus, position,name } = useSelector(
    (state) => state.user,
  );
  const isAddressLoading = addressStatus === "loading";
  const dispatch = useDispatch();
  if (!cart.length) return <Cart />;
  return (
    <div className="flex-1 p-10 w-full sm:w-3/4 lg:w-1/2 mx-auto bg-stone-100">
      <h1 className=" font-bold text-2xl mb-10 text-stone-600">
        Ready to order? Let's go!
      </h1>
      <Form method="POST">
        <div className=" my-5 flex flex-col justify-between 300 ">
          <label htmlFor="" className="mb-2 capitalize">
            name
          </label>
          <Input
          value={name}
            KeyDownHandler={(e) => {
              if (!isNaN(+e.key)) {
                e.preventDefault();
              }
            }}
            name={`customer`}
            type="text"
            classes={`flex-1 focus:ring-2 focus:ring-yellow-500 `}
          />
        </div>
        <div className=" my-5 flex flex-col justify-between ">
          <label htmlFor="" className="mb-2 capitalize ">
            phone number
          </label>
          <Input
            name={`phone`}
            type="number"
            classes={`remove-arrow flex-1 focus:ring-2 focus:ring-yellow-500 `}
          />
        </div>
        <div className=" my-5 flex flex-col justify-between ">
          <label htmlFor="" className="mb-2 capitalize">
            address
          </label>
          <div className=" relative">
            <Button
              disabled={isAddressLoading}
              onClick={locateHandler}
              type={`primary`}
              classes={`absolute capitalize py-1 px-3 right-1 top-1/2 -translate-y-[50%]`}
            >
              locate me
            </Button>
            <Input
              disabled={isAddressLoading}
              value={address}
              name={`address`}
              type="text"
              classes={`w-full flex-1 focus:ring-2 focus:ring-yellow-500 `}
            />
          </div>
        </div>
        {
          //hidden input to submit the cart and position with the form
        }
        <input
          name="cart"
          hidden
          type="text"
          defaultValue={JSON.stringify(cart)}
        />
        <input
          type="hidden"
          name="position"
          value={
            position.longitude && position.latitude
              ? `${position.latitude},${position.longitude}`
              : ""
          }
        />
        <div className=" flex items-center">
          <input
            name="priority"
            id="yellow-checkbox"
            type="checkbox"
            value={priority}
            onChange={(e) => setPriority(e.target.checked)}
            className="h-6 w-6 mr-3 accent-yellow-400 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-2"
          />{" "}
          <span>Want to yo give your order priority?</span>
        </div>
        <Button classes={`my-10 p-3 px-5`} type={`primary`}>
          {!isLoading ? "place order" : "placing order..."}
        </Button>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === "true",
  };
  const newOrder = await placeOrder(order);
  if (newOrder.status === "failed")
    throw new Error("failed to create order. please try again later");
  else {
    store.dispatch(clearCart());
    return redirect(`/order/${newOrder.id}`);
  }
}

export default NewOrder;
