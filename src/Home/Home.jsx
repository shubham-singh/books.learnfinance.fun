import { useEffect } from "react";
import { useProduct } from "../Product/ProductContext";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Trending from "./Trending";
const Home = () => {
  const { productDispatch } = useProduct();

  useEffect(() => {
    productDispatch({
      type: "RESET_FILTER"
    });
  }, []);
  return (
    <>
      <h1 className="heading m-null p-s hide-d">Learn Finance</h1>
      <Carousel />
      <Categories />
      <Trending />
    </>
  );
};

export default Home;
