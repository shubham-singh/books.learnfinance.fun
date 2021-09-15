import { useProduct } from "../Product/ProductContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";

const Sort = ({ setOpen }) => {
  const { productDispatch } = useProduct();
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

        <div
          className="p-s large"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
            setOpen(null);
          }}
        >
          <span>{lang[language].lowToHigh}</span>
        </div>

        <div
          className="p-s large"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
            setOpen(null);
          }}
        >
          <span>{lang[language].highToLow}</span>
        </div>

        <div
          className="p-s large"
          onClick={() => {
            productDispatch({ type: "REMOVE_SORT" });
            setOpen(null);
          }}
        >
          <span>{lang[language].reset}</span>
        </div>
      </div>
    </div>
  );
};

export default Sort;
