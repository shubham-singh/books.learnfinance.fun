import { Link } from "react-router-dom";
import AddToWishlist from "../Wishlist/AddToWishlist";
import AddToCart from "../Cart/AddToCart";

const ProductHorizontal = ({
  product,
  wishlistView = false,
  cartView = false,
}) => {
  return (
    <div className="product-card-horizontal">
      <div className="product-image-horizontal relative">
        <Link to={`/book/${product._id}`}>
          <img className="shadow" src={product.img.default} alt="product" />
        </Link>
        <AddToWishlist product={product} cartView={cartView} />
      </div>

      <div className="product-content-horizontal">
        <Link to={`/book/${product._id}`} className="no-underline">
          <div className="product-description-horizontal">
            <h3 className="product-name-horizontal">{product.title}</h3>
            <h4 className="product-origin-horizontal">{product.author}</h4>
          </div>
        </Link>

        <h4 className="product-price-horizontal">
          &#8377; {product.price.toLocaleString()}
        </h4>
        <div className="cart-action-horizontal">
          <AddToCart product={product} wishlistView={wishlistView} />
        </div>
      </div>
    </div>
  );
};

export default ProductHorizontal;
