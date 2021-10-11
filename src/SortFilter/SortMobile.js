import { useProduct } from "../Product/ProductContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";

const Sort = ({ setOpen }) => {
  const { productDispatch, sortBy } = useProduct();
  const { language } = useLocalisation();

  return (
    <div className="popup">
      <div className="popup-empty" onClick={() => setOpen(null)}></div>
      <div className="popup-content popup-half shadow">
        <div className="popup-heading">
          <h3>{lang[language].sortBy}</h3>
          <CloseIcon
            onClick={() => {
              setOpen(null);
            }}
          />
        </div>

        <div className="p-s large">
          <input
            className="pointer mr-s"
            type="radio"
            id="low-to-high"
            name="sort"
            value="LOW_TO_HIGH"
            checked={sortBy === "LOW_TO_HIGH"}
            onChange={() => {
              productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
              setOpen(null);
            }}
          />
          <label htmlFor="low-to-high">{lang[language].lowToHigh}</label>
        </div>
        <div className="p-s large">
          <input
            className="pointer mr-s"
            type="radio"
            id="high-to-low"
            name="sort"
            value="HIGH_TO_LOW"
            checked={sortBy === "HIGH_TO_LOW"}
            onChange={() => {
              productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
              setOpen(null);
            }}
          />
          <label htmlFor="high-to-low">{lang[language].highToLow}</label>
        </div>
        <div className="p-s large">
          <input
            className="pointer mr-s"
            type="radio"
            id="reset"
            name="sort"
            value="null"
            checked={sortBy === "RESET"}
            onChange={() => {
              productDispatch({ type: "REMOVE_SORT" });
              setOpen(null);
            }}
          />
          <label htmlFor="reset">{lang[language].reset}</label>
        </div>
      </div>
    </div>
  );
};

export default Sort;
