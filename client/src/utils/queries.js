import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      trips {
        _id
        tripText
        tripImage
        tripTitle
        createdAt
      }
    }
  }
`;

export const QUERY_TRIPS = gql`
  query getTrips($filter: TripFilter) {
    trips(filter: $filter) {
      _id
      tripText
      tripAuthor
      tripImage
      tripTitle
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
      tripImage
      tripTitle
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;

export const QUERY_FIND_HOTELS = gql`
query getHotels($searchText: String!) {
  hotels(searchText:$searchText){
    _id
    hotelName
    hotelAddress
    hotelPhone
    hotelCost
    createdAt
  }
}
`;