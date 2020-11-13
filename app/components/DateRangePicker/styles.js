import { StyleSheet } from 'react-native';

const DatePickerStyles = StyleSheet.create({
  container: {
    position: 'relative',
  },

  datePickerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  datePicker: {
    flex: 1,
  },

  spacer: {
    width: 16,
  },

  labelText: {
    marginBottom: 9,
    fontFamily: 'Arial',
    fontSize: 14,
    fontWeight: 'bold',
    lineHeight: 16,
    color: '#2699fb',
  },

  datePickerFieldContainer: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#bce0fd',
    backgroundColor: '#fff',
  },

  datePickerFieldText: {
    fontFamily: 'Arial',
    fontSize: 14,
    lineHeight: 14,
    color: '#2699FB',
  },

  overlay: {
    position: 'absolute',
    top: 0,
    width: '100%',
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#bce0fd',
  },
});

export default DatePickerStyles;
