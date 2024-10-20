import * as React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name='SignIn'
					component={SignIn}
					options={{
						headerShown: false,
						presentation: 'modal',
						animationTypeForReplace: 'push',
						animation: 'slide_from_right'
					}}
				/>

				<Stack.Screen
					name='Home'
					component={Home}
					options={{
						headerShown: false,
						presentation: 'modal',
						animationTypeForReplace: 'push',
						animation: 'slide_from_right'
					}}
				/>

				<Stack.Screen
					name='AboutUs'
					component={AboutUs}
					options={{
						headerShown: false,
						presentation: 'modal',
						animationTypeForReplace: 'push',
						animation: 'slide_from_left'
					}}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

registerRootComponent(App);