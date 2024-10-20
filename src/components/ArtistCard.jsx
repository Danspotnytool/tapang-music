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
 * 		navigation: any,
 * 		ID?: string,
 * 		QueryName?: string,
 * 		(property) style?: TextStyle
 * }>}
 */
const ArtistCard = ({ navigation, ID, QueryName, style }) => {
	const [Name, setName] = useState('');
	const [ProfilePicture, setProfilePicture] = useState('');

	const loadArtistInfo = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		if (ID) {
			spotifyApi.getArtist(ID)
				.then(data => {
					setName(data.body.name);
					setProfilePicture(data.body.images[0].url);
				})
				.catch(err => console.error(err));
		} else if (QueryName) {
			spotifyApi.searchArtists(QueryName)
				.then(data => {
					setName(data.body.artists.items[0].name);
					setProfilePicture(data.body.artists.items[0].images[0].url);
				})
				.catch(err => console.error(err));
		};
	};
	useEffect(() => {
		loadArtistInfo();
	}, []);

	return (
		<Pressable
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

			onPress={() => {
				navigation.navigate('Artist', {
					ID: ID,
					QueryName: QueryName
				});
			}}
		>
			<Image
				source={{ uri: ProfilePicture || 'https://via.placeholder.com/300' }}
				style={{
					width: (rem * 2) * 2,
					height: (rem * 2) * 2,
					borderRadius: (rem * 2) * 2
				}}
			/>
			<Text
				style={{
					width: '100%',
					textAlign: 'center',
					backgrgroundColor: '#00FF00',
				}}
			>
				{Name}
			</Text>
		</Pressable>
	);
};

export default ArtistCard;