import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList} from 'react-native';
import GoalItem from './components/GoalItem'; 
import GoalInput from './components/GoalInput';

export default function App() {
	const [goals, setGoals] = useState([]);
	const [iter, setIter] = useState(0);
	const [addMode, isAddMode] = useState(false);
	const addGoal = (enteredGoal) => {
		if(enteredGoal.trim() !== '') {
			setIter(iter + 1);
			setGoals(current => [...current, {id: iter.toString(), goal: enteredGoal}]);
			isAddMode(false);
		}
	}

	const removeGoal = goalId => {
		setGoals(current => {
			return current.filter((goal) => {
				return goal.id !== goalId.toString();
			});
		});
	}

	const cancelAdd = () => {
		isAddMode(false);
	}

	return (
		<View style={styles.screen}>
			<Button title="Add goal" styles={styles.button} onPress={() => {isAddMode(true)}} />
			<GoalInput addGoal={addGoal} visible={addMode} onRet={cancelAdd} />
			<FlatList style={styles.list} keyExtractor={(item, index) => item.id} data={goals} renderItem={
				itemData => <GoalItem id={itemData.item.id} item={itemData.item} onDelete={removeGoal} /> 
			}/>
		</View>
  	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 50
	},
	list: {
		marginTop: 10
	}
});
