import { useProduct } from "../Product/ProductContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";

const Filter = (props) => {
  const { productDispatch, showInventoryAll, category } = useProduct();
  const { language } = useLocalisation();

  return (
    <div className="popup">
      <div className="popup-empty" onClick={() => props.setOpen(null)}></div>

      <div className="popup-content popup-full shadow">
        <div className="popup-heading">
          <h3>{lang[language].filter}</h3>
          <CloseIcon
            onClick={() => {
              props.setOpen(null);
            }}
          />
        </div>

        <div className="flex-c justify-e popup-full">
          <div className="p-s large">
            <input
              className="checkbox"
              type="checkbox"
              id="stock"
              checked={showInventoryAll}
              name="Include Out of Stock"
              onChange={() => productDispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
            />
            <label for="stock">{lang[language].includeOutOfStock}</label>
          </div>

          <hr className="hr-half" />

          <div className="p-s large">
            <input
              className="checkbox"
              type="checkbox"
              id="options"
              name="Options Trading"
              checked={category["Options Trading"]}
              onChange={() => {
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: "Options Trading"
                });
              }}
            />
            <label for="options">{lang[language].options}</label>
          </div>

          <div className="p-s large">
            <input
              className="checkbox"
              type="checkbox"
              id="technical"
              name="Technical Analysis"
              checked={category["Technical Analysis"]}
              onChange={() => {
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: "Technical Analysis"
                });
              }}
            />
            <label for="technical">{lang[language].technical}</label>
          </div>

          <div className="p-s large">
            <input
              className="checkbox"
              type="checkbox"
              id="value"
              name="Value Investing"
              checked={category["Value Investing"]}
              onChange={() => {
                productDispatch({
                  type: "FILTER_BY_CATEGORY",
                  payload: "Value Investing"
                });
              }}
            />
            <label for="value">{lang[language].value}</label>
          </div>

          <hr className="hr-half" />

          <div
            className="p-s large"
            onClick={() => {
              productDispatch({ type: "RESET_FILTER" });
              props.setOpen(null);
            }}
          >
            <span>{lang[language].reset}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
