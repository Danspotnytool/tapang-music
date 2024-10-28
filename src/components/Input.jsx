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
	rem
} from '../utils/globals';
import paddingCreator from '../utils/paddingCreator';
import marginCreator from '../utils/marginCreator';

/**
 * @type {React.FC<{
 * 		label: String,
 * 		placeholder: String,
 * 		onChangeText: (text: String) => void,
 * 		onFocus: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
 * 		onBlur: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void,
 * 		(property) style?: TextStyle,
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
				height: (rem * 2) + ((rem / 3) * 2),

				width: '100%',

				color: colors.text,

				fontSize: fontSizes.medium,
				fontWeight: fontWeights.normal,

				lineHeight: fontSizes.medium,

				borderBottomWidth: borderWidths.thin,
				borderColor: colors.text,

				...props.style
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
					height: rem * 2,
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

				onChangeText={props.onChangeText}
				onFocus={(event) => {
					props.onFocus(event);
					event.target.measure((x, y, width, height, pageX, pageY) => {
					});
				}}
				onBlur={props.onBlur}
			/>
		</View>
	);
};

export default Input;