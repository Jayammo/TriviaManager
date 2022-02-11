import { Button, Text } from 'react-native';

const HomeScreen = (props) => {
	const { navigation } = props;
	return (
		<Button
			title='Go to Question page'
			onPress={() => navigation.navigate('Question')}
		/>
	);
};

export default HomeScreen;
