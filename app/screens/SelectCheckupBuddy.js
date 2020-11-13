import React, { useContext, useState } from 'react';
import { Alert, SafeAreaView, View } from 'react-native';

import { ScreenStyles as styles } from './styles';
import { GoalContext } from '../context/GoalContext';
import Button from '../components/Button/Button';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';
import TextInput from '../components/TextInput/TextInput';

const SelectCheckupBuddy = ({ navigation }) => {
  const { goal, dispatch } = useContext(GoalContext);
  const [checkupBuddy, onChangeCheckupBuddy] = useState(goal.checkupBuddy);

  const saveValue = (value) => {
    dispatch({ type: 'SET_CHECKUP_BUDDY', checkupBuddy: value });
  };

  const previousScreen = () => {
    if (checkupBuddy) {
      saveValue(checkupBuddy);
    }

    navigation.goBack();
  };

  const nextScreen = () => {
    if (!checkupBuddy) {
      Alert.alert(
        'Geen controle buddy ingevuld',
        'Vul het e-mailadres van je controle buddy in om verder te gaan.',
      );
      return;
    }

    saveValue(checkupBuddy);
    navigation.navigate('PaymentReceived');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ScreenTitle
            mainText="Wie gaat je controleren?"
            subText="Laat het e-mailadres achter van je controle buddy."
          />
        </View>
        <View style={styles.body}>
          <TextInput
            label="E-MAIL CONTROLE BUDDY"
            type="email"
            onChange={onChangeCheckupBuddy}
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

export default SelectCheckupBuddy;
