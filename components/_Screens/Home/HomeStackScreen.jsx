import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateTriviaScreen from '../Trivia/CreateTriviaScreen';
import HomeScreen from './HomeScreen';

const HomeStack = createNativeStackNavigator();
const HomeStackScreen = () => {
	return (
		<HomeStack.Navigator>
			<HomeStack.Screen
				name='Home'
				component={HomeScreen}
				options={{ title: 'Trivia' }}
			/>
			<HomeStack.Screen
				name='CreateTrivia'
				component={CreateTriviaScreen}
				options={{ title: 'Create Trivia Event' }}
			/>
		</HomeStack.Navigator>
	);
};

export default HomeStackScreen;
