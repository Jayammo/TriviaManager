import { Button, Text } from 'react-native';

const HomeScreen = (props) => {
	const { navigation } = props;
	return (
		<Button
			title='Go to Profile page'
			onPress={() => navigation.navigate('Profile', { name: 'Groot' })}
		/>
	);
};

export default HomeScreen;
