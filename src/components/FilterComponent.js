import React from 'react';

import {StyleSheet, Text} from 'react-native';

export default ({route}) => {
  return <Text style={styles.container}>Search Component</Text>;
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});
