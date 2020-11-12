import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ScreenStyles as styles } from './styles';
import Button from '../components/Button/Button';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';
import TextInput from '../components/TextInput/TextInput';

const PaymentReceived = ({ navigation }) => {
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
          <Button
            label="Naar overzicht"
            onPress={() => navigation.navigate('Home')}
            compact
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default PaymentReceived;
