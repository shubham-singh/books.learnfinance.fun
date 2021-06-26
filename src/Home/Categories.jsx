import { useNavigate } from "react-router-dom";
import { ReactComponent as RightIcon } from "../assets/icons/RightIcon.svg";
import { useProduct } from "../Product/ProductContext";

const Categories = () => {
  const categories = [
    {
      name: "Options Trading",
      img: "https://media.warriortrading.com/2016/04/Blog_Options_Trading.jpg",
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
      img: "https://media.warriortrading.com/2016/04/Blog_Options_Trading.jpg",
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
      img: "https://media.warriortrading.com/2016/04/Blog_Options_Trading.jpg",
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
      img: "https://media.warriortrading.com/2016/04/Blog_Options_Trading.jpg",
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
            <p>{category.name}</p>
            <RightIcon />
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
