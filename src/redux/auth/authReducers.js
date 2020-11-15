//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	uid: null,
	displayName: '',
	photoURL: null,
	error: null,
	loading: false,
};

export const authSlice = createSlice({
	name: 'auth',

	initialState: state,

	reducers: {
		setUserProfileSuccess: (state, { payload }) => ({
			...state,
			uid: payload.uid,
			photoURL: payload.photoURL,
			displayName: payload.displayName,
		}),

		updateProfileSuccess: (state, { payload }) => ({
			...state,
			uid: payload.uid,
			photoURL: payload.photoURL,
			displayName: payload.displayName,
			profileInfo: payload.profileInfo,
		}),

		setAuthLoadingSuccess: (state, { payload }) => ({
			...state,
			loading: payload,
		}),

		setAuthErrorSuccess: (state, { payload }) => ({
			...state,
			error: payload,
		}),

		authSignOutSuccess: () => state,
	},
});
