import React from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';

import {Checkbox} from 'react-native-paper';

export default ({searchFilterFunction, search, checkboxs, checkedList}) => {
  // console.log('Rendiring FilterComponentView');
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInputStyle}
        onChangeText={text => searchFilterFunction(text, null)}
        value={search}
        underlineColorAndroid="transparent"
        placeholder="Search Here"
      />

      <Text>Filter By Appearance</Text>
      <View style={styles.checkboxsStyle}>
        {checkboxs.map((checkbox, index) => (
          <View style={styles.checkboxStyle} key={index}>
            <Text style={styles.checkboxStyle.text}>{checkbox}</Text>
            <Checkbox
              status={
                checkedList.includes(checkbox) && checkbox !== 'All'
                  ? 'checked'
                  : 'unchecked'
              }
              onPress={() => searchFilterFunction(null, checkbox)}
            />
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  textInputStyle: {
    width: '90%',
    height: 60,
    fontSize: 23,
    borderColor: 'blue',
    opacity: 0.5,
    borderWidth: 2,
    borderRadius: 10,
    marginVertical: 10,
    textAlign: 'center',
  },

  checkboxsStyle: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkboxStyle: {
    flexDirection: 'row',
    alignItems: 'center',

    text: {
      fontSize: 17,
    },
  },
});
