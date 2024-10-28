import * as React from 'react';
import { registerRootComponent } from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LogBox } from 'react-native';
import firebase from './utils/firebase';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
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
	const [User, setUser] = React.useState(null);

	React.useEffect(() => {
		const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
			setUser(user);
		});
		return unsubscribe;
	}, []);

	const screens = [
		{
			name: 'SignIn',
			component: SignIn,
			options: {
				headerShown: false,
				presentation: 'modal',
				animationTypeForReplace: 'push',
				animation: 'slide_from_left'
			}
		},
		{
			name: 'SignUp',
			component: SignUp,
			options: {
				headerShown: false,
				presentation: 'modal',
				animationTypeForReplace: 'push',
				animation: 'slide_from_left'
			}
		},
		{
			name: 'Home',
			component: Home,
			options: {
				headerShown: false,
				presentation: 'modal',
				animationTypeForReplace: 'push',
				animation: 'slide_from_right'
			}
		},
		{
			name: 'AboutUs',
			component: AboutUs,
			options: {
				headerShown: false,
				presentation: 'modal',
				animationTypeForReplace: 'push',
				animation: 'slide_from_left'
			}
		},
		{
			name: 'Artist',
			component: Artist,
			options: {
				headerShown: false,
				presentation: 'modal',
				animationTypeForReplace: 'push',
				animation: 'slide_from_right'
			}
		},
		{
			name: 'Album',
			component: Album,
			options: {
				headerShown: false,
				presentation: 'modal',
				animationTypeForReplace: 'push',
				animation: 'slide_from_left'
			}
		},
		{
			name: 'Song',
			component: Song,
			options: {
				headerShown: false,
				presentation: 'modal',
				animationTypeForReplace: 'push',
				animation: 'slide_from_left'
			}
		}
	];

	if (User) {
		// Change the order of the screens
		const HomeScreen = screens.find(screen => screen.name === 'Home');
		const AboutUsScreen = screens.find(screen => screen.name === 'AboutUs');
		screens.splice(screens.indexOf(HomeScreen), 1);
		screens.splice(screens.indexOf(AboutUsScreen), 1);
		screens.push(HomeScreen);
		screens.push(AboutUsScreen);
	};

	return (
		<NavigationContainer>
			<Stack.Navigator>
				{
					screens.map((screen, index) => (
						<Stack.Screen
							key={index}
							name={screen.name}
							component={screen.component}
							options={screen.options}
						/>
					))
				}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

registerRootComponent(App);