import {useNavigation} from '@react-navigation/native';
import React from 'react';

import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({character}) => {
  const navigation = useNavigation();

  const handleCharacterDetails = () => {
    navigation.navigate('Character Details', {
      character: character,
    });
  };

  // console.log('Rendiring Characher item');

  return (
    <TouchableOpacity onPress={handleCharacterDetails}>
      <View style={[styles.container, styles.shadowProp]}>
        <View style={styles.photoViewStyle}>
          {character.img ? (
            <Image
              style={styles.photoStyle}
              source={{
                uri: character.img,
              }}
            />
          ) : (
            <Icon
              style={styles.iconStyle}
              name={'person'}
              size={85}
              color="#900"
            />
          )}
        </View>
        <Text style={styles.textStyle}>
          {character.name.length > 20
            ? character.name.substring(0, 18) + '.'
            : character.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',

    height: 125,
    marginBottom: 15,
    borderRadius: 10,
  },
  shadowProp: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 3,
  },

  photoViewStyle: {
    padding: 5,

    width: 100,
    height: 100,

    marginHorizontal: 35,

    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 50,
  },
  photoStyle: {
    flex: 1,
    borderRadius: 50,

    resizeMode: 'center',
    alignItems: 'center',
  },
  iconStyle: {},
  textStyle: {
    fontSize: 20,
    color: 'black',
  },
});
