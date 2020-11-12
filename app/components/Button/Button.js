import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>Button</Text>
    </TouchableOpacity>
  );
};

export default Button;
