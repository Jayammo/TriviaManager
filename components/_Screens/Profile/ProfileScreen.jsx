import { Button, Text, View } from 'react-native';

const ProfileScreen = (props) => {
	const { navigation, route } = props;
	return (
		<View>
			<Text>Profile Screen: For a mister {route.params.name}</Text>
			<Button
				title='Go to About page'
				onPress={() => navigation.navigate('About')}
			/>
		</View>
	);
};

export default ProfileScreen;
