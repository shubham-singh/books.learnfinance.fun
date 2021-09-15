import Media from "react-media";
import CartMobile from "./CartMobile";
import CartDesktop from "./CartDesktop";
const CartLayout = () => {
  return (
    <>
      <Media
        queries={{
          small: "(max-width: 768px)",
          large: "(min-width: 769px)"
        }}
      >
        {(matches) => (
          <>
            {matches.small && <CartMobile />}
            {matches.large && <CartDesktop />}
          </>
        )}
      </Media>
    </>
  );
};

export default CartLayout;
