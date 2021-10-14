import { Link } from "react-router-dom";
import Product from "../Product/Product";
import { useWishlist } from "./WishlistContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";

const WishlistDesktop = () => {
  const { wishlist } = useWishlist();
  const { language } = useLocalisation();

  if (wishlist.length === 0) {
    return (
      <div className="flex-c justify-c h-full-vp">
        <span className="x-large">{lang[language].emptyWishlist}</span>
        <Link to="/">
          <button className="btn btn-classic shadow medium mt-m">
            {lang[language].goShopping}
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="wishlist-products">
      {wishlist.map((product) => {
        return (
          <Product
            key={product._id}
            name={product.name}
            year={product.year}
            product={product}
            wishlistView={true}
          />
        );
      })}
    </div>
  );
};

export default WishlistDesktop;
