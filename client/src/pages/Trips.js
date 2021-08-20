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

    <div className="row bg-light whiteCon btnRow p-5">
        {/* Main buttons */}
        <div className="col-3 text-left p-5">
            <button className="btn btn-primary p-3 mb-2 fullWidth">Upload New Trip</button><br></br>
            <button className="btn btn-primary p-3 fullWidth">View Past Trips</button>
        </div>

        {/* Trip images */}
        <div className="col-9 text-center">
                <img className="travelImg" src="/Images/1.jpg"></img>
                <img className="travelImg" src="/Images/2.jpg"></img>
                <img className="travelImg" src="/Images/3.jpg"></img>
                <img className="travelImg" src="/Images/4.jpg"></img>
                <img className="travelImg" src="/Images/5.jpg"></img>
                <img className="travelImg" src="/Images/6.jpg"></img>
                <img className="travelImg" src="/Images/7.jpg"></img>
                <img className="travelImg" src="/Images/8.jpg"></img>
                <img className="travelImg" src="/Images/9.jpg"></img>
                <img className="travelImg" src="/Images/10.jpg"></img>
                <img className="travelImg" src="/Images/12.jpg"></img>
                <img className="travelImg" src="/Images/13.jpg"></img>
                <img className="travelImg" src="/Images/14.jpg"></img>
                <img className="travelImg" src="/Images/15.jpg"></img>
                <img className="travelImg" src="/Images/16.jpg"></img>
                <img className="travelImg" src="/Images/17.jpg"></img>
                <img className="travelImg" src="/Images/18.jpg"></img>
                <img className="travelImg" src="/Images/19.jpg"></img>
                <img className="travelImg" src="/Images/20.jpg"></img>
        </div>
    </div>
);
}

export default Trips;