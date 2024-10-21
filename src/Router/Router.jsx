import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Home/Home";
import Products from "../Components/Products/Products";
import ItemDetails from "../Components/Item Details/ItemDetails";
import Cart from "../Components/Cart/Cart";
import Checkout from "../Components/Checkout/Checkout";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: "error.......",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <Products />,
      },
      {
        path: "/all-products/:name",
        element: <Products />,
      },
      {
        path: "/item-details/:name/:id",
        element: <ItemDetails />,
      },
      {
        path: "/cart",
        element: <Cart></Cart>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
    ],
  },
]);

export default Router;
