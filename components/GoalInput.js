import React, {useState} from 'react';
import { View, TextInput, StyleSheet, Button, Modal } from 'react-native';

const GoalInput = (props) => {
	const [enteredGoal, setGoal] = useState('');
	
	const buttonHandler = () => {
		props.addGoal(enteredGoal);
		setGoal('');
	}

    return (
		<Modal visible={props.visible} animationType='slide' >
			<View style={styles.inputContainer}>
				<TextInput placeholder="Your goal.." style={styles.input} onChangeText={(text) => setGoal(text)} value={enteredGoal} />
				<View style={styles.buttonPanel}>
					<View style={styles.button} >
						<Button title="CANCEL" color="red" onPress={props.onRet} />
					</View>
					<View style={styles.button} >
						<Button title="ADD" onPress={buttonHandler} />
					</View>
				</View>
			</View>
		</Modal>
    );
}

export default GoalInput;

const styles = StyleSheet.create({
	inputContainer: {
		flex: 1,
		justifyContent: 'center', 
		alignItems: 'center',
	},
	input: {
		width: '80%', 
		borderColor: 'black', 
		borderWidth: 1, 
		padding: 10,
		marginBottom: 10
	},
	buttonPanel: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		width: '60%'
	},
	button: {
		width: '40%'
	}
});