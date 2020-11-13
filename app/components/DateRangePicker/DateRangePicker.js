import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  NativeModules,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

import styles from './styles';

let locale = 'en';
if (Platform.OS === 'ios') {
  locale = (
    NativeModules.SettingsManager.settings.AppleLocale ||
    NativeModules.SettingsManager.settings.AppleLanguages[0]
  ).replace(/_/, '-');
}

if (Platform.OS === 'android') {
  locale = NativeModules.I18nManager.localeIdentifier.replace(/_/, '-');
}

const DateRangePicker = () => {
  const today = new Date();
  const defaultEndDate = new Date(today);
  defaultEndDate.setDate(defaultEndDate.getDate() + 7);

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(null);
  const [showPicker, setShowPicker] = useState('none');

  const onChange = (event, selectedDate) => {
    // A bit speedier if we close it first, then do the rest of the state updates:
    const type = showPicker;
    setShowPicker('none');

    if (type === 'start') {
      setStartDate(selectedDate || startDate);
      if (selectedDate && endDate && selectedDate > endDate) {
        setEndDate(null);
      }
    } else if (type === 'end') {
      setEndDate(selectedDate || endDate);
    }
  };

  const showStartPicker = () => {
    setShowPicker('start');
  };

  const showEndPicker = () => {
    setShowPicker('end');
  };

  const startLabel = new Intl.DateTimeFormat(locale).format(startDate);
  const endLabel = endDate
    ? new Intl.DateTimeFormat(locale).format(endDate)
    : '-';

  return (
    <View style={styles.container}>
      <View style={styles.datePickerContainer}>
        <View style={styles.datePicker}>
          <Text style={styles.labelText}>Begindatum</Text>
          <TouchableOpacity
            onPress={showStartPicker}
            style={styles.datePickerFieldContainer}>
            <Text style={styles.datePickerFieldText}>{startLabel}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.spacer} />
        <View style={styles.datePicker}>
          <Text style={styles.labelText}>Einddatum</Text>
          <TouchableOpacity
            onPress={showEndPicker}
            style={styles.datePickerFieldContainer}>
            <Text style={styles.datePickerFieldText}>{endLabel}</Text>
          </TouchableOpacity>
        </View>
      </View>
      {showPicker !== 'none' && (
        <View style={styles.overlay}>
          <DateTimePicker
            value={
              showPicker === 'start' ? startDate : endDate || defaultEndDate
            }
            is24Hour={true}
            display={Platform.OS === 'ios' ? 'inline' : 'calendar'}
            onChange={onChange}
            textColor="#2699FB"
            minimumDate={showPicker === 'end' ? startDate : today}
          />
        </View>
      )}
    </View>
  );
};

export default DateRangePicker;
