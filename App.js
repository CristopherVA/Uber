import React from 'react';
import {StatusBar} from 'react-native';
// import Icon from 'react-native-vector-icons';

import HomeScreen from './src/screens/HomeScreen';


function App() {
  return (
    <>
      <StatusBar barStyle={'dark-content'} />
      <HomeScreen />
    </>
  );
}
export default App;
