import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [addUser, { error, data }] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);

    try {
      const { data } = await addUser({
        variables: { ...formState },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="signup-form mt-5">
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
            <form method="post">
                <h2 className="text-start">Sign Up</h2>

                
                <div className="form-group">
                    <input type="text" className="form-control"  placeholder="Your username" name="username" type="text" value={formState.name} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your email" name="email" type="email" value={formState.email} onChange={handleChange}></input>
                </div>
                <div className="form-group">
                    <input type="password" className="form-control" placeholder="******" name="password" type="password" value={formState.password} onChange={handleChange}></input>
                </div>      
                <div className="form-group">
                    <button type="submit" name="userLoginForm" className="regBtn btn btn-primary btn-lg">Sign Up</button>
                </div>
            </form>
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
            <div className="hint-text">Already have an account? <Link to="/login">Login here</Link></div>
        </div>
    </main>
  );
};

export default Signup;
