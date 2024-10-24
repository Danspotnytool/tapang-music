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

import PlaySong from '../svg/PlaySong.svg';

import spotifyApi from '../utils/spotify';

/**
 * @type {React.FC<{
 * 		QueryName?: string,
 * 		ID?: string,
 * 		Name: string,
 * 		Artist: string,
 * 		Album: string,
 * 		AlbumArt: string,
 * 		Popularity: number,
 * 		(property) style?: TextStyle
 * }>}
 */
const SongCard = ({
	QueryName,
	ID,

	Name,
	Artist,
	Album,
	AlbumArt,
	Popularity,

	style
}) => {
	const [fetch_Name, setName] = useState('');
	const [fetch_Artist, setArtist] = useState('');
	const [fetch_Album, setAlbum] = useState('');
	const [fetch_Image, setImage] = useState('');
	const [fetch_Rating, setRating] = useState(0);

	const loadSongInfo = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		const { data } = await spotifyApi.getSongInfo(QueryName, ID);

		setName(data.Name);
		setArtist(data.Artist);
		setAlbum(data.Album);
		setImage(data.AlbumArt);
		setRating(data.Popularity);
	};

	useEffect(() => {
		if (Name === undefined || Artist === undefined || Album === undefined || AlbumArt === undefined || Popularity === undefined)
			loadSongInfo();
		else {
			setName(Name);
			setArtist(Artist);
			setAlbum(Album);
			setImage(AlbumArt);
			setRating(Popularity);
		};
	}, []);

	return (
		<Pressable
			style={{
				position: 'relative',
				width: '100%',
				height: ((rem / 3) * 2) * 8,
				display: 'flex',
				flexDirection: 'row',
				alignItems: 'center',
				justifyContent: 'flex-start',
				gap: gap.medium,
				backgroundColor: 'rgba(255, 255, 255, 0.0625)',
				borderRadius: borderRadius.medium,
				overflow: 'hidden',
				...style
			}}

			onPress={() => {
				console.log('Pressed');
			}}
		>
			<View
				style={{
					position: 'absolute',
					width: rem,
					height: rem,
					left: (((rem / 3) * 2) * 8) - rem - padding.small,
					top: (((rem / 3) * 2) * 8) - rem - padding.small,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					opacity: 0.75,
					zIndex: 2,
					elevation: 2,
				}}
			>
				<PlaySong
					width={rem}
					height={rem}
				/>
			</View>

			<Image
				source={{ uri: fetch_Image || AlbumArt || 'https://via.placeholder.com/300' }}
				style={{
					width: ((rem / 3) * 2) * 8,
					height: ((rem / 3) * 2) * 8,
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
						fetch_Name || Name
					}
				</Heading>

				<Text
					style={{
						flexShrink: 1,
						whiteSpace: 'nowrap'
					}}
				>
					{
						`${fetch_Artist || Artist} • ${fetch_Album || Album}`
					}
				</Text>
				<Text
					style={{
						flexShrink: 1,
						whiteSpace: 'nowrap'
					}}
				>
					{
						`${fetch_Rating || Popularity} on Popularity`
					}
				</Text>
			</View>
		</Pressable>
	);
};

export default SongCard;