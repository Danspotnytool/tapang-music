import SpotifyWebApi from 'spotify-web-api-node';
import { useState, useEffect } from 'react';

const spotifyCredentials = {
	clientId: '',
	clientSecret: '',
	redirectUri: '127.0.0.1:8081'
};
const spotifyApi = new SpotifyWebApi(spotifyCredentials);

// Get access token
const getAccessToken = async () => {
	console.log('Getting Access Token');
	const response = await fetch('https://accounts.spotify.com/api/token', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded',
			Authorization: `Basic ${btoa(`${spotifyCredentials.clientId}:${spotifyCredentials.clientSecret}`)}`
		},
		body: 'grant_type=client_credentials'
	});
	const data = await response.json();
	spotifyApi.setAccessToken(data.access_token);
	console.log('Access Token Set');
};
getAccessToken();

console.log(spotifyApi.getAccessToken());

export default spotifyApi;