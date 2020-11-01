//Core
import { createAction } from '@reduxjs/toolkit';

const signInRequest = createAction('auth/signInRequest');
const signInSuccess = createAction('auth/signInSuccess');
const signInFailure = createAction('auth/signInFailure');

const signOutRequest = createAction('auth/signOutRequest');
const signOutSuccess = createAction('auth/signOutSuccess');
const signOutFailure = createAction('auth/signOutFailure');

const singUpRequest = createAction('auth/singUpRequest');
const singUpSuccess = createAction('auth/singUpSuccess');
const singUpFailure = createAction('auth/singUpFailure');

const authStateChangeRequest = createAction('auth/authStateChangeRequest');
const authStateChangeSuccess = createAction('auth/authStateChangeSuccess');
const authStateChangeFailure = createAction('auth/authStateChangeFailure');

const authActions = {
	signInRequest,
	signInSuccess,
	signInFailure,

	signOutRequest,
	signOutSuccess,
	signOutFailure,

	singUpRequest,
	singUpSuccess,
	singUpFailure,

	authStateChangeRequest,
	authStateChangeSuccess,
	authStateChangeFailure,
};

export default authActions;
