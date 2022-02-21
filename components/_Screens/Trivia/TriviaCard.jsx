import { StyleSheet } from 'react-native';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';

const LeftContent = (props) => (
	<Avatar.Icon {...props} icon='book-open-page-variant' />
);

const TriviaCard = ({ trivia }) => {
	return (
		<Card style={styles.card} mode='elevated' elevation={5}>
			<Card.Title
				title={trivia.EventTitle}
				subtitle={new Intl.DateTimeFormat('en-US', {
					year: 'numeric',
					month: 'numeric',
					day: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
				}).format(new Date())}
				left={LeftContent}
			/>
			<Card.Content>
				<Paragraph>{trivia.Description}</Paragraph>
			</Card.Content>
		</Card>
	);
};

const styles = StyleSheet.create({
	card: {
		backgroundColor: '#fff',
		margin: 15,
	},
});

export default TriviaCard;
