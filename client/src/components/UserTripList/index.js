import React from 'react';
import { Link } from 'react-router-dom';

const UserTripList = ({ trips, title }) => {
  if (!trips.length) {
    return <h3>No Trips Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {trips &&
        trips.map((trip) => (
          <div key={trip.trips._id} className="card">
            <h4 className="card-header">
              {trip.trips.tripTitle} <br />
            </h4>
            <Link
              className="btn"
              to={`/trips/${trip.trips._id}`}
            >
            <img src={trip.trips.tripImage} alt="Image" height="250" /> 
            </Link>
          </div>
        ))}
    </div>
  );
};

export default UserTripList;
