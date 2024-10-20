import { registerRootComponent } from 'expo';
import { View, ScrollView, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import React, { useState, useEffect } from 'react';

import { Text, Heading } from '../components/Text';
import AlbumCard from '../components/AlbumCard';
import ArtistCard from '../components/ArtistCard';
import SongCard from '../components/SongCard';

import {
	colors,
	padding,
	rem,
	gap,
	fontSizes,
	fontWeights
} from '../utils/globals';
import paddingCreator from '../utils/paddingCreator';
import marginCreator from '../utils/marginCreator';

// Preload images
import Icon from '../svg/Icon.svg';
import User from '../svg/User.svg';
import AboutIcon from '../svg/AboutIcon.svg';
import HomeIcon from '../svg/HomeIcon-Active.svg';
import LogoutIcon from '../svg/LogoutIcon.svg';
import SearchIcon from '../svg/SearchIcon.svg';

import spotifyApi from '../utils/spotify';

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const NAVIGATION_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT - STATUS_BAR_HEIGHT;

const Home = (props) => {
	NavigationBar.setVisibilityAsync('visible');
	NavigationBar.setPositionAsync('absolute');
	NavigationBar.setBackgroundColorAsync(colors.secondary);

	const StartinArtistsID = [
		'06HL4z0CvFAxyc27GXpf02',
		'6HvZYsbFfjnjFrWF950C9d',
		'0ZXi1NG0Wwlaj70Qn25mAr',
		'6vWDO969PvNqNYHIOW5v0m',
		'7tNO3vJC9zlHy2IJOx34ga'
	];

	const [RecommendedAlbumsID, setRecommendedAlbumsID] = useState([]);

	const getRecommendedAlbums = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		spotifyApi.getRecommendations({
			seed_artists: StartinArtistsID,
			limit: 5
		})
			.then(data => {
				const albums = data.body.tracks.map(track => track.album.id);
				setRecommendedAlbumsID(albums);
			}).catch(err => console.error(err));
	};
	useEffect(() => {
		getRecommendedAlbums();
	}, []);

	const [RecommendedArtistsID, setRecommendedArtistsID] = useState([]);

	const getRecommendedArtists = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		spotifyApi.getRecommendations({
			seed_artists: StartinArtistsID,
			limit: 5
		})
			.then(data => {
				const artists = data.body.tracks.map(track => track.artists[0].id);
				setRecommendedArtistsID(artists);
			}).catch(err => console.error(err));
	};
	useEffect(() => {
		getRecommendedArtists();
	}, []);

	const [RecommendedTracks, setRecommendedTracks] = useState([]);

	const getRecommendedTracks = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		spotifyApi.getRecommendations({
			seed_artists: StartinArtistsID,
			limit: 5
		})
			.then(data => {
				const tracks = data.body.tracks.map(track => track.id);
				setRecommendedTracks(tracks);
			}).catch(err => console.error(err));
	};
	useEffect(() => {
		getRecommendedTracks();
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
								width: '100%',
								display: 'flex',
								justifyContent: 'flex-start',
								alignItems: 'center',
								gap: gap.medium
							}}
						>
							<Heading
								level={2}
								style={{ width: '100%' }}
							>Discover the taste.</Heading>

							<ScrollView
								horizontal={true}
								style={{
									position: 'relative',
									width: '100%',

									overflow: 'visible'
								}}
							>
								<View
									style={{
										display: 'flex',
										justifyContent: 'flex-start',
										alignItems: 'center',
										flexDirection: 'row',
										gap: gap.medium
									}}
								>
									{
										RecommendedAlbumsID.map((album, index) => (
											<AlbumCard
												key={index}
												ID={album}
												navigation={props.navigation}
											/>
										))
									}
								</View>
							</ScrollView>



							<Heading
								level={4}
								style={{ width: '100%' }}
							>Top artists of the month</Heading>

							<ScrollView
								horizontal={true}
								style={{
									position: 'relative',
									width: '100%',

									overflow: 'visible'
								}}
							>
								<View
									style={{
										display: 'flex',
										justifyContent: 'flex-start',
										alignItems: 'center',
										flexDirection: 'row',
										gap: gap.medium
									}}
								>
									{
										RecommendedArtistsID.map((artist, index) => (
											<ArtistCard
												key={index}
												ID={artist}
												navigation={props.navigation}
											/>
										))
									}
								</View>
							</ScrollView>



							<Heading
								level={4}
								style={{ width: '100%' }}
							>Listen with style</Heading>

							<View
								style={{
									width: '100%',
									display: 'flex',
									justifyContent: 'flex-start',
									alignItems: 'center',
									gap: gap.medium
								}}
							>
								{
									RecommendedTracks.map((track, index) => (
										<SongCard
											key={index}
											ID={track}
											style={{
												width: '100%'
											}}
										/>
									))
								}
							</View>
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
							console.log('home');
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

export default Home;
registerRootComponent(Home);