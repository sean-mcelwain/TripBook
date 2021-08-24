const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    trips: [Trip]!
  }

  type Trip {
    _id: ID
    tripText: String
    tripAuthor: String
    tripImage: String
    tripTitle: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }
  input TripFilter {
    tripText: String
    tripTitle: String
  }

  type Hotel {
    _id: ID
    hotelName: String
    hotelAddress: String
    hotelPhone: String
    hotelCost: String
    createdAt: String
    hotelRating: String
    hotelImages: [String]
  }

  type Query {
    users: [User]
    user(username: String!): User
    trips(username: String, filter: TripFilter): [Trip]
    trip(tripId: ID!): Trip
    hotels(searchText: String): [Hotel]
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addTrip(
      tripText: String!
      tripAuthor: String!
      tripImage: String!
      tripTitle: String!
    ): Trip
    addComment(tripId: ID!, commentText: String!, commentAuthor: String!): Trip
    removeTrip(tripId: ID!): Trip
    removeComment(tripId: ID!, commentId: ID!): Trip
  }
`;

module.exports = typeDefs;
