import { useProduct } from "../Product/ProductContext";
import Product from "../Product/Product";

const Trending = () => {
  // const { products } = useProduct();
  const trendingArr = [
    {
      img: {
        default: "https://m.media-amazon.com/images/I/51Sn0TXUHuL.jpg"
      },
      _id: "607a9235f2e0f7060896efff",
      title:
        "The Art of Value Investing: How the World's Best Investors Beat the Market",
      author: "John Heins",
      price: 2272,
      category: "Value Investing",
      inStock: true,
      __v: 0
    },
    {
      img: {
        default:
          "https://images-na.ssl-images-amazon.com/images/I/71IY62ABI9L.jpg"
      },
      _id: "607a91f9f2e0f7060896effc",
      title: "Common Stocks And Uncommon Profits",
      author: "Philip A. Fisher",
      price: 955,
      category: "Value Investing",
      inStock: true,
      __v: 0
    },
    {
      img: {
        default:
          "https://images-na.ssl-images-amazon.com/images/I/71XuxWVu1LL.jpg"
      },
      _id: "607a919df2e0f7060896eff9",
      title: "Security Analysis",
      author: "Benjamin Graham, David Dodd",
      price: 1100,
      category: "Value Investing",
      inStock: true,
      __v: 0
    },
    {
      img: {
        default:
          "https://images-na.ssl-images-amazon.com/images/I/91+t0Di07FL.jpg"
      },
      _id: "607a912df2e0f7060896eff7",
      title: "The Intelligent Investor",
      author: "Benjamin Graham",
      price: 465,
      category: "Value Investing",
      inStock: true,
      __v: 0
    }
  ];

  return (
    <>
      <h2 className="mt-xl">Trending</h2>
      <div className="products">
        {trendingArr.map((product) => {
          return <Product key={product._id} product={product} />;
        })}
      </div>
    </>
  );
};

export default Trending;
