import React from 'react';
import {Text, View} from 'react-native';

import styles from './style';

const CovidMessage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Traver only if necessary</Text>
      <Text style={styles.text}>
        Upgrading this package often requires the font files linked to your
        project to do. Upgrading this package often.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;
