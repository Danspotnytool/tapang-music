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
 * 		Title: String,
 * 		Artist: String,
 * 		AlbumArt: String,
 * 		(property) style?: TextStyle
 * }>}
 */
const AlbumCard = ({ Title, Artist, AlbumArt, style }) => {
	return (
		<View
			style={{
				position: 'relative',
				width: (rem * 2) * 4,
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'flex-start',
				gap: gap.small,
				overflow: 'hidden',
				...style
			}}
		>
			<View
				style={{
					position: 'absolute',
					width: rem * 2,
					height: (rem * 2),
					right: padding.small,
					top: ((rem * 2) * 4) - (rem * 2) - padding.small,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					opacity: 0.75,
					zIndex: 2,
					elevation: 2,
				}}
			>
				<PlayAlbum
					width={rem * 2}
					height={rem * 2}
				/>
			</View>

			<Image
				source={{ uri: AlbumArt }}
				style={{
					width: (rem * 2) * 4,
					height: (rem * 2) * 4,
					borderRadius: borderRadius.medium
				}}
			/>

			<View
				style={{
					display: 'flex',
					alignItems: 'flex-start',
					justifyContent: 'flex-start',
					gap: gap.small / 2
				}}
			>
				<Heading
					level={4}
					style={{
						flexShrink: 1,
						whiteSpace: 'nowrap'
					}}
				>
					{
						Title.length > 20
							? `${Title.slice(0, 15)}...`
							: Title
					}
				</Heading>
				<Text
					style={{
						flexShrink: 1,
						whiteSpace: 'nowrap'
					}}
				>
					{
						Artist.length > 25
							? `${Artist.slice(0, 25)}...`
							: Artist
					}
				</Text>
			</View>
		</View>
	);
};

export default AlbumCard;