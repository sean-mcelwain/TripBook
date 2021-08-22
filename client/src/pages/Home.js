import React from "react";
import { useQuery } from "@apollo/client";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import TripList from "../components/TripList";
import TripForm from "../components/TripForm";
import logo from "../logo.png";
import "../index.css";
import AllImages from "../components/ImageUpload/allImages";

import { QUERY_TRIPS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  return (
    <div className="row bg-light whiteCon pb-5">
      <div className="col-12">
        <div className="row btnRow">
          {/* Home page main buttons */}
          <div className="col-6 text-center p-5">
            <Link className="btn btn-primary" to="/trips">
              View Your Trips
            </Link>
          </div>
          <div className="col-6 p-5 text-center">
            <button className="btn btn-primary">Take a Trip!</button>
          </div>
          <div className="col-12">
            <div className="flex-row justify-center">
              <div className="col-12" style={{ border: "1px dotted #1a1a1a" }}>
                <TripForm />
              </div>
              <div className="">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <TripList
                    trips={trips}
                    title="Are you ready for a vacation?"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Trip images */}
        </div>
      </div>
    </div>
  );
};

export default Home;
