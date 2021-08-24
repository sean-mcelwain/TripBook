import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Trips from "./pages/Trips";
import UploadTrip from "./pages/UploadTrip";
import TakeATrip from "./pages/TakeATrip";
import Search from "./pages/Search";
import SingleTrip from "./pages/SingleTrip";
import Header from "./components/Header";
import Footer from "./components/Footer";

import HotelList from './pages/hotel/HotelList';
import HotelDetails from './pages/hotel/hotelDetails';

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="">
          <Header />
          <div className="container">
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/signup">
              <Signup />
            </Route>
            <Route exact path="/trips">
              <Trips />
            </Route>
            <Route exact path="/uploadtrip">
              <UploadTrip />
            </Route>
            <Route exact path="/search">
              <Search />
            </Route>
            <Route exact path="/takeatrip">
              <TakeATrip />
            </Route>
            <Route exact path="/trips/:tripId">
              <SingleTrip />
            </Route>
            <Route exact path="/findHotel">
              <HotelList />
            </Route>
            <Route exact path="/hotelDetails/:hotelid">
              <HotelDetails />
            </Route>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
