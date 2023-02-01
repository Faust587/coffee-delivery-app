import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

export const ProfileIcon = () => {
  return (
    <View style={styles.imageStroke}>
      <View>
        <Image source={require('../../assets/images/temp-user-profile.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStroke: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#DCAA70',
    width: 50,
    height: 50,
    borderRadius: 50,
    padding: 2,
  },
});
