import { registerRootComponent } from 'expo';
import { View, ScrollView, Dimensions, StatusBar, Image, SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import React, { useState, useEffect } from 'react';

import { Text, Heading } from '../../components/Text';
import SongCard from '../../components/SongCard';

import {
	colors,
	padding,
	rem,
	gap,
	fontSizes,
	fontWeights,
	borderRadius
} from '../../utils/globals';
import paddingCreator from '../../utils/paddingCreator';
import marginCreator from '../../utils/marginCreator';

// Preload images
import Icon from '../../svg/Icon.svg';
import User from '../../svg/User.svg';
import AboutIcon from '../../svg/AboutIcon.svg';
import HomeIcon from '../../svg/HomeIcon.svg';
import LogoutIcon from '../../svg/LogoutIcon.svg';

import spotifyApi from '../../utils/spotify';

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const NAVIGATION_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT - STATUS_BAR_HEIGHT;

/**
 * @type {React.FC<{
 * 		route: {
 * 			params: {
 *		 		QueryName?: string,
 * 				ID?: string,
 *		 		Name: string,
 * 				Artist: string,
 * 				Album: string,
 * 				AlbumArt: string,
 * 				Popularity: number,
 * 				navigation: any
 * 			}
 * 		}
 * }>}
 */

const Song = ({
	route: {
		params: {
			QueryName = '',
			ID = '6HvZYsbFfjnjFrWF950C9d',
			Name,
			Artist,
			Album,
			AlbumArt,
			Popularity,
			navigation
		}
	}
}) => {
	NavigationBar.setVisibilityAsync('visible');
	NavigationBar.setPositionAsync('absolute');
	NavigationBar.setBackgroundColorAsync(colors.secondary);

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
		}
	}, []);

	const [lyrics, setLyrics] = useState('');

	const loadLyrics = async () => {
		fetch(`https://api.lyrics.ovh/v1/${Artist}/${Name}`)
			.then(res => res.json())
			.then(data => {
				if (data.error)
					setLyrics('Lyrics not found.');
				else
					setLyrics(data.lyrics);
			})
			.catch(err => {
				console.error(err);
				setLyrics('Lyrics not found.');
			});
	};

	useEffect(() => {
		loadLyrics();
	}, []);

	return (
		<>
			<StatusBar hidden={false} animated backgroundColor={colors.background} barStyle={'light-content'} translucent={false} />

			<SafeAreaView style={{
				flex: 1,
				overflow: 'visible'
			}}>
				<ScrollView
					contentContainerStyle={{
						display: 'flex',
						justifyContent: 'flex-start',
						alignItems: 'center',
						gap: gap.large,

						overflowX: 'visible'
					}}
					style={{
						width: '100%',
						flex: 1,
						backgroundColor: colors.background,

						overflowX: 'visible'
					}}
				>
					<View
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'flex-start',
							alignItems: 'center',
							gap: gap.medium,

							...paddingCreator(
								padding.large,
								padding.large,
								NAVIGATION_BAR_HEIGHT + (padding.large * 1.5) + padding.large,
								padding.large
							)
						}}
					>
						<View
							style={{
								width: '100%',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'space-between',
								flexDirection: 'row'
							}}
						>
							<View
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'row',
									gap: gap.medium
								}}
							>
								<Icon
									width={rem * 2}
									height={rem * 2}
								/>
								<Heading level={4}>Tapang Music</Heading>
							</View>

							<View
								style={{
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									flexDirection: 'row',
									gap: gap.small
								}}
							>
								<User
									width={rem * 2}
									height={rem * 2}
								/>
							</View>
						</View>

						<View
							style={{
								position: 'relative',
								width: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
								gap: gap.medium
							}}
						>
							<Image
								source={(fetch_Image || AlbumArt) ? { uri: fetch_Image || AlbumArt } : require('../../images/placeholder.png')}
								style={{
									position: 'absolute',
									width: Dimensions.get('window').width,
									height: (rem * 2) * 4,
									opacity: 0.5
								}}
							/>
							<View
								style={{
									width: '100%',
									height: (rem * 2) * 4,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'flex-start',
									gap: gap.small,
									borderRadius: borderRadius.medium
								}}
							>
								<Heading level={4}>{Name || 'Song Name'}</Heading>
								<Text>
									{
										`${fetch_Artist || Artist} • ${fetch_Album || Album}`
									}
								</Text>
								<Text>
									{
										`${fetch_Rating || Popularity} on Popularity`
									}
								</Text>
							</View>
						</View>

						<Heading
							level={4}
							style={{ width: '100%' }}
						>Lyrics</Heading>

						<View
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
								gap: gap.medium
							}}
						>
							<Text
								style={{
									width: '100%',
									textAlign: 'center',
									whiteSpace: 'pre-wrap'
								}}
							>
								{
									lyrics || 'Loading lyrics...'
								}
							</Text>
						</View>
					</View>
				</ScrollView>
			</SafeAreaView>

			<View
				style={{
					position: 'absolute',
					width: '100%',
					height: NAVIGATION_BAR_HEIGHT + (padding.large * 1.5),
					paddingBottom: NAVIGATION_BAR_HEIGHT,
					backgroundColor: colors.secondary,
					bottom: 0,
					left: 0,
					borderTopLeftRadius: padding.large,
					borderTopRightRadius: padding.large,
					overflow: 'hidden',
				}}
			>
				<View
					style={{
						width: '100%',
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-around',
						alignItems: 'center',
						gap: gap.medium,
						...paddingCreator(
							0,
							0,
							0,
							0
						),
						flex: 1
					}}
				>
					<View
						style={{
							height: rem * 2
						}}
						onStartShouldSetResponder={() => {
							navigation.navigate('AboutUs');
						}}
					>
						<AboutIcon
							height={rem * 2}
						/>
					</View>
					<View
						style={{
							height: rem * 2
						}}
						onStartShouldSetResponder={() => {
							navigation.navigate('Home');
						}}
					>
						<HomeIcon
							height={rem * 2}
						/>
					</View>
					<View
						style={{
							height: rem * 2
						}}
						onStartShouldSetResponder={() => {
							navigation.navigate('SignIn');
						}}
					>
						<LogoutIcon
							height={rem * 2}
						/>
					</View>
				</View>
			</View>
		</>
	);
};

export default Song;
registerRootComponent(Song);