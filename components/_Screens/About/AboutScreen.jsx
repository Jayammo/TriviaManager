import { Button, Text, View } from 'react-native';

const AboutScreen = (props) => {
	const { navigation } = props;
	return (
		<View>
			<Text>About Screen</Text>
			<Button
				title='Go to Home page'
				onPress={() => navigation.navigate('Home')}
			/>
		</View>
	);
};

export default AboutScreen;
