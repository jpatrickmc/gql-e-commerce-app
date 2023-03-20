exports.Query = {
  products: (parent, args, context) => {
    const products = context.products;
    let filter = args.filter;
    let filteredProducts = products;
    if (filter) {
      if (filter.onSale === true) {
        filteredProducts = filteredProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredProducts;
  },
  product: (parent, args, context) => {
    const { id } = args;
    const products = context.products;
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, context) => {
    const categories = context.categories;
    return categories;
  },
  category: (parent, args, context) => {
    const { id } = args;
    const categories = context.categories;
    return categories.find((category) => category.id === id);
  },
};
