import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ProfileIcon} from '../../icons/ProfileIcon';

export const HomeHeader = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <View>
          <View>
            <Text style={styles.topText}>déjà</Text>
          </View>
          <View style={styles.bottomTextContainer}>
            <Text style={styles.bottomText}>Brew</Text>
          </View>
        </View>
        <View>
          <ProfileIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: 16,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomTextContainer: {
    marginTop: -20,
  },
  bottomText: {
    paddingLeft: 7,
    fontFamily: 'Rosarivo',
    fontSize: 48,
    color: '#EFE3C8',
  },
  topText: {
    fontFamily: 'Rosarivo',
    fontSize: 36,
    color: 'rgba(239, 227, 200, 0.5);',
  },
});
