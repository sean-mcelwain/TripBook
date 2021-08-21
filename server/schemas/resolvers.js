const { AuthenticationError } = require('apollo-server-express');
const { User, Trip } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('trips');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('trips');
    },
    trips: async (parent, { username }) => {
      const params = username ? { username } : {};
      return Trip.find(params).sort({ createdAt: -1 });
    },
    trip: async (parent, { tripId }) => {
      return Trip.findOne({ _id: tripId });
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addTrip: async (parent, { tripText, tripAuthor, tripImage }) => {
      const trip = await Trip.create({ tripText, tripAuthor, tripImage });

      await User.findOneAndUpdate(
        { username: tripAuthor },
        { $addToSet: { trips: trip._id } }
      );

      return trip;
    },
    addComment: async (parent, { tripId, commentText, commentAuthor }) => {
      return Trip.findOneAndUpdate(
        { _id: tripId },
        {
          $addToSet: { comments: { commentText, commentAuthor } },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeTrip: async (parent, { tripId }) => {
      return Trip.findOneAndDelete({ _id: tripId });
    },
    removeComment: async (parent, { tripId, commentId }) => {
      return Trip.findOneAndUpdate(
        { _id: tripId },
        { $pull: { comments: { _id: commentId } } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
