import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_TRIP } from '../../utils/mutations';
import { QUERY_TRIPS } from '../../utils/queries';

import Auth from '../../utils/auth';

const TripForm = () => {
  const [tripText, setTripText] = useState('');
  const [tripImage, setTripImage] = useState('');
  const [tripTitle, setTripTitle] = useState('');
  

  const [characterCount, setCharacterCount] = useState(0);
  
  const [addTrip, { error }] = useMutation(ADD_TRIP, {
    update(cache, { data: { addTrip } }) {
      try {
        const { trips } = cache.readQuery({ query: QUERY_TRIPS });

        cache.writeQuery({
          query: QUERY_TRIPS,
          data: { trips: [addTrip, ...trips] },
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addTrip({
        variables: {
          tripText,
          tripAuthor: Auth.getProfile().data.username,
          tripImage,
          tripTitle,
        },
      });

      setTripText('');
      setTripImage('');
      setTripTitle('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'tripText' && value.length <= 280) {
      setTripText(value);
      setCharacterCount(value.length);
    }
    if (name === 'tripImage' && value.length <= 280) {
      setTripImage(value);
      setCharacterCount(value.length);
    }
    if (name === 'tripTitle' && value.length <= 280) {
      setTripTitle(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div>
      <h3>Share your recent Trip!</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={` ${
              characterCount === 280 || error ? 'text-danger' : ''
            }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="">
              <textarea
                name="tripText"
                placeholder="Here's a new trip..."
                value={tripText}
                className="form-input"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="tripImage"
                placeholder="Here's a new IMAGE..."
                value={tripImage}
                className="form-input"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>

              <textarea
                name="tripTitle"
                placeholder="Here's a new Title..."
                value={tripTitle}
                className="form-input"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="">
              <button className="btn btn-primary btn-block" type="submit">
                Add Trip
              </button>
            </div>
            {error && (
              <div className="col-12 text-black">
                <b>Error: </b>{error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your trips. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default TripForm;
