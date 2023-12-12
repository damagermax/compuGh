import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./layout/RootLayout.jsx";

import { publicRoutes } from "./routes.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: publicRoutes,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
