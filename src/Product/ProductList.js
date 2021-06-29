import { useEffect } from "react";

import Product from "./Product";
import Loader from "../Loader/Loader";
import SortFilterLayout from "../SortFilter/SortFilterLayout";

import { useAuth } from "../Auth/AuthContext";
import { useLoader } from "../Loader/LoaderContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { useProduct } from "./ProductContext";

import { lang } from "../Localisation/LocalisationData";
import {
  trimNames,
  getSortedData,
  getFilteredData,
  scrollToTop
} from "../utils/function";
import { getBooks } from "../utils/serverRequest";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  const { language } = useLocalisation();

  useEffect(() => {
    getBooks(productDispatch, trimNames, setLoader);
  }, [user.loggedIn]);

  useEffect(() => {
    scrollToTop();
  }, []);

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
    <div className="product-list">
      <SortFilterLayout />

      <h1 className="heading m-null p-s hide-d" onClick={() => navigate("/")}>
        {lang[language].learnFinance}
      </h1>

      <div className="products">{showProducts()}</div>

      <div className="empty-space hide-d"></div>
    </div>
  );
};

export default ProductList;
