import React from 'react';
import '../index.css';

const Search = () => {
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