//Core
import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
//Redux
import teamActions from './teamActions';

const teammates = createReducer([], {
	// [teamActions.addTeammateSuccess]: (state, { payload }) => payload.teammates,
	// [teamActions.removeTeammateSuccess]: (state, { payload }) => payload.teammates,
	[teamActions.getTeammatesSuccess]: (state, { payload }) => payload,
});

export default combineReducers({
	teammates,
});
