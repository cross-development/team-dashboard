//Core
import { createReducer } from '@reduxjs/toolkit';
//Redux
import authActions from '../auth/authActions';
import teamsActions from '../teams/teamsActions';

const error = createReducer(null, {
	[authActions.authStateChangeFailure]: (state, { payload }) => payload,
	[authActions.singUpFailure]: (state, { payload }) => payload,
	[authActions.signOutFailure]: (state, { payload }) => payload,
	[authActions.signInFailure]: (state, { payload }) => payload,

	[teamsActions.createTeamFailure]: (state, { payload }) => payload,
	[teamsActions.removeTeamFailure]: (state, { payload }) => payload,
	[teamsActions.getAllTeamsFailure]: (state, { payload }) => payload,
	[teamsActions.addTeammateFailure]: (state, { payload }) => payload,
	[teamsActions.removeTeammateFailure]: (state, { payload }) => payload,
	[teamsActions.getTeammatesFailure]: (state, { payload }) => payload,
});

export default error;
