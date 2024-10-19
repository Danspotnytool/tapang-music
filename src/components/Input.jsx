import { View, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
	useFonts,
	Poppins_100Thin,
	Poppins_400Regular,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { Heading } from './Text';

import {
	colors,
	padding,
	fontSizes,
	borderRadius,
	borderWidths,
	fontWeights,
	size
} from '../utils/globals';
import paddingCreator from '../utils/paddingCreator';
import marginCreator from '../utils/marginCreator';

/**
 * @type {React.FC<{
 * 		label: String,
 * 		placeholder: String,
 * 		type: 'text' | 'password'
 * }>}
 */
const Input = (props) => {
	let [fontsLoaded] = useFonts({
		Poppins_100Thin,
		Poppins_400Regular,
		Poppins_700Bold,
	});
	return (
		<View
			style={{
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'flex-start',
				height: (size * 2) + ((size / 3) * 2),

				width: '100%',

				color: colors.text,

				fontSize: fontSizes.medium,
				fontWeight: fontWeights.normal,

				lineHeight: fontSizes.medium,

				borderBottomWidth: borderWidths.thin,
				borderColor: colors.text
			}}
		>
			<Heading
				level={5}
				style={{
					width: '100%'
				}}
			>
				{props.label}
			</Heading>

			<TextInput
				style={{
					height: size * 2,
					width: '100%',

					...marginCreator(
						0,
						padding.medium
					),

					fontSize: fontSizes.small * 2,
					fontWeight: fontWeights.normal,
					fontFamily: fontsLoaded ? 'Poppins_400Regular' : null,
					color: colors.text
				}}
				placeholder={props.placeholder}
				secureTextEntry={props.type === 'password'}
			/>
		</View>
	);
};

export default Input;