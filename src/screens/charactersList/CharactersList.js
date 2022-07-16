import React, {useEffect, useState} from 'react';

import {ScrollView, StyleSheet, useColorScheme, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import CharacterItem from '../../components/CharacterItem';
import {store} from '../../../App';
import FilterComponent from '../../components/FilterComponent';

export default () => {
  const isDarkMode = useColorScheme() === 'dark';
  const [filteredDataSource, setFilteredDataSource] = useState([]);

  let {characters} = store.getState().characters;
  // console.log(characters);

  useEffect(() => {
    setFilteredDataSource(characters);
  }, []);

  // console.log('Rendiring Characher List Screen');

  return (
    <View
      style={{
        backgroundColor: isDarkMode ? Colors.black : Colors.white,
        minHeight: '100%',
      }}>
      <FilterComponent
        dataSource={characters}
        filteredDataSource={filteredDataSource}
        setFilteredDataSource={setFilteredDataSource}
      />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles.container}>
          {/* {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((character, index) => ( */}
          {filteredDataSource.map((character, index) => (
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
    paddingTop: 10,
    paddingBottom: 130,
  },
});
