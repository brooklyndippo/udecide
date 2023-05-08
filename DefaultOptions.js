import React from 'react';
import {
  View,
  Text, FlatList, TouchableOpacity,
  StyleSheet,
} from 'react-native';

import { useDispatch } from 'react-redux'
import { addOption} from './Options'

const defaultCuisines = [
  '🍕 Italian',
  '🌮 Mexican',
  '🥡 Chinese',
  '🍣 Japanese',
  '🍛 Indian',
  '🍜 Thai',
  '🥙 Greek',
  '🥐 French',
  '🥘 Spanish',
  '🍔 American',
  '🥗 Mediterranean',
  '🌯 Middle Eastern',
  '🍱 Korean',
  '🍲 Vietnamese',
  '🍖 Brazilian',
  '🍹 Caribbean',
  '🥨 German',
  '🥙 Turkish',
  '🍟 British',
  '🥟 Russian',
];

export default function DefaultOptions(props) {
  const dispatch = useDispatch()
  const { category, defaultOptions } = props
  console.log(defaultOptions)
  function handleAddDefault(item) {
    dispatch(addOption(item))
  }

  return (
    <View>
      <Text>Or choose from a list of {category}:</Text>
      <FlatList
        style={styles.defaultList}
        data={defaultOptions}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.defaultOptions}
            onPress={handleAddDefault.bind(this, item)}
          >
            <Text style={styles.listItemText}>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        horizontal={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  defaultList: {
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingTop: 18,
    paddingBottom: 24,
  },
  defaultOptions: {
    display: 'inline-block',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    paddingVertical: 6,
    paddingHorizontal: 12,
    marginRight: 8,
  }
});
