import React, { useContext, useState } from 'react';
import { SafeAreaView, View } from 'react-native';

import { ScreenStyles as styles } from './styles';
import { GoalContext } from '../context/GoalContext';
import Button from '../components/Button/Button';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';
import MoneySelector from '../components/MoneySelector/MoneySelector';

const AddMoney = ({ navigation }) => {
  const { goal, dispatch } = useContext(GoalContext);
  const [money, onChangeMoney] = useState(goal.money);

  const saveValue = (value) => {
    dispatch({ type: 'SET_MONEY', money: value });
  };

  const previousScreen = () => {
    saveValue(money);
    navigation.goBack();
  };

  const nextScreen = () => {
    saveValue(money);
    navigation.navigate('SelectDeadline');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ScreenTitle
            mainText="Hoeveel geld zet je in?"
            subText="Je krijgt je geld alleen terug als je je doel hebt behaald."
          />
        </View>
        <View style={styles.body}>
          <MoneySelector value={money} onChange={onChangeMoney} />
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

export default AddMoney;
