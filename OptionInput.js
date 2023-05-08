import React, { useState } from 'react';
import {
  View,
  TextInput,
  Button,
  Alert,
  FlatList,
  Text,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux'
import { addOption} from './Options'
import ListOptions from './ListOptions';
import Decision from './Decision';

const Options = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch()

  function handleKeyPress(e) {
    if (e.nativeEvent.key === 'Enter' || e.nativeEvent.key === 'Return') {
      handleSubmit()
    }
  }

  function handleSubmit() {
    dispatch(addOption(text))
    setText('')
  }

  return (
    <View style={{ padding: 16, backgroundColor: 'white' }}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Option... "
        onKeyPress={handleKeyPress}
        returnKeyType='send'
        onSubmitEditing={handleSubmit}
      />
      <Button onPress={handleSubmit} title="Add option" />
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

export default Options;

