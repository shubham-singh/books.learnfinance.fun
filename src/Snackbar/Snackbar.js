import { useEffect } from "react";
import { useSnackbar } from "./SnackbarContext";

const Snackbar = () => {
  const { snackbar, snackbarDispatch } = useSnackbar();

  useEffect(() => {
    const timerID = setTimeout(() => {
      snackbarDispatch({ type: "DELETE_SNACKBAR" });
    }, 3000);

    return function () {
      clearTimeout(timerID);
    };
  });

  return (
    <>
      {snackbar.visible && (
        <div className="snackbar">
          <p>{snackbar.message}</p>
        </div>
      )}
    </>
  );
};

export default Snackbar;
