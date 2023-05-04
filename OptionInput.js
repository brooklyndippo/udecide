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

const Options = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = () => {
    if (text.trim() === '') {
      Alert.alert('Error', 'Input field cannot be empty');
      return;
    }

    setItems((prevItems) => [...prevItems, { id: Date.now().toString(), text }]);
    setText('');
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item.text}</Text>
    </View>
  );

  return (
    <View style={{ padding: 16, backgroundColor: 'white' }}>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        placeholder="Option... "
      />
      <Button onPress={handleSubmit} title="Submit" />
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ marginTop: 16 }}
      />
      <Button title="Decide for me" />
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

