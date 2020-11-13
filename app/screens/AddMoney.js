import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ScreenStyles as styles } from './styles';
import Button from '../components/Button/Button';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';
import MoneySelector from '../components/MoneySelector/MoneySelector';

const AddMoney = ({ navigation }) => {
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
          <MoneySelector />
        </View>
        <View style={styles.footer}>
          <Button onPress={navigation.goBack} inverted label="Vorige" />
          <View style={styles.footerSpacer} />
          <Button label="Volgende" onPress={() => navigation.navigate('')} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddMoney;
