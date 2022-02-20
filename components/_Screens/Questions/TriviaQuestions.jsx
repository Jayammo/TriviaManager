import * as React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';

const TriviaQuestions = (props) => {
	const { questions } = props;
	return questions.map((x) => (
		<View style={styles.card}>
			<TouchableOpacity>
				<Card mode='elevated' elevation={5}>
					<Card.Content>
						<Title>
							Question {x.OrderNumber}: {x.question}
						</Title>
						<Paragraph>Answer: {x.answer}</Paragraph>
					</Card.Content>
				</Card>
			</TouchableOpacity>
		</View>
	));
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		padding: 15,
	},
});

export default TriviaQuestions;
