const { products, categories } = require("../db");
exports.Query = {
  products: (parent, args, context) => {
    return products;
  },
  product: (parent, args, context) => {
    const { id } = args;
    return products.find((product) => product.id === id);
  },
  categories: (parent, args, context) => {
    return categories;
  },
  category: (parent, args, context) => {
    const { id } = args;
    return categories.find((category) => category.id === id);
  },
};
