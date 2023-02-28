import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {HomeHeader} from '../components/headers/HomeHeader';
import {SearchProduct} from '../components/inputs/SearchProduct';
import {ProductList} from '../components/product/list/ProductList';
import {ProductCategories} from '../components/product/categories/ProductCategories';
export const HomeScreen = () => {
  const styles = StyleSheet.create({
    mainContentWrapper: {
      paddingTop: 14,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });

  return (
    <SafeAreaView>
      <HomeHeader />
      <SearchProduct />
      <View style={styles.mainContentWrapper}>
        <ProductCategories />
        <ProductList />
      </View>
    </SafeAreaView>
  );
};
