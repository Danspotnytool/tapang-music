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
 * 		(property) style?: TextStyle
 * }>}
 */
const SongCard = ({
	QueryName,
	ID,
	style
}) => {
	const [Title, setTitle] = useState('');
	const [Album, setAlbum] = useState('');
	const [Artist, setArtist] = useState('');
	const [AlbumArt, setAlbumArt] = useState('');
	const [Rating, setRating] = useState('');

	const loadSongInfo = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		if (ID) {
			spotifyApi.getTrack(ID)
				.then(data => {
					setTitle(data.body.name);
					setAlbum(data.body.album.name);
					setArtist(data.body.artists[0].name);
					setAlbumArt(data.body.album.images[0].url);
					setRating(data.body.popularity);
				})
				.catch(err => console.error(err));
		} else if (QueryName) {
			spotifyApi.searchTracks(QueryName)
				.then(data => {
					setTitle(data.body.tracks.items[0].name);
					setAlbum(data.body.tracks.items[0].album.name);
					setArtist(data.body.tracks.items[0].artists[0].name);
					setAlbumArt(data.body.tracks.items[0].album.images[0].url);
					setRating(data.body.tracks.items[0].popularity);
				})
				.catch(err => console.error(err));
		};
	};

	useEffect(() => {
		loadSongInfo();
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
				source={{ uri: AlbumArt || 'https://via.placeholder.com/300' }}
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
					{Rating} on Popularity
				</Text>
			</View>
		</Pressable>
	);
};

export default SongCard;