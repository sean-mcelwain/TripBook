import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

import TripList from "../components/TripList";
import TripForm from "../components/TripForm";
import logo from "../logo.png";
import "../index.css";

import { QUERY_TRIPS } from "../utils/queries";
import storage from "../components/ImageUpload/firebase";
import Auth from "../utils/auth";
import { forEach } from "lodash";

const Trips = () => {
  const [filter, setFilter] = useState({});
  const { loading, data } = useQuery(QUERY_TRIPS, { variables: { filter } });
  const trips = data?.trips || [];
  const [allImages, setImages] = useState([]);
  const profile = Auth.getProfile().data.username;

  useEffect(() => {
    getFromFirebase();
  }, []);
  console.log(allImages);
  const getFromFirebase = () => {
    let storageRef = storage.ref(`images/${profile}`);

    storageRef
      .listAll()
      .then(function (res) {
        res.items.forEach((imageRef) => {
          imageRef.getDownloadURL().then((url) => {
            if (allImages.indexOf(url) === -1) {
              setImages((allImages) => [...allImages, url]);
            }
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const tempTrips = [];
  for (let i = 0; i < allImages.length; i++) {
    const trip = { ...trips[i] };
    trip.tripImage = allImages[i];
    tempTrips.push(trip);
  }

  return (
    <div className="row bg-light whiteCon btnRow">
      <div className="text-center">
        <Link className="btn btn-primary" to="/uploadtrip">
          Upload New Trip
        </Link>
        <br></br>
      </div>

      {/* Trip images */}
      <div className="text-center">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <TripList trips={tempTrips} title="My Trips" />
        )}
      </div>
    </div>
  );
};

export default Trips;
