import React from 'react';

import {ScrollView, StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import CharacterItem from '../../components/CharacterItem';
import {store} from '../../../App';
import FilterComponent from '../../components/FilterComponent';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';

  let {characters} = store.getState().characters;
  // console.log(characters);

  console.log('Rendiring Characher List Screen');

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
      }}>
      <FilterComponent />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((character, index) => ( */}
          {characters.map((character, index) => (
            <CharacterItem key={index} character={character} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 17,
    paddingVertical: 10,
  },
});
