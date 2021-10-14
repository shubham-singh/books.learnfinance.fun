import { useEffect, useState } from "react";
import { useParams } from "react-router";
import AddToCart from "../Cart/AddToCart";
import Loader from "../Loader/Loader";
import { useLoader } from "../Loader/LoaderContext";
import { getBook } from "../utils/serverRequest";

const ProductView = () => {
  const [book, setBook] = useState(null);
  const { loader, setLoader } = useLoader();
  const { id } = useParams();

  useEffect(() => {
    console.log("inside useEffect");
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
          <div
            style={{
              padding: "2rem",
              background: "radial-gradient(black, #3f87a6)",
              width: "50%",
            }}
          >
            {book !== null && (
              <img
                style={{
                  maxHeight: "525px",
                  maxWidth: "350px",
                  objectFit: "contain",
                }}
                src={book.img.default}
                alt="book"
              />
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "50%",
              padding: "2rem",
            }}
          >
            {book !== null && (
              <>
              <div>
                <h2>{book.title}</h2>
                <h4
                  style={{
                    color: "gray",
                  }}
                >
                  {book.author}
                </h4>
                <AddToCart product={book} wishlistView={false} />
              </div>
              </>
            )}
          </div>
        </>
      );
    }
  };

  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {showProduct()}
    </div>
  );
};

export default ProductView;
