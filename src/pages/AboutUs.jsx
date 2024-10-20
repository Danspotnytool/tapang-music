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
import SearchIcon from '../svg/SearchIcon.svg';

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
								ProfilePicture='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-1/370429648_2427521937425262_5261508596400208944_n.jpg?stp=dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_eui2=AeGti8nl85WVxL-88B0AXoxoqglvCjPPnfiqCW8KM8-d-FururIya8sfaM2oYpvf-dMS_ho0oek-vKh79qa46vN5&_nc_ohc=rkhBRHdMCWwQ7kNvgGIO1Rg&_nc_zt=24&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=AEvPU5F7QcndCoH63vj-Bv5&oh=00_AYABvgfWgzsEeRMxVxe5K9GlutOAMBP_EkdmGYhxVqmtjA&oe=671AA01C'
							/>
							<DeveloperCard
								Name='Banzal'
								ProfilePicture='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-6/274103233_3199710353647722_7652857456525015074_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGZQLo-0fmEaQ5WO99X7zwhHf1p2BdD_Q4d_WnYF0P9DnX-zpd43ki1kVrH3GCFDTOJSl4imSdZk3qp0kXgbNan&_nc_ohc=YH3BMfDDkM8Q7kNvgHnjWUs&_nc_zt=23&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=Azgr_gY7-b1zzo-QPrHUfCV&oh=00_AYBA0hQihBfapSyOsDIjlqWaXEvWp3Th4nwwe5GSkEPVdA&oe=671A9A7C'
							/>
							<DeveloperCard
								Name='Jimwell'
								ProfilePicture='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-1/416903498_1778623789278403_6191124790904108983_n.jpg?stp=dst-jpg_s200x200&_nc_cat=107&ccb=1-7&_nc_sid=50d2ac&_nc_eui2=AeFOkn5Z-jH0LBVuzq-lLV-GGQ_4TMS3CisZD_hMxLcKK-YtwfNe0Z0AzSEP-r6bdQKqPr0tqINbbKu8QV4Uda-j&_nc_ohc=68nPK-QkT-kQ7kNvgECFxbM&_nc_zt=24&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=Aytp9shYVkRkgolHGdwMpPH&oh=00_AYDvWkSczu8Z5Y54jB5_6zpWwyc19eI4-vkcAHXEdl1e6g&oe=671AB015'
							/>
							<DeveloperCard
								Name='Endrina'
								ProfilePicture='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-6/461921444_3371252989849938_5463118529123614148_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGhsPvR8GNS0A9mCf2stdN40Mh4LaZMuJ3QyHgtpky4nXlc4APIaamRJqLRW77eoAhxK0BcdPDDNnjpvr1rRpoy&_nc_ohc=JpuYY3p0pI4Q7kNvgHVWG75&_nc_zt=23&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=A7CYw3yCmLDTAZJ7tMirXVD&oh=00_AYDbFkPG81UrM_CIpYxpW7F-5i_OPx4jUk0upuGQvNvOng&oe=671A94D1'
							/>
							<DeveloperCard
								Name='Robles'
								ProfilePicture='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-6/463836373_8371383986231881_7856092670529528552_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFCLmTtoPkFKgk0CSNpwsgvjh_Q6Cl14V2OH9DoKXXhXc1PVRUzmn8j54NSpNWkCyj5pmOC9tz0mAYxsys-BcDx&_nc_ohc=x05dduY4hw0Q7kNvgEyOaoQ&_nc_zt=23&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=A5am13jaDyy6RD5pE1Ys9_3&oh=00_AYAmApD40_rf60tFjtpFyFr-kaXwl1Bcm5Ui7Hm8zP4SNw&oe=671AB631'
							/>
							<DeveloperCard
								Name='Johnny'
								ProfilePicture='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-6/462459709_1710675469704101_1986953036859611115_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeGlmOet-ir-_Wi90dHCXZlXGzLRwXmHgbsbMtHBeYeBu4Ol0AD7SxlZQVPuSU9Iw9UqMjBrSKfkF6ff3Jr6TTqe&_nc_ohc=HA-uft7JR20Q7kNvgHnYt6-&_nc_zt=23&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=AqZzLHmr4UX6kmRBuq6VnPG&oh=00_AYBgFgj1shevrvfJt_DqCtDC2ehqGC4DtYTGhWwAPGdXww&oe=671A98A2'
							/>
							<DeveloperCard
								Name='Baynosa'
								ProfilePicture='https://scontent.fmnl32-1.fna.fbcdn.net/v/t39.30808-6/462448920_1842292009513744_8992151125611768911_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFPjd_CGQcCwBBdT-1TGLPe66R1mHQUrOvrpHWYdBSs6xK2K4-Jnri59E1f5KHu5QDxfxS6-FtyE_iTcEKVzgN_&_nc_ohc=e7zfm0CPnCgQ7kNvgFZjv4_&_nc_zt=23&_nc_ht=scontent.fmnl32-1.fna&_nc_gid=AIz8ACfeqoxYXKR1iGy-fVE&oh=00_AYCo-emMblfev47sjE7uSwu-m3SCX0LTMRQKcYdcacTx-Q&oe=671A91EB'
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