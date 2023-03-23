import { Fragment, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import Checkout from "./pages/checkout";
import Home from "./pages/home";
import ProductDetails from "./pages/productDetails";
import { getCategories } from "./repository";

const App = () => {


  return (
    <Fragment>
      <div className="hidden lg:block">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:product_id" element={<ProductDetails />} />
      </Routes>
    </div>

    <div className="lg:hidden h-screen w-screen space-y-5 flex flex-col items-center justify-center container">
      <Icon name="cart" size="huge" className="text-sky-600" />
      <p>Mobile View Under Construction</p>
    </div>
    </Fragment>
  );
};

export default App;
