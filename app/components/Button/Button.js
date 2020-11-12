import React from 'react';
import { string, bool } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ label, inverted }) => {
  return (
    <TouchableOpacity
      style={[styles.container, inverted ? styles.containerInverted : {}]}>
      <Text style={[styles.label, inverted ? styles.labelInverted : {}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: string.isRequired,
  inverted: bool,
};

Button.defaultProps = {
  inverted: false,
};

export default Button;
