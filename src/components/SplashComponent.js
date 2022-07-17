import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export default () => {
  // console.log('Rendiring SplashComponent');
  return (
    <View style={styles.loadingView}>
      <Text style={styles.loadingText}>Data Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 25,
  },
});
