import Media from "react-media";
import WishlistMobile from "./WishlistMobile";
import WishlistDesktop from "./WishlistDesktop";

const WishlistLayout = () => {
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
            {matches.small && <WishlistMobile />}
            {matches.large && <WishlistDesktop />}
          </>
        )}
      </Media>
    </>
  );
};

export default WishlistLayout;
