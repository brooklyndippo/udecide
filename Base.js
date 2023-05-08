import React from 'react';
import {
  View,
  Text, FlatList, TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Input from './Input';
import ListOptions from './ListOptions';
import Decision from './Decision';
import DefaultOptions from './DefaultOptions';

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

export default function Base() {
  return (
    <View style={{ padding: 16, backgroundColor: 'white' }}>
      <Input/>
      <DefaultOptions/>
      <ListOptions/>
      <Decision/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  listItemText: {
    fontSize: 16,
  },
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
