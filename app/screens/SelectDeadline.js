import React, { useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { ScreenStyles as styles } from './styles';
import Button from '../components/Button/Button';
import DateRangePicker from '../components/DateRangePicker/DateRangePicker';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';

const SelectDeadline = ({ navigation }) => {
  const today = new Date();

  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(null);

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
          <Button onPress={navigation.goBack} inverted label="Vorige" />
          <View style={styles.footerSpacer} />
          <Button
            label="Volgende"
            onPress={() => navigation.navigate('SelectCheckupBuddy')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectDeadline;
