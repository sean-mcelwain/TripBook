import React from 'react';
import { useQuery } from '@apollo/client';
import {BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import TripList from '../components/TripList';
import TripForm from '../components/TripForm';
import logo from '../logo.png';
import '../index.css';

import { QUERY_TRIPS } from '../utils/queries';

const Search = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  return (

    <div className="row bg-light btnRow p-5">
        <div className="col-4">
            <button className="btn btn-primary p-3 mb-2 fullWidth">Location</button><br></br>
            <button className="btn btn-primary p-3 mb-2 fullWidth">City</button><br></br>
            <button className="btn btn-primary p-3 mb-2 fullWidth">Region</button><br></br>
            <button className="btn btn-primary p-3 mb-2 fullWidth">Environment</button><br></br>
        </div>
        <div className="col-4">
            <button className="btn btn-primary p-3 fullWidth">Attractions</button>
        </div>
        <div className="col-4">
            <button className="btn btn-primary p-3 fullWidth">Cuisine</button>
        </div>
    </div>
);
}

export default Search;