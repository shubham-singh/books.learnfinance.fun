import Product from "../Product/Product";
import { useWishlist } from "./WishlistContext";
import { Link } from "react-router-dom";

const WishlistMobile = () => {
  const { wishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="flex-c justify-c h-full-vp">
        <span className="x-large">Your wishlist is empty</span>
        <Link to="/">
          <button className="btn btn-classic shadow medium mt-m">
            See products
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="products">
      <h2 className="m-m">Wishlist: {wishlist.length}</h2>
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
