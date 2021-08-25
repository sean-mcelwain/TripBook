import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { Link } from "react-router-dom";
import TripList from "../components/TripList";
import "../index.css";

import { QUERY_TRIPS } from "../utils/queries";

const Home = () => {
  const [filter] = useState({});
  const { loading, data } = useQuery(QUERY_TRIPS, { variables: { filter } });
  const trips = data?.trips || [];

  return (
    <div className="row bg-light whiteCon pb-5">
      <div className="">
        <div className="row btnRow">
          {/* Home page main buttons */}
          <div className="col-6 text-center p-5">
            <Link className="btn btn-primary" to="/trips">
              View Your Trips
            </Link>
          </div>

          <div className="col-6 text-center p-5">
            <Link className="btn btn-primary" to="/takeatrip">
              Take A Trip!
            </Link>
          </div>
          <div>
            <div>
              <div className="text-center">
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
