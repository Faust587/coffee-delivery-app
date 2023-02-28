import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Dispatch, FC} from 'react';

type TProps = {
  id: string;
  title: string;
  isActive: boolean;
  setActiveItem: Dispatch<string>;
};

export const ProductCategoriesItem: FC<TProps> = ({
  id,
  title,
  setActiveItem,
  isActive,
}) => {
  const styles = StyleSheet.create({
    text: {
      transform: [{rotate: '-90deg'}, {translateX: -10}, {translateY: -4}],
      height: 80,
      width: 100,
      textAlign: 'center',
      fontWeight: '400',
      fontSize: 16,
      fontFamily: 'Rosarivo',
      color: isActive ? '#EFE3C8' : 'rgba(239, 227, 200, 0.5)',
    },
    textWrapper: {
      width: 38,
      height: 100,
      marginVertical: 3,
    },
  });

  return (
    <View style={styles.textWrapper}>
      <TouchableOpacity onPress={() => setActiveItem(id)}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
