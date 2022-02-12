import * as React from 'react';
import { StyleSheet } from 'react-native';
import TriviaQuestions from './TriviaQuestions';
import { FAB } from 'react-native-paper';

const questions = [
	{ question: 'How old are you?', answer: '30', OrderNumber: 1 },
	{ question: 'What time is it?', answer: '2pm', OrderNumber: 2 },
];

const QuestionsPage = () => {
	return (
		<>
			<TriviaQuestions questions={questions} />
			<FAB
				style={styles.fab}
				small
				icon='plus'
				onPress={() => console.log('Pressed')}
			/>
		</>
	);
};

const styles = StyleSheet.create({
	fab: {
		position: 'absolute',
		margin: 16,
		right: 0,
		bottom: 0,
	},
});
export default QuestionsPage;
