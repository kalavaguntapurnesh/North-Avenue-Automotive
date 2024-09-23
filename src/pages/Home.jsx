import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Category from "../components/Category";
import Products from "../components/Products";
import Brands from "../components/Brands";
import Offers from "../components/Offers";
import NumberOne from "../components/NumberOne";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Offers />
      <Category />
      <Products />
      <Brands />
      <NumberOne />
      <Footer />
    </div>
  );
};

export default Home;
