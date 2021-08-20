import React from 'react';
import { useQuery } from '@apollo/client';
import {BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import TripList from '../components/TripList';
import TripForm from '../components/TripForm';
import logo from '../logo.png';
import '../index.css';

import { QUERY_TRIPS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_TRIPS);
  const trips = data?.trips || [];

  return (
    <div className="row bg-light whiteCon pb-5">
        <div className="col-12">
            <div className="row btnRow">
                {/* Home page main buttons */}
                <div className="col-6 text-center p-5">
                    <Link className="btn btn-primary" to="/trips">View Your Trips</Link>
                </div>
                <div className="col-6 p-5 text-center">
                    <button className="btn btn-primary">Take a Trip!</button>
                </div>
                <div className="col-12">
                    <div className="flex-row justify-center text-center">
                        <div
                        className="col-12 col-md-10 mb-3 p-3"
                        style={{ border: '1px dotted #1a1a1a' }}
                        >
                        <TripForm />
                        </div>
                        <div className="col-12 col-md-8 mb-3">
                        {loading ? (
                            <div>Loading...</div>
                        ) : (
                            <TripList
                            trips={trips}
                            title="Let's Go Bro!"
                            />
                        )}
                        </div>
                    </div>
                </div>

                {/* Trip images */}
                <div className="col-12 text-center">
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
        </div>
    </div>
);
}

export default Home;