import { Link } from "react-router-dom";
import Product from "../Product/Product";
import { useWishlist } from "./WishlistContext";
import { useLocalisation } from "../Localisation/LocalisationContext";
import { lang } from "../Localisation/LocalisationData";

const WishlistMobile = () => {
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
    <div className="products">
      <h2 className="m-m">
        {lang[language].wishlist}: {wishlist.length}
      </h2>
      <ul>
        {wishlist.map((product) => {
          return (
            <>
              <Product
                key={product.id}
                name={product.name}
                year={product.year}
                product={product}
                wishlistView={true}
                cartButtonText="Move To Cart"
              />
              <hr className="w-full" />
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default WishlistMobile;
