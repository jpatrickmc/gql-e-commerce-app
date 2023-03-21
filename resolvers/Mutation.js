const { v4: uuid } = require("uuid");

exports.Mutation = {
  addCategory: (parent, args, context) => {
    const input = args.input;
    const categories = context.categories;
    const newCategory = {
      id: uuid(),
      name: input.name,
    };
    categories.push(newCategory);
    return newCategory;
  },

  addProduct: (parent, args, context) => {
    const input = args.input;
    const products = context.products;

    const newProduct = {
      id: uuid(),
      name: input.name,
      quantity: input.quantity,
      description: input.description,
      onSale: input.onSale,
      image: input.image,
      price: input.price,
      categoryId: input.categoryId,
    };
    products.push(newProduct);
    return newProduct;
  },

  addReview: (parent, args, context) => {
    const input = args.input;
    const reviews = context.reviews;

    const newReview = {
      id: uuid(),
      date: input.date,
      title: input.title,
      comment: input.comment,
      rating: input.rating,
      productId: input.productId,
    };
    reviews.push(newReview);
    return newReview;
  },
};
