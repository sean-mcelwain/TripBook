import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import TripList from "../components/TripList";
import TripForm from "../components/TripForm";
import logo from "../logo.png";
import "../index.css";

import { QUERY_TRIPS } from "../utils/queries";

const TakeATrip = () => {
  const [filter, setFilter] = useState({});
  const { loading, data } = useQuery(QUERY_TRIPS, { variables: { filter } });
  const trips = data?.trips || [];

  console.log(filter);

  return (
    <div className="row bg-light btnRow p-5">
      <input
        type="text"
        class="search"
        placeholder="Start Searching Here..."
        value={filter.tripTitle}
        onChange={(e) => setFilter({ tripTitle: e.target.value })}
      ></input>

      <div className="text-center">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <TripList trips={trips} title="Are you ready for a vacation?" />
        )}
      </div>
    </div>
  );
};

export default TakeATrip;
