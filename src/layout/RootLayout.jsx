import { Suspense } from "react";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import Navbar from "../components/shared/Navbar";
import Footer from "../components/shared/Footer";

import NewsLetters from "../components/home/NewsLetters";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Suspense fallback={<div className=" w-screen h-screen">Loading</div>}>
        <Outlet />
      </Suspense>
      <NewsLetters />
      <Footer />
    </>
  );
};

export default RootLayout;
