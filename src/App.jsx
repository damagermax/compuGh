import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Products from "./pages/Products.jsx";

const router = createBrowserRouter([
  {
    path: "/",
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
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
