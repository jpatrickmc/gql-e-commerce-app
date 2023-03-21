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
};
