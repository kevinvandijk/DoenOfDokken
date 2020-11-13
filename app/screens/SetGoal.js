import React, { useContext, useState } from 'react';
import { SafeAreaView, View, Alert } from 'react-native';

import { ScreenStyles as styles } from './styles';
import { GoalContext } from '../context/GoalContext';
import Button from '../components/Button/Button';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';
import TextInput from '../components/TextInput/TextInput';

const SetGoal = ({ navigation }) => {
  const { goal, dispatch } = useContext(GoalContext);
  const [goalDescription, onChangeGoalDescription] = useState(goal.description);

  const saveValue = (description) => {
    dispatch({ type: 'SET_GOAL_DESCRIPTION', description });
  };

  const previousScreen = () => {
    saveValue(goalDescription || null);

    navigation.goBack();
  };

  const nextScreen = () => {
    if (!goalDescription) {
      Alert.alert('Geen doel ingevuld', 'Vul een doel in om verder te gaan.');
      return;
    }

    saveValue();
    navigation.navigate('AddMoney');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ScreenTitle
            mainText="Aan welk doel wil je werken?"
            subText="Beschrijf het doel waar je aan wilt werken in 1 zin."
          />
        </View>
        <View style={styles.body}>
          <TextInput
            label="Je doel"
            value={goalDescription}
            onChange={(text) => onChangeGoalDescription(text)}
          />
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

export default SetGoal;
