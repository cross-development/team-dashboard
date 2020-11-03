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

export default combineReducers({
	teams,
	teammates,
});
