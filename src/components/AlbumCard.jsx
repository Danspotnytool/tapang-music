import { View, TextInput, Image, Pressable } from 'react-native';
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
 * 		navigation: {},
 * 
 * 		Title: String,
 * 		Artist: String,
 * 		AlbumArt: String,
 * 
 * 		QueryName?: String,
 * 		ID?: String,
 * 		(property) Style?: TextStyle
 * }>}
 */
const AlbumCard = ({
	navigation,

	Title,
	Artist,
	AlbumArt,

	QueryName,
	ID,
	style,
}) => {
	const [fetch_Title, setTitle] = useState('');
	const [fetch_Artist, setArtist] = useState('');
	const [fetch_AlbumArt, setAlbumArt] = useState('');

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
		if (Title || Artist || AlbumArt) return;
		loadAlbumInfo();
	}, []);
	return (
		<Pressable
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

			onPress={() => {
				navigation.navigate('Album', {
					QueryName,
					ID,
					Title: fetch_Title || Title,
					Artist: fetch_Artist || Artist,
					AlbumArt: fetch_AlbumArt || AlbumArt,
					navigation
				});
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
				source={(fetch_AlbumArt || AlbumArt) ? { uri: fetch_AlbumArt || AlbumArt } : require('../images/placeholder.png')}
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
						fetch_Title || Title || 'Unknown Album'
					}
				</Heading>
				<Text
					style={{
						flexShrink: 1,
						whiteSpace: 'nowrap'
					}}
				>
					{
						fetch_Artist || Artist || 'Unknown Artist'
					}
				</Text>
			</View>
		</Pressable>
	);
};

export default AlbumCard;