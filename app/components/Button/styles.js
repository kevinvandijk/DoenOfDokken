import { StyleSheet } from 'react-native';

const ButtonStyles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#2699fb',
    borderRadius: 4,
    backgroundColor: '#2699fb',
    paddingVertical: 18,
    alignItems: 'center',
  },

  containerInverted: {
    backgroundColor: '#fff',
  },

  label: {
    fontFamily: 'Arial',
    fontSize: 10,
    fontWeight: 'bold',
    lineHeight: 12,
    color: '#fff',
    textTransform: 'uppercase',
  },

  labelInverted: {
    color: '#2699fb',
  },
});

export default ButtonStyles;
