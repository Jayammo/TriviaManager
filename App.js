import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListView from './components/ListView/ListView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/_Screens/Home/HomeScreen';
import ProfileScreen from './components/_Screens/Profile/ProfileScreen';
import AboutScreen from './components/_Screens/About/AboutScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='Home'
					component={HomeScreen}
					options={{ title: 'Welcome' }}
				/>
				<Stack.Screen name='Profile' component={ProfileScreen} />
				<Stack.Screen name='About' component={AboutScreen} />
			</Stack.Navigator>
		</NavigationContainer>
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
