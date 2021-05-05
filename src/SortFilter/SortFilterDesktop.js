import { useProduct } from "../Product/ProductContext";

const SortFilterDesktop = () => {
  const { productDispatch, showInventoryAll, category } = useProduct();
  return (
    <aside className="sidebar hide-t">
      <div>
        <h2>Sort By</h2>
        <div
          className="pointer"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
          }}
        >
          <span>Low to high</span>
        </div>

        <div
          className="pointer"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
          }}
        >
          <span>High to low</span>
        </div>

        <div
          className="pointer"
          onClick={() => {
            productDispatch({ type: "REMOVE_SORT" });
          }}
        >
          <span>Reset</span>
        </div>

        <h2>Filter</h2>

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
          <label htmlFor="value">Value Investing</label>
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
          <label htmlFor="options">Options Trading</label>
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
          <label htmlFor="technical">Technical Analysis</label>
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
          <label htmlFor="stock">Include Out of Stock</label>
        </div>
      </div>
    </aside>
  );
};

export default SortFilterDesktop;
