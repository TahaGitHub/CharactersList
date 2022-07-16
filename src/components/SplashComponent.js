import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

export default () => {
  return (
    <View style={styles.loadingView}>
      <Text>Data Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  loadingView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
