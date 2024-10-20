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
import SearchIcon from '../../svg/SearchIcon.svg';

import spotifyApi from '../../utils/spotify';

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const NAVIGATION_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT - STATUS_BAR_HEIGHT;

/**
 * @type {React.FC<{
 * 		navigation: any,
 * 		route: {
 * 			params: {
 * 				ID?: string,
 * 				QueryName?: string
 * 			}
 * 		}
 * 		ID?: string,
 * 		QueryName?: string
 * }>}
 */
const Artist = ({
	navigation,
	route: {
		params: {
			QueryName = '',
			ID = '6HvZYsbFfjnjFrWF950C9d'
		}
	}
}) => {
	NavigationBar.setVisibilityAsync('visible');
	NavigationBar.setPositionAsync('absolute');
	NavigationBar.setBackgroundColorAsync(colors.secondary);

	const [ProfilePicture, setProfilePicture] = useState('');
	const [Name, setName] = useState('');
	const [Birthday, setBirthday] = useState('');
	const [Followers, setFollowers] = useState('');
	const [Genres, setGenres] = useState([]);
	const [TopSongs, setTopSongs] = useState([]);

	const loadArtistInfo = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		if (ID)
			spotifyApi.getArtist(ID)
				.then(data => {
					setProfilePicture(data.body.images[0].url);
					setName(data.body.name);
					setBirthday(data.body.birthdate);
					setFollowers(data.body.followers.total);
					setGenres(data.body.genres);
				}).catch(err => console.error(err));
		else if (QueryName)
			spotifyApi.searchArtists(QueryName)
				.then(data => {
					setProfilePicture(data.body.artists.items[0].images[0].url);
					setName(data.body.artists.items[0].name);
					setBirthday(data.body.artists.items[0].birthdate);
					setFollowers(data.body.artists.items[0].followers.total);
					setGenres(data.body.artists.items[0].genres);
				}).catch(err => console.error(err));
	};

	useEffect(() => {
		loadArtistInfo();
	}, []);

	const loadTopSongs = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		if (ID)
			spotifyApi.getArtistTopTracks(ID, 'US')
				.then(data => {
					setTopSongs(data.body.tracks.map(track => track.id));
				}).catch(err => console.error(err));
		else if (QueryName)
			spotifyApi.searchTracks(QueryName)
				.then(data => {
					setTopSongs(data.body.tracks.items.map(track => track.id));
				}).catch(err => console.error(err));
	};

	useEffect(() => {
		loadTopSongs();
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
								<SearchIcon
									width={rem * 2}
									height={rem * 2}
								/>
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
								source={{ uri: ProfilePicture || 'https://via.placeholder.com/300' }}
								style={{
									position: 'absolute',
									width: Dimensions.get('window').width,
									height: (rem * 2) * 8,
									opacity: 0.5
								}}
							/>
							<View
								style={{
									width: '100%',
									height: (rem * 2) * 8,
									display: 'flex',
									justifyContent: 'center',
									alignItems: 'flex-start',
									gap: gap.small,
									borderRadius: borderRadius.medium
								}}
							>
								<Heading level={4}>{Name || 'Artist'}</Heading>
								<Text>{Birthday || 'Birthday'}</Text>
								<Text>{Followers || 2} Followers</Text>
								<View
									style={{
										width: '100%',
										display: 'flex',
										flexDirection: 'row',
										gap: gap.small
									}}
								>
									{
										Genres.map((genre, index) => {
											return (
												<Text
													key={index}
													style={{
														backgroundColor: colors.text,
														color: colors.secondary,
														...paddingCreator(
															0,
															padding.small,
															0,
															padding.small
														),
														borderRadius: borderRadius.medium,
														fontSize: fontSizes.small,
														fontWeight: fontWeights.bold
													}}
												>
													{genre}
												</Text>
											)
										})}
								</View>
							</View>
						</View>

						<Heading
							level={4}
							style={{ width: '100%' }}
						>Top Songs</Heading>

						<View
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
								gap: gap.medium
							}}
						>
							{TopSongs.map((song, index) => (
								<SongCard
									key={index}
									ID={song}
									style={{
										width: '100%'
									}}
								/>
							))}
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
							props.navigation.navigate('AboutUs');
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
							props.navigation.navigate('Home');
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
							props.navigation.navigate('SignIn');
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

export default Artist;
registerRootComponent(Artist);