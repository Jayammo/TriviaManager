import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import AboutScreen from './components/_Screens/About/AboutScreen';
import HomeScreen from './components/_Screens/Home/HomeScreen';
import ProfileScreen from './components/_Screens/Profile/ProfileScreen';
import QuestionsPage from './components/_Screens/Questions/QuestionsPage';
import AppProvider from './components/_Shared/AppProvider';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<AppProvider>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen
						name='Home'
						component={HomeScreen}
						options={{ title: 'Welcome' }}
					/>
					<Stack.Screen name='Profile' component={ProfileScreen} />
					<Stack.Screen name='About' component={AboutScreen} />
					<Stack.Screen name='Question' component={QuestionsPage} />
				</Stack.Navigator>
			</NavigationContainer>
		</AppProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
