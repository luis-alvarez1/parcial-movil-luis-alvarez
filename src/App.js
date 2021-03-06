import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Navigator } from './components/Navigator/Navigator';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </>
  );
};

export default App;
