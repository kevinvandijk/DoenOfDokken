import React, { useState, useContext } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';

import { GoalContext } from '../context/GoalContext';
import { ScreenStyles as styles } from './styles';
import Button from '../components/Button/Button';
import DateRangePicker from '../components/DateRangePicker/DateRangePicker';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';

const SelectDeadline = ({ navigation }) => {
  const { goal, dispatch } = useContext(GoalContext);
  const [startDate, setStartDate] = useState(goal.startDate);
  const [endDate, setEndDate] = useState(goal.endDate);

  const saveValues = (startDateValue, endDateValue) => {
    dispatch({
      type: 'SET_DATES',
      startDate: startDateValue,
      endDate: endDateValue,
    });
  };

  const previousScreen = () => {
    saveValues(startDate, endDate);
    navigation.goBack();
  };

  const nextScreen = () => {
    if (!endDate) {
      Alert.alert(
        'Geen einddatum ingevuld',
        'Vul de einddatum van je doel in om verder te gaan.',
      );
      return;
    }
    saveValues(startDate, endDate);
    navigation.navigate('SelectCheckupBuddy');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ScreenTitle
            mainText="Wanneer moet je doel gehaald zijn?"
            subText="Je krijgt je geld alleen terug als je je doel hebt behaald."
          />

          <View style={[styles.body, { marginTop: 100 }]}>
            <DateRangePicker
              startDate={startDate}
              changeStartDate={setStartDate}
              endDate={endDate}
              changeEndDate={setEndDate}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <Button onPress={previousScreen} inverted label="Vorige" />
          <View style={styles.footerSpacer} />
          <Button label="Volgende" onPress={nextScreen} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectDeadline;
