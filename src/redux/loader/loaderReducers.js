//Core
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from '../auth/authActions';
import teamActions from '../team/teamActions';

const loading = createReducer(false, {
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

	[teamActions.addTeammateRequest]: () => true,
	[teamActions.addTeammateSuccess]: () => false,
	[teamActions.addTeammateFailure]: () => false,

	[teamActions.removeTeammateRequest]: () => true,
	[teamActions.removeTeammateSuccess]: () => false,
	[teamActions.removeTeammateFailure]: () => false,

	[teamActions.getTeammatesRequest]: () => true,
	[teamActions.getTeammatesSuccess]: () => false,
	[teamActions.getTeammatesFailure]: () => false,
});

export default loading;
