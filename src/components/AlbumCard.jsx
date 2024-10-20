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

import spotifyApi from '../utils/spotify';

/**
 * @type {React.FC<{
 * 		QueryName?: string,
 * 		ID?: string,
 * 		(property) style?: TextStyle
 * }>}
 */
const AlbumCard = ({ QueryName, ID='4iyJ8i3eKbez8JXDbsHIdZ', style }) => {
	const [Title, setTitle] = useState('');
	const [Artist, setArtist] = useState('');
	const [AlbumArt, setAlbumArt] = useState('');

	const loadAlbumInfo = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		if (ID) {
			spotifyApi.getAlbum(ID)
				.then(data => {
					setTitle(data.body.name);
					setArtist(data.body.artists[0].name);
					setAlbumArt(data.body.images[0].url);
				})
				.catch(err => console.error(err));
		} else if (QueryName) {
			spotifyApi.searchAlbums(QueryName)
				.then(data => {
					setTitle(data.body.albums.items[0].name);
					setArtist(data.body.albums.items[0].artists[0].name);
					setAlbumArt(data.body.albums.items[0].images[0].url);
				})
				.catch(err => console.error(err));
		};
	};

	useEffect(() => {
		loadAlbumInfo();
	}, []);
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
				source={{ uri: AlbumArt || 'https://via.placeholder.com/300' }}
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