/* import React, { useState } from 'react';

export const AuthContext = React.createContext();

const AuthContextProvider = (props) => {
  const [userName, setUserName] = useState('');
  const [submit, isSubmit] = useState(false);

  return (
    <AuthContext.Provider value={{ userName, setUserName, submit, isSubmit }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
 */

import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [name, setName] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider
      value={{ name, isAuthenticated, setName, setIsAuthenticated }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
