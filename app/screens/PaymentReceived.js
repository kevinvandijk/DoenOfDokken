import React, { useContext } from 'react';
import { SafeAreaView, View } from 'react-native';

import { GoalContext } from '../context/GoalContext';
import { ScreenStyles as styles } from './styles';
import Button from '../components/Button/Button';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';

const PaymentReceived = ({ navigation }) => {
  const { dispatch } = useContext(GoalContext);
  const backToHome = () => {
    dispatch({ type: 'RESET' });
    navigation.navigate('Home');
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={[styles.container, styles.containerCentered]}>
        <View style={styles.header}>
          <ScreenTitle
            mainText="Betaald!"
            subText="Succes met het behalen van je doel!"
          />
        </View>
        <View style={styles.bodySpacer} />
        <View style={styles.footer}>
          <Button label="Naar start" onPress={backToHome} compact />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentReceived;
