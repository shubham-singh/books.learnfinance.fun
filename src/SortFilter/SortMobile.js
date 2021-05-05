import { useProduct } from "../Product/ProductContext";
import { ReactComponent as CloseIcon } from "../assets/icons/CloseIcon.svg";

const Sort = (props) => {
  const { productDispatch } = useProduct();

  return (
    <div className="popup">
      <div className="popup-empty" onClick={() => props.setOpen(null)}></div>
      <div className="popup-content popup-half shadow">
        <div className="popup-heading">
          <h3>Sort by</h3>
          <CloseIcon
            onClick={() => {
              props.setOpen(null);
            }}
          />
        </div>

        <div
          className="p-s large"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "LOW_TO_HIGH" });
            props.setOpen(null);
          }}
        >
          <span>Low to high</span>
        </div>

        <div
          className="p-s large"
          onClick={() => {
            productDispatch({ type: "SORT", payload: "HIGH_TO_LOW" });
            props.setOpen(null);
          }}
        >
          <span>High to low</span>
        </div>

        <div
          className="p-s large"
          onClick={() => {
            productDispatch({ type: "REMOVE_SORT" });
            props.setOpen(null);
          }}
        >
          <span>Reset</span>
        </div>
      </div>
    </div>
  );
};

export default Sort;
