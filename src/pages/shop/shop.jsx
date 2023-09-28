import React, { useState, useEffect, useContext } from "react";
import AllProducts from "../../components/products/allProducts";

const Shop = () => {
  return (
    <div className="shop-container">
      <div className="shopTitle">
        <h1>Shopper's Nightmare</h1>
        <p className="text">
          Welcome to Shopper's Nightmare! Our products are guarantee to be
          stylistic & over-priced!!
        </p>
      </div>
      <div className="allproducts">
        <AllProducts />;
      </div>
    </div>
  );
};
export default Shop;
