//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from './authActions';

const user = createReducer(null, {
	[authActions.authStateChangeSuccess]: (state, { payload }) => payload,
	[authActions.singUpSuccess]: (state, { payload }) => payload,
	[authActions.signInSuccess]: (state, { payload }) => payload,
	[authActions.signOutSuccess]: () => null,
});

const loader = createReducer(false, {
	[authActions.signInRequest]: () => true,
	[authActions.signInSuccess]: () => false,
	[authActions.signInFailure]: () => false,

	[authActions.signOutRequest]: () => true,
	[authActions.signOutSuccess]: () => false,
	[authActions.signOutFailure]: () => false,

	[authActions.signUpRequest]: () => true,
	[authActions.signUpSuccess]: () => false,
	[authActions.signUpFailure]: () => false,

	[authActions.authStateChangeRequest]: () => true,
	[authActions.authStateChangeSuccess]: () => false,
	[authActions.authStateChangeFailure]: () => false,
});

const error = createReducer(null, {
	[authActions.authStateChangeFailure]: (state, { payload }) => payload,
	[authActions.singUpFailure]: (state, { payload }) => payload,
	[authActions.signOutFailure]: (state, { payload }) => payload,
	[authActions.signInFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	user,
	loader,
	error,
});
