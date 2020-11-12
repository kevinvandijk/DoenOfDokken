import React from 'react';
import { string, bool, func } from 'prop-types';
import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

const Button = ({ label, inverted, compact, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        inverted ? styles.containerInverted : {},
        compact ? styles.containerCompact : {},
      ]}>
      <Text style={[styles.label, inverted ? styles.labelInverted : {}]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

Button.propTypes = {
  label: string.isRequired,
  onPress: func,
  inverted: bool,
  compact: bool,
};

Button.defaultProps = {
  inverted: false,
  compact: false,
};

export default Button;
