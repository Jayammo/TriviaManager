import * as React from 'react';
import { Card, Title, Paragraph, Divider } from 'react-native-paper';

const triviaQuestions = [
	{ question: 'How old are you?', answer: '30', OrderNumber: 1 },
	{ question: 'What time is it?', answer: '2pm', OrderNumber: 2 },
];
const QuestionsPage = () => {
	return triviaQuestions.map((x) => (
		<>
			<Card>
				<Card.Content>
					<Title>
						Question {x.OrderNumber}: {x.question}
					</Title>
					<Paragraph>Answer: {x.answer}</Paragraph>
				</Card.Content>
			</Card>
			<Divider />
		</>
	));
};

export default QuestionsPage;
