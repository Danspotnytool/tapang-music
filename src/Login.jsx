import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { View, Dimensions, ImageBackground } from 'react-native';
import * as React from 'react';

import Button from './components/Button';
import { Text, Heading } from './components/Text';

import {
	colors,
	padding,
	size,
	gap,
	fontSizes
} from './utils/globals';
import paddingCreator from './utils/paddingCreator';

// Preload images
import background from './images/background.jpg';
import Logo from './svg/Logo.svg';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Login = () => {
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
				gap: gap.large,

				backgroundColor: 'rgba(0, 0, 0, 0.5)'
			}}>
				<View style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					gap: gap.medium
				}}>
					<Logo
						width={(size * 2) * 4}
						height={(size * 2) * 4}
					/>
					<Heading level={1}>Tapang Music</Heading>
				</View>

				<Button label='Sign In' type='primary' width='fill' onPress={() => { }} />
				<Button label='Sign In' type='secondary' width='fill' onPress={() => { }} />
			</View>
			<StatusBar translucent backgroundColor='transparent' style='auto' />
		</ImageBackground>
	);
};

registerRootComponent(Login);