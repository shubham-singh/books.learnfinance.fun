import { useEffect } from "react";

import Product from "./Product";
import Loader from "../Loader/Loader";
import SortFilterLayout from "../SortFilter/SortFilterLayout";

import { useProduct } from "./ProductContext";
import { useLoader } from "../Loader/LoaderContext";

import { trimNames, getSortedData, getFilteredData } from "../utils/function";
import { getBooks } from "../utils/serverRequest";
import { useAuth } from "../Auth/AuthContext";

const ProductList = () => {
  const {
    products,
    sortBy,
    category,
    showInventoryAll,
    productDispatch
  } = useProduct();

  const { loader, setLoader } = useLoader();

  const { user } = useAuth();

  useEffect(() => {
    getBooks(productDispatch, trimNames, setLoader);
  }, [user.loggedIn]);

  const categoriesArr = Object.keys(category);

  const categories = categoriesArr.reduce((accumulator, initial) => {
    if (category[initial]) {
      return [...accumulator, initial];
    }
    return accumulator;
  }, []);

  const sortedData = getSortedData(products, sortBy);

  const filteredData = getFilteredData(
    sortedData,
    showInventoryAll,
    categories
  );

  function showProducts() {
    if (loader === "show") {
      return <Loader />;
    } else if (loader === "error") {
      return <p>something went wrong :(</p>;
    } else {
      return filteredData.map((product) => {
        return <Product key={product._id} product={product} />;
      });
    }
  }

  return (
    <div className="homepage">
      <SortFilterLayout />

      <h1 className="heading m-null p-s hide-d">Learn Finance</h1>

      <div className="products">{showProducts()}</div>

      <div className="empty-space hide-d"></div>
    </div>
  );
};

export default ProductList;
