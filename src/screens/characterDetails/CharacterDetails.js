import React from 'react';

import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default ({route}) => {
  const isDarkMode = useColorScheme() === 'dark';

  const {character} = route.params;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: isDarkMode ? Colors.black : Colors.white,
        },
      ]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={styles._container}>
          <View style={styles.image}>
            {character.img ? (
              <Image
                style={styles.image.photoStyle}
                source={{
                  uri: character.img,
                }}
              />
            ) : (
              <Icon
                style={styles.image.iconStyle}
                name={'person'}
                size={140}
                color="#900"
              />
            )}
          </View>

          <View style={styles.textsGroup}>
            <Text style={styles.textView.lableText}>Name</Text>
            <Text style={styles.textView.dataText}>
              {character.name || '---'}
            </Text>

            {character.appearance.length > 0 && (
              <>
                <Text style={styles.textView.lableText}>{'\n'}Occupation</Text>
                {character.occupation.map((occupation, index) => (
                  <Text key={index} style={styles.textView.dataText}>
                    {occupation}
                  </Text>
                ))}
              </>
            )}

            <Text style={styles.textView.lableText}>{'\n'}Status</Text>
            <Text
              style={[
                styles.textView.dataText,
                {
                  color: character.status.includes('live') ? 'green' : 'red',
                },
                ,
              ]}>
              {character.status || '---'}
            </Text>

            <Text style={styles.textView.lableText}>{'\n'}Nickname</Text>
            <Text style={styles.textView.dataText}>
              {character.nickname || '---'}
            </Text>

            {character.appearance.length > 0 && (
              <>
                <Text style={styles.textView.lableText}>{'\n'}Appearance</Text>
                <View style={styles.appearanceStyle}>
                  {character.appearance.map((appearance, index) => (
                    <Text
                      key={index}
                      style={[
                        styles.textView.dataText,
                        styles.appearanceItemStyle,
                      ]}>
                      {appearance}
                    </Text>
                  ))}
                </View>
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  _container: {
    marginBottom: 20,
    paddingTop: '10%',
    alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    padding: 5,
    width: 150,
    height: 150,
    marginHorizontal: 35,

    iconStyle: {
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
  },
  textsGroup: {
    flex: 1,
    marginTop: 15,
  },
  textView: {
    lableText: {
      textAlign: 'center',
      fontSize: 18,
    },
    dataText: {
      fontSize: 20,
      textAlign: 'center',
      fontWeight: 'bold',
      color: 'black',
    },
  },
  appearanceStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  appearanceItemStyle: {
    marginHorizontal: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderColor: 'gray',
  },
});
