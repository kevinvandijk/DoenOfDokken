import React from 'react';
import { string, func } from 'prop-types';
import { TextInput as OriginalTextInput } from 'react-native';

import styles from './styles';

const TextInput = ({ label, type, value, onChange }) => {
  const autoCompleteType = type === 'email' ? 'email' : 'off';
  const keyboardType = type === 'email' ? 'email-address' : 'default';

  return (
    <OriginalTextInput
      style={styles.textInput}
      onChangeText={onChange}
      value={value}
      defaultValue={label.toUpperCase()}
      clearTextOnFocus={!value}
      keyboardType={keyboardType}
      autoCompleteType={autoCompleteType}
    />
  );
};

TextInput.propTypes = {
  label: string.isRequired,
  value: string,
  type: string,
  onChange: func,
};

TextInput.defaultProps = {
  type: 'text',
};

export default TextInput;
