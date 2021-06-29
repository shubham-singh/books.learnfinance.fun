import { useEffect } from "react";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { useProduct } from "../Product/ProductContext";
import { lang } from "../Localisation/LocalisationData";
import Carousel from "./Carousel";
import Categories from "./Categories";
import Trending from "./Trending";
const Home = () => {
  const { productDispatch } = useProduct();
  const { language } = useLocalisation();

  useEffect(() => {
    productDispatch({
      type: "RESET_FILTER"
    });
  }, []);
  return (
    <>
      <h1 className="heading m-null p-s hide-d">
        {lang[language].learnFinance}
      </h1>
      <Carousel />
      <Categories />
      <Trending />
    </>
  );
};

export default Home;
