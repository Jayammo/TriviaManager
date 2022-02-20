import React from 'react';
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

const AddQuestion = (props) => {
	const [text, onChangeText] = React.useState('Useless Text');
	return (
		<SafeAreaView>
			<TextInput
				multiline
				numberOfLines={4}
				style={styles.input}
				onChangeText={onChangeText}
				value={text}
			/>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	input: {
		height: 40,
		margin: 12,
		borderWidth: 1,
		padding: 10,
	},
});

export default AddQuestion;
