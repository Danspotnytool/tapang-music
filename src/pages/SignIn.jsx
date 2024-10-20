import { registerRootComponent } from 'expo';
import { View, ImageBackground, StatusBar, SafeAreaView } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import * as React from 'react';

import { Text, Heading } from '../components/Text';
import Button from '../components/Button';
import Input from '../components/Input';

import {
	colors,
	padding,
	rem,
	gap,
	fontWeights
} from '../utils/globals';
import paddingCreator from '../utils/paddingCreator';

// Preload images
import background from '../images/background.jpg';
import Logo from '../svg/Logo.svg';

const SignIn = (props) => {
	NavigationBar.setVisibilityAsync('visible');
	NavigationBar.setPositionAsync('absolute');
	NavigationBar.setBackgroundColorAsync('#FFFFFF00');
	StatusBar.setBackgroundColor('#00000000');

	return (
		<>
			<StatusBar hidden={false} animated backgroundColor={colors.background} barStyle={'light-content'} translucent={false} />

			<SafeAreaView style={{ flex: 1 }}>
				<ImageBackground
					source={background}

					style={{
						backgroundColor: colors.background,
						position: 'relative',
						width: '100%',
						height: '100%',

						flex: 1,

						overflow: 'hidden'
					}}
				>
					<View style={{
						position: 'absolute',
						top: 0,
						left: 0,
						width: '100%',
						height: '100%',

						flex: 1,

						...paddingCreator(
							padding.large * 2,
							padding.large
						),

						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						gap: gap.large * 2,

						backgroundColor: 'rgba(0, 0, 0, 0.75)',

						overflowY: 'scroll'
					}}>
						<View style={{
							width: '100%',
							maxWidth: rem * 30,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: gap.medium
						}}>
							<Logo
								width={(rem * 2) * 4}
								height={(rem * 2) * 4}
							/>
							<Heading level={1} style={{ textAlign: 'left' }}>Tapang Music</Heading>
						</View>

						<View style={{
							width: '100%',
							maxWidth: rem * 30,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							gap: gap.large
						}}>
							<Input
								label='Email'
								placeholder=''
							/>
							<Input
								label='Password'
								placeholder=''
								type='password'
							/>

							<Button label='Sign In' type='primary' width='fill' onPress={() => {
								console.log('Signed In');
								props.navigation.navigate('Home');
							}} />
						</View>

						<View
							style={{
								width: '100%',
								maxWidth: rem * 30,
								justifyContent: 'flex-end',
								alignItems: 'center',
								gap: 0
							}}
						>
							<Text
								style={{
									textAlign: 'center',
									gap: 0,
									fontWeight: fontWeights.thin
								}}
								weight='thin'
							>Don't have an account? <Text weight='regular'>Sign up now!</Text></Text>
						</View>
					</View>
				</ImageBackground>
			</SafeAreaView>
		</>
	);
};

export default SignIn;
registerRootComponent(SignIn);