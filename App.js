import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import AboutScreen from './components/_Screens/About/AboutScreen';
import HomeStackScreen from './components/_Screens/Home/HomeStackScreen';
import ProfileScreen from './components/_Screens/Profile/ProfileScreen';
import QuestionsPage from './components/_Screens/Questions/QuestionsPage';
import AppProvider from './components/_Shared/AppProvider';

const Tab = createBottomTabNavigator();

export default function App() {
	return (
		<AppProvider>
			<NavigationContainer>
				<Tab.Navigator>
					<Tab.Screen
						name='Root'
						component={HomeStackScreen}
						options={{ headerShown: false }}
					/>
					<Tab.Screen name='Profile' component={ProfileScreen} />
					<Tab.Screen name='About' component={AboutScreen} />
					<Tab.Screen name='Question' component={QuestionsPage} />
				</Tab.Navigator>
			</NavigationContainer>
		</AppProvider>
	);
}
