import React, { useContext } from 'react';
import { AuthContext } from '../context/auth-context';
import './Auth.css';
import Card from '../UI/Card';

const Auth = (props) => {
  const user = useContext(AuthContext);

  const submitHandler = () => {
    console.log(user.name);
    if (user.name) {
      user.setIsAuthenticated(!user.isAuthenticated);
    } else {
      alert('please enter your name');
    }
  };

  return (
    <div className="auth">
      <Card>
        <h2>Please Enter Your name:</h2>
        <div className="ui input">
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={(event) => {
              user.setName(event.target.value);
            }}
            required
            style={{ marginBottom: 10 }}
          />
        </div>
        <div>
          <button
            className="ui secondary button"
            id="Proceed"
            value={user.isAuthenticated}
            onClick={submitHandler}
          >
            Proceed
          </button>
        </div>
      </Card>
    </div>
  );
};

export default Auth;
