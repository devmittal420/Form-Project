import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import FetchProductList from "./Day-21/product-list";
// import FetchProductDetails from "./Day-21/product-details";

import A1 from "./"

const router = createBrowserRouter([
  // {
  //   path: "/",
  //   element: <FetchProductList />,
  // },
  // {
  //   path: "/details/:productId",
  //   element: <FetchProductDetails />,
  // },
  {
    path: "/prop-drill",
    element: <A1 />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
