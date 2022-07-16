import React, {useState} from 'react';

import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Checkbox} from 'react-native-paper';

export default ({dataSource, filteredDataSource, setFilteredDataSource}) => {
  const [search, setSearch] = useState('');
  const [checkedList, setcheckedList] = useState([1, 2, 3, 4, 5]);

  let checkboxs = [1, 2, 3, 4, 5, 'All'];

  const searchFilterFunction = (text, checkedbox) => {
    let _checkedList = [];
    if (checkedbox) {
      if (checkedbox === 'All') {
        _checkedList = [...checkboxs];
      } else if (!checkedList.includes(checkedbox)) {
        _checkedList = [...checkedList, checkedbox];
      } else {
        _checkedList = checkedList.filter(item => item !== checkedbox);
      }
      setcheckedList(_checkedList);
    }
    // console.log(text + ' ' + search + ' ' + checkedbox);
    if (text || (checkedbox && search)) {
      let _text = text || search;
      let __checkedList = checkedbox ? _checkedList : checkedList;
      // console.log(_text + ' ' + __checkedList);
      const newData = dataSource.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = _text.toUpperCase();
        return (
          itemData.indexOf(textData) > -1 &&
          item.appearance.some(v => __checkedList.includes(v))
        );
      });
      setFilteredDataSource(newData);
      setSearch(_text);
    } else if (checkedbox) {
      const newData = dataSource.filter(item =>
        item.appearance.some(v => _checkedList.includes(v)),
      );
      setFilteredDataSource(newData);
    } else {
      setFilteredDataSource(dataSource);
      setSearch(text);
    }
  };

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
