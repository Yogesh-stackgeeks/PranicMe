import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import { PermissionsAndroid, Platform } from "react-native";
import { showError } from './helperFunctions';
// import firebase from 'react-native-firebase';
import Geolocation from 'react-native-geolocation-service';

export async function getHeaders() {
	let userData = await AsyncStorage.getItem('userData');
	if (userData) {
		userData = JSON.parse(userData);
		//console.log(userData.accessToken, 'header')
		return {
			authorization: `${userData.accessToken}`,
		};
	}
	return {};
}


export async function apiReq(endPoint, data, method, headers, requestOptions = {}) {
	return new Promise(async (res, rej) => {
		const getTokenHeader = await getHeaders();
		headers = {
			...getTokenHeader,
			...headers
		};

		if (method === 'get' || method === 'delete') {
			data = {
				...requestOptions,
				...data,
				headers
			};
		}

		axios[method](endPoint, data, { headers })
			.then(result => {

				const { data } = result;

				if (data.status === false) {
					return rej(data);
				}

				return res(data);
			})
			.catch(error => {
				console.log(error)
				console.log(error && error.response, 'the error respne')
				if (error && error.response && error.response.status === 401) {

					// NavigationService.resetNavigation();
					//NavigationService.navigate('loginUsingEmailScreen');
					// const { dispatch } = store;
					// dispatch({
					// 	type: types.CLEAR_REDUX_STATE,
					// 	payload: {}
					// });

					clearUserData();
				}
				if (error && error.response && error.response.data) {
					if (!error.response.data.message) {
						return rej({ ...error.response.data, msg: error.response.data.message || "Network Error" })
					}
					return rej(error.response.data)
				} else {
					return rej({ message: "Network Error", msg: "Network Error" });
				}
				return rej(error);
			});
	});
}

export function apiPost(endPoint, data, headers = {}) {
	// console.log("headers from utils", headers)
	// console.log("headers from utils", data)
	return apiReq(endPoint, data, 'post', headers);
}

export function apiDelete(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'delete', headers);
}

export function apiGet(endPoint, data, headers = {}, requestOptions) {
	return apiReq(endPoint, data, 'get', headers, requestOptions);
}

export function apiPut(endPoint, data, headers = {}) {
	return apiReq(endPoint, data, 'put', headers);
}

export function setUserData(data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem('userData', data);
}

export function setItem(key, data) {
	data = JSON.stringify(data);
	return AsyncStorage.setItem(key, data);
}

export function getItem(key) {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem(key).then(data => {
			resolve(JSON.parse(data));
		});
	});
}

export function removeItem(key) {
	return AsyncStorage.removeItem(key);
}

export function clearAsyncStorate(key) {
	return AsyncStorage.clear();
}

export async function getUserData() {
	return new Promise((resolve, reject) => {
		AsyncStorage.getItem('userData').then(data => {
			resolve(JSON.parse(data));
		});
	});
}

export async function clearUserData() {
	return AsyncStorage.removeItem('userData');
}

// export async function getToken() {
// 	let fcmToken = await AsyncStorage.getItem('fcmToken');
// 	console.log(fcmToken, 'the old token');
// 	if (!fcmToken) {
// 		try {
// 			fcmToken = await firebase.messaging().getToken();
// 			if (fcmToken) {
// 				console.log(fcmToken, 'the new genrated token');
// 				// user has a device token
// 				await AsyncStorage.setItem('fcmToken', fcmToken);
// 			}
// 		} catch (error) {
// 			console.log(error, 'the error');
// 		}
// 	}
// }

// export async function requestPermission() {
// 	try {
// 		await firebase.messaging().requestPermission();
// 		// User has authorised
// 		this.getToken();
// 	} catch (error) {
// 		// User has rejected permissions
// 		console.log('permission rejected');
// 	}
// }
export const androidCameraPermission = () => new Promise(async (resolve, reject) => {
	try {
		if (Platform.OS === 'android' && Platform.Version > 22) {
			const granted = await PermissionsAndroid.requestMultiple([
				PermissionsAndroid.PERMISSIONS.CAMERA,
				PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
				PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE
			]);
			console.log(granted, 'hte aojfoj')

			if (
				granted['android.permission.CAMERA'] !== 'granted' ||
				granted['android.permission.WRITE_EXTERNAL_STORAGE'] !== 'granted' ||
				granted['android.permission.READ_EXTERNAL_STORAGE'] !== 'granted'
			) {

				showError("Don't have required permission.Please allow permissions")
				return resolve(false);
				// alert(strings.DO_NOT_HAVE_PERMISSIONS_TO_SELECT_IMAGE);
			}
			return resolve(true);
		}

		return resolve(true);
	} catch (error) {
		return resolve(false);
	}
});


export const locationPermission = () => new Promise(async (resolve, reject) => {
	if (Platform.OS === 'ios') {
		try {
			const permissionStatus = await Geolocation.requestAuthorization('whenInUse');
			if (permissionStatus === 'granted') {
				return resolve("granted");
			}
			reject('Permission not granted');
		} catch (error) {
			return reject(error);
		}
	}
	return PermissionsAndroid.request(
		PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
	).then((granted) => {
		if (granted === PermissionsAndroid.RESULTS.GRANTED) {
			//console.log('You can use the location');
			resolve("granted");
		}

		//console.log('Location permission denied');
		return reject('Location Permission denied');
	}).catch((error) => {
		console.log('Ask Location permission error: ', error);
		return reject(error);
	});
});