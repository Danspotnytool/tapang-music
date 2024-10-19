import { registerRootComponent } from 'expo';
import { StatusBar } from 'expo-status-bar';
import { View, Dimensions, ImageBackground } from 'react-native';
import * as React from 'react';

import { Text, Heading } from './components/Text';
import Button from './components/Button';
import Input from './components/Input';

import {
	colors,
	padding,
	size,
	gap,
	fontSizes,
	fontWeights
} from './utils/globals';
import paddingCreator from './utils/paddingCreator';

// Preload images

const Home = () => {
	return (
		<View
			style={{
				flex: 1,
				backgroundColor: colors.background,
				...paddingCreator(padding.medium)
			}}
		>
			<Text>Hello</Text>
		</View>
	);
};

export default Home;