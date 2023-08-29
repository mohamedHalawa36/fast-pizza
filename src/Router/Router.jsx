import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Applayout from "../Layouts/Applayout";
import Menu from "../Pages/Menu";
import { loader as menuLoader } from "../Pages/Menu";
import Cart from "../Pages/Cart";
import NewOrder, { action as placeOrderAction } from "../Pages/NewOrder";
import OrderDetails from "../Pages/OrderDetails";
import { loader as orderLoader } from "../Pages/OrderDetails";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
        loader: menuLoader,
        errorElement: <Error />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/order",
        children: [
          {
            path: "/order/:id",
            element: <OrderDetails />,
            loader: orderLoader,
            errorElement: <Error />,
          },
          {
            path: "/order/new",
            element: <NewOrder />,
            action: placeOrderAction,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
]);
export default router;
