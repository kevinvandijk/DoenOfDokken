import React from 'react';
import { string } from 'prop-types';
import { TextInput as OriginalTextInput } from 'react-native';

import styles from './styles';

const TextInput = ({ label, type }) => {
  const [value, onChangeText] = React.useState(label.toUpperCase());

  const autoCompleteType = type === 'email' ? 'email' : 'off';
  const keyboardType = type === 'email' ? 'email-address' : 'default';

  return (
    <OriginalTextInput
      style={styles.textInput}
      onChangeText={(text) => onChangeText(text)}
      value={value}
      defaultValue={label.toUpperCase()}
      keyboardType={keyboardType}
      autoCompleteType={autoCompleteType}
    />
  );
};

TextInput.propTypes = {
  label: string.isRequired,
  type: string,
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
