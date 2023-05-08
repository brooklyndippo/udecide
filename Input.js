import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux'
import { addOption} from './Options'

const Input = () => {
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
      {/* <Button onPress={handleSubmit} title="Add option" /> */}
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
  }
});

export default Input;

