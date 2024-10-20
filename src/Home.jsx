import { registerRootComponent } from 'expo';
import { View, ScrollView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import * as React from 'react';

import { Text, Heading } from './components/Text';
import AlbumCard from './components/AlbumCard';
import ArtistCard from './components/ArtistCard';
import SongCard from './components/SongCard';

import {
	colors,
	padding,
	size,
	gap,
	fontSizes,
	fontWeights
} from './utils/globals';
import paddingCreator from './utils/paddingCreator';
import marginCreator from './utils/marginCreator';

// Preload images
import Icon from './svg/Icon.svg';
import User from './svg/User.svg';

NavigationBar.setVisibilityAsync('visible');
NavigationBar.setPositionAsync('absolute');
NavigationBar.setBackgroundColorAsync('#ffffff00');

const Home = () => {
	return (
		<ScrollView
			contentContainerStyle={{
				display: 'flex',
				justifyContent: 'flex-start',
				alignItems: 'center',
				gap: gap.large,
			}}
			style={{
				width: '100%',
				flex: 1,
				backgroundColor: colors.background,

				...paddingCreator(padding.large),

				overflowX: 'hidden'
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
						width={size * 2}
						height={size * 2}
					/>
					<Heading level={4}>Tapang Music</Heading>
				</View>

				<User
					width={size * 2}
					height={size * 2}
				/>
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
						<AlbumCard
							Title='Speak now'
							Artist='Taylor Swift'
							AlbumArt='https://i.scdn.co/image/ab67616d0000b2730b04da4f224b51ff86e0a481'
						/>
						<AlbumCard
							Title='Hamilton'
							Artist='Lin-Manuel Miranda'
							AlbumArt='https://i.scdn.co/image/ab67616d0000b273d72fb5571087bca0a2fed008'
						/>
						<AlbumCard
							Title='Brat'
							Artist='Charli XCX'
							AlbumArt='https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Charli_XCX_-_Brat_%28album_cover%29.png/1200px-Charli_XCX_-_Brat_%28album_cover%29.png'
						/>
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
						<ArtistCard
							Name='Nojram'
							ProfilePicture='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-1/460618956_3857317154588600_6046997786276242943_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF8cb810rWYcutPPhARzPRoAR-TSqM8DF4BH5NKozwMXjIGzJRMyszQAHfZqug9c-Q38_3mvifh8zYCorlKE74Z&_nc_ohc=_Q1dcL96IyAQ7kNvgGoN8c1&_nc_zt=24&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=AIpMT7Faq5HTqcVOrHdiWcV&oh=00_AYC0i-s1KBzgnq62tVTTM3FpEjY2m6Bg3um9sYPY8LWOGg&oe=6719AEE7'
						/>
						<ArtistCard
							Name='Taylor Swift'
							ProfilePicture='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-6/395322075_887029789455507_5464756512007097422_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHCuPkqvgNdr5bbhBM0LDVrgbvYsJ-gqoiBu9iwn6CqiBSX2bPOlfMt5mRhd0UDVr4Avuayp_vyhIwQdovts96J&_nc_ohc=GxEqsN4AxG0Q7kNvgGQ2Y2s&_nc_zt=23&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=Av-BCnKMiWMiCGPZJ-qzbjy&oh=00_AYC2sdH2YO2sB_bmG2bZqhwDiOixA1n8bWtC539f5SvPXQ&oe=671977BE'
						/>
						<ArtistCard
							Name='Beyoncé'
							ProfilePicture='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzskOKViU1H4zhRM4R3hzfpCHAeW0ZmlQlSA&s'
						/>
						<ArtistCard
							Name='Newjeans'
							ProfilePicture='https://i.pinimg.com/originals/1a/2a/39/1a2a39f46908773b0c6b6acd74b57d1f.jpg'
						/>
						<ArtistCard
							Name='Willie Revillame'
							ProfilePicture='https://lastfm.freetls.fastly.net/i/u/ar0/44b9b1162d925bc12c5d09b586c5ab26.jpg'
						/>
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
					<SongCard
						Title='Github'
						Artist='Nojram'
						Album='APPDEV'
						Rating='13'
						AlbumArt='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-1/460618956_3857317154588600_6046997786276242943_n.jpg?stp=dst-jpg_s100x100&_nc_cat=103&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeF8cb810rWYcutPPhARzPRoAR-TSqM8DF4BH5NKozwMXjIGzJRMyszQAHfZqug9c-Q38_3mvifh8zYCorlKE74Z&_nc_ohc=_Q1dcL96IyAQ7kNvgGoN8c1&_nc_zt=24&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=AIpMT7Faq5HTqcVOrHdiWcV&oh=00_AYC0i-s1KBzgnq62tVTTM3FpEjY2m6Bg3um9sYPY8LWOGg&oe=6719AEE7'
					/>
					<SongCard
						Title='Mine'
						Artist='Taylor Swift'
						Album='Speak now'
						Rating='4.5m'
						AlbumArt='https://i.scdn.co/image/ab67616d0000b2730b04da4f224b51ff86e0a481'
					/>
					<SongCard
						Title='Meow moew moew meow'
						Artist='Furry Meowlish'
						Album='Meow'
						Rating='5m'
						AlbumArt='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCMkvF_IOwARisFshk4IR3R0DK4z0vAyBkKg&s'
					/>
				</View>
			</View>
		</ScrollView>
	);
};

export default Home;