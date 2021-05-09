export const trimNames = (arrOfObjects) => {
  return arrOfObjects.map((book) => {
    if (book.title.length > 35) {
      return { ...book, title: book.title.slice(0, 35) + "..." };
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
