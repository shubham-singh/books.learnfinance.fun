import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddToCart from "../Cart/AddToCart";
import AddToWishlist from "../Wishlist/AddToWishlist";
import Loader from "../Loader/Loader";
import { useLoader } from "../Loader/LoaderContext";
import { getBook } from "../utils/serverRequest";

const ProductView = () => {
  const [book, setBook] = useState(null);
  const { loader, setLoader } = useLoader();
  const { id } = useParams();

  useEffect(() => {
    getBook(id, setBook, setLoader);
  }, []);

  const showProduct = () => {
    if (loader === "error") {
      return <h1>Book not found</h1>;
    }
    if (loader === "show") {
      return <Loader />;
    } else {
      return (
        <>
          <div className="product-page-image">
            {book !== null && <img src={book.img.default} alt="book" />}
          </div>
          <div className="product-page-content">
            {book !== null && (
              <>
                <div className="text-left">
                  <h2>{book.title}</h2>
                  <h4 className="text-color-gray">{book.author}</h4>
                  <div className="flex-row-center">
                    <div className="product-page-wishlist">
                      <AddToWishlist
                        product={book}
                        cartView={false}
                        productPageView={true}
                      />
                    </div>
                    <AddToCart product={book} wishlistView={false} />
                  </div>
                </div>
              </>
            )}
          </div>
        </>
      );
    }
  };

  return <div className="product-page">{showProduct()}</div>;
};

export default ProductView;
