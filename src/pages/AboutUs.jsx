import { registerRootComponent } from 'expo';
import { View, ScrollView, Dimensions, StatusBar, SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import * as React from 'react';

import { Text, Heading } from '../components/Text';
import DeveloperCard from '../components/DeveloperCard';

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
import AboutIcon from '../svg/AboutIcon-Active.svg';
import HomeIcon from '../svg/HomeIcon.svg';
import LogoutIcon from '../svg/LogoutIcon.svg';

import Phia from '../images/developers/Phia.jpg';
import Banzal from '../images/developers/Banzal.jpg';
import Jimwell from '../images/developers/Jimwell.jpg';
import Endrina from '../images/developers/Endrina.jpg';
import Robles from '../images/developers/Robles.jpg';
import Johnny from '../images/developers/Johnny.jpg';
import Baynosa from '../images/developers/Baynosa.jpg';

const SCREEN_HEIGHT = Dimensions.get('screen').height; // device height
const STATUS_BAR_HEIGHT = StatusBar.currentHeight || 24;
const WINDOW_HEIGHT = Dimensions.get('window').height;
const NAVIGATION_BAR_HEIGHT = SCREEN_HEIGHT - WINDOW_HEIGHT - STATUS_BAR_HEIGHT;

const AboutUs = (props) => {
	NavigationBar.setVisibilityAsync('visible');
	NavigationBar.setPositionAsync('absolute');
	NavigationBar.setBackgroundColorAsync(colors.secondary);

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
								gap: gap.medium,
								paddingTop: padding.large
							}}
						>
							<Heading
								level={1}
								style={{
									width: '100%'
								}}
							>
								The Developers
							</Heading>

							<View
								style={{
									width: '100%',
									height: '100%',
									flexDirection: 'row',
									justifyContent: 'space-around',
									flexWrap: 'wrap',
									gap: gap.large,
									flex: 1,
									...paddingCreator(
										padding.large,
										0
									)
								}}
							>
							<DeveloperCard
								Name='Phia'
								ProfilePicture={Phia}
							/>
							<DeveloperCard
								Name='Banzal'
								ProfilePicture={Banzal}
							/>
							<DeveloperCard
								Name='Jimwell'
								ProfilePicture={Jimwell}
							/>
							<DeveloperCard
								Name='Endrina'
								ProfilePicture={Endrina}
							/>
							<DeveloperCard
								Name='Robles'
								ProfilePicture={Robles}
							/>
							<DeveloperCard
								Name='Johnny'
								ProfilePicture={Johnny}
							/>
							<DeveloperCard
								Name='Baynosa'
								ProfilePicture={Baynosa}
							/>
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
							console.log('AboutUs');
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

export default AboutUs;
registerRootComponent(AboutUs);