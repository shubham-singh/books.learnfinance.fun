import { useNavigate } from "react-router-dom";
import { ReactComponent as RightIcon } from "../assets/icons/RightIcon.svg";
import { useProduct } from "../Product/ProductContext";
import { lang } from "../Localisation/LocalisationData";
import { useLocalisation } from "../Localisation/LocalisationContext";

const Categories = () => {
  const { language } = useLocalisation();

  const categories = [
    {
      name: "Options Trading",
      categoryName: lang[language].options,
      navigate: function () {
        productDispatch({
          type: "FILTER_BY_CATEGORY",
          payload: this.name
        });
        return navigate("/books");
      }
    },
    {
      name: "Technical Analysis",
      categoryName: lang[language].technical,
      navigate: function () {
        productDispatch({
          type: "FILTER_BY_CATEGORY",
          payload: this.name
        });
        return navigate("/books");
      }
    },
    {
      name: "Value Investing",
      categoryName: lang[language].value,
      navigate: function () {
        productDispatch({
          type: "FILTER_BY_CATEGORY",
          payload: this.name
        });
        return navigate("/books");
      }
    },
    {
      name: "Show all",
      categoryName: lang[language].all,
      navigate: function () {
        return navigate("/books");
      }
    }
  ];

  const { productDispatch } = useProduct();
  const navigate = useNavigate();

  return (
    <div className="flex-row-center flex-wrap">
      {categories.map((category) => {
        return (
          <div
            className="m-s pointer category"
            onClick={() => category.navigate()}
          >
            <p>{category.categoryName}</p>
            <RightIcon />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
