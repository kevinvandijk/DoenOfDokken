import React from 'react';
import { SafeAreaView, View } from 'react-native';

import { ScreenStyles as styles } from './styles';
import Button from '../components/Button/Button';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';
import TextInput from '../components/TextInput/TextInput';

const SetGoal = () => {
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
          <TextInput label="Je doel" />
        </View>
        <View style={styles.footer}>
          <Button inverted label="Vorige" />
          <View style={styles.footerSpacer} />
          <Button label="Volgende" />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SetGoal;
