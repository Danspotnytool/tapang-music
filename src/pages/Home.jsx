import { registerRootComponent } from 'expo';
import { View, ScrollView, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import { useRoute } from '@react-navigation/native';
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

import spotifyApi from '../utils/spotify';

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const NAVIGATION_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT - STATUS_BAR_HEIGHT;

const Home = (props) => {
	NavigationBar.setVisibilityAsync('visible');
	NavigationBar.setPositionAsync('absolute');
	NavigationBar.setBackgroundColorAsync(colors.secondary);

	const StartingArtistsID = [
		'06HL4z0CvFAxyc27GXpf02', // Taylor Swift
		'6jJ0s89eD6GaHleKKya26X', // Katy Perry
		'66CXWjxzNUsdJxJ2JdwvnR', // Ariana Grande
	];

	/**
	 * @typedef {{
	 * 		ID: String,
	 * 		Title: String,
	 * 		Artist: String,
	 * 		AlbumArt: String,
	 * 		navigation: any
	 * }} Album
	 */

	/**
	 * @typedef {{
	 * 		ID: String,
	 * 		Name: String,
	 * 		AlbumArt: String,
	 * 		Album: String,
	 * 		Arist: String,
	 * 		Popularity: Number,
	 * 		navigation: any
	 * }} Track
	 */

	/**
	 * @typedef {{
	 * 		ID: String,
	 * 		Name: String,
	 * 		ProfilePicture: String,
	 * 		navigation: any,
	 * 		Followers: Number,
	 * 		Genres: String[]
	 * }} Artist
	 */

	/** @type {[Album[], Function]} */
	const [Albums, setAlbums] = useState([]);
	/** @type {[Artist[], Function]} */
	const [Artists, setArtists] = useState([]);
	/** @type {[Track[], Function]} */
	const [RecommendedTracks, setRecommendedTracks] = useState([]);

	const getRecommendations = async () => {
		if (spotifyApi.getAccessToken() === undefined)
			await new Promise((resolve, reject) => {
				setInterval(() => {
					if (spotifyApi.getAccessToken() !== undefined)
						resolve();
				}, 10);
			});

		const recommendations = await spotifyApi.getRecommendations({
			seed_artists: StartingArtistsID,
			limit: 5
		});

		const albums = recommendations.body.tracks.map(track => {
			return {
				ID: track.album.id,
				Title: track.album.name,
				Artist: track.artists.map(artist => artist.name).join(', '),
				AlbumArt: track.album.images[0].url
			};
		});
		setAlbums(albums);

		(async () => {
			const artists = [];
			for (const tracks of recommendations.body.tracks) {
				for (const artist of tracks.artists) {
					if (artists.find(a => a.ID === artist.id)) continue;
					const theArtist = {
						ID: artist.id,
						Name: artist.name,
						ProfilePicture: null,
						Followers: null,
						Genres: null
					};
					const fromAPI = await spotifyApi.getArtist(artist.id);

					theArtist.ProfilePicture = fromAPI.body.images ? fromAPI.body.images[0]?.url : null;
					theArtist.Followers = fromAPI.body.followers.total;
					theArtist.Genres = fromAPI.body.genres;
					artists.push(theArtist);
				};
			};

			setArtists(artists);
		})();

		(() => {
			const tracks = recommendations.body.tracks.map(track => {
				return {
					ID: track.id,
					Name: track.name,
					AlbumArt: track.album.images[0].url,

					Album: track.album.name,
					Artist: track.artists ? track.artists.map(artist => artist.name).join(', ') : null,
					Popularity: track.popularity
				};
			});

			setRecommendedTracks(tracks);
		})();
	};
	useEffect(() => {
		if (Albums.length > 0) return;
		getRecommendations();
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
										alignItems: 'flex-start',
										flexDirection: 'row',
										gap: gap.medium
									}}
								>
									{
										Albums.map(album => (
											<AlbumCard
												key={album.ID}
												ID={album.ID}
												Title={album.Title}
												Artist={album.Artist}
												AlbumArt={album.AlbumArt}
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
										alignItems: 'flex-start',
										flexDirection: 'row',
										gap: gap.medium
									}}
								>
									{
										Artists.map(artist => (
											<ArtistCard
												key={artist.ID}
												ID={artist.ID}
												Name={artist.Name}
												ProfilePicture={artist.ProfilePicture}
												Followers={artist.Followers}
												Genres={artist.Genres}
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
									alignItems: 'flex-start',
									gap: gap.medium
								}}
							>
								{
									RecommendedTracks.map(track => (
										<SongCard
											key={track.ID}
											ID={track.ID}
											Name={track.Name}
											AlbumArt={track.AlbumArt}
											Album={track.Album}
											Artist={track.Artist}
											Popularity={track.Popularity}
											navigation={props.navigation}
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