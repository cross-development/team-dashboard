//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import teamsActions from './teamsActions';

const teams = createReducer([], {
	[teamsActions.getAllTeamsSuccess]: (state, { payload }) => [...payload],
});

const teammates = createReducer([], {
	[teamsActions.getTeammatesSuccess]: (state, { payload }) => [...payload],
});

const loader = createReducer(false, {
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

const error = createReducer(null, {
	[teamsActions.createTeamFailure]: (state, { payload }) => payload,
	[teamsActions.removeTeamFailure]: (state, { payload }) => payload,
	[teamsActions.getAllTeamsFailure]: (state, { payload }) => payload,
	[teamsActions.addTeammateFailure]: (state, { payload }) => payload,
	[teamsActions.removeTeammateFailure]: (state, { payload }) => payload,
	[teamsActions.getTeammatesFailure]: (state, { payload }) => payload,
});

export default combineReducers({
	teams,
	teammates,
	loader,
	error,
});
