import React, { useState } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux'
import { addOption} from './Options'
import * as DOMPurify from 'dompurify'

const Input = () => {
  const [text, setText] = useState('');

  const dispatch = useDispatch()

  function handleKeyPress(e) {
    if (e.nativeEvent.key === 'Enter' || e.nativeEvent.key === 'Return') {
      handleSubmit()
    }
  }

  function handleSubmit() {
    const sanitizedInput = DOMPurify.sanitize(text);
    dispatch(addOption(sanitizedInput))
    setText('')
  }

  return (
    <View>
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

