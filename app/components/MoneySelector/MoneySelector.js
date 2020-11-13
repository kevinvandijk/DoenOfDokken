import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const MoneySelector = () => {
  return (
    <View style={styles.container}>
      <View style={styles.outerRing}>
        <View style={styles.innerRing}>
          <View style="innerRingBG" />
        </View>
        <Text style={styles.value}>€ 15.00</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.roundButtonLabel}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.roundButton}>
          <Text style={styles.roundButtonLabel}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MoneySelector;
