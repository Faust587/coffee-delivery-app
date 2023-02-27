import {StyleSheet, Text, View} from 'react-native';

export const ProductList = () => {
  return (
    <View style={styles.listWrapper}>
      <View>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
        <Text>Coffeeeeee</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  listWrapper: {
    height: '100%',
    paddingTop: 14,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  categories: {
    backgroundColor: 'rgba(112, 67, 65, 0.3);',
    paddingTop: 35,
    width: 76,
    marginLeft: -38,
    borderRadius: 40,
    alignItems: 'flex-end',
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
  },
  textWrapper: {
    width: 38,
    height: 100,
    marginVertical: 3,
  },
});
