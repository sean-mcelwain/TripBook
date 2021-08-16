import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      trips {
        _id
        tripText
        createdAt
      }
    }
  }
`;

export const QUERY_TRIPS = gql`
  query getTrips {
    trips {
      _id
      tripText
      tripAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_TRIP = gql`
  query getSingleTrip($tripId: ID!) {
    trip(tripId: $tripId) {
      _id
      tripText
      tripAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
