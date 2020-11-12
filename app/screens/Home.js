import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import Pie from 'react-native-pie';

import { HomeStyles as style } from './styles';
import Button from '../components/Button/Button';

const Home = () => {
  return (
    <View style={style.container}>
      <View style={style.background} />
      <SafeAreaView style={style.safeContainer}>
        <View style={style.header}>
          <Text style={style.headerText}>Doen of Dokken</Text>
          <Text style={style.headerSubText}>
            De angst om te verliezen als motivatie.
          </Text>
        </View>
        <View style={style.content}>
          <Pie
            radius={80}
            sections={[
              {
                percentage: 35,
                color: '#2699fb',
              },
              {
                percentage: 65,
                color: '#bce0fd',
              },
            ]}
            strokeCap={'butt'}
          />
        </View>
        <View style={style.footer}>
          <Button label="Begin" />
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Home;
