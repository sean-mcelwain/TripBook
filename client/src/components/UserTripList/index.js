import React from 'react';
import { Link } from 'react-router-dom';

const TripList = ({ trips, title }) => {
  if (!trips.length) {
    return <h3>No Trips Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {trips &&
        trips.map((trip) => (
          <div key={trip._id} className="card">
            <h4 className="card-header">
              {trip.tripTitle} <br />
            </h4>
            <Link
              className="btn"
              to={`/trips/${trip._id}`}
            >
            <img src={trip.tripImage} alt="Image" height="250" /> 
            </Link>
          </div>
        ))}
    </div>
  );
};

export default TripList;
