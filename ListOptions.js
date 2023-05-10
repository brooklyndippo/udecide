import { Pressable, View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

import { useDispatch } from 'react-redux'
import { deleteOption } from './Options'

export default function ListOptions() {
	const options = useSelector(state => state.options.value)
  const dispatch = useDispatch()

  function handleDelete(index) {
    dispatch(deleteOption(index));
  }

  const renderItem = ({ item, index }) => (
    <View style={styles.listItem}>
      <Text style={styles.listItemText}>{item}</Text>
      <Pressable style={styles.deleteButton} onPress={() => handleDelete(index)}><Text style={styles.deleteText}>x</Text></Pressable>
    </View>
  );

	return (
		<View>
			<FlatList 
				data={options}
				renderItem={(renderItem)}
				keyExtractor={(item) => item}
        style={{ marginTop: 16, maxHeight: 300 }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
  listItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 8,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  listItemText: {
    fontSize: 18,
    fontWeight: 'semibold',
    color: 'black',
  },
  deleteButton: {
    backgroundColor: 'black',
    borderRadius: 4,
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
    paddingVertical: 4,
    paddingHorizontal: 8,
  }
});
