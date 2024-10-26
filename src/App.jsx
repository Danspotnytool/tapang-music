import * as React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';

import SignIn from './pages/SignIn';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';

import Artist from './pages/dynamic/Artist';
import Album from './pages/dynamic/Album';
import Song from './pages/dynamic/Song';

LogBox.ignoreLogs([
	'Non-serializable values were found in the navigation state',
	'useEffect must not return anything besides a function, which is used for clean-up.'
]);

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
						animation: 'slide_from_left'
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

				<Stack.Screen
					name='Artist'
					component={Artist}
					options={{
						headerShown: false,
						presentation: 'modal',
						animationTypeForReplace: 'push',
						animation: 'slide_from_right'
					}}
				/>

				<Stack.Screen
					name='Album'
					component={Album}
					options={{
						headerShown: false,
						presentation: 'modal',
						animationTypeForReplace: 'push',
						animation: 'slide_from_left'
					}}
				/>

				<Stack.Screen
					name='Song'
					component={Song}
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