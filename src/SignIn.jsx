import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { View, ImageBackground } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import * as React from 'react';

import { Text, Heading } from './components/Text';
import Button from './components/Button';
import Input from './components/Input';

import {
	colors,
	padding,
	size,
	gap,
	fontWeights
} from './utils/globals';
import paddingCreator from './utils/paddingCreator';

// Preload images
import background from './images/background.jpg';
import Logo from './svg/Logo.svg';

NavigationBar.setVisibilityAsync('visible');
NavigationBar.setPositionAsync('absolute');
NavigationBar.setBackgroundColorAsync('#ffffff00');

const SignIn = (props) => {

	return (
		<ImageBackground
			source={background}

			style={{
				backgroundColor: colors.background,
				position: 'relative',
				width: '100%',
				height: '100%',

				flex: 1,

				overflow: 'hidden'
			}}
		>
			<View style={{
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%',
				height: '100%',

				...paddingCreator(
					padding.large * 2,
					padding.large
				),

				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				gap: gap.large * 2,

				backgroundColor: 'rgba(0, 0, 0, 0.75)'
			}}>
				<View style={{
					width: '100%',
					maxWidth: size * 30,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: gap.medium
				}}>
					<Logo
						width={(size * 2) * 4}
						height={(size * 2) * 4}
					/>
					<Heading level={1} style={{ textAlign: 'center' }}>Tapang Music</Heading>
				</View>

				<View style={{
					width: '100%',
					maxWidth: size * 30,
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: gap.large
				}}>
					<Input
						label='Email'
						placeholder=''
					/>
					<Input
						label='Password'
						placeholder=''
						type='password'
					/>

					<Button label='Sign In' type='primary' width='fill' onPress={() => {
						console.log('Signed In');
						props.navigation.navigate('Home');
					}} />
				</View>

				<View
					style={{
						width: '100%',
						maxWidth: size * 30,
						justifyContent: 'flex-end',
						alignItems: 'center',
						gap: 0
					}}
				>
					<Text
						style={{
							textAlign: 'center',
							gap: 0,
							fontWeight: fontWeights.thin
						}}
						weight='thin'
					>Don't have an account? <Text weight='regular'>Sign up now!</Text></Text>
				</View>
			</View>
			<StatusBar translucent backgroundColor='transparent' style='dark' />
		</ImageBackground>
	);
};

export default SignIn;