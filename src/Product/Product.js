import AddToWishlist from "../Wishlist/AddToWishlist";
import AddToCart from "../Cart/AddToCart";

const Product = ({ product, wishlistView = false, cartView = false }) => {
  return (
    <div className="product-card">
      <div className="product-image relative">
        <img className="shadow" src={product.img.default} alt="product" />
        <AddToWishlist product={product} cartView={cartView} />
      </div>

      <div className="product-content">
        <div className="product-description">
          <h3 className="product-name">{product.title}</h3>
          <h4 className="product-origin">{product.author}</h4>
        </div>

        <h4 className="product-price">
          &#8377; {product.price.toLocaleString()}
        </h4>
        <div className="cart-action">
          <AddToCart product={product} wishlistView={wishlistView} />
        </div>
      </div>
    </div>
  );
};

export default Product;
