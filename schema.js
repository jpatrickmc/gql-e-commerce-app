const { gql } = require("apollo-server");

// define the structure of our data
exports.typeDefs = gql`
  type Query {
    products: [Product!]!
    product(id: ID!): Product
    categories: [Category!]!
    category(id: ID!): Category
  }

  type Product {
    id: ID!
    name: String!
    image: String!
    description: String!
    quantity: Int!
    price: Float!
    onSale: Boolean!
    category: Category
  }
  type Category {
    id: ID!
    name: String!
    products: [Product!]!
  }
`;
