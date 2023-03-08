exports.Product = {
  category: (parent, args, context) => {
    const categories = context.categories;
    const categoryId = parent.categoryId;
    return categories.find((category) => category.id === categoryId);
  },
  reviews: (parent, args, context) => {
    const reviews = context.reviews;
    const id = parent.id;
    return reviews.filter((review) => review.productId === id);
  },
};
