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

export default combineReducers({
	user,
});
