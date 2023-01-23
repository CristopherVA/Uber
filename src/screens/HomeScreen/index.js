import React from 'react';
import {Text, View} from 'react-native';

import HomeMap from '../../components/HomeMap';
import CovidMessage from '../../components/CovidMessage';
import HomeSearch from '../../components/HomeSearch';

const HomeScreen = props => {
  return (
    <View>
      {/* Map */}
      <HomeMap />

      {/* Covid Message */}
      <CovidMessage />
      
      {/* Bottom Comp */}
      <HomeSearch />
    </View>
  );
};

export default HomeScreen;
