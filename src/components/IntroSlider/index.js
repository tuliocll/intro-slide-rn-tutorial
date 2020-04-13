import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

import PageOne from './pageOne';

export default function IntroSlider() {
  return (
    <View style={style.container}>
      <PageOne />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
});
