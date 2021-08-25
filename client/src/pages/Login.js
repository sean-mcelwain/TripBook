import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import Auth from '../utils/auth';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <main>
      <div className="login-form">
        {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
            <form onSubmit={handleFormSubmit}>
                  <h2 className="text-left">Login</h2>   
                  <div className="form-group">
                    <input type="email" className="form-control" placeholder="Your email" name="email" value={formState.email} onChange={handleChange}></input>
                  </div>
                  <div className="form-group">
                      <input type="password" className="form-control" placeholder="******" name="password" value={formState.password} onChange={handleChange}></input>
                  </div>        
                  <div className="form-group">
                      <button type="submit" name="loginForm" className="btn btn-lg btn-block">Sign in</button>
                  </div>
              </form>
              )}

              {error && (
                <div className="bg-danger text-white">
                  {error.message}
                </div>
              )}
              <div className="hint-text">Don't have an account? <Link to="/signup">Sign up here!</Link></div>
          </div>
    </main>
  );
};

export default Login;
