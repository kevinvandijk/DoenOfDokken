import React from 'react';
import { string } from 'prop-types';
import { View, Text } from 'react-native';

import styles from './styles';

const ScreenTitle = ({ mainText, subText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{mainText}</Text>
      {subText && <Text style={styles.subText}>{subText}</Text>}
    </View>
  );
};

ScreenTitle.propTypes = {
  mainText: string.isRequired,
  subText: string,
};

export default ScreenTitle;
