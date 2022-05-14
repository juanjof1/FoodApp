import React from 'react';
import { LoginButton } from "../react-log-in/componets/Login";
import { LogoutButton } from "../react-log-in/componets/Logout";
import { Profile } from "./Profile";
import { NavigationContainer } from '@react-navigation/native'
import HomeStackNavigator from './src/navigations/Navigator'

import './config/firebase';
import 'react-native-gesture-handler';

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
      <NavigationContainer>
      <HomeStackNavigator/>
    </NavigationContainer>
  </div>
  );

}

export default App;


