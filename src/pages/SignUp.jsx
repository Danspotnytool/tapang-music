import { registerRootComponent } from 'expo';
import { View, ImageBackground, StatusBar, SafeAreaView, ToastAndroid, Keyboard } from 'react-native';
import * as NavigationBar from 'expo-navigation-bar';
import * as React from 'react';
import firebase from '../utils/firebase';

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

	const [Email, setEmail] = React.useState('');
	const [Password, setPassword] = React.useState('');

	const handleSignUp = async () => {
		if (Email === '' || Password === '') {
			ToastAndroid.show('Please fill in all fields.', ToastAndroid.SHORT);
			return;
		};
		try {
			const response = await firebase.auth().createUserWithEmailAndPassword(Email, Password);
			ToastAndroid.show('Account created successfully.', ToastAndroid.SHORT);
			props.navigation.navigate('SignIn');
		} catch (error) {
			ToastAndroid.show('An error occurred.', ToastAndroid.SHORT);
		};
	};

	const [ScreenY, setScreenY] = React.useState(0);

	Keyboard.addListener('keyboardDidShow', (event) => {
		setScreenY(-event.endCoordinates.height);
	});
	Keyboard.addListener('keyboardDidHide', (event) => {
		setScreenY(0);
	});

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
						top: ScreenY,
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
							<Heading level={3} style={{ textAlign: 'center' }}>Welcome to</Heading>
							<Heading level={1} style={{ textAlign: 'center' }}>Tapang Music</Heading>
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

								onChangeText={(text) => {
									setEmail(text);
								}}
							/>
							<Input
								label='Password'
								placeholder=''
								type='password'

								onChangeText={(text) => {
									setPassword(text);
								}}
							/>

							<Button label='Sign Up' type='primary' width='fill' onPress={() => {
								handleSignUp();
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
							>Already have an account? <Text
								weight='regular'
								onPress={() => {
									props.navigation.navigate('SignIn');
								}}
							>Sign in now!</Text></Text>
						</View>
					</View>
				</ImageBackground>
			</SafeAreaView>
		</>
	);
};

export default SignIn;
registerRootComponent(SignIn);