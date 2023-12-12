import { lazy } from "react";
// const ReportedPost = lazy(() => import("./pages/ReportedPost"));

const Home = lazy(() => import("./pages/Home.jsx"));
const ProductDetails = lazy(() => import("./pages/ProductDetails.jsx"));
const Products = lazy(() => import("./pages/Products.jsx"));

export const publicRoutes = [
  {
    path: "",
    element: <Home />,
  },
  {
    path: "/phone",
    element: <ProductDetails />,
  },
  {
    path: "/products",
    element: <Products />,
  },
];
