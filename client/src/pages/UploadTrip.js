import React from 'react';
import TripForm from '../components/TripForm';
import '../index.css';

const UploadTrip = () => {
  return (
    <div className="row bg-light whiteCon btnRow p-5">
              <div className="col-12" style={{ border: "1px dotted #1a1a1a" }}>
                <TripForm />
              </div>
    </div>
);
}

export default UploadTrip;