//Core
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from '../auth/authActions';
import teamsActions from '../teams/teamsActions';

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

	[teamsActions.createTeamRequest]: () => true,
	[teamsActions.createTeamSuccess]: () => false,
	[teamsActions.createTeamFailure]: () => false,

	[teamsActions.removeTeamRequest]: () => true,
	[teamsActions.removeTeamSuccess]: () => false,
	[teamsActions.removeTeamFailure]: () => false,

	[teamsActions.getAllTeamsRequest]: () => true,
	[teamsActions.getAllTeamsSuccess]: () => false,
	[teamsActions.getAllTeamsFailure]: () => false,

	[teamsActions.addTeammateRequest]: () => true,
	[teamsActions.addTeammateSuccess]: () => false,
	[teamsActions.addTeammateFailure]: () => false,

	[teamsActions.removeTeammateRequest]: () => true,
	[teamsActions.removeTeammateSuccess]: () => false,
	[teamsActions.removeTeammateFailure]: () => false,

	[teamsActions.getTeammatesRequest]: () => true,
	[teamsActions.getTeammatesSuccess]: () => false,
	[teamsActions.getTeammatesFailure]: () => false,
});

export default loading;
