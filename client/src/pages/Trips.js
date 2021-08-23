import React from 'react';
import { useQuery } from '@apollo/client';
import {BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import TripList from '../components/TripList';
import TripForm from '../components/TripForm';
import logo from '../logo.png';
import '../index.css';

import { QUERY_TRIPS } from '../utils/queries';

const Trips = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  return (

    <div className="row bg-light whiteCon btnRow">
        <div className="text-center">
            
            <Link className="btn btn-primary" to="/uploadtrip">
            Upload New Trip
            </Link><br></br>
        </div>

        {/* Trip images */}
        <div className="text-center">
                {loading ? (
                  <div>Loading...</div>
                ) : (
                  <TripList
                    trips={trips}
                    title="My Trips"
                  />
                )}
              </div>

    </div>
);
}

export default Trips;