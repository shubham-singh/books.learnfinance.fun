import { useProduct } from "../Product/ProductContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";

const SortFilterDesktop = () => {
  const { productDispatch, showInventoryAll, category } = useProduct();
  const { language } = useLocalisation();

  return (
    <aside className="sidebar">
      <div>
        <h2>{lang[language].sortBy}</h2>
        <div
          className="pointer"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
          }}
        >
          <span>{lang[language].lowToHigh}</span>
        </div>

        <div
          className="pointer"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
          }}
        >
          <span>{lang[language].highToLow}</span>
        </div>

        <div
          className="pointer"
          onClick={() => {
            productDispatch({ type: "REMOVE_SORT" });
          }}
        >
          <span>{lang[language].reset}</span>
        </div>

        <h2>{lang[language].filter}</h2>

        <div>
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
          <label htmlFor="value">{lang[language].value}</label>
        </div>

        <div>
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
          <label htmlFor="options">{lang[language].options}</label>
        </div>

        <div>
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
          <label htmlFor="technical">{lang[language].technical}</label>
        </div>

        <div>
          <input
            className="checkbox"
            type="checkbox"
            id="stock"
            checked={showInventoryAll}
            name="Include Out of Stock"
            onChange={() => productDispatch({ type: "INCLUDE_OUT_OF_STOCK" })}
          />
          <label htmlFor="stock">{lang[language].includeOutOfStock}</label>
        </div>
      </div>
    </aside>
  );
};

export default SortFilterDesktop;
