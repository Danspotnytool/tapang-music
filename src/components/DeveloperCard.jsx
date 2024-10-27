import { View, TextInput, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
	useFonts,
	Poppins_100Thin,
	Poppins_400Regular,
	Poppins_700Bold,
} from '@expo-google-fonts/poppins';

import { Heading, Text } from './Text';

import {
	colors,
	padding,
	fontSizes,
	borderRadius,
	borderWidths,
	fontWeights,
	rem,
	gap
} from '../utils/globals';
import paddingCreator from '../utils/paddingCreator';
import marginCreator from '../utils/marginCreator';

import PlayAlbum from '../svg/PlayAlbum.svg';

/**
 * @type {React.FC<{
 * 		Name: String,
 * 		ProfilePicture: String,
 * 		Role: String,
 * 		(property) style?: TextStyle
 * }>}
 */
const DeveloperCard = ({ Name, ProfilePicture, Role, style }) => {
	return (
		<View
			style={{
				position: 'relative',
				width: (rem * 2) * 2,
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'flex-start',
				gap: gap.small,
				overflow: 'hidden',
				...style
			}}
		>
			<Image
				source={ProfilePicture}
				style={{
					width: (rem * 2) * 2,
					height: (rem * 2) * 2,
					borderRadius: (rem * 2) * 2
				}}
			/>

			<View
				style={{
					width: (rem * 2) * 2,
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'flex-start'
				}}
			>
				<Text
					style={{
						width: '100%',
						textAlign: 'center'
					}}
				>
					{Name}
				</Text>
				<Text
					style={{
						width: '100%',
						textAlign: 'center',
						fontStyle: 'italic',
						color: colors.primary
					}}
				>
					{Role}
				</Text>
			</View>
		</View>
	);
};

export default DeveloperCard;