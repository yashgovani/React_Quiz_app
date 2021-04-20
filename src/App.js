import React, { useContext } from 'react';
import Auth from './components/Auth';
import Quiz from './components/Quiz/Quiz';
//import Header from './components/Header/Header';
import { AuthContext } from './context/auth-context';

const App = (props) => {
  const user = useContext(AuthContext);

  let content = <Auth />;
  if (user.isAuthenticated) {
    content = (
      <div>
        <Quiz />
      </div>
    );
  }
  return content;
};

export default App;
