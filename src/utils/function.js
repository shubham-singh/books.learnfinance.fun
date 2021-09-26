import axios from "axios";

export const setupAuthHeaderForServiceCalls = () => {
  const token = JSON.parse(localStorage.getItem("auth_learnfinance"));
  if (token) {
    return (axios.defaults.headers.common["Authorization"] = token);
  }
  delete axios.defaults.headers.common["Authorization"];
};

export const trimNames = (arrOfObjects, len = 35) => {
  return arrOfObjects.map((book) => {
    if (book.title.length > len) {
      return { ...book, title: book.title.slice(0, len) + "..." };
    }
    return book;
  });
};

export const getSortedData = (productList, sortBy) => {
  if (sortBy && sortBy === "LOW_TO_HIGH") {
    return [...productList].sort((a, b) => a.price - b.price);
  } else if (sortBy && sortBy === "HIGH_TO_LOW") {
    return [...productList].sort((a, b) => b.price - a.price);
  } else {
    return productList;
  }
};

export const getFilteredData = (productList, showInventoryAll, categories) => {
  return categories
    .reduce(
      (accumulator, initial) => {
        return [
          ...accumulator,
          ...productList.filter((product) => product.category === initial)
        ];
      },
      categories.length === 0 ? productList : []
    )
    .filter(({ inStock }) => (showInventoryAll ? true : inStock));
};

export const userHandler = (user, navigate) => {
  if (user.loggedIn) {
    return <li>Hi, {user.firstName}</li>;
  } else {
    return (
      <li className="pointer" onClick={() => navigate("/login")}>
        Login
      </li>
    );
  }
};

export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth"
  });
};


export const loadScript = (src) => {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}