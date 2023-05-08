import { View, Text, FlatList, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'

export default function ListOptions() {
	const options = useSelector(state => state.options.value)

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <Text >{item}</Text>
    </View>
  );

	return (
		<View>
			<FlatList 
				data={options}
				renderItem={(renderItem)}
				keyExtractor={(item) => item}
        style={{ marginTop: 16 }}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
  listItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  listItemText: {
    fontSize: 16,
    color: 'black',
  },
});
