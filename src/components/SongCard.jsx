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
	size,
	gap
} from '../utils/globals';
import paddingCreator from '../utils/paddingCreator';
import marginCreator from '../utils/marginCreator';

import PlaySong from '../svg/PlaySong.svg';

/**
 * @type {React.FC<{
 * 		Title: String,
 * 		Album: String,
 * 		Artist: String,
 * 		Rating: Number,
 * 		AlbumArt: String,
 * 		(property) style?: TextStyle
 * }>}
 */
const SongCard = ({ Title, Album, Artist, Rating, AlbumArt, style }) => {
	return (
		<View
			style={{
				position: 'relative',
				width: '100%',
				height: ((size / 3) * 2) * 8,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'flex-start',
				gap: gap.small,
				backgroundColor: 'rgba(255, 255, 255, 0.0625)',
				borderRadius: borderRadius.medium,
				overflow: 'hidden',
				...style
			}}
		>
			<View
				style={{
					position: 'absolute',
					width: size,
					height: size,
					left: (((size / 3) * 2) * 8) - size - padding.small,
					top: (((size / 3) * 2) * 8) - size - padding.small,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					opacity: 0.75,
					zIndex: 2,
					elevation: 2,
				}}
			>
				<PlaySong
					width={size}
					height={size}
				/>
			</View>

			<Image
				source={{ uri: AlbumArt }}
				style={{
					width: ((size / 3) * 2) * 8,
					height: ((size / 3) * 2) * 8,
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
						`${Album} • ${Artist}`
					}
				</Text>
				<Text
					style={{
						flexShrink: 1,
						whiteSpace: 'nowrap'
					}}
				>
					{Rating} Listens
				</Text>
			</View>
		</View>
	);
};

export default SongCard;