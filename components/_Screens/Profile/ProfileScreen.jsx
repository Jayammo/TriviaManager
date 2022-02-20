import { Button, Text, View } from 'react-native';

const ProfileScreen = (props) => {
	const { navigation } = props;

	return (
		<View>
			<Text>Profile Screen: For a mister </Text>
			<Button title='Go to About page' onPress={() => {}} />
		</View>
	);
};

export default ProfileScreen;
