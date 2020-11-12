import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ScreenStyles as styles } from './styles';
import Button from '../components/Button/Button';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';
import TextInput from '../components/TextInput/TextInput';

const SelectCheckupBuddy = ({ navigation }) => {
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
          <TextInput label="E-MAIL CONTROLE BUDDY" type="email" />
        </View>
        <View style={styles.footer}>
          <Button onPress={navigation.goBack} inverted label="Vorige" />
          <View style={styles.footerSpacer} />
          <Button label="Volgende" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SelectCheckupBuddy;
