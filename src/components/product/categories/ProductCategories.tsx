import React, {useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {ProductCategoriesItem} from './item/ProductCategoriesItem';

const mockData: {title: string; id: string}[] = [
  {id: 'a7a4f1be-a311-11ed-a8fc-0242ac120002', title: 'Cappuccino'},
  {id: 'a7a4f560-a311-11ed-a8fc-0242ac120002', title: 'Latte'},
  {id: 'a7a4f6f0-a311-11ed-a8fc-0242ac120002', title: 'Americano'},
  {id: 'a7a4f89e-a311-11ed-a8fc-0242ac120002', title: 'Espresso'},
  {id: 'a7a4fc90-a311-11ed-a8fc-0242ac120002', title: 'Flat White'},
];

export const ProductCategories = () => {
  const [activeItem, setActiveItem] = useState(mockData[0].id);

  return (
    <View style={styles.categories}>
      <FlatList
        data={mockData}
        renderItem={({item}) => (
          <ProductCategoriesItem
            id={item.id}
            setActiveItem={setActiveItem}
            title={item.title}
            isActive={item.id === activeItem}
          />
        )}
        keyExtractor={item => item.id}
        ListFooterComponent={<View />}
        ListFooterComponentStyle={{height: 280}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  categories: {
    backgroundColor: 'rgba(112, 67, 65, 0.3);',
    paddingTop: 35,
    width: 76,
    marginLeft: -38,
    borderRadius: 40,
    alignItems: 'flex-end',
  },
  listWrapper: {
    paddingTop: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  text: {
    transform: [{rotate: '-90deg'}],
    height: 80,
    width: 100,
    textAlign: 'center',
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Rosarivo',
    color: '#EFE3C8',
    backgroundColor: 'red',
  },
  textWrapper: {
    width: 38,
    height: 100,
    marginVertical: 3,
    backgroundColor: 'pink',
  },
});
