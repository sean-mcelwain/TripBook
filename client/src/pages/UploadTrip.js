import React from 'react';
import { useQuery } from '@apollo/client';
import {BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import TripForm from '../components/TripForm';
import logo from '../logo.png';
import '../index.css';

import { QUERY_TRIPS } from '../utils/queries';

const UploadTrip = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  return (

    <div className="row bg-light whiteCon btnRow p-5">
              <div className="col-12" style={{ border: "1px dotted #1a1a1a" }}>
                <TripForm />
              </div>
    </div>
);
}

export default UploadTrip;