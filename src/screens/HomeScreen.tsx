import React from 'react';
import {SafeAreaView} from 'react-native';
import {HomeHeader} from '../components/headers/HomeHeader';
import {SearchProduct} from '../components/inputs/SearchProduct';

export const HomeScreen = () => {
  return (
    <SafeAreaView>
      <HomeHeader />
      <SearchProduct />
    </SafeAreaView>
  );
};
