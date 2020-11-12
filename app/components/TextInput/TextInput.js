import React from 'react';
import { string } from 'prop-types';
import { TextInput as OriginalTextInput } from 'react-native';

import styles from './styles';

const TextInput = ({ label }) => {
  const [value, onChangeText] = React.useState(label);

  return (
    <OriginalTextInput
      style={styles.textInput}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      defaultValue={label.toUpperCase()}
    />
  );
};

TextInput.propTypes = {
  label: string.isRequired,
};

export default TextInput;
