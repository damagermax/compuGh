import { Outlet } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../components/Navbar";
import NewsLetters from "../components/NewsLetters";
import Footer from "../components/Footer";

const RootLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <Navbar />
      <Outlet />
      <NewsLetters />
      <Footer />
    </>
  );
};

export default RootLayout;
