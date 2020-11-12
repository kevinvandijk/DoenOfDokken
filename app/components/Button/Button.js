import React from 'react';
import { string } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ label }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: string.isRequired,
};

export default Button;
