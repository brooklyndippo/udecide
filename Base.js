import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux'
import { addOption} from './Options'
import Input from './Input';
import ListOptions from './ListOptions';
import Decision from './Decision';

export default function Base() {
  return (
    <View style={{ padding: 16, backgroundColor: 'white' }}>
      <Input/>
      {/* <Button onPress={handleSubmit} title="Add option" /> */}
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
});
