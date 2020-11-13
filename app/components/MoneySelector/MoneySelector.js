import React from 'react';
import { number, func } from 'prop-types';
import { View, Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const MoneySelector = ({ value, onChange }) => {
  const increaseValue = () => {
    onChange(value + 1);
  };

  const decreaseValue = () => {
    onChange(value - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.outerRing}>
        <View style={styles.innerRing}>
          <View style="innerRingBG" />
        </View>
        <Text style={styles.value}>€ {value}.00</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={decreaseValue} style={styles.roundButton}>
          <Text style={styles.roundButtonLabel}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={increaseValue} style={styles.roundButton}>
          <Text style={styles.roundButtonLabel}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

MoneySelector.propTypes = {
  value: number.isRequired,
  onChange: func,
};

MoneySelector.defaultProps = {
  onChange: () => {},
};

export default MoneySelector;
