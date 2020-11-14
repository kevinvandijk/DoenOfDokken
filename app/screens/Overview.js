import React, { useContext } from 'react';
import { SafeAreaView, View, Text } from 'react-native';

import { ScreenStyles as styles, OverviewStyles } from './styles';
import { GoalContext } from '../context/GoalContext';
import Button from '../components/Button/Button';
import ScreenTitle from '../components/ScreenTitle/ScreenTitle';
import DateRangePicker from '../components/DateRangePicker/DateRangePicker';

const Overview = ({ navigation }) => {
  const { goal } = useContext(GoalContext);

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <View style={styles.header}>
          <ScreenTitle mainText="Overzicht" subText="Klopt alles?" />
        </View>
        <View style={styles.body}>
          <View style={OverviewStyles.descriptionContainer}>
            <Text style={OverviewStyles.descriptionLabel}>Doel:</Text>
            <Text style={OverviewStyles.descriptionText}>
              {goal.description}
            </Text>
          </View>
          <View style={OverviewStyles.spacer} />
          <View style={OverviewStyles.moneyContainer}>
            <Text style={OverviewStyles.moneyLabel}>Inzet</Text>
            <Text style={OverviewStyles.moneyText}>€ {goal.money}.00</Text>
          </View>
          <View style={OverviewStyles.spacer} />
          <DateRangePicker
            readOnly
            startDate={goal.startDate}
            endDate={goal.endDate}
          />
          <View style={OverviewStyles.spacer} />
          <View style={OverviewStyles.descriptionContainer}>
            <Text style={OverviewStyles.descriptionLabel}>
              Buddy e-mailadres:
            </Text>
            <Text style={OverviewStyles.descriptionText}>
              {goal.checkupBuddy}
            </Text>
          </View>
        </View>
        <View style={styles.footer}>
          <Button onPress={() => navigation.goBack()} inverted label="Vorige" />
          <View style={styles.footerSpacer} />
          <Button
            label="Betalen"
            onPress={() => navigation.navigate('PaymentReceived')}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Overview;
