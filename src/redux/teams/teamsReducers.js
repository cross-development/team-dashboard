//Core
import { createSlice } from '@reduxjs/toolkit';

const state = {
	teams: [],
	error: null,
	loading: false,
};

export const teamsSlice = createSlice({
	name: 'teams',

	initialState: state,

	reducers: {
		getAllTeamsSuccess: (state, { payload }) => ({
			...state,
			teams: [...payload],
		}),

		addTeamSuccess: (state, { payload }) => ({
			...state,
		}),

		removeTeamSuccess: (state, { payload }) => ({
			...state,
		}),

		setTeamsLoadingSuccess: (state, { payload }) => ({
			...state,
			loading: payload,
		}),

		setTeamsErrorSuccess: (state, { payload }) => ({
			...state,
			error: payload,
		}),

		// clearAllTeammates: () => state,
	},
});
