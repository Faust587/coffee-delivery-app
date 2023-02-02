import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {SearchIcon} from '../../icons/SearchIcon';

export const SearchProduct = () => {
  const [iconOpacity, setIconOpacity] = useState(0.5);

  return (
    <View style={styles.searchWrapper}>
      <View style={styles.searchContainer}>
        <View>
          <SearchIcon color={'#EFE3C8'} size={20} opacity={iconOpacity} />
        </View>
        <View style={styles.searchInputWrapper}>
          <TextInput
            onFocus={() => setIconOpacity(1)}
            onBlur={() => setIconOpacity(0.5)}
            style={styles.searchInput}
            placeholder="Browse your favourite coffee..."
            placeholderTextColor="rgba(239, 227, 200, 0.5)"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchWrapper: {
    width: '100%',
    paddingHorizontal: 16,
    marginVertical: 'auto',
  },
  searchContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#171017',
    borderRadius: 10,
  },
  searchInput: {
    fontFamily: 'Rosarivo',
    color: '#EFE3C8',
    width: '100%',
  },
  searchInputWrapper: {
    flex: 1,
    paddingLeft: 20,
  },
});
